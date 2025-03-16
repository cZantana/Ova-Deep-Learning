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
    if (typeof pipwerks.SCORM.save === 'function') {
      pipwerks.SCORM.save();
    } else {
      console.warn('SCORM.save no está disponible.');
    }
  }
};

export const calculateFinalScore = (weights = { quiz1: 0.4, quiz2: 0.6 }) => {
  const data = getSuspendData();
  if (data.quiz1 == null || data.quiz2 == null) {
    pipwerks.SCORM.set("cmi.core.lesson_status", "incomplete");
    return null;
  } else {
    const finalScore = (data.quiz1 * weights.quiz1) + (data.quiz2 * weights.quiz2);
    // Ejemplo para SCORM 1.2; ajustar según la versión si es necesario:
    pipwerks.SCORM.set("cmi.core.score.raw", finalScore.toString());
    const status = finalScore >= 70 ? "passed" : "failed";
    pipwerks.SCORM.set("cmi.core.lesson_status", status);
    if (typeof pipwerks.SCORM.save === 'function') {
      pipwerks.SCORM.save();
    } else {
      console.warn('SCORM.save no está disponible.');
    }
    return finalScore;
  }
};
