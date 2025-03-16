// src/context/SCORMContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';

export const SCORMContext = createContext();

export const SCORMProvider = ({ children }) => {
  const [scormStatus, setScormStatus] = useState('No inicializado');
  const [scormVersion, setScormVersion] = useState(null);

  useEffect(() => {
    const initSuccess = pipwerks.SCORM.init();
    if (initSuccess) {
      setScormStatus('SCORM inicializado correctamente');
      setScormVersion(pipwerks.SCORM.version);
    } else {
      setScormStatus('Error al inicializar SCORM');
    }

    const handleBeforeUnload = () => {
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
