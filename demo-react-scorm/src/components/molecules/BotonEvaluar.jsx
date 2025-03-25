import React, { useState } from "react";
import axios from "axios";

const BotonEvaluar = ({ finalString, NombreActividad }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const handleEvaluar = async () => {
    try {
      const response = await axios.post(
        "https://dam.toolia.site/process-message",
        {
          assistant_id: "asst_OKavmUrZaGiBhTL7PtGbzuLV",
          vector_store_ids: "vs_67e2d7bf060c81919be061ea37c4f724",
          prompt: finalString,
          actividad: NombreActividad,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      console.log("Respuesta de la API:", response.data);
      // Guarda la respuesta en el estado y muestra el pop-up
      setApiResponse(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error("Error en la evaluación:", error);
      // Podrías mostrar algún mensaje de error también
      setApiResponse({ error: "Ocurrió un error al procesar la evaluación" });
      setShowPopup(true);
    }
  };

  return (
    <>
      <button
        onClick={handleEvaluar}
        className="mt-4 px-4 py-2 bg-(--color-pink-600) mx-auto justify-self-center text-white rounded hover:bg-(--color-pink-700)"
      >
        Evaluar Actividad
      </button>

      {/* Renderizado condicional del pop-up */}
      {showPopup && (
        <div className="w-full bg-[] z-100000000">
          {/* Contenedor del pop-up */}
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Respuesta de la API</h2>
            <pre className="p-2 bg-gray-100 rounded mb-4">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
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
