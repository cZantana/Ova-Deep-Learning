// src/pages/Home.jsx
import React from 'react';

import HeroSection from '../components/templates/HeroSection';
import Navbar from '../components/organisms/Navbar';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección de héroe */}
      <HeroSection />

    </div>
  );
}
