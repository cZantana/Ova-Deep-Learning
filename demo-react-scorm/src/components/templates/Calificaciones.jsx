import React from "react";
import SemanaAccordion from "../organisms/SemanaAcordion";
import {CalificacionesSemanas} from "../../config/Quizzes"

const Calificaciones = () => {
  return (
    // Fondo general (opcional). Ajusta según tu preferencia.
    <section className="bg-[var(--color-neutral-500)] min-h-screen py-8">
      {/* Contenedor centrado horizontalmente */}
      <div className="max-w-6xl mx-auto px-5 sm:px-12 lg:px-8">
        {/* Card principal con fondo blanco, borde redondeado y sombra */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h1 className="text-2xl font-bold text-[var(--color-blue-600)] ml-9 mt-4 mb-4">
            Progreso
          </h1>
          <p className="text-[var(--color-neutral-700)] ml-9 mb-8">Progreso General</p>

          {/* Sección de acordeones */}
          {CalificacionesSemanas.map((semana) => (
            <SemanaAccordion
              key={semana.weekNumber}
              weekNumber={semana.weekNumber}
              items={semana.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calificaciones;
