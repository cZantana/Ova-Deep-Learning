import React, { useState, useRef } from "react";

const ArrastrarSoltar = () => {
  const [isDragging, setIsDragging] = useState(false);
  const dropRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Indica al navegador que se puede soltar en esta área
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    // Aquí puedes obtener los archivos arrastrados
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      console.log("Archivos arrastrados:", files);
      // Procesa los archivos según necesites
    }
  };

  return (
    <div className="mx-6 py-8">
    <div
      ref={dropRef}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`flex flex-col items-center px-8 justify-center  h-64 md:h-72 rounded-xl
        ${
          isDragging
            ? "bg-pink-100 border-pink-600"
            : "bg-pink-50 border-pink-400"
        }
        border-4 border-dashed `}
      style={{ borderRadius: "1rem" }} // Ajusta el radio de las esquinas si lo deseas
    >
      {/* Ícono de nube con flecha */}
      <div className=" text-(--color-pink-600)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-20">
            <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
        </svg>

      </div>

      {/* Texto principal */}
      <div className="text-pink-600 font-bold text-lg md:text-xl mb-1">
        Arrastra y suelta los archivos aqui:
      </div>
      <p className="text-gray-700 text-sm md:text-base">
        Solo arrastra tus archivos para subirlos (.pynb y .docx)
      </p>
    </div>
    </div>
  );
};

export default ArrastrarSoltar;
