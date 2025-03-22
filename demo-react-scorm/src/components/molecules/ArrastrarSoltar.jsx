import React, { useState, useRef } from "react";

const TEXT_THRESHOLD = 1000;

const ArrastrarSoltar = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [extractedCode, setExtractedCode] = useState("");
  const [extractedOutputs, setExtractedOutputs] = useState([]);
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
    // Indica al navegador que se puede soltar en esta área
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

          // Extraer outputs de todas las celdas de tipo "code"
          let outputs = [];
          if (notebook.cells && Array.isArray(notebook.cells)) {
            notebook.cells.forEach((cell) => {
              if (
                cell.cell_type === "code" &&
                cell.outputs &&
                Array.isArray(cell.outputs)
              ) {
                cell.outputs.forEach((out) => {
                  // Para salidas de texto (stream)
                  if (out.output_type === "stream") {
                    let rawText = Array.isArray(out.text)
                      ? out.text.join("")
                      : out.text;
                    // Solo incluir si el texto es menor que el umbral
                    if (rawText.length <= TEXT_THRESHOLD) {
                      outputs.push({ type: "text", content: rawText });
                    }
                  }
                  // Para salidas que muestran imágenes o datos formateados
                  if (
                    out.output_type === "display_data" ||
                    out.output_type === "execute_result"
                  ) {
                    // Si existe imagen en formato png, se muestra siempre
                    if (out.data && out.data["image/png"]) {
                      outputs.push({
                        type: "image",
                        content: out.data["image/png"],
                      });
                    }
                    // Si existe texto en "text/plain", también se puede incluir
                    else if (out.data && out.data["text/plain"]) {
                      const plainText = out.data["text/plain"];
                      if (plainText.length <= TEXT_THRESHOLD) {
                        outputs.push({
                          type: "text",
                          content: plainText,
                        });
                      }
                    }
                  }
                  // Para errores (se incluyen siempre)
                  if (out.output_type === "error") {
                    let errorMsg =
                      (out.ename || "") +
                      ": " +
                      (out.evalue || "") +
                      "\n" +
                      (out.traceback ? out.traceback.join("\n") : "");
                    outputs.push({ type: "text", content: errorMsg });
                  }
                });
              }
            });
          }

          setExtractedCode(allCode);
          setExtractedOutputs(outputs);

          // Crear el string final concatenando el código y los resultados
          const finalString = createFinalString(allCode, outputs);
          console.log(finalString);
          // Aquí podrías enviarlo a la IA o guardarlo en un estado adicional si lo necesitas.
        } catch (error) {
          console.error("Error procesando el notebook:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  // Función que concatena el código y los outputs en un único string
  const createFinalString = (code, outputs) => {
    let concatenatedOutput = "";
    outputs.forEach((out) => {
      if (out.type === "text") {
        concatenatedOutput += out.content + "\n";
      } else if (out.type === "image") {
        concatenatedOutput += "[IMAGE]" + out.content + "[/IMAGE]\n";
      }
    });
    return `[CODIGO]${code}[/CODIGO][RESULTADOS]${concatenatedOutput}[/RESULTADOS]`;
  };

  return (
    <div className="mx-6 py-8">
      <div
        ref={dropRef}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex flex-col items-center px-8 justify-center  h-64 md:h-72 rounded-xl
          ${
            isDragging
              ? "bg-pink-100 border-pink-600"
              : "bg-pink-50 border-pink-400"
          }
          border-4 border-dashed `}
        style={{ borderRadius: "1rem" }} // Ajusta el radio de las esquinas si lo deseas
      >
        {/* Ícono de nube con flecha */}
        <div className=" text-(--color-pink-600)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-20"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        {/* Texto principal */}
        <div className="text-pink-600 font-bold text-lg md:text-xl mb-1">
          Arrastra y suelta los archivos aqui:
        </div>
        <p className="text-gray-700 text-sm md:text-base">
          Solo arrastra tus archivos para subirlos (.pynb y .docx)
        </p>
      </div>
      <div className="mt-8">
        <div className="text-[var(--color-info)] text-lg font-bold mb-2 text-left">
          Código extraído:
        </div>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap break-words">
          {extractedCode}
        </pre>
      </div>
      <div className="mt-8">
        <div className="text-[var(--color-info)] text-lg font-bold mb-2 text-left">
          Resultados de la última celda:
        </div>
        {extractedOutputs.map((output, index) => {
          if (output.type === "text") {
            return (
              <pre
                key={index}
                className="bg-gray-100 p-4 rounded whitespace-pre-wrap my-2 break-words"
              >
                {output.content}
              </pre>
            );
          }
          if (output.type === "image") {
            return (
              <img
                key={index}
                src={`data:image/png;base64,${output.content}`}
                alt="Output image"
                className="my-2 max-w-full"
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ArrastrarSoltar;
