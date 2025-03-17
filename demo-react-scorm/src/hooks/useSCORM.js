// src/hooks/useSCORM.js
import { useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';
import quizzesConfig from '../config/quizzes'; // Importa la configuración central de quizzes

export function useSCORM() {
  const [scormStatus, setScormStatus] = useState('No inicializado');
  const [scormVersion, setScormVersion] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [suspendData, setSuspendData] = useState({});

  useEffect(() => {
    // Intentar inicializar la comunicación SCORM
    const initSuccess = pipwerks.SCORM.init();
    if (initSuccess) {
      const version = pipwerks.SCORM.version;
      setScormVersion(version);
      setScormStatus('SCORM inicializado correctamente');

      // Obtén datos del estudiante
      const name = version === "2004"
        ? pipwerks.SCORM.get("cmi.learner_name")
        : pipwerks.SCORM.get("cmi.core.student_name");
      setStudentName(name);

      // Recupera suspend_data y establece valores por defecto si es necesario
      let data = pipwerks.SCORM.get("cmi.suspend_data");
      try {
        const parsed = data ? JSON.parse(data) : {};
        data = parsed || {};
      } catch {
        data = {};
      }
      // Para cada quiz definido en la configuración, asigna null si aún no existe
      quizzesConfig.forEach(quiz => {
        if (data[quiz.id] === undefined) {
          data[quiz.id] = null;
        }
      });
      setSuspendData(data);

      if (version === "2004") {
        const completionStatus = pipwerks.SCORM.get("cmi.completion_status");
        const successStatus = pipwerks.SCORM.get("cmi.success_status");
        const scoreRaw = pipwerks.SCORM.get("cmi.score.raw");

        if (!completionStatus || completionStatus === "" || completionStatus === "unknown") {
          pipwerks.SCORM.set("cmi.completion_status", "incomplete");
        }
        if (!successStatus || successStatus === "" || successStatus === "unknown") {
          pipwerks.SCORM.set("cmi.success_status", "failed");
        }
        if (!scoreRaw || scoreRaw === "" || scoreRaw === "unknown") {
          pipwerks.SCORM.set("cmi.score.raw", "0");
        }
      }
      else {
        // Para SCORM 1.2 (aunque ahora nos centramos en 2004)
        pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
        pipwerks.SCORM.set("cmi.core.score.raw", "0");
      }

      // Guarda estos datos en el LMS
      if (typeof pipwerks.SCORM.save === "function") {
        pipwerks.SCORM.save();
      }
    } else {
      setScormStatus('Error al inicializar SCORM');
    }

    // Listener para finalizar la sesión al cerrar la ventana (se llama solo al cerrar la pestaña o navegador)
    const handleBeforeUnload = () => {
      if (typeof pipwerks.SCORM.quit === 'function') {
        pipwerks.SCORM.quit();
      } else if (typeof pipwerks.SCORM.finish === 'function') {
        pipwerks.SCORM.finish();
      } else {
        console.warn('SCORM.finish/quit no están disponibles.');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return { scormStatus, scormVersion, studentName, suspendData };
}
