import React, { useContext }  from "react";
import Button from "./Button";
import  SCORMContext  from "../context/SCORMContext";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const { scormStatus } = useContext(SCORMContext);
  const navigate = useNavigate();

  return (
    <section className="hero-section bg-[var(--color-neutral-300)] min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Contenido del Hero */}
        <div className="text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-900)] leading-tight">
            Más que un curso: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-blue-500)]">
              Una experiencia inmersiva en Deep Learning.
            </span>
          </h1>
          <p className="text-[var(--color-neutral-700)] mt-4 text-lg">
            Disfruta de un curso interactivo de Deep Learning con contenido
            multimedia, actividades semanales y evaluación automática en tiempo
            real, para el aprendizaje autónomo.
          </p>
          <div className="mt-6 flex space-x-4">
            <Button
              text="Quiz 1"
              type="tertiary"
              onClick={() => navigate("/Quiz1")}
              // className="bg-[var(--color-primary)] hover:bg-[var(--color-pink-700)] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            />
            <Button
              text="Quiz 2"
              type="tertiary"
              onClick={() => navigate("/Quiz2")}
              // className="bg-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-600)] text-[var(--color-neutral-900)] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            />
            <Button
              text="Notas"
              type="primary"
              onClick={() => navigate("/Notas")}
              // className="bg-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-600)] text-[var(--color-neutral-900)] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            />
          </div>
          {/* Estado de SCORM */}
          <div className="mt-4">
            <p
              className={`text-sm font-bold ${
                scormStatus === "SCORM inicializado correctamente"
                  ? "text-[var(--color-success)]"
                  : "text-[var(--color-error)]"
              }`}
            >
              {scormStatus}
            </p>
          </div>
        </div>

        {/* Imagen o ilustración */}
        <div className="hidden md:block">
          <img
            src="/assets/mockup-placeholder.png" // Cambia por la imagen correcta
            alt="Ilustración del curso"
            className="w-80 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;