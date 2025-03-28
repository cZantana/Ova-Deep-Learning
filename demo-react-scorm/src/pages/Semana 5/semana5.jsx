// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S5_1 from "./s5.1";
import S5_2 from "./s5.2";
import S5_3_1 from "./s5.3.1";


const myAudioFiles = [];


// const lastQuiz = getLastQuiz();
const semana = "semana5_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S5_1, S5_2, S5_3_1];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Clasificación Multiclase y el Dataset",
  docIndex: 0, // Asumiendo que es el duodécimo documento en la lista
  items: [
    { title: "¿Qué es la Clasificación Multiclase?", position: 10.2 },
    { title: "Diferencias entre Clasificación Binaria y Multiclase", position: 30.5 },
    { title: "El Dataset MNIST", position: 50.8 },
    ],
  },
  {
    title: "TensorFlow, Keras y PyTorch",
  docIndex: 1, // Asumiendo que es el undécimo documento en la lista
  items: [
    { title: "¿Qué es TensorFlow?", position: 6.8 },
    { title: "¿Qué es Keras?", position: 35.5 },
    { title: "¿Qué es PyTorch?", position: 70.8 },
    ],
  },
  {
    title: "Actividad 5",
  docIndex: 2, // Asumiendo que es el sexto documento en la lista
  items: [
    { title: "Explicación de la actividad", position: 0.2 },
    { title: "Rúbrica de evaluacion", position: 8.7 },
    { title: "Sube tus archivos", position: 66.2 },
    ]
  },

];

const Semana5 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent myAudioFiles={myAudioFiles} docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana5;