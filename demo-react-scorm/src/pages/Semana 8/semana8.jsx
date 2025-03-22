// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S8_1 from "./s8.1";





const lastQuiz = getLastQuiz();
const semana = "semana8_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S8_1];

// Datos del menú lateral para la semana
const menuData = [
    {
        title: "Redes Neuronales Convolucionales",
        docIndex: 0,
        items: [
          { title: "Introducción a las Redes Neuronales Convolucionales", position: 0 },
          { title: "¿Cómo Surgieron las CNNs?", position: 5.7 },
          { title: "¿Por Qué se Utilizan las CNNs?", position: 8.4 },
          { title: "Componentes de una Red Neuronal Convolucional", position: 15.2 },
          { title: "Capa Convolucional", position: 22.5 },
          { title: "Capa de Pooling", position: 30.1 },
          { title: "Capa de Normalización", position: 39.8 },
          { title: "Capa Completamente Conectada", position: 53.1 },
          { title: "Función de Activación", position: 66.6 },
          { title: "Ejemplo Matemático de una CNN", position: 75.3 },
          { title: "Contextos de Uso de las CNNs", position: 85.9 },
          { title: "Arquitecturas Populares de CNN", position: 92.4 }
        ]
      }
];

const Semana8 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana8;