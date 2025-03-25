// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";

import S13_1 from "./s13.1";
import S13_2 from "./s13.2";
import S13_3_1 from "./s13.3.1";

const myAudioFiles = [];

const semana = "semana13_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S13_1,S13_2,S13_3_1];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Algoritmos de Autoencoders",
    docIndex: 0, // Asumiendo que es el vigésimo cuarto documento en la lista
    items: [
      { title: "¿Qué es un Autoencoder?", position: 10.2 },
      { title: "Arquitectura Básica de un Autoencoder", position: 25.5 },
      { title: "Tipos de Autoencoders", position: 40.8 },
      { title: "Reducción de Dimensionalidad con Autoencoders", position: 55.3 },
      { title: "Generación de Datos con Autoencoders", position: 70.6 }
    ]
  },
  {
    title: "Red Denoising",
    docIndex: 1, // Asumiendo que es el vigésimo quinto documento en la lista
    items: [
      { title: "¿Qué es una Red Denoising?", position: 10.2 },
      { title: "Funcionamiento de una Red Denoising", position: 25.5 },
      { title: "Aplicaciones Prácticas de las Redes Denoising", position: 40.8 },
      { title: "Tipos de Ruido y Métodos de Eliminación", position: 55.3 },
      { title: "Subtemas Clave en Redes Denoising", position: 70.6 }
    ]
  },
    {
      title: "Actividad 13",
      docIndex: 2, // Asumiendo que es el sexto documento en la lista
      items: [
        { title: "Explicación de la actividad", position: 0.2 },
        { title: "Rúbrica de evaluacion", position: 8.7 },
        { title: "Sube tus archivos", position: 66.2 },
        ]
      },
];

const Semana13 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent myAudioFiles={myAudioFiles} docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana13;