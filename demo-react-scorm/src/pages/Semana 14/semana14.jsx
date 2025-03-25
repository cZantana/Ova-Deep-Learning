// src/pages/Semana2.jsx
import React from "react";
import Navbar from "../../components/organisms/Navbar";
// import { getLastQuiz } from "../../utils/scormManager";
import SemanaContent from "../../components/templates/SemanaContent";

import S14_1 from "./s14.1";
import S14_3 from "./s14.3";
import S14_2_1 from "./s14.2.1";
import S14_4_1 from "./s14.4.1";

const myAudioFiles = [];

const semana = "semana14_0";
// Arreglo de documentos (componentes) a mostrar
const docs = [S14_1,S14_2_1,S14_3,S14_4_1];

// Datos del menú lateral para la semana
const menuData = [
    {
      title: "Redes Generativas Adversarias (GANs/DCGAN)",
      docIndex: 0, // Asumiendo que es el vigésimo sexto documento en la lista
      items: [
        { title: "¿Qué son las GANs?", position: 10.2 },
        { title: "Funcionamiento Básico de las GANs", position: 25.5 },
        { title: "Problemas Comunes en el Entrenamiento de GANs", position: 40.8 },
        { title: "DCGAN (Deep Convolutional GAN)", position: 55.3 },
        { title: "Aplicaciones Prácticas de las GANs", position: 70.6 }
      ]
    },
    {
      title: "Actividad 14",
      docIndex: 1, // Asumiendo que es el sexto documento en la lista
      items: [
        { title: "Explicación de la actividad", position: 0.2 },
        { title: "Rúbrica de evaluacion", position: 8.7 },
        { title: "Sube tus archivos", position: 66.2 },
        ]
      },
      {
        title: "Latent Diffusion Models",
        docIndex: 2, // Asumiendo que es el vigésimo séptimo documento en la lista
        items: [
          { title: "¿Qué son los Latent Diffusion Models (LDMs)?", position: 10.2 },
          { title: "Funcionamiento de los Modelos de Difusión", position: 25.5 },
          { title: "Arquitectura de Stable Diffusion", position: 40.8 },
          { title: "Arquitectura de DALL-E", position: 55.3 },
          { title: "Subtemas importantes sobre los LDMs", position: 70.6 }
        ]
      },
      {
        title: "Actividad 15",
        docIndex: 3, // Asumiendo que es el sexto documento en la lista
        items: [
          { title: "Explicación de la actividad", position: 0.2 },
          { title: "Rúbrica de evaluacion", position: 8.7 },
          { title: "Sube tus archivos", position: 66.2 },
          ]
        },
];

const Semana14 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar en la parte superior */}
      <Navbar />
      {/* Componente reutilizable que renderiza el contenido de la semana */}
      <SemanaContent myAudioFiles={myAudioFiles} docs={docs} menuData={menuData} weekId={semana} />
    </div>
  );
};

export default Semana14;