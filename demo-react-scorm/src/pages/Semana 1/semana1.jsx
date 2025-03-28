// src/pages/Semana1.jsx
import React from "react";
// import { useState, useEffect } from "react";
// import { getLastQuiz } from "../../utils/scormManager";
import Navbar from "../../components/organisms/Navbar";
import SemanaContent from "../../components/templates/SemanaContent";
import S1_1 from "./S1.1";
import S1_2 from "./S1.2";
import A1_1 from "./s1.1.wav"; // Ajusta la ruta a tu proyecto
import A1_2 from "./s1.2.wav"; // Ajusta la ruta a tu proyecto


// const lastQuiz = getLastQuiz();
const weekId = "semana1_0";

// Datos del menú lateral para la semana
const docs = [S1_1, S1_2];
const myAudioFiles = [A1_1,A1_2];



const menuData = [
  {
    title: "Conceptos del Deep Learning",
    docIndex: 0,
    items: [
      { title: "Conceptos del Deep Learning", position: 0 },
      { title: "Perceptrón", position: 10.09 },
      { title: "Red Neuronal de Una Capa", position: 36.3 },
      { title: "Redes Neuronales Multicapa", position: 67.1 },
      { title: "Enlaces de interés", position: 100 }
    ],
  },
  {
    title: "Notebooks, Google Colab y GitHub",
    docIndex: 1,
    items: [
      { title: "¿Qué son los Notebooks y qué es Google Colab?", position: 0 },
      { title: "Notebooks de Python", position: 5.1 },
      { title: "Diferencias entre Notebooks y Scripts de Python", position: 17 },
      { title: "¿Qué es Git y GitHub?", position: 30.8 },
      { title: "Comandos más utilizados de Git", position: 47.4  },
    ],
  },
];


const Semana1 = () => {
  // const scrollPercentage = useScrollPercentage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent myAudioFiles={myAudioFiles} docs={docs} menuData={menuData} weekId={weekId}/>
    </div>
  );
};

export default Semana1;
