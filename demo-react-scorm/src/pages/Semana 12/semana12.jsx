// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";

import S12_1 from "./s12.1";
import S12_2 from "./s12.2";
import S12_3_1 from "./s12.3.1";


const semana = "semana12_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S12_1,S12_2,S12_3_1];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Algoritmo 'Attention is All You Need'",
    docIndex: 0, // Asumiendo que es el vigésimo segundo documento en la lista
    items: [
      { title: "¿Qué es 'Attention is All You Need'?", position: 10.2 },
      { title: "Introducción al Mecanismo de Atención", position: 25.5 },
      { title: "Funcionamiento del Mecanismo de Atención", position: 40.8 },
      { title: "Aplicaciones en Series Temporales", position: 55.3 },
      { title: "Atención sin RNN o CNN", position: 70.6 }
    ]
  },
  {
    title: "Transformers",
    docIndex: 1, // Asumiendo que es el vigésimo tercer documento en la lista
    items: [
      { title: "¿Por qué es necesario el Transformer?", position: 10.2 },
      { title: "Concepto de Atención en el Transformer", position: 25.5 },
      { title: "Arquitectura del Transformer", position: 40.8 },
      { title: "Ventajas del Transformer", position: 55.3 },
      { title: "Aplicaciones del Transformer", position: 70.6 }
    ]
  },
    {
      title: "Actividad 12",
      docIndex: 2, // Asumiendo que es el sexto documento en la lista
      items: [
        { title: "Explicación de la actividad", position: 0.2 },
        { title: "Rúbrica de evaluacion", position: 8.7 },
        { title: "Sube tus archivos", position: 66.2 },
        ]
      },
];

const Semana12 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana12;