// src/hooks/useSCORM.js
import { useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';

export function useSCORM() {
  const [scormStatus, setScormStatus] = useState('No inicializado');
  const [scormVersion, setScormVersion] = useState(null);

  useEffect(() => {
    // Intentar inicializar la comunicación SCORM
    const initSuccess = pipwerks.SCORM.init();
    if (initSuccess) {
      setScormStatus('SCORM inicializado correctamente');
      setScormVersion(pipwerks.SCORM.version); // Esto puede ser "1.2" o "2004"
    } else {
      setScormStatus('Error al inicializar SCORM');
    }

    // Finaliza la comunicación al desmontar el hook
    return () => {
      if (typeof pipwerks.SCORM.quit === 'function') {
        pipwerks.SCORM.quit();
      } else if (typeof pipwerks.SCORM.finish === 'function') {
        pipwerks.SCORM.finish();
      } else {
        console.warn('SCORM.finish/quit no están disponibles.');
      }
    };
  }, []);

  return { scormStatus, scormVersion };
}
