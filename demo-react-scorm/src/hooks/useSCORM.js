// src/hooks/useSCORM.js
import { useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';

export function useSCORM() {
  const [scormStatus, setScormStatus] = useState('No inicializado');
  const [scormVersion, setScormVersion] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [suspendData, setSuspendData] = useState({});

  useEffect(() => {
    // Intentar inicializar la comunicación SCORM
    const initSuccess = pipwerks.SCORM.init();
    if (initSuccess) {
      setScormStatus('SCORM inicializado correctamente');
      setScormVersion(pipwerks.SCORM.version);
      
      // Obtén datos del estudiante
      const name = pipwerks.SCORM.get("cmi.core.student_name");
      setStudentName(name);
      
      // Recupera suspend_data y establece valores por defecto si es necesario
      let data = pipwerks.SCORM.get("cmi.suspend_data");
      try {
        const parsed = data ? JSON.parse(data) : {};
        data = parsed || {};
      } catch {
        data = {};
      }
      // Establece por defecto que aún no se han presentado los quizzes
      if (data.quiz1 === undefined) data.quiz1 = null;
      if (data.quiz2 === undefined) data.quiz2 = null;
      
      // Actualiza el progreso en el LMS: 0 completados de 2
      pipwerks.SCORM.set("cmi.comments", "0 completados de 2");
      // Declara el estado inicial y el puntaje en el LMS
      pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
      pipwerks.SCORM.set("cmi.core.score.raw", "0");
      // Guarda estos datos en el LMS
      if (typeof pipwerks.SCORM.save === "function") {
        pipwerks.SCORM.save();
      }
      setSuspendData(data);
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

  return { scormStatus, scormVersion, studentName, suspendData };
}
