// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S9_1 from "./s9.1";
import S9_2 from "./s9.2";
import S9_3_1 from "./s9.3.1";

const myAudioFiles = [];

const semana = "semana9_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S9_1,S9_2,S9_3_1];

// Datos del menú lateral para la semana
const menuData = [
    {
        title: "Data Augmentation en Imágenes",
      docIndex: 0, // Asumiendo que es el decimoséptimo documento en la lista
      items: [
        { title: "¿Qué es el Data Augmentation?", position: 10.2 },
        { title: "¿Por qué es Necesario el Data Augmentation?", position: 25.5 },
        { title: "Técnicas Comunes de Data Augmentation", position: 40.8 },
        { title: "Herramientas y Bibliotecas para Data Augmentation", position: 55.3 },
        ]
      },
      {
        title: "Transfer Learning",
      docIndex: 1, // Asumiendo que es el decimoctavo documento en la lista
      items: [
        { title: "¿Qué es el Transfer Learning?", position: 10.2 },
        { title: "¿Por qué es Necesario el Transfer Learning?", position: 25.5 },
        { title: "Beneficios del Transfer Learning", position: 40.8 },
        { title: "Tipos de Transfer Learning", position: 55.3 },
        { title: "Aplicaciones del Transfer Learning", position: 70.6 },
        ]
      },
      {
        title: "Actividad 9",
      docIndex: 2, // Asumiendo que es el sexto documento en la lista
      items: [
        { title: "Explicación de la actividad", position: 0.2 },
        { title: "Rúbrica de evaluacion", position: 8.7 },
        { title: "Sube tus archivos", position: 66.2 },
        ]
      },
];

const Semana9 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent myAudioFiles={myAudioFiles} docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana9;