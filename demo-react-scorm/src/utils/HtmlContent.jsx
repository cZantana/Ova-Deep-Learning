import React, { useEffect, useState } from "react";

/**
 * Este componente recibe el nombre del archivo HTML (por ejemplo, "S2.1 Funciones de activación.htm")
 * y automáticamente:
 *  - Importa el contenido raw del HTML.
 *  - Extrae la parte "S2.1" para determinar la ruta de assets.
 *  - Importa dinámicamente las imágenes correspondientes.
 *  - Reemplaza en el HTML las rutas antiguas por las URLs de las imágenes.
 */
const HtmlContent = ({ fileName }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Función para extraer el código S#.# del nombre del archivo.
    const extractSNumber = (fileName) => {
      // Busca el patrón: "S" seguido de un número, punto y otro número.
      const regex = /^(S(\d+)\.(\d+))/;
      const match = fileName.match(regex);
      if (match) {
        return {
          code: match[1],  // Ejemplo: "S2.1"
          semana: match[2], // Ejemplo: "2"
          sub: match[3]     // Ejemplo: "1"
        };
      }
      throw new Error("El nombre del archivo no cumple con el patrón esperado.");
    };

    // Extraemos los datos del fileName.
    const { code, semana, sub } = extractSNumber(fileName);

    // Obtenemos la base del nombre (quitando la extensión)
    const baseName = fileName.replace(/\.[^.]+$/, "");
    // La carpeta de imágenes asociada es: baseName + "_archivos"
    const folderName = `${baseName}_archivos`;

    // Importar el HTML de forma dinámica.
    // Nota: El path aquí es relativo al componente, así que asegúrate de tener los archivos en la misma carpeta o ajusta la ruta.
    import(`./${fileName}?raw`)
      .then((module) => {
        const htmlContentRaw = module.default;

        // Importar todas las imágenes de assets de forma amplia.
        // Usamos un glob amplio para importar todas las imágenes de src/assets y luego filtramos.
        const allImages = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,gif}", {
          eager: true
        });
        const imagesMap = {};
        for (const path in allImages) {
          // Filtramos solo las imágenes que estén en la ruta que nos interesa.
          // Se espera que la ruta contenga: /semana{semana}/s{semana}.{sub}
          if (path.includes(`/semana${semana}/s${semana}.${sub}`)) {
            const file = path.split("/").pop();
            imagesMap[file] = allImages[path].default || allImages[path];
          }
        }

        // Reemplazar las rutas en el HTML.
        // Se buscan todas las ocurrencias de src="..._archivos/archivo"
        const updatedHtml = htmlContentRaw.replace(
          /src="([^"]+_archivos)\/([^"]+)"/g,
          (match, folderPart, imageFile) => {
            // Decodificamos la carpeta (por ejemplo: "S2.1%20Funciones%20de%20activación_archivos")
            const decodedFolder = decodeURIComponent(folderPart).replace(/&amp;/g, "&");
            if (decodedFolder === folderName && imagesMap[imageFile]) {
              return `src="${imagesMap[imageFile]}"`;
            }
            return match;
          }
        );
        setContent(updatedHtml);
      })
      .catch((error) => {
        console.error("Error al importar el HTML:", error);
      });
  }, [fileName]);

  return (
    <div
      className="prose mx-auto p-4 break-words"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlContent;
