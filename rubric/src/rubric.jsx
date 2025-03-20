import React, { useState, useCallback } from "react";
import axios from "axios";

const FileDragger = ({ onFilesSelected }) => {
  const handleFileChange = (e) => {
    onFilesSelected(e.target.files);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        style={{ display: "block", marginBottom: "8px" }}
      />
      <p>Selecciona archivos para cargarlos.</p>
    </div>
  );
};

const DragAndDropForm = () => {
  const [files, setFiles] = useState([]);
  const [vectorStoreName, setVectorStoreName] = useState("");
  const [assistantModel, setAssistantModel] = useState("gpt-4o mini");
  const [assistantName, setAssistantName] = useState("");
  const [assistantInstructions, setAssistantInstructions] = useState("");
  const [assistantTemperature, setAssistantTemperature] = useState("");
  const [assistantTopK, setAssistantTopK] = useState("");

  const handleFilesSelected = useCallback((selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...fileArray]);
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // Campos de texto
      formData.append("vector_store_name", vectorStoreName);
      formData.append("assistant_model", assistantModel);
      formData.append("assistant_name", assistantName);
      formData.append("assistant_instructions", assistantInstructions);
      formData.append("assistant_temperature", assistantTemperature);
      formData.append("assistant_top_k", assistantTopK);

      // Archivos
      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
        "https://iam.toole.site/breeze/assistant_with_vector",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Respuesta:", response.data);
      alert("Solicitud enviada con éxito.");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      alert("Error al enviar la solicitud.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h2>Formulario de carga de archivos con Axios</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Vector Store Name:</label>
        <input
          type="text"
          value={vectorStoreName}
          onChange={(e) => setVectorStoreName(e.target.value)}
          style={{ width: "100%", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Assistant Model:</label>
        <input
          type="text"
          value={assistantModel}
          onChange={(e) => setAssistantModel(e.target.value)}
          style={{ width: "100%", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Assistant Name:</label>
        <input
          type="text"
          value={assistantName}
          onChange={(e) => setAssistantName(e.target.value)}
          style={{ width: "100%", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Assistant Instructions:</label>
        <textarea
          value={assistantInstructions}
          onChange={(e) => setAssistantInstructions(e.target.value)}
          rows={3}
          style={{ width: "100%", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Assistant Temperature:</label>
        <input
          type="number"
          value={assistantTemperature}
          onChange={(e) => setAssistantTemperature(e.target.value)}
          style={{ width: "100%", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Assistant Top K:</label>
        <input
          type="number"
          value={assistantTopK}
          onChange={(e) => setAssistantTopK(e.target.value)}
          style={{ width: "100%", marginTop: "4px" }}
        />
      </div>

      <FileDragger onFilesSelected={handleFilesSelected} />

      {files.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Archivos seleccionados:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default DragAndDropForm;
