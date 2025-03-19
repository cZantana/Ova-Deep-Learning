import React, { useState } from "react";
import S3_1 from "./s3.1";
const Semana3 = () => {

    return (
        <section className="bg-[var(--color-pink-200)] min-h-screen py-6">
            {/* Contenedor centrado horizontalmente */}
            <div className="max-w-5xl mx-auto px-5 sm:px-12 lg:px-8">
                {/* Card principal con fondo blanco, borde redondeado y sombra */}
                <div className="bg-white rounded-xl shadow-md p-5 md:p-15 ">
                    {/* Barra de navegación */}
                    <S3_1 />
                </div>
            </div>
        </section>
    );
};

export default Semana3;
