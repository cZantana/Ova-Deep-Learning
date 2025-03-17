// src/context/SCORMProvider.jsx
import React, { useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';
import SCORMContext from './SCORMContext';
import { finalizeCourse } from '../utils/scormManager';

const SCORMProvider = ({ children }) => {
  const [scormStatus, setScormStatus] = useState('No inicializado');
  const [scormVersion, setScormVersion] = useState(null);

  useEffect(() => {
    const initSuccess = pipwerks.SCORM.init();
    if (initSuccess) {
      setScormStatus('SCORM inicializado correctamente');
      setScormVersion(pipwerks.SCORM.version);
      // Opcional: establecer estado inicial en "incomplete"
      pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
      if (typeof pipwerks.SCORM.save === "function") {
        pipwerks.SCORM.save();
      }
    } else {
      setScormStatus('Error al inicializar SCORM');
    }

    const handleBeforeUnload = () => {
      finalizeCourse(); // Calcula y declara la nota final si es posible.
      if (typeof pipwerks.SCORM.quit === 'function') {
        pipwerks.SCORM.quit();
      } else if (typeof pipwerks.SCORM.finish === 'function') {
        pipwerks.SCORM.finish();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <SCORMContext.Provider value={{ scormStatus, scormVersion }}>
      {children}
    </SCORMContext.Provider>
  );
};

export default SCORMProvider;
