// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S7_1 from "./s7.1";
import S7_2 from "./s7.2";
import S7_3_1 from "./s7.3.1";


const myAudioFiles = [];


// const lastQuiz = getLastQuiz();
const semana = "semana7_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S7_1, S7_2,S7_3_1];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Introducción al Procesamiento de Imágenes",
  docIndex: 0, // Asumiendo que es el decimoquinto documento en la lista
  items: [
    { title: "¿Qué es una Imagen Digital?", position: 5.7 },
    { title: "Representación de Imágenes como Matrices", position: 8.4 },
    { title: "Canales de Color", position: 39.8 },
    { title: "Profundidad de Color", position: 53.1 },
    { title: "Espacios de Color", position: 66.6 },
    { title: "Histograma de Imágenes", position: 85.9 },
    ],
  },
  {
    title: "Convolución",
  docIndex: 1, // Asumiendo que es el decimosexto documento en la lista
  items: [
    { title: "¿Qué es la Convolución?", position: 10.2 },
    { title: "Aplicaciones de la Convolución en Imágenes", position: 25.5 },
    { title: "Fundamentos de la Convolución en Imágenes", position: 40.8 },
    { title: "Padding y Stride", position: 55.3 },
    { title: "Tipos de Filtros en Convolución", position: 70.6 },
    { title: "Convolución en Imágenes RGB", position: 85.9 },
    ],
  },
  {
    title: "Actividad 7",
  docIndex: 2, // Asumiendo que es el sexto documento en la lista
  items: [
    { title: "Explicación de la actividad", position: 0.2 },
    { title: "Rúbrica de evaluacion", position: 8.7 },
    { title: "Sube tus archivos", position: 66.2 },
    ]
  },
];

const Semana7 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent myAudioFiles={myAudioFiles} docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana7;