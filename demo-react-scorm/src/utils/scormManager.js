// src/utils/scormManager.js
import pipwerks from 'pipwerks-scorm-api-wrapper';

export const getSuspendData = () => {
  const data = pipwerks.SCORM.get("cmi.suspend_data");
  try {
    const parsed = data ? JSON.parse(data) : {};
    return parsed || {};  // Si parsed es null, retorna {}
  } catch {
    return {};
  }
};

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
export const finalizeCourse = (weights = { quiz1: 0.3, quiz2: 0.7 }) => {
  const data = getSuspendData();
  const totalQuizzes = 2;
  const quizzesPresentados = [];
  if (data.quiz1 != null) quizzesPresentados.push("quiz1");
  if (data.quiz2 != null) quizzesPresentados.push("quiz2");
  const completados = quizzesPresentados.length;

  // Actualiza el progreso en cmi.comments (si el LMS lo soporta)
  pipwerks.SCORM.set("cmi.comments", `${completados} completados de ${totalQuizzes}`);

  // Obtiene la versión SCORM (por ejemplo, "2004" o "1.2")
  const version = pipwerks.SCORM.version;

  if (completados < totalQuizzes) {
    // Si solo se ha presentado un quiz, usamos esa nota parcial como nota final
    let partialScore = 0;
    if (data.quiz1 != null && data.quiz2 == null) {
      partialScore = data.quiz1;
    } else if (data.quiz2 != null && data.quiz1 == null) {
      partialScore = data.quiz2;
    }
    pipwerks.SCORM.set("cmi.core.score.raw", partialScore.toString());
    pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
    if (version === "2004") {
      pipwerks.SCORM.set("cmi.success_status", partialScore >= 3.75 ? "passed" : "failed");
    }
    if (typeof pipwerks.SCORM.save === "function") {
      pipwerks.SCORM.save();
    }
    return partialScore;
  } else {
    // Si se han presentado ambos quizzes, calcular la nota final
    const finalScore = (data.quiz1 * weights.quiz1) + (data.quiz2 * weights.quiz2);
    pipwerks.SCORM.set("cmi.core.score.raw", finalScore.toString());
    
    if (version === "2004") {
      // En SCORM 2004, se declara el curso como completado y se define el estado de éxito.
      pipwerks.SCORM.set("cmi.core.lesson_status", "completed");
      pipwerks.SCORM.set("cmi.success_status", finalScore >= 3.75 ? "passed" : "failed");
    } else {
      // En SCORM 1.2, se declara directamente el estado como "passed" o "failed".
      pipwerks.SCORM.set("cmi.core.lesson_status", finalScore >= 3.75 ? "passed" : "failed");
    }
    
    if (typeof pipwerks.SCORM.save === "function") {
      pipwerks.SCORM.save();
    }
    return finalScore;
  }
};