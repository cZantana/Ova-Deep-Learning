// utils/processHtmlContent.js
// Define un mapa con los globs para cada carpeta estática.
const imageGlobs = {
    "s1.1": import.meta.glob(
      "../assets/semana1/s1.1/*",
      { eager: true, query: '?url', import: 'default' }
    ),
    "s1.2": import.meta.glob(
        "../assets/semana1/s1.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s2.1": import.meta.glob(
        "../assets/semana2/s2.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s2.2": import.meta.glob(
        "../assets/semana2/s2.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s2.3": import.meta.glob(
        "../assets/semana2/s2.3/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s2.4": import.meta.glob(
        "../assets/semana2/s2.4/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s3.1": import.meta.glob(
        "../assets/semana3/s3.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s3.2": import.meta.glob(
        "../assets/semana3/s3.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s3.3": import.meta.glob(
        "../assets/semana3/s3.3/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s3.4": import.meta.glob(
        "../assets/semana3/s3.4/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s4.1": import.meta.glob(
        "../assets/semana4/s4.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s4.2": import.meta.glob(
        "../assets/semana4/s4.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s4.3": import.meta.glob(
        "../assets/semana4/s4.3/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s4.4": import.meta.glob(
        "../assets/semana4/s4.4/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s5.1": import.meta.glob(
        "../assets/semana5/s5.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s5.2": import.meta.glob(
        "../assets/semana5/s5.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s6.1": import.meta.glob(
        "../assets/semana6/s6.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s6.2": import.meta.glob(
        "../assets/semana6/s6.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s7.1": import.meta.glob(
        "../assets/semana7/s7.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s7.2": import.meta.glob(
        "../assets/semana7/s7.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s8.1": import.meta.glob(
        "../assets/semana8/s8.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s8.2": import.meta.glob(
        "../assets/semana8/s8.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s9.1": import.meta.glob(
        "../assets/semana9/s9.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s9.2": import.meta.glob(
        "../assets/semana9/s9.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s10.1": import.meta.glob(
        "../assets/semana10/s10.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s10.1.1": import.meta.glob(
        "../assets/semana10/s10.1.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s10.1.2": import.meta.glob(
        "../assets/semana10/s10.1.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s11.1": import.meta.glob(
        "../assets/semana11/s11.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s11.2": import.meta.glob(
        "../assets/semana11/s11.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s11.2.1": import.meta.glob(
        "../assets/semana11/s11.2.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s12.1": import.meta.glob(
        "../assets/semana12/s12.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s12.2": import.meta.glob(
        "../assets/semana12/s12.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s12.2.1": import.meta.glob(
        "../assets/semana12/s12.2.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s13.1": import.meta.glob(
        "../assets/semana13/s13.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s13.2": import.meta.glob(
        "../assets/semana13/s13.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s13.2.1": import.meta.glob(
        "../assets/semana13/s13.2.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s14.1": import.meta.glob(
        "../assets/semana14/s14.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s14.1.1": import.meta.glob(
        "../assets/semana14/s14.1.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s14.3": import.meta.glob(
        "../assets/semana14/s14.3/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s15.1": import.meta.glob(
        "../assets/semana15/s15.1/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s15.2": import.meta.glob(
        "../assets/semana15/s15.2/*",
        { eager: true, query: '?url', import: 'default' }
    ),
    "s15.3": import.meta.glob(
        "../assets/semana15/s15.3/*",
        { eager: true, query: '?url', import: 'default' }
    )
    // Puedes agregar más entradas según necesites.
  };
  
  export function processHtmlContent(rawHtml, folderKey, omitList = []) {
    // Verifica que exista el key en el objeto.
    // console.log(folderKey);
    
    const images = imageGlobs[folderKey];
    if (!images) {
      throw new Error(`La carpeta para la key "${folderKey}" no existe en el mapeo.`);
    }
    // console.log(images);
  
    // Reemplaza las rutas de las imágenes en el HTML
    let processedHtml = rawHtml.replace(
      /src="([^"]+_archivos)\/([^"]+)"/g,
      (match, p1, p2) => {
        // p2 es el nombre de la imagen (por ejemplo, "image002.jpg")
        const imagePath = Object.keys(images).find(path => path.endsWith(p2));
        // console.log(p2);
        // console.log(imagePath);

        if (imagePath) {
          
          const originalUrl = images[imagePath]; // Ejemplo: "/src/assets/semana1/s1.2/image002.jpg"
          // Se asume que el nombre sigue el patrón "image" + dígitos + extensión
          const regex = /(image)(\d+)(\.\w+)$/i;
          const matchImage = p2.match(regex);
          if (matchImage) {
            const prefix = matchImage[1];   // "image"
            const numStr = matchImage[2];     // "002"
            
            // Si la imagen base (por ejemplo, "image002") está en la lista omitida, no se transforma.
            if (omitList.includes(`${prefix}${numStr}`)) {
              return `src="${originalUrl}"`;
            }
            
            // Decrementa el número en 1
            const newNum = parseInt(numStr, 10) - 1;
            // Rellena con ceros para mantener la longitud original
            const newNumStr = newNum.toString().padStart(numStr.length, '0');
            // Fuerza la extensión a .png
            const newFileName = `${prefix}${newNumStr}.png`;
            // Reemplaza el nombre del archivo en la URL original
            const newUrl = originalUrl.replace(p2, newFileName);
            // console.log(`src="${newUrl}"`);
            
            return `src="${newUrl}"`;
          } else {
            // Si el nombre no sigue el patrón esperado, retorna la URL original
            // console.log(`src="${originalUrl}"`);
            
            return `src="${originalUrl}"`;
          }
        } else {
          // console.log(match);
          
          return match;
        }
      }
    );

      // Reemplazo de enlaces de YouTube
  processedHtml = processedHtml.replace(
    /<a[^>]+href="https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^"]+)"[^>]*>[\s\S]*?<\/a>/gi,
    (match, videoId) => {
      return `
<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 15px">
  <iframe
    src="https://www.youtube.com/embed/${videoId}"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;">
  </iframe>
</div>`;
    }
  );
  
    // Bloque CSS a insertar
    const cssToInsert = `
  span {
    background: transparent !important;
    font-family: system-ui;
  }
  img {
    object-fit: contain;
    max-height: fit-content;
    display: ruby;
  }
  span{
    max-width: 100%;
  }
  span:has(img){
    top: 0 !important;
    max-height: fit-content;
    text-align: center;            
  }
  table{
    max-width: 100%;
    width: 100%;
  }
  td{
    word-break: break-word;
  }
  td:has(img) {
    text-align: center;
  }
  `;
  
    // Inserta el bloque CSS justo antes de la etiqueta de cierre </style>
    processedHtml = processedHtml.replace(/(-->\s*)(<\/style>)/, `$1${cssToInsert}$2`);
  
    // Retorna el objeto con dangerouslySetInnerHTML para usarlo directamente en el render
    return { dangerouslySetInnerHTML: { __html: processedHtml } };
  }
  