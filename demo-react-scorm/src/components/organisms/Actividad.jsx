// src/components/Actividad.jsx
import React from "react";

const Actividad = ({
    activityCode,
    activityTitle,
    activitySubtitle,
    metaText,
    imageUrl,
}) => {
    return (
        <div className="mx-6 mb-4">
            <div className="w-full max-w-5xl mx-auto my-8 rounded-md overflow-hidden shadow-md">
                {/* Panel superior: dos columnas en fila en md+ y en columna en mobile */}
                <div className="flex flex-col md:flex-row">
                    {/* Columna izquierda: fondo oscuro con información */}
                    <div className="bg-[var(--color-info)] text-white p-25 md:w-3/5">
                        {activityCode && (
                            <p className="text-sm w-auto font-bold uppercase tracking-wide">
                                {activityCode}
                            </p>
                        )}
                        {activityTitle && (
                            <h2 className="text-2xl font-bold mt-2 mb-2 ">
                                {activityTitle}
                            </h2>
                        )}
                    </div>
                    {/* Columna derecha: fondo gris con imagen o ícono por defecto */}
                    <div className="bg-[var(--color-neutral-200)] flex items-center justify-center p-6 md:w-2/5">
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="Imagen de la actividad"
                                className="max-h-32 object-contain"
                            />
                        ) : (
                            <div className="h-20 w-20 bg-[var(--color-neutral-400)] flex items-center justify-center rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                {activitySubtitle && (
                    <div className="text-xl font-bold mb-4 text-center text-(--color-blue-700)">
                        {activitySubtitle}
                    </div>
                )}
                {metaText && (
                    <p className="text-base leading-relaxed text-center">
                        {metaText}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Actividad;
