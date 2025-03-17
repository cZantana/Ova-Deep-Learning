// src/pages/Notas.jsx
import React, { useEffect, useState } from 'react';
import { getSuspendData, finalizeCourse } from '../utils/scormManager';
import pipwerks from 'pipwerks-scorm-api-wrapper';

const Notas = () => {
  const [data, setData] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const [courseStatus, setCourseStatus] = useState('');
  const [progressText, setProgressText] = useState('');

  useEffect(() => {
    // Recupera los datos almacenados en suspend_data
    const suspendData = getSuspendData();
    setData(suspendData);

    const totalQuizzes = 2;
    let quizzesCompleted = 0;
    if (suspendData.quiz1 != null) quizzesCompleted++;
    if (suspendData.quiz2 != null) quizzesCompleted++;
    setProgressText(`${quizzesCompleted} completados de ${totalQuizzes}`);

    // Actualiza el progreso en el LMS (por ejemplo, en cmi.comments)
    pipwerks.SCORM.set("cmi.comments", `${quizzesCompleted} completados de ${totalQuizzes}`);
    if (typeof pipwerks.SCORM.save === "function") {
      pipwerks.SCORM.save();
    }

    if (quizzesCompleted === 0) {
      // No hay quizzes presentados
      setCourseStatus("incomplete");
      setFinalScore(null);
    } else if (quizzesCompleted < totalQuizzes) {
      // Si solo se presenta un quiz, usamos esa nota parcial como nota final
      let partialScore = suspendData.quiz1 != null ? suspendData.quiz1 : suspendData.quiz2;
      pipwerks.SCORM.set("cmi.core.score.raw", partialScore.toString());
      // Se declara el curso como "incomplete" porque no se han presentado todos los quizzes.
      pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
      if (typeof pipwerks.SCORM.save === "function") {
        pipwerks.SCORM.save();
      }
      setFinalScore(partialScore);
      setCourseStatus("incomplete");
    } else {
      // Si se han presentado ambos quizzes, calcula la nota final usando Quiz1 30% y Quiz2 70%
      const score = finalizeCourse({ quiz1: 0.3, quiz2: 0.7 });
      if (score !== null) {
        setFinalScore(score);
        // finalizeCourse ya actualiza el LMS:
        // - Si score >= 3.75, cmi.success_status se declara "passed"
        // - De lo contrario, "failed"
        // Además, cmi.core.lesson_status se declara "completed"
        setCourseStatus(score >= 3.75 ? "passed" : "failed");
      }
    }
  }, []);

  return (
    <div className="notas-container p-4">
      <h2 className="text-2xl font-bold mb-4">Notas Parciales y Final</h2>
      <div className="progress mb-4">
        <p>
          <strong>Progreso:</strong> {progressText}
        </p>
      </div>
      <div className="partial-grades mb-4">
        <p>
          <strong>Quiz 1:</strong>{" "}
          {data.quiz1 != null ? data.quiz1 : "No presentado"}
        </p>
        <p>
          <strong>Quiz 2:</strong>{" "}
          {data.quiz2 != null ? data.quiz2 : "No presentado"}
        </p>
      </div>
      <div className="final-grade mb-4">
        {finalScore !== null ? (
          <p>
            <strong>Nota Final:</strong> {finalScore.toFixed(2)} (sobre 5)
          </p>
        ) : (
          <p>
            La nota final no se puede calcular porque no se han presentado todos
            los quizzes.
          </p>
        )}
      </div>
      <div className="course-status">
        {courseStatus === "incomplete" ? (
          <p className="text-red-600 font-bold">Curso Incompleto</p>
        ) : courseStatus === "passed" ? (
          <p className="text-green-600 font-bold">Curso Aprobado</p>
        ) : courseStatus === "failed" ? (
          <p className="text-red-600 font-bold">Curso Reprobado</p>
        ) : null}
      </div>
    </div>
  );
};

export default Notas;
