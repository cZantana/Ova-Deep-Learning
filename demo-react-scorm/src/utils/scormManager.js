// src/utils/scormManager.js
import pipwerks from 'pipwerks-scorm-api-wrapper';
import { quizzes } from '../config/Quizzes'; // Importa la configuración de quizzes

// En scormManager.js
export const getLastQuiz = () => {
  const version = pipwerks.SCORM.version;
  const bookmarkField = version === "2004" ? "cmi.location" : "cmi.core.lesson_location";
  const bookmark = pipwerks.SCORM.get(bookmarkField);
  return bookmark;
};

// Recupera y parsea el suspend_data; si está vacío, retorna {}
export const getSuspendData = () => {
  const data = pipwerks.SCORM.get("cmi.suspend_data");
  try {
    const parsed = data ? JSON.parse(data) : {};
    return parsed || {};  // Si parsed es null, retorna {}
  } catch {
    return {};
  }
};

// Actualiza la nota de un quiz específico solo si la nueva es mayor o no existe
export const updateQuizScore = (quizKey, score) => {
  const data = getSuspendData();
  if (data[quizKey] === undefined || score > data[quizKey]) {
    data[quizKey] = score;
    pipwerks.SCORM.set("cmi.suspend_data", JSON.stringify(data));
    if (typeof pipwerks.SCORM.save === "function") {
      pipwerks.SCORM.save();
    } else {
      console.warn("SCORM.save no está disponible.");
    }
  }
};

// Finaliza el curso: calcula la nota final y actualiza los datos en el LMS.
// weights: objeto con la asignación de peso para cada quiz (ej. { quiz1: 0.3, quiz2: 0.7 })
// Se asume que la suma de todos los pesos en weights es 1, si se han presentado todos.
export const finalizeCourse = () => {
  const data = getSuspendData();
  const quizKeys = quizzes.map(quiz => quiz.id);
  const totalQuizzes = quizKeys.length;
  
  // Crea un objeto "weights" a partir de quizzes
  const weights = quizzes.reduce((acc, quiz) => {
    acc[quiz.id] = quiz.weight;
    return acc;
  }, {});

  // Filtra los quizzes que se han presentado (no nulos)
  const quizzesCompleted = quizKeys.filter(key => data[key] != null);
  const completados = quizzesCompleted.length;
  
  // Actualiza el progreso en cmi.comments (si el LMS lo soporta)
  pipwerks.SCORM.set("cmi.comments", `${completados} completados de ${totalQuizzes}`);

  // Calcula la nota final usando solo los quizzes presentados.
  let weightedSum = 0;
  let sumWeights = 0;
  quizKeys.forEach(key => {
    if (data[key] != null) {
      weightedSum += data[key] * weights[key];
      sumWeights += weights[key];
    }
  });
  
  // Si ningún quiz fue presentado, asigna 0.
  let finalScore = 0;
  if (sumWeights > 0) {
    finalScore = weightedSum / sumWeights;
  }
  
  // Actualiza el puntaje en el LMS.
  pipwerks.SCORM.set("cmi.core.score.raw", finalScore.toString());
  
  const version = pipwerks.SCORM.version; // "2004" o "1.2"
  
  if (completados < totalQuizzes) {
    // Si no se han presentado todos los quizzes:
    pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
    if (version === "2004") {
      pipwerks.SCORM.set("cmi.success_status", finalScore >= 3.75 ? "passed" : "failed");
    }
  } else {
    // Si se han presentado todas las actividades:
    if (version === "2004") {
      pipwerks.SCORM.set("cmi.core.lesson_status", "completed");
      pipwerks.SCORM.set("cmi.success_status", finalScore >= 3.75 ? "passed" : "failed");
    } else {
      pipwerks.SCORM.set("cmi.core.lesson_status", finalScore >= 3.75 ? "passed" : "failed");
    }
  }
  
  if (typeof pipwerks.SCORM.save === "function") {
    pipwerks.SCORM.save();
  }
  
  return finalScore;
};

// Función para actualizar el bookmark (último quiz realizado)
export const updateLastQuiz = (newQuizId) => {
  // Determina el campo de bookmark según la versión SCORM
  const version = pipwerks.SCORM.version;
  const bookmarkField = version === "2004" ? "cmi.location" : "cmi.core.lesson_location";
  
  // Obtiene el bookmark actual
  let currentBookmark = pipwerks.SCORM.get(bookmarkField);
  
  // Obtiene el índice del nuevo quiz según la configuración
  const newIndex = quizzes.findIndex(quiz => quiz.id === newQuizId);
  let currentIndex = -1;
  if (currentBookmark) {
    currentIndex = quizzes.findIndex(quiz => quiz.id === currentBookmark);
  }
  
  // Si no hay bookmark actual o el nuevo quiz es de orden mayor, se actualiza
  if (currentIndex === -1 || newIndex > currentIndex) {
    pipwerks.SCORM.set(bookmarkField, newQuizId);
    if (typeof pipwerks.SCORM.save === "function") {
      pipwerks.SCORM.save();
    } else {
      console.warn("SCORM.save no está disponible.");
    }
  }
};