// src/pages/Semana1.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
import SemanaContent from "../../components/templates/SemanaContent";
import S2_1 from "./S2.1";
import S2_2 from "./S2.2";
import S2_3 from "./S2.3";

// Arreglo de documentos (componentes) a mostrar
const docs = [S2_1, S2_2, S2_3];

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
];

const Semana1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} />
    </div>
  );
};

export default Semana1;
