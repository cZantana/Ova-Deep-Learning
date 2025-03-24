// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";

import S15_1 from "./s15.1";
import S15_2 from "./s15.2";
import S15_3 from "./s15.2";
import S15_4_1 from "./s15.4.1";


const semana = "semana15_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S15_1,S15_2,S15_3,S15_4_1];

// Datos del menú lateral para la semana
const menuData = [
    {
      title: "ML Cycle y MLOps",
      docIndex: 0, // Asumiendo que es el vigésimo octavo documento en la lista
      items: [
        { title: "¿Qué son ML Cycle y MLOps?", position: 10.2 },
        { title: "Ciclo de Vida del Machine Learning", position: 25.5 },
        { title: "¿Qué es MLOps?", position: 40.8 },
        { title: "Fases de MLOps", position: 55.3 },
        { title: "Subtemas importantes de MLOps", position: 70.6 }
      ]
    },
    {
      title: "Herramientas de Monitoreo y Logging",
      docIndex: 1, // Asumiendo que es el vigésimo noveno documento en la lista
      items: [
        { title: "¿Qué son y por qué son necesarias?", position: 10.2 },
        { title: "¿Qué es Weights & Biases (W&B)?", position: 25.5 },
        { title: "¿Por qué es necesario Weights & Biases?", position: 40.8 },
        { title: "Implementación de W&B en Deep Learning", position: 55.3 }
      ]
    },
    {
      title: "Model Serving",
      docIndex: 2, // Asumiendo que es el trigésimo documento en la lista
      items: [
        { title: "¿Qué es Model Serving?", position: 10.2 },
        { title: "¿Por qué es importante?", position: 25.5 },
        { title: "Implementación y Despliegue de Modelos", position: 40.8 },
        { title: "Monitoreo y Actualización de Modelos en Producción", position: 55.3 },
        { title: "Seguridad y Escalabilidad en Model Serving", position: 70.6 }
      ]
    },
    {
      title: "Actividad 16",
      docIndex: 3, // Asumiendo que es el sexto documento en la lista
      items: [
        { title: "Explicación de la actividad", position: 0.2 },
        { title: "Rúbrica de evaluacion", position: 8.7 },
        { title: "Sube tus archivos", position: 66.2 },
        ]
      },
];

const Semana15 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana15;