import React, { useState, useCallback } from "react";
import axios from "axios";

// Componente para seleccionar archivos
const FileDragger = ({ onFilesSelected }) => {
  const handleFileChange = (e) => {
    onFilesSelected(e.target.files);
  };

  return (
    // Envolvemos en un div con clases Tailwind
    <div className="mb-4">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-700 
                   file:mr-4 file:py-2 file:px-4
                   file:rounded file:border-0
                   file:text-sm file:font-semibold
                   file:bg-gray-100
                   hover:file:bg-gray-200
                   mb-2"
      />
      <p className="text-gray-600 text-sm">Selecciona archivos para cargarlos.</p>
    </div>
  );
};

// Componente principal
const DragAndDropForm = () => {
  const [files, setFiles] = useState([]);
  const [vectorStoreName, setVectorStoreName] = useState("");
  const [assistantModel, setAssistantModel] = useState("gpt-4o");
  const [assistantName, setAssistantName] = useState("");
  const [assistantInstructions, setAssistantInstructions] = useState("");
  const [assistantTemperature, setAssistantTemperature] = useState("0.01");
  const [assistantTopP, setAssistantTopP] = useState("1.0");
  const [actividad, setActividad] = useState(""); // Nuevo parámetro

  const handleFilesSelected = useCallback((selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...fileArray]);
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      // Campos que ya teníamos
      formData.append("vector_store_name", vectorStoreName);
      formData.append("assistant_model", assistantModel);
      formData.append("assistant_instructions", assistantInstructions);
      formData.append("assistant_name", assistantName);
      formData.append("assistant_temperature", assistantTemperature);
      formData.append("assistant_top_p", assistantTopP);

      // Archivos
      files.forEach((file) => {
        formData.append("files", file);
      });

      // Llamada al endpoint
      const response = await axios.post(
        "http://127.0.0.1:8000/create_assistant_with_vector",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Añadimos la actividad a la respuesta
      const finalResponse = { ...response.data, actividad };
      console.log("Respuesta final:", finalResponse);

      alert("Solicitud enviada con éxito.");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      alert("Error al enviar la solicitud.");
    }
  };

  return (
    // Contenedor principal con estilos Tailwind
    <div className=" min-h-screen bg-[#F2F2F2] flex flex-col justify-center py-6 sm:py-12">
      <div  className="w-[80vw] min-w-0 sm:w-[40vw] sm:min-w-[750px] mx-auto bg-white p-8 sm:p-16 rounded-[2%] shadow-md">
        <h2 className="text-[#424AB5] text-center font-bold mb-4 text-3xl [font-feature-settings:'liga'_off,'clig'_off]">
          Crea tu asistente inteligente
          <br />
          para evaluar tus actividades
        </h2>
        <h1 className="hidden sm:block px-6 text-center text-[#687079] font-sans text-1xl font-regular [font-feature-settings:'liga'_off,'clig'_off]">
        ¡Bienvenido! A continuación, deberás configurar un <strong>asistente inteligente</strong> y ajustar los <strong>parámetros más importantes</strong> para personalizarlo a tu gusto. 
        Estas instrucciones te guiarán en el proceso de cargar la rúbrica de tu actividad
        </h1>

        {/* Vector Store Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Vector Store Name:
          </label>
          <input
            type="text"
            value={vectorStoreName}
            onChange={(e) => setVectorStoreName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Assistant Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Assistant Name:
          </label>
          <input
            type="text"
            value={assistantName}
            onChange={(e) => setAssistantName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Assistant Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Assistant Instructions:
          </label>
          <textarea
            value={assistantInstructions}
            onChange={(e) => setAssistantInstructions(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Assistant Temperature */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Assistant Temperature:
          </label>
          <input
            type="number"
            value={assistantTemperature}
            onChange={(e) => setAssistantTemperature(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Assistant Top P */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Assistant Top P:
          </label>
          <input
            type="number"
            value={assistantTopP}
            onChange={(e) => setAssistantTopP(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Actividad */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Actividad:
          </label>
          <input
            type="text"
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Componente FileDragger */}
        <FileDragger onFilesSelected={handleFilesSelected} />

        {/* Listado de archivos si existen */}
        {files.length > 0 && (
          <div className="mt-2">
            <h4 className="text-gray-700 font-semibold mb-1">Archivos seleccionados:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Botón de envío */}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded
                     font-bold hover:bg-pink-700 transition-colors"
        >
          Enviar Solicitud
        </button>
      </div>
    </div>
  );
};

export default DragAndDropForm;
