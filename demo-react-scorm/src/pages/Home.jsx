// src/pages/Home.jsx
import React, { useContext, useEffect } from 'react';
import SCORMContext from '../context/SCORMContext';

import HeroSection from '../components/templates/HeroSection';
import Navbar from '../components/organisms/Navbar';
import CallToAction from '../components/templates/CallToAction';
import CourseGrid from '../components/templates/CourseGrid';


export default function Home() {
  const { refreshSCORMData } = useContext(SCORMContext);

  useEffect(() => {
    // Llama a refreshSCORMData solo una vez al montar Home
    refreshSCORMData();
  }, []); // Dependencia vacía para evitar actualizaciones continuas
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección de héroe */}
      <HeroSection />

      {/* Sección de llamada a la accion */}
      <CallToAction />

      {/* Sección de llamada a la accion */}
      <CourseGrid />

    </div>
  );
}
