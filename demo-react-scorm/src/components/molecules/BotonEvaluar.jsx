// BotonEvaluar.jsx
import React from "react";
import axios from "axios";

const BotonEvaluar = ({ finalString, NombreActividad }) => {
    const handleEvaluar = async () => {
            try {
                const response = await axios.post("https://dam.toolia.site/process-message",
                    {
                    "assistant_id": "asst_OKavmUrZaGiBhTL7PtGbzuLV",
                    "vector_store_ids": "vs_67e2d7bf060c81919be061ea37c4f724",
                    "prompt": {finalString}
                    },
                    {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error("Error al enviar la solicitud a la API");
                }

                const data = await response.json();
                console.log("Respuesta de la API:", data);
                // Aquí puedes manejar la respuesta, por ejemplo, mostrando un mensaje o actualizando un estado.
            } catch (error) {
                console.error("Error en la evaluación:", error);
            }
    };

    return (
        <button
            onClick={handleEvaluar}
            className="mt-4 px-4 py-2 bg-(--color-pink-600) mx-auto justify-self-center text-white rounded hover:bg-(--color-pink-700)"
        >
            Evaluar Actividad
        </button>
    );
};

export default BotonEvaluar;
