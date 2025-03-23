import React, { useContext } from "react";
import SCORMContext from "../../context/SCORMContext";
import SemanaCard from "../../components/molecules/Card";
import { weeksData } from "../../config/Quizzes"

const CourseGrid = () => {
  // Extrae datos o métodos del SCORMContext si los necesitas
  const { scormStatus } = useContext(SCORMContext);

  // Datos de ejemplo para cada "semana" o sección
  
  return (
    <section className="py-12 bg-[var(--color-neutral-400)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--color-blue-600)] mb-4">
          ¡Explora el contenido semanal del curso!
        </h2>
        <p className="text-center text-[var(--color-neutral-700)] mb-8">
          El curso está estructurado en semanas temáticas, cada una diseñada para
          guiarte desde los fundamentos básicos de Deep Learning hasta la
          implementación de proyectos interactivos.
        </p>

        {/* Grilla de tarjetas */}
        <div className="content center grid grid-cols-1 sm:grid-cols-2 md:sm:grid-cols-2 lg:grid-cols-3">
          {weeksData.map((week, i) => (
            <div  key={i} className="justify-center flex flex-wrap gap-2 p-7">
            <SemanaCard
            key={week.id}
            semana={week.title} 
            descripcion={week.description}
            iconoSrc={week.icon}
            link={week.link}
          />
          </div>
          ))}
        </div>

        {/* Ejemplo de uso de scormStatus si quieres mostrarlo */}
        {scormStatus && (
          <p className="mt-4 text-center text-sm text-[var(--color-success)]">
            {scormStatus}
          </p>
        )}
      </div>
    </section>
  );
};

export default CourseGrid;
