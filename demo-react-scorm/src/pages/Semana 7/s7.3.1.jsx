// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S7.3.1",
    activityTitle: "Actividad 7. Implementación de la Convolución de Matrices y su Aplicación en Imágenes con Padding y Stride en Google Colab",
    activitySubtitle: "Implementación de la operación de convolución de matrices con Padding y Stride",
    metaText: `En esta actividad, los estudiantes trabajarán en un notebook de Google Colab para implementar la operación de convolución de matrices y su aplicación en imágenes. También deberán aplicar y explicar los conceptos de Padding y Stride en el proceso de convolución.`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };
  
  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación",
      description: `Este criterio evalúa la correcta implementación de la operación de convolución de matrices desde cero, utilizando operaciones matriciales básicas. Los estudiantes deben demostrar que comprenden cómo funciona la convolución, programándola sin el uso de librerías especializadas. La implementación debe incluir el desplazamiento del kernel sobre la matriz de entrada y la aplicación de la operación de convolución en cada posición. Se espera que los estudiantes implementen la convolución de manera eficiente y que manejen adecuadamente las dimensiones de la salida.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La operación de convolución está implementada manualmente de manera correcta. Los cálculos son precisos y el código es eficiente, siguiendo buenas prácticas de programación."},
        {rating: "(3 - 4) : Bueno", description: "La convolución está bien implementada, aunque podría mejorarse en términos de eficiencia o claridad del código."},
        {rating: "(2 - 3) : Suficiente", description: "La convolución está parcialmente implementada, con algunos errores que afectan los resultados, pero se sigue la lógica básica."},
        {rating: "(1 - 2) : Deficiente", description: "La convolución es incorrecta o está incompleta, afectando gravemente los resultados."},
        {rating: "(0 - 1) : Insuficiente", description: "No se ha implementado correctamente la operación de convolución."}
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación",
      description: `Este criterio evalúa cómo los estudiantes aplican la convolución en imágenes. Se espera que utilicen imágenes en formato matricial (por ejemplo, en escala de grises o RGB) y que implementen la convolución con diferentes filtros (kernels) para realizar tareas como detección de bordes, suavizado o realce de detalles. Los estudiantes deben demostrar que entienden cómo los filtros afectan las características de la imagen y que implementan la convolución correctamente en el contexto de procesamiento de imágenes.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La convolución se aplica correctamente sobre una imagen, mostrando un resultado claro. El código es eficiente y se presentan los cambios en la imagen original."},
        {rating: "(3 - 4) : Bueno", description: "La convolución se aplica correctamente, pero la presentación o explicación de los resultados podría ser más clara o detallada."},
        {rating: "(2 - 3) : Suficiente", description: "La convolución se aplica a una imagen, pero con problemas en la presentación o explicación de los resultados."},
        {rating: "(1 - 2) : Deficiente", description: "La aplicación de la convolución en imágenes es incorrecta o los resultados no son válidos."},
        {rating: "(0 - 1) : Insuficiente", description: "No se aplicó correctamente la convolución en ninguna imagen."}
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación",
      description: `Este criterio evalúa la correcta implementación de padding y stride en la operación de convolución. Los estudiantes deben demostrar que entienden cómo funcionan el padding y el stride, y cómo estos parámetros afectan el tamaño de la salida. Se espera que implementen padding para ajustar el tamaño de la salida y expliquen cómo el stride controla el desplazamiento del filtro sobre la imagen o matriz de entrada. Además, deben explicar cómo sus decisiones sobre padding y stride afectan los resultados de la convolución.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Los conceptos de Padding y Stride están bien implementados y explicados. Se muestra claramente cómo afectan el tamaño de salida y los resultados de la convolución."},
        {rating: "(3 - 4) : Bueno", description: "Padding y Stride están implementados correctamente, pero la explicación podría ser más clara o detallada."},
        {rating: "(2 - 3) : Suficiente", description: "Padding y Stride están parcialmente implementados, con una explicación básica o incompleta."},
        {rating: "(1 - 2) : Deficiente", description: "La implementación de Padding y Stride es incorrecta o la explicación es confusa."},
        {rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente Padding ni Stride, o no se explicó adecuadamente."}
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación",
      description: `En este criterio, se evalúa la organización y claridad del código. Los estudiantes deben presentar un código bien estructurado, con comentarios explicativos que detallen cada paso del proceso, desde la implementación de la convolución hasta la configuración del padding y stride. La organización del código debe permitir que cualquier lector comprenda cómo se aplican las operaciones de convolución en imágenes y cómo se implementan las diferentes configuraciones de padding y stride.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso. Está organizado de manera lógica y es fácil de seguir."},
        {rating: "(3 - 4) : Bueno", description: "El código está documentado, pero podría haber más comentarios o mejorar la organización en algunas partes."},
        {rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es comprensible en su mayoría."},
        {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, lo que hace difícil seguir el código."},
        {rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil de entender."}
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación",
      description: `Este criterio mide la capacidad de los estudiantes para analizar y explicar los resultados obtenidos después de aplicar la convolución con diferentes configuraciones de padding y stride en imágenes. Los estudiantes deben interpretar cómo los diferentes filtros (kernels) afectaron las imágenes, y cómo el uso de padding y stride modificó la salida de la convolución. Se espera que incluyan gráficos o visualizaciones de las imágenes antes y después de la convolución, junto con una explicación de los cambios observados.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El análisis de los resultados es claro y bien fundamentado, explicando cómo la convolución, el Padding y el Stride afectan la imagen y su salida."},
        {rating: "(3 - 4) : Bueno", description: "El análisis de los resultados es adecuado, pero podría incluir más detalle o claridad en algunas áreas."},
        {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, pero se ofrece una explicación básica de los resultados obtenidos."},
        {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados obtenidos."},
        {rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos."}
      ]
    }
  ];
  
  
  
const S7_3_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 7.Implementación de la Convolución de Matrices y su Aplicación en Imágenes con Padding y Stride en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S7_3_1;