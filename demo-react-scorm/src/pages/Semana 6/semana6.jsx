// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S6_1 from "./s6.1";
import S6_2 from "./s6.2";
import S6_3_1 from "./s6.3.1";





// const lastQuiz = getLastQuiz();
const semana = "semana6_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S6_1, S6_2,S6_3_1];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Preprocesamiento de Datos",
    docIndex: 0, // Asumiendo que es el decimotercer documento en la lista
    items: [
      { title: "¿Qué es el Preprocesamiento de Datos?", position: 8.4 },
      { title: "Limpieza de Datos", position: 17.8 },
      { title: "Normalización y Estandarización", position: 32.8 },
      { title: "Codificación de Variables Categóricas", position: 43.8 },
      { title: "Reducción de Dimensionalidad", position: 58.1 },
    ],
  },
  {
    title: "Métricas de Evaluación",
    docIndex: 1, // Asumiendo que es el decimocuarto documento en la lista
    items: [
      { title: "¿Qué son las Métricas de Evaluación?", position: 3.2 },
      { title: "Matriz de Confusión", position: 22.8 },
      { title: "Precisión, Recall y F1 Score", position: 45.8 },
      { title: "ROC y AUC", position: 64.3 },
    ],
  },
  {
    title: "Actividad 6",
  docIndex: 2, // Asumiendo que es el sexto documento en la lista
  items: [
    { title: "Explicación de la actividad", position: 0.2 },
    { title: "Rúbrica de evaluacion", position: 8.7 },
    { title: "Sube tus archivos", position: 66.2 },
    ]
  },
];

const Semana6 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana6;