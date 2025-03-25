// src/utils/evaluationManager.js
import pipwerks from 'pipwerks-scorm-api-wrapper';
import { quizzes } from '../config/Quizzes'; // Si lo necesitas

export const getEvaluationData = () => {
  const data = pipwerks.SCORM.get("cmi.suspend_data");
  try {
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const updateEvaluationData = (quizKey, evaluation) => {
  // Obtiene los datos existentes; si no existen, se inicializa como objeto vacío
  let data = getEvaluationData();
  if (!data || typeof data !== "object") {
    data = {};
  }
  // Actualiza o agrega la evaluación para el quizKey
  data[quizKey] = evaluation;
  
  // Guarda el objeto actualizado en cmi.suspend_data
  pipwerks.SCORM.set("cmi.suspend_data", JSON.stringify(data));
  if (typeof pipwerks.SCORM.save === "function") {
    pipwerks.SCORM.save();
  } else {
    console.warn("SCORM.save no está disponible.");
  }
};
