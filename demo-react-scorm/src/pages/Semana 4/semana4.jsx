// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S4_1 from "./s4.1";
import S4_2 from "./s4.2";
import S4_3 from "./s4.3";
import S4_4 from "./s4.4";
import S4_5_1 from "./s4.5.1";
import S4_5_2 from "./s4.5.2";




// const lastQuiz = getLastQuiz();
const semana = "semana4_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S4_1, S4_2, S4_3, S4_4,S4_5_1,S4_5_2];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Hiperparámetros",
  docIndex: 0, // Asumiendo que es el séptimo documento en la lista
  items: [
    { title: "¿Qué son los Hiperparámetros?", position: 2.7 },
    { title: "Tipos de Hiperparámetros", position: 17.1 },
    { title: "Técnicas de Ajuste de Hiperparámetros", position: 64.3 },
    ],
  },
  {
    title: "Técnicas de Optimización",
  docIndex: 1, // Asumiendo que es el octavo documento en la lista
  items: [
    { title: "¿Qué son las Técnicas de Optimización?", position: 2.8 },
    { title: "Descenso de Gradiente", position: 27.5 },
    { title: "Optimización con Momentum", position: 34.3 },
    { title: "Algoritmos de Optimización Adaptativa", position: 49.9 },
    { title: "Decaimiento de la Tasa de Aprendizaje", position: 61.1 },
    ],
  },
  {
    title: "Comparación de Optimizadores",
  docIndex: 2, // Asumiendo que es el noveno documento en la lista
  items: [
    { title: "¿Qué son los Optimizadores en Deep Learning?", position: 2.2 },
    { title: "Implementación de SGD y Adam", position: 10.9 },
    { title: "Comparación de Resultados", position: 22.3 },
    ],
  },
  {
    title: "Overfitting y Regularización",
  docIndex: 3, // Asumiendo que es el décimo documento en la lista
  items: [
    { title: "¿Qué es el Underfitting?", position: 7.5 },
    { title: "¿Qué es el Overfitting?", position: 20.6 },
    { title: "¿Qué es la Regularización?", position: 42.3 },
    { title: "L2 Regularization", position: 44.3 },
    { title: "L1 Regularization", position: 54.9 },
    { title: "Dropout", position: 66.9 },
    { title: "Data Augmentation", position: 77.9 },
    { title: "Early Stopping", position: 98.1 },
    ]
  },
  {
    title: "Actividad 3",
  docIndex: 4, // Asumiendo que es el sexto documento en la lista
  items: [
    { title: "Explicación de la actividad", position: 0.2 },
    { title: "Rúbrica de evaluacion", position: 8.7 },
    { title: "Sube tus archivos", position: 66.2 },
    ]
  },
  {
    title: "Actividad 4",
  docIndex: 5, // Asumiendo que es el sexto documento en la lista
  items: [
    { title: "Explicación de la actividad", position: 0.2 },
    { title: "Rúbrica de evaluacion", position: 8.7 },
    { title: "Sube tus archivos", position: 66.2 },
    ]
  },

];

const Semana4 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana4;