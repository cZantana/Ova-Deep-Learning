import React, { useState } from "react";
import axios from "axios";
import MarkdownRenderer from "./MarkdownRenderer";

const BotonEvaluar = ({ finalString, NombreActividad }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEvaluar = async () => {
    // Al presionar el botón, establecemos isLoading en true
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://dam.toolia.site/process-message",
        {
          assistant_id: "asst_XdACCr9pixWqpypY9YWVaCjT",
          vector_store_ids: "vs_67e30be011808191b6bf3a83bf4fbabf",
          prompt: finalString // Aquí se envía el string formateado
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Respuesta de la API:", response.data);
      setApiResponse(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error("Error en la evaluación:", error);
      setApiResponse({ error: "Ocurrió un error al procesar la evaluación" });
      setShowPopup(true);
    } finally {
      // Al terminar la petición (éxito o error), restablecemos isLoading a false
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleEvaluar}
        disabled={isLoading}
        className="mt-4 px-4 py-2 bg-[var(--color-primary)] mx-auto justify-self-center text-white rounded hover:bg-[var(--color-pink-400)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Evaluando..." : "Evaluar Actividad"}
      </button>

      {/* Renderizado condicional del pop-up */}
      {showPopup && (
        <div className="mt-8 w-full z-100000000">
          {/* Contenedor del pop-up */}
          <div className="bg-white p-6 shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]">
            <div className="text-[var(--color-info)] text-lg font-bold mb-2 text-left">
              Retroalimentación
            </div>
            <div className="p-2 bg-gray-100 rounded mb-4 break-words overflow-x-auto">
              <MarkdownRenderer markdownText={apiResponse?.message} />
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BotonEvaluar;
