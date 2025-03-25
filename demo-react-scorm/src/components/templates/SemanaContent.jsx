// src/components/semana/SemanaContent.jsx
import React, { useState } from "react";
import Sidebar from "../organisms/Sidebar"; // Ajusta la ruta según tu estructura
import AudioPlayer from "../../components/organisms/AudioPlayer";
/**
 * Componente que renderiza el contenido de la semana: el sidebar y los documentos en slider.
 * Se espera que se le pase:
 *  - docs: un arreglo de componentes (por ejemplo, [S1_1, S1_2, ...])
 *  - menuData: la data para el sidebar.
 */
const SemanaContent = ({ myAudioFiles, docs, menuData, weekId }) => {

  const initialIndex =
    weekId && weekId.includes('_')
      ? parseInt(weekId.split('_')[1], 10)
      : 0;

  const week = weekId && weekId.includes('_')
    ? weekId.split('_')[0]
    : weekId;

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <section className="bg-[var(--color-neutral-500)] min-h-screen flex">
      {/* Sidebar a la izquierda */}
      <Sidebar menuData={menuData} weekId={week} onSelectDoc={setActiveIndex} />
      <div className="relative flex-1 overflow-hidden py-2 mx-4">

        {/* Área de documentos en slider */}
        <div className="relative flex-1 overflow-hidden py-2">
          <div
            className="flex transition-transform duration-600"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {docs.map((DocComponent, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2 ">
                <AudioPlayer src={myAudioFiles[i]} />

                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-5 md:p-15">
                  <DocComponent />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default SemanaContent;
