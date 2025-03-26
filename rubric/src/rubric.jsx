import React, { useState, useCallback } from "react";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";

// Componente para seleccionar archivos
const FileDragger = ({ onFilesSelected }) => {
  const handleFileChange = (e) => {
    onFilesSelected(e.target.files);
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-white
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-[5px] file:border-0
                   file:text-sm file:font-semibold
                   file:bg-[var(--Secundario-4,#373D92)]
                   hover:file:bg-[#424AB5] hover:file:text-white
                   mb-2"
      />
    </div>
  );
};
 
const activityOptions = [
  { value: "S2.5.1", label: "S2.5.1" },
  { value: "S3.5.1", label: "S3.5.1" },
  { value: "S4.5.1", label: "S4.5.1" },
  { value: "S4.6.1", label: "S4.6.1" },
  { value: "S5.3.2", label: "S5.3.2" },
  { value: "S6.3.1", label: "S6.3.1" },
  { value: "S7.3.1", label: "S7.3.1" },
  { value: "S8.2.1", label: "S8.2.1" },
  { value: "S9.3.1", label: "S9.3.1" },
  { value: "S10.2.1", label: "S10.2.1" },
  { value: "S11.3.1", label: "S11.3.1" },
  { value: "S12.3.1", label: "S12.3.1" },
  { value: "S13.3.1", label: "S13.3.1" },
  { value: "S14.2.1", label: "S14.2.1" },
  { value: "S14.4.1", label: "S14.4.1" },
  { value: "S15.4.1", label: "S15.4.1" },
  { value: "S15.4.1", label: "S15.4.1" },
];

// Componente principal
const DragAndDropForm = () => {
  const [files, setFiles] = useState([]);
  const [vectorStoreName, setVectorStoreName] = useState("");
  const [assistantModel, setAssistantModel] = useState("gpt-4o");
  const [assistantName, setAssistantName] = useState("");
  const [assistantInstructions, setAssistantInstructions] = useState(`
    Eres un asistente experto en la evaluación de proyectos de código relacionado con el tema de DeepLearning. Tu función es la siguiente:

    1. **Leer** cuidadosamente el código que se te presentará y el resultado de su ejecución

    2. **Revisar** la rúbrica que tienes cargada en tu almacén, Observa que la rúbrica puede contener uno o varios criterios, y cada uno tiene diferentes rangos de calificación en el intervalo 0.0 a 5.0 .  

    3. **Evaluar** el código de acuerdo con cada uno de los criterios de la rúbrica, si consideras que el código no aplica o no cumple con el criterio, debes asignar 0.0 como calificación parcial en dicho criterio.
Igualmente, todos los criterios deben quedar escritos y evaluados en la retroalimentación.  
       - Para todos los criterios de la rúbrica:
         - Explica de manera clara y detallada si el código cumple, excede o no cumple los requisitos esperados en ese criterio.
         - Indica la calificación parcial (entre 0.0 y 5.0) correspondiente a ese criterio, siguiendo el esquema de la rúbrica.

    4. **Calcular** la calificación final.  
       - Una vez hayas asignado la calificación parcial para **todos los criterios**, promedia esas calificaciones para obtener la calificación final, también en el rango de 0.0 a 5.0.  
       - Muestra el resultado con la frase:  
         **“Su calificacion final es: [X]”**  
         donde **[X]** es la nota final que consideres adecuada.  

    5. **IMPORTANTE**: **Formato de respuesta esperado**:
   
    \`\`\`
    Retroalimentación para el criterio 1:
     - [Observaciones : Justificación detallada del por que de la calificaciòn del criterio]
    **Su calificacion parcial es: [X] [CALIFICACIÓN ENTRE 0.0 Y 5.0]**
    
    Retroalimentación para el criterio 2:
     - [Observaciones / Justificación detallada]
    **Su calificacion parcial es: [X] [CALIFICACIÓN ENTRE 0.0 Y 5.0]**
    
    [...]
    
    **Su calificacion final es: [CALIFICACIÓN ENTRE 0.0 Y 5.0]**
    \`\`\`
    
    > Asegúrate de **incluir** la retroalimentación para **cada uno de todos los criterios** que tengas disponibles en la rúbrica , usando la misma estructura para todos los criterios.  
    > Finalmente, no olvides **colocar** la frase  
    > **Su calificacion final es: [X] [CALIFICACIÓN ENTRE 0.0 Y 5.0]** al terminar toda la evaluación.
  `);
  const [assistantTemperature, setAssistantTemperature] = useState("0.01");
  const [assistantTopP, setAssistantTopP] = useState("1.0");
  const [actividad, setActividad] = useState("");

  // Estados para manejar el popup
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleFilesSelected = useCallback((selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...fileArray]);
  }, []);

  // Eliminar un archivo de la lista
  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("vector_store_name", vectorStoreName);
      formData.append("assistant_model", assistantModel);
      formData.append("assistant_instructions", assistantInstructions);
      formData.append("assistant_name", assistantName);
      formData.append("assistant_temperature", assistantTemperature);
      formData.append("assistant_top_p", assistantTopP);

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
        "https://dam.toolia.site/create_assistant_with_vector",
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

      // Actualiza el mensaje y muestra el popup
      setPopupMessage("Asistente creado con exito");
      setShowPopup(true);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Actualiza el mensaje de error y muestra el popup
      setPopupMessage("No se pudo crear el asistente, contactese con el provedor");
      setShowPopup(true);
    }
  };

  return (
    <div className="h-screen bg-[#F2F2F2] flex flex-col mt-8 items-center">
      <div className="w-[30vw] min-w-[350px] sm:min-w-[500px] bg-white p-8  rounded-[2%] shadow-md">
        <h2 className="text-[#424AB5] text-center font-bold mb-4 text-3xl [font-feature-settings:'liga'_off,'clig'_off]">
          Crea tu asistente inteligente
          <br />
          para evaluar tus actividades
        </h2>
        <h1 className="hidden sm:block px-6 text-center text-[#687079] font-sans text-1xl font-regular [font-feature-settings:'liga'_off,'clig'_off]">
          ¡Bienvenido! A continuación, deberás configurar un <strong>asistente inteligente</strong> y ajustar los <strong>parámetros más importantes</strong> para personalizarlo a tu gusto.
        </h1>

        <div className="mt-8 sm:px-8">
          {/* Actividad */}
          <div className="mb-8">
            <label className="block text-[#687079] font-regular mb-1">
              Nombre de la actividad
            </label>
            <select
              value={actividad}
              onChange={(e) => setActividad(e.target.value)}
              className="bg-[#F7F7FF] w-full rounded px-3 py-2
                         focus:outline-none focus:border-indigo-500 
                         placeholder:text-[13px] placeholder:text-[#B6B7CD]"
            >
              {activityOptions.map((option) => (
                <option 
                key={option.value} 
                value={option.value}
                className="bg-white h-6 py-2 px-4"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-[#687079] font-regular mb-1">
              Carga tu rúbrica (PDF, DOCX)
            </label>
            <FileDragger onFilesSelected={handleFilesSelected} />

            {files.length > 0 && (
              <div className="mt-2 max-h-[100px] overflow-y-auto">
                <h4 className="text-gray-700 font-semibold text-[13px]">
                  Archivos seleccionados:
                </h4>
                <ul className="text-[13px] list-disc list-inside text-sm text-gray-600 space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span>{file.name}</span>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="ml-4 text-[#FF00B1] font-semibold hover:underline"
                      >
                        <MdOutlineCancel style={{ fontSize: "25px" }} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Vector Store Name */}
          <div className="mb-8">
            <label className="block text-[#687079] font-regular mb-1">
              Nombra tu almacén para tu rúbrica
            </label>
            <input
              type="text"
              placeholder="Puedes colocar el mismo nombre de tu actividad..."
              value={vectorStoreName}
              onChange={(e) => setVectorStoreName(e.target.value)}
              className="bg-[#F7F7FF] w-full rounded px-3 py-2
                         focus:outline-none focus:border-indigo-500 placeholder:text-[13px] placeholder:text-[#B6B7CD]"
            />
          </div>

          {/* Assistant Name */}
          <div className="mb-1">
            <label className="block text-[#687079] font-regular mb-1">
              Nombra tu asistente
            </label>
            <input
              type="text"
              placeholder="Coloca un nombre fácil de recordar para tu asistente..."
              value={assistantName}
              onChange={(e) => setAssistantName(e.target.value)}
              className="bg-[#F7F7FF] w-full rounded px-3 py-2
                         focus:outline-none focus:border-indigo-500 placeholder:text-[13px] placeholder:text-[#B6B7CD]"
            />
          </div>

          {/* Botón de envío */}
          <div className="mt-8 sm:px-8 w-full flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-2/4 mt-4 px-4 py-2 bg-[var(--color-primary)] mx-auto justify-self-center text-white rounded hover:bg-[var(--color-pink-400)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Crear asistente
            </button>
          </div>
        </div>
      </div>

      {/* POPUP (Modal) */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-sm text-center">
            <p className="mb-4 text-lg font-semibold">{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#424AB5] text-white px-4 py-2 rounded hover:bg-[#30378e]"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragAndDropForm;
