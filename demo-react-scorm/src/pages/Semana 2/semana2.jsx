// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";
import S2_1 from "./s2.1";
import S2_2 from "./s2.2";
import S2_3 from "./s2.3";
import S2_4 from "./s2.4";
import S2_5_1 from "./s2.5.1";



const lastQuiz = getLastQuiz();
const semana = "semana2_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S2_1, S2_2, S2_3, S2_4, S2_5_1];

// Datos del menú lateral para la semana
const menuData = [
  {
    title: "Conceptos del Deep Learning",
    docIndex: 0,
    items: [
      { title: "Introducción al Deep Learning" },
      { title: "Perceptrón: La Unidad Básica" },
      { title: "Red Neuronal de Una Capa" },
      { title: "Redes Neuronales Multicapa" },
      { title: "Programación de Perceptrón y Redes Neuronales en Python" },
    ],
  },
  {
    title: "Notebooks, Google Colab y GitHub",
    docIndex: 1,
    items: [
      { title: "Introducción a los Notebooks de Python" },
      { title: "Diferencias entre Notebooks y Scripts de Python" },
      { title: "Uso de Google Colab para Deep Learning" },
      { title: "Introducción a Git y GitHub" },
      { title: "Comandos Básicos de Git" },
      { title: "Uso de Git y GitHub en Proyectos de Deep Learning" },
    ],
  },
  {
    title: "Programación de Red Neuronal Multicapa",
    docIndex: 2, // Asumiendo que es el tercer documento en la lista
    items: [
      { title: "Importación de Librerías", position: 19.67 },
      { title: "Función de Activación", position: 20.86 },
      { title: "Datos de Entrada y Salida", position: 29.87 },
      { title: "Inicialización de Pesos", position: 43.46 },
      { title: "Parámetros de la Red", position: 53.66 },
      { title: "Entrenamiento", position: 62.55 },
      { title: "Pruebas Finales", position: 84.1 },
    ],
  },
  {
    title: "Conjuntos de Datos en el Deep Learning",
    docIndex: 3, // Asumiendo que es el cuarto documento en la lista
    items: [
      { title: "¿Qué son los Conjuntos de Datos Train, Dev y Test?", position: 5.0 },
      { title: "Origen y Evolución del Concepto de Conjuntos de Datos", position: 8.0 },
      { title: "Función y Propósito de Cada Conjunto de Datos", position: 11.0 },
      { title: "Relevancias sobre los Conjuntos de Datos", position: 33.0 }
    ]
  },
  {
    title: "Actividad",
    docIndex: 4, // Asumiendo que es el cuarto documento en la lista
    items: [
    ]
  },
];

const Semana2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana2;
