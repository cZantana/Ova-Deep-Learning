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
 * "Su calificacion final es: 4.1"
 */
export const extractEvaluationDetails = (responseText) => {
  // Regex para extraer cada bloque de ítem: se extrae el encabezado, el comentario y la calificacion parcial.
  const criterioRegex = /### Retroalimentación para el Ítem \d+:\s*(.+?)\n([\s\S]*?)Su calificacion parcial es:\s*(\d+\.?\d*)/g;
  let match;
  const criterios = [];
  const comentarios = [];
  
  while ((match = criterioRegex.exec(responseText)) !== null) {
    // match[1]: título del ítem (por ejemplo, "Funcionalidad del Código")
    // match[2]: el bloque de texto con el comentario
    // match[3]: la calificacion parcial (por ejemplo, "5.0")
    const comentarioLimpio = match[2]
      .replace(/^\s*-\s*/, "") // remueve el guion inicial, si lo hay
      .trim();
    comentarios.push(`${match[1].trim()}: ${comentarioLimpio}`);
    criterios.push(match[3]);
  }
  
  // Regex para extraer la calificacion final
  const finalRegex = /calificacion final es:\s*(\d+\.?\d*)/;
  const finalMatch = finalRegex.exec(responseText);
  const finalGrade = finalMatch ? finalMatch[1] : "";
  
  return { criterios, comentarios, final: finalGrade };
};

/**
 * Construye el objeto de evaluación para la actividad dada.
 * Si ya existe información en cmi.suspend_data, la preserva para otras actividades.
 */
export const buildAndStoreEvaluation = (activityId, responseTextObj) => {
  // Aquí asumimos que responseTextObj tiene una propiedad "message" con el texto de la respuesta
  const responseText = responseTextObj.message;
  // Extrae los detalles (criterios, comentarios y nota final) del texto de respuesta
  const evaluationDetails = extractEvaluationDetails(responseText);
  
  // Obtiene la evaluación actual almacenada en el suspend_data (si existe)
  let currentData = getEvaluationData();
  if (!currentData || typeof currentData !== "object") {
    // Si no existe, inicializamos el objeto con las claves de todas las actividades (en este ejemplo, solo S2.5.1)
    currentData = {
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
    
  }
  
  // Actualiza (o agrega) la evaluación para la actividad indicada
  currentData[activityId] = evaluationDetails;
  
  // Guarda el objeto actualizado en cmi.suspend_data
  updateEvaluationData(activityId, evaluationDetails);
  
  // Retorna el JSON de evaluación para usarlo en el componente React
  return currentData[activityId];
};
