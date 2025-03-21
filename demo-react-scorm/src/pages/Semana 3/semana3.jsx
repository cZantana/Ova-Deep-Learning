// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S3_1 from "./s3.1";
import S3_2 from "./s3.2";
import S3_3 from "./s3.3";
import S3_4 from "./s3.4";


const lastQuiz = getLastQuiz();
const semana = "semana3_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S3_1, S3_2, S3_3, S3_4];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Gradiente Descendiente y Backpropagation",
    docIndex: 0, // Asumiendo que es el tercer documento en la lista
    items: [
      { title: "Gradiente Descendiente", position: 23.5 },
      { title: "Feedforward", position: 71.8 },
      { title: "Backpropagation", position: 88.8 },
    ],
  },
  {
    title: "Función de Pérdida",
  docIndex: 1, // Asumiendo que es el cuarto documento en la lista
  items: [
    { title: "¿Qué es la Función de Pérdida?", position: 1.4 },
    { title: "Tipos de Funciones de Pérdida", position: 8.2 },
    { title: "Entropía Cruzada Categórica", position: 9.5 },
    { title: "Uso de la Función de Pérdida en el Entrenamiento", position: 16.9 },
    { title: "Explicación del Gráfico de Pérdida", position: 29.5 },
    ],
  },
  {
    title: "Multicapa con Backpropagation",
  docIndex: 2, // Asumiendo que es el quinto documento en la lista
  items: [
    { title: "Programación de una Red Neuronal Multicapa", position: 1.3 },
    { title: "Retropropagación del Error", position: 16.1 },
    { title: "Entrenamiento de la Red Neuronal", position: 41.4 },
    { title: "Prueba de la Red Neuronal", position: 45.4 },
    ],
  },
  {
    title: "Bias y Variance",
  docIndex: 3, // Asumiendo que es el sexto documento en la lista
  items: [
    { title: "¿Qué son Bias y Variance en Deep Learning?", position: 2.2 },
    { title: "Bias (Sesgo)", position: 3.7 },
    { title: "Variance (Varianza)", position: 12.2 },
    { title: "Trade-off entre Bias y Variance", position: 21.5 },
    { title: "Aplicaciones y Contextos", position: 29.4 },
    ]
  },
];

const Semana3 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana3;