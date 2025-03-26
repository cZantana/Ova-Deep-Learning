// src/utils/evaluationManager.js
import pipwerks from 'pipwerks-scorm-api-wrapper';

export const getEvaluationData = () => {
  const data = pipwerks.SCORM.get("cmi.suspend_data");
  try {
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const updateEvaluationData = (quizKey, evaluation) => {
  let data = getEvaluationData();
  if (!data || typeof data !== "object") {
    data = {};
  }
  data[quizKey] = evaluation;
  
  console.log("Antes de set:", data);
  
  pipwerks.SCORM.set("cmi.suspend_data", JSON.stringify(data));
  
  if (typeof pipwerks.SCORM.save === "function") {
    pipwerks.SCORM.save();
  } else {
    console.warn("SCORM.save no está disponible.");
  }
  
  console.log("Dentro de updateEvaluationData, datos guardados:", data);
};