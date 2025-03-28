// src/context/SCORMProvider.jsx
import React, { useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';
import SCORMContext from './SCORMContext';
import { finalizeCourse } from '../utils/scormManager';
import { quizzes } from '../config/Quizzes';


const SCORMProvider = ({ children }) => {
  const [scormStatus, setScormStatus] = useState('No inicializado');
  const [scormVersion, setScormVersion] = useState(null);
  const [suspendData, setSuspendData] = useState({});
  const [lastQuiz, setLastQuiz] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [score, setScore] = useState("0");
  const [completionStatus, setCompletionStatus] = useState("");
  const [successStatus, setSuccessStatus] = useState("");
  
  const refreshSCORMData = () => {
    // Suspend data
    let data = pipwerks.SCORM.get("cmi.suspend_data");
    try {
      const parsed = data ? JSON.parse(data) : {};
      data = parsed || {};
    } catch {
      data = {};
    }
    // Asegurarse de tener los quizzes definidos (usando la configuración central)
    quizzes.forEach(quiz => {
      if (data[quiz.id] === undefined) {
        data[quiz.id] = null;
      }
    });
    setSuspendData(data);
    
    // Bookmark (último quiz realizado)
    const bookmark = pipwerks.SCORM.version === "2004"
      ? pipwerks.SCORM.get("cmi.location")
      : pipwerks.SCORM.get("cmi.core.lesson_location");
    setLastQuiz(bookmark);

    // Puntaje, completitud y éxito
    if (pipwerks.SCORM.version === "2004") {
      const compStatus = pipwerks.SCORM.get("cmi.completion_status");
      const succStatus = pipwerks.SCORM.get("cmi.success_status");
      const rawScore = pipwerks.SCORM.get("cmi.score.raw");
      setCompletionStatus(compStatus);
      setSuccessStatus(succStatus);
      setScore(rawScore);
    } else {
      const lessonStatus = pipwerks.SCORM.get("cmi.core.lesson_status");
      const rawScore = pipwerks.SCORM.get("cmi.core.score.raw");
      setCompletionStatus(lessonStatus);
      setSuccessStatus(lessonStatus);
      setScore(rawScore);
    }
  };

  useEffect(() => {
  const initSuccess = pipwerks.SCORM.init();
  if (initSuccess) {
    const version = pipwerks.SCORM.version;
    setScormVersion(version);
    setScormStatus('SCORM inicializado correctamente');

    // Obtén el nombre del estudiante
    const name = version === "2004"
      ? pipwerks.SCORM.get("cmi.learner_name")
      : pipwerks.SCORM.get("cmi.core.student_name");
    setStudentName(name);

    // Inicializa el suspend_data si está vacío o no es válido
    let data = pipwerks.SCORM.get("cmi.suspend_data");
    try {
      data = data ? JSON.parse(data) : {};
      console.log("Suspend data encontrado:", data);
      
    } catch {
      data = {};
    }
    if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
      console.log("Inicializando suspend_data debido a que no se encontró...");
      
      const initialData = {
        "S2.5.1": { "comentarios": [], "criterios": [], "final": "" },
        "S3.5.1": { "comentarios": [], "criterios": [], "final": "" },
        "S4.5.1": { "comentarios": [], "criterios": [], "final": "" },
        "S4.6.1": { "comentarios": [], "criterios": [], "final": "" },
        "S5.3.2": { "comentarios": [], "criterios": [], "final": "" },
        "S6.3.1": { "comentarios": [], "criterios": [], "final": "" },
        "S7.3.1": { "comentarios": [], "criterios": [], "final": "" },
        "S8.2.1": { "comentarios": [], "criterios": [], "final": "" },
        "S9.3.1": { "comentarios": [], "criterios": [], "final": "" },
        "S10.2.1": { "comentarios": [], "criterios": [], "final": "" },
        "S11.3.1": { "comentarios": [], "criterios": [], "final": "" },
        "S12.3.1": { "comentarios": [], "criterios": [], "final": "" },
        "S13.3.1": { "comentarios": [], "criterios": [], "final": "" },
        "S14.2.1": { "comentarios": [], "criterios": [], "final": "" },
        "S14.4.1": { "comentarios": [], "criterios": [], "final": "" },
        "S15.4.1": { "comentarios": [], "criterios": [], "final": "" },
        "S16.1.1": { "comentarios": [], "criterios": [], "final": "" }
      };
      // Guarda el objeto inicial en cmi.suspend_data
      pipwerks.SCORM.set("cmi.suspend_data", JSON.stringify(initialData));
      if (typeof pipwerks.SCORM.save === "function") {
        pipwerks.SCORM.save();
      }
      data = initialData;
    }
    setSuspendData(data);
    console.log("Suspend data inicial:", data);
    
    // Recupera el bookmark (último quiz realizado)
    const bookmark = version === "2004"
      ? pipwerks.SCORM.get("cmi.location")
      : pipwerks.SCORM.get("cmi.core.lesson_location");
    setLastQuiz(bookmark);

    // Configuración inicial para SCORM 2004 o 1.2
    if (version === "2004") {
      const completionStatus = pipwerks.SCORM.get("cmi.completion_status");
      const successStatus = pipwerks.SCORM.get("cmi.success_status");
      const scoreRaw = pipwerks.SCORM.get("cmi.score.raw");

      if (!completionStatus || completionStatus === "" || completionStatus === "unknown") {
        pipwerks.SCORM.set("cmi.completion_status", "incomplete");
        setCompletionStatus("incomplete");
      } else {
        setCompletionStatus(completionStatus);
      }
      if (!successStatus || successStatus === "" || successStatus === "unknown") {
        pipwerks.SCORM.set("cmi.success_status", "failed");
        setSuccessStatus("failed");
      } else {
        setSuccessStatus(successStatus);
      }
      if (!scoreRaw || scoreRaw === "" || scoreRaw === "unknown") {
        pipwerks.SCORM.set("cmi.score.raw", "0");
        setScore("0");
      } else {
        setScore(scoreRaw);
      }
    } else {
      // Para SCORM 1.2
      pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
      pipwerks.SCORM.set("cmi.core.score.raw", "0");
      setCompletionStatus("incomplete");
      setScore("0");
    }

    // Guarda estos datos en el LMS
    if (typeof pipwerks.SCORM.save === "function") {
      pipwerks.SCORM.save();
    }
  } else {
    setScormStatus('Error al inicializar SCORM');
  }

  const handleBeforeUnload = () => {
    finalizeCourse();
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
    <SCORMContext.Provider value={{
      scormStatus,
      scormVersion,
      studentName,
      suspendData,
      lastQuiz,
      score,
      completionStatus,
      successStatus,
      refreshSCORMData
    }}>
      {children}
    </SCORMContext.Provider>
  );
};

export default SCORMProvider;
