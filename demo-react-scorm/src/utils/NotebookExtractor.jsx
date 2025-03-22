import React, { useState, useRef } from "react";

const NotebookExtractor = () => {
  const [extractedCode, setExtractedCode] = useState("");
  const [extractedResults, setExtractedResults] = useState("");
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
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target.result;
          const notebook = JSON.parse(content);

          // Extraer todo el código de las celdas de tipo "code"
          let allCode = "";
          if (notebook.cells && Array.isArray(notebook.cells)) {
            notebook.cells.forEach((cell) => {
              if (cell.cell_type === "code") {
                allCode += cell.source.join("") + "\n\n";
              }
            });
          }

          // Encontrar la última celda de código
          let lastCodeCell = null;
          if (notebook.cells && Array.isArray(notebook.cells)) {
            for (let i = notebook.cells.length - 1; i >= 0; i--) {
              if (notebook.cells[i].cell_type === "code") {
                lastCodeCell = notebook.cells[i];
                break;
              }
            }
          }

          // Extraer los resultados de la última celda, filtrando líneas intermedias
          let finalResults = "";
          if (
            lastCodeCell &&
            lastCodeCell.outputs &&
            Array.isArray(lastCodeCell.outputs)
          ) {
            lastCodeCell.outputs.forEach((out) => {
              if (out.output_type === "stream") {
                let rawText = "";
                if (Array.isArray(out.text)) {
                  rawText = out.text.join("");
                } else {
                  rawText = out.text;
                }
                // Dividir en líneas y filtrar aquellas que contengan las palabras clave
                const lines = rawText.split("\n");
                const filteredLines = lines.filter(
                  (line) =>
                    !line.includes("Epoch") &&
                    !line.includes("Entrada:") &&
                    !line.includes("Salida esperada") &&
                    !line.includes("Error")
                );
                finalResults += filteredLines.join("\n");
              }
            });
          }

          setExtractedCode(allCode);
          setExtractedResults(finalResults);
        } catch (error) {
          console.error("Error procesando el notebook:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <div
        ref={dropRef}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex flex-col items-center px-8 justify-center h-64 md:h-72 rounded-xl border-4 border-dashed ${
          isDragging ? "bg-pink-100 border-pink-600" : "bg-pink-50 border-pink-400"
        }`}
        style={{ borderRadius: "1rem" }}
      >
        <div className="text-(--color-pink-600)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-20"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-pink-600 font-bold text-lg md:text-xl mb-1">
          Arrastra y suelta los archivos aquí:
        </div>
        <p className="text-gray-700 text-sm md:text-base">
          Solo arrastra tus archivos para subirlos (.ipynb)
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Código extraído:</h2>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {extractedCode}
        </pre>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Resultados de la última celda:</h2>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {extractedResults}
        </pre>
      </div>
    </div>
  );
};

export default NotebookExtractor;
