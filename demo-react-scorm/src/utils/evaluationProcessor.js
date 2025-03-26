// src/utils/evaluationProcessor.js
import { updateEvaluationData, getEvaluationData } from './evaluationManager';

/**
 * Extrae de la respuesta de la API los comentarios y calificaciones.
 * Se asume que el formato de la respuesta es similar a:
 * 
 * ### Retroalimentación para el Ítem 1: Funcionalidad del Código
 * - Descripción del ítem...
 * Su calificacion parcial es: 5.0
 * 
 * ### Retroalimentación para el Ítem 2: Eficiencia y Optimización
 * - Descripción del ítem...
 * Su calificacion parcial es: 4.0
 * 
 * ... y así.
 * 
 * Finalmente, se extrae la calificacion final con:
 * **Su calificación final es: 4.1**
 */
export const extractEvaluationDetails = (responseText) => {
  const criterioRegex = /### Retroalimentación para el (?:criterio|ítem) \d+:\s*(.+?)\n([\s\S]*?)-\s*\*\*Calificaci[oó]n parcial\*\*:\s*(\S+)/g;
  let match;
  const criterios = [];
  const comentarios = [];
  
  while ((match = criterioRegex.exec(responseText)) !== null) {
    const comentarioLimpio = match[2]
      .replace(/^\s*-\s*/, "")
      .trim();
    comentarios.push(`${match[1].trim()}: ${comentarioLimpio}`);
    criterios.push(match[3]);
  }
  
  const finalRegex = /\*\*Su calificaci[oó]n final es:\s*(\S+)\*\*/;
  const finalMatch = finalRegex.exec(responseText);
  const finalGrade = finalMatch ? finalMatch[1] : "";
  
  return { criterios, comentarios, final: finalGrade };
};

/**
 * Construye el objeto de evaluación para la actividad dada y lo guarda en el suspend_data.
 * Se recibe refreshSCORMData para refrescar el estado global luego de la actualización.
 */
export const buildAndStoreEvaluation = (activityId, responseTextObj, refreshSCORMData) => {
  const responseText = responseTextObj.message;
  const evaluationDetails = extractEvaluationDetails(responseText);

  let currentData = getEvaluationData();
  if (!currentData || typeof currentData !== "object") {
    currentData = {};
  }
  
  currentData[activityId] = evaluationDetails;
  
  updateEvaluationData(activityId, evaluationDetails);

  // Actualizamos y refrescamos el suspend_data global
  const updatedData = getEvaluationData();
  console.log("Suspend_data actualizado:", updatedData);

  // Llamamos a refreshSCORMData para actualizar el estado global (si se proporcionó)
  if (typeof refreshSCORMData === "function") {
    refreshSCORMData();
  }
  else
  
  return currentData[activityId];
};
