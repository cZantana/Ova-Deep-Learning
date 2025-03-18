// src/pages/Quiz2.jsx
import React, { useState, useContext} from 'react';
import { updateQuizScore } from '../utils/scormManager';
import SCORMContext from "../context/SCORMContext";

const questions = [
  {
    question: "¿Qué es una red neuronal recurrente (RNN)?",
    options: [
      "Una red neuronal diseñada para procesar secuencias de datos",
      "Una red neuronal feed-forward",
      "Un algoritmo de clustering",
      "Una técnica de reducción de dimensionalidad"
    ],
    correct: 0
  },
  {
    question: "¿Qué técnica se utiliza para prevenir el desvanecimiento del gradiente en RNNs?",
    options: [
      "Utilizar Long Short-Term Memory (LSTM)",
      "Aumentar el tamaño del dataset",
      "Aplicar pooling",
      "Reducir el número de capas"
    ],
    correct: 0
  },
  {
    question: "¿Cuál es el propósito del backpropagation en una red neuronal?",
    options: [
      "Actualizar los pesos del modelo en función del error",
      "Normalizar los datos de entrada",
      "Generar nuevas características",
      "Prevenir el sobreajuste"
    ],
    correct: 0
  },
  {
    question: "¿Qué es el overfitting en el contexto de deep learning?",
    options: [
      "Cuando el modelo se ajusta demasiado a los datos de entrenamiento y no generaliza",
      "Cuando el modelo no aprende lo suficiente de los datos",
      "Cuando se usa una arquitectura demasiado simple",
      "Cuando se utiliza demasiada regularización"
    ],
    correct: 0
  },
  {
    question: "¿Cuál de las siguientes es una función de activación comúnmente utilizada?",
    options: [
      "ReLU",
      "K-Means",
      "SVM",
      "PCA"
    ],
    correct: 0
  }
];

const Quiz2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const { refreshSCORMData } = useContext(SCORMContext);

  // Maneja la selección de opción
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  // Maneja el paso a la siguiente pregunta
  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
      const finalScore = score + (selectedOption === questions[currentQuestion].correct ? 1 : 0);
      
      // Actualiza la nota parcial para quiz2 usando la función centralizada
      updateQuizScore("quiz2", finalScore);
      // Actualiza el bookmark para indicar que el último quiz realizado es "quiz1"
      // Esto se actualizará solo si "quiz1" es de orden mayor que el bookmark actual.
      updateLastQuiz("quiz2");
      refreshSCORMData();
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  if (quizFinished) {
    return (
      <div className="quiz-container p-4">
        <h2>Quiz Finalizado</h2>
        <p>
          Tu puntaje: {score + (selectedOption === questions[currentQuestion].correct ? 1 : 0)} de {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="quiz-container p-4">
      <h2 className="text-xl font-bold mb-4">Quiz 2: Deep Learning Avanzado</h2>
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

export default Quiz2;
