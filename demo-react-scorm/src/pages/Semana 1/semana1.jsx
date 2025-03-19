import React, { useState } from "react";
import S1_1 from "./S1.1";
import S1_2 from "./s1.2";
const Semana1 = () => {

    return (
        <section className="bg-[var(--color-pink-200)] min-h-screen py-6">
            {/* Contenedor centrado horizontalmente */}
            <div className="max-w-5xl mx-auto px-5 sm:px-12 lg:px-8">
                {/* Card principal con fondo blanco, borde redondeado y sombra */}
                <div className="bg-white rounded-xl shadow-md p-5 md:p-15 ">
                    {/* Barra de navegación */}
                    <S1_1 />
                </div>
                {/* Card principal con fondo blanco, borde redondeado y sombra */}
                <div className="bg-white rounded-xl shadow-md p-5 md:p-15 ">
                    {/* Barra de navegación */}
                    <S1_2 />
                </div>
            </div>
        </section>
    );
};

export default Semana1;
