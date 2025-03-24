// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";

import S11_1 from "./s11.1";
import S11_3_1 from "./s11.3.1";
import S11_2 from "./s11.2";


const semana = "semana11_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S11_1,S11_2,S11_3_1];

// Datos del menú lateral para la semana
const menuData = [
    {
      title: "Introducción a las Redes Neuronales Recurrentes",
      docIndex: 0, // Asumiendo que es el vigésimo documento en la lista
      items: [
        { title: "¿Qué es una Red Neuronal Recurrente?", position: 10.2 },
        { title: "Tipos de Arquitectura de RNN", position: 25.5 },
        { title: "Backpropagation Through Time (BPTT)", position: 40.8 },
        { title: "Problema del Gradiente Desapareciente y Explosivo", position: 55.3 },
        { title: "¿Por qué son necesarias las RNN?", position: 70.6 },
      ]
    },
    {
      title: "GRU y LSTM",
      docIndex: 1, // Asumiendo que es el vigésimo primer documento en la lista
      items: [
        { title: "¿Por qué existen LSTM y GRU?", position: 10.2 },
        { title: "Arquitectura y Funcionamiento de LSTM", position: 25.5 },
        { title: "Arquitectura y Funcionamiento de GRU", position: 40.8 },
        { title: "Comparación entre LSTM y GRU", position: 55.3 }
      ]
    },
    {
      title: "Actividad 1",
      docIndex: 2, // Asumiendo que es el sexto documento en la lista
      items: [
        { title: "Explicación de la actividad", position: 0.2 },
        { title: "Rúbrica de evaluacion", position: 8.7 },
        { title: "Sube tus archivos", position: 66.2 },
        ]
      },
];

const Semana11 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana11;