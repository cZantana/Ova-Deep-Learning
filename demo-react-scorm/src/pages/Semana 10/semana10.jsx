// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";


import S10_2_1 from "./s10.2.1";


const semana = "semana10_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S10_2_1];

// Datos del menú lateral para la semana
const menuData = [
    {
      title: "Actividad 10",
      docIndex: 0, // Asumiendo que es el sexto documento en la lista
      items: [
        { title: "Explicación de la actividad", position: 0.2 },
        { title: "Rúbrica de evaluacion", position: 8.7 },
        { title: "Sube tus archivos", position: 66.2 },
        ]
      },
];

const Semana10 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana10;