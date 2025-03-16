// src/hooks/useSCORM.js
import { useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';

export function useSCORM() {
  const [scormStatus, setScormStatus] = useState('No inicializado');

  useEffect(() => {
    // Intentar inicializar la comunicación SCORM
    const initSuccess = pipwerks.SCORM.init();
    if (initSuccess) {
      setScormStatus('SCORM inicializado correctamente');
    } else {
      setScormStatus('Error al inicializar SCORM');
    }

    // Finaliza la comunicación al desmontar el hook
    return () => {
      if (typeof pipwerks.SCORM.finish === 'function') {
        pipwerks.SCORM.finish();
      } else {
        console.warn('pipwerks.SCORM.finish no está disponible.');
      }
    };
  }, []);

  return scormStatus;
}
