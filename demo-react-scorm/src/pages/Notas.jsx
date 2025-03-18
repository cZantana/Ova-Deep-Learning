// src/pages/Notas.jsx
import React, { useEffect, useState } from 'react';
import { getSuspendData, finalizeCourse } from '../utils/scormManager';
import pipwerks from 'pipwerks-scorm-api-wrapper';
import quizzesConfig from '../config/Quizzes';
import Button from '../components/atoms/Button';
import { useNavigate } from "react-router-dom";

// Declaramos un objeto de pesos para los quizzes.
// Por ejemplo, para tres quizzes:

const Notas = () => {
  const navigate = useNavigate();  
  const [data, setData] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const [courseStatus, setCourseStatus] = useState('');
  const [progressText, setProgressText] = useState('');

  useEffect(() => {
    // Recupera los datos almacenados en cmi.suspend_data
    const suspendData = getSuspendData();
    setData(suspendData);

    // Obtiene la cantidad total de quizzes a partir del objeto weights
    const quizKeys = quizzesConfig.map(quiz => quiz.id);
    const totalQuizzes = quizKeys.length;

    // Cuenta cuántos quizzes tienen nota (no nulos)
    const completedCount = quizKeys.filter(key => suspendData[key] != null).length;
    setProgressText(`${completedCount} completados de ${totalQuizzes}`);

    // Actualiza el progreso en el LMS (por ejemplo, en cmi.comments)
    pipwerks.SCORM.set("cmi.comments", `${completedCount} completados de ${totalQuizzes}`);
    if (typeof pipwerks.SCORM.save === "function") {
      pipwerks.SCORM.save();
    }

    // Calcula la nota final según los quizzes presentados:
    // Si no se han presentado todos, se usa el promedio ponderado normalizado y se marca "incomplete"
    // Si se han presentado todos, se calcula la nota final completa y se marca "completed" (y success se define en función del umbral)
    if (completedCount === 0) {
      setCourseStatus("incomplete");
      setFinalScore(null);
    } else if (completedCount < totalQuizzes) {
      // Usamos finalizeCourse que ya está diseñado para calcular el promedio normalizado
      const partialScore = finalizeCourse();
      setFinalScore(partialScore);
      setCourseStatus("incomplete");
    } else {
      const score = finalizeCourse();
      setFinalScore(score);
      setCourseStatus(score >= 3.75 ? "passed" : "failed");
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
        {quizzesConfig.map((quiz) => (
          <p key={quiz.id}>
            <strong>{quiz.title}:</strong> {data[quiz.id] != null ? data[quiz.id] : "No presentado"}
          </p>
        ))}
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
      <Button
              text="Volver"
              type="primary"
              onClick={() => navigate("/")}
            // className="bg-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-600)] text-[var(--color-neutral-900)] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            />
    </div>
  );
};

export default Notas;