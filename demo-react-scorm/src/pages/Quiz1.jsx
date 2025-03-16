// src/pages/Quiz1.jsx
import React, { useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';

const questions = [
  {
    question: "¿Qué es Deep Learning?",
    options: [
      "Una técnica de aprendizaje automático basada en redes neuronales profundas",
      "Una técnica de programación funcional",
      "Un algoritmo de clustering",
      "Ninguna de las anteriores"
    ],
    correct: 0
  },
  {
    question: "¿Qué arquitectura se utiliza comúnmente en Deep Learning para procesamiento de imágenes?",
    options: [
      "Redes neuronales convolucionales (CNN)",
      "Redes neuronales recurrentes (RNN)",
      "Árboles de decisión",
      "Algoritmos genéticos"
    ],
    correct: 0
  },
  {
    question: "¿Cuál es la función principal de la capa de activación en una red neuronal?",
    options: [
      "Introducir no linealidades en el modelo",
      "Normalizar la salida",
      "Inicializar los pesos",
      "Reducir la dimensionalidad"
    ],
    correct: 0
  },
  {
    question: "¿Qué técnica se utiliza para evitar el sobreajuste en modelos de deep learning?",
    options: [
      "Regularización y dropout",
      "Aumentar el tamaño del dataset",
      "Eliminar capas",
      "Usar solo redes poco profundas"
    ],
    correct: 0
  },
  {
    question: "¿Qué optimizador es ampliamente utilizado en deep learning?",
    options: [
      "Adam",
      "K-means",
      "PCA",
      "Decision Tree"
    ],
    correct: 0
  }
];

const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Maneja la selección de opción
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  // Maneja el paso a la siguiente pregunta
  const handleNextQuestion = () => {
    // Evalúa la respuesta actual
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(prevScore => prevScore + 1);
    }

    // Si es la última pregunta, finaliza el quiz
    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
      // Calcula el puntaje final (incluyendo la respuesta actual)
      const finalScore = score + (selectedOption === questions[currentQuestion].correct ? 1 : 0);
      
      // Guarda la calificación parcial en suspend_data
      const quizData = { quiz1: finalScore };
      pipwerks.SCORM.set("cmi.suspend_data", JSON.stringify(quizData));
      pipwerks.SCORM.commit();
    } else {
      // Pasa a la siguiente pregunta
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  if (quizFinished) {
    return (
      <div className="quiz-container p-4">
        <h2>Quiz Finalizado</h2>
        <p>Tu puntaje: {score + (selectedOption === questions[currentQuestion].correct ? 1 : 0)} de {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container p-4">
      <h2 className="text-xl font-bold mb-4">Quiz 1: Deep Learning</h2>
      <div className="question mb-4">
        <p className="text-lg">{questions[currentQuestion].question}</p>
      </div>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <div 
            key={index} 
            className={`option p-2 my-1 border rounded cursor-pointer ${selectedOption === index ? "bg-blue-200" : "bg-gray-100"}`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <button 
        onClick={handleNextQuestion} 
        disabled={selectedOption === null} 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Quiz1;
