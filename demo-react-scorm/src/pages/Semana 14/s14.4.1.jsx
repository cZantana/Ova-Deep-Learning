// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S14.4.1",
    activityTitle: "Actividad 15. Implementación del Fine-Tuning de Stable Diffusion usando Diffuser en Google Colab",
    activitySubtitle: "Implementación del fine-tuning de Stable Diffusion utilizando Diffuser en Google Colab",
    metaText: `En esta actividad, los estudiantes implementarán un fine-tuning del modelo Stable Diffusion utilizando la librería Diffuser en Google Colab. Se espera que hayan realizado una lectura previa del material "Latent Diffusion Models: The Architecture behind Stable Diffusion" para comprender el funcionamiento del modelo. Debido a las limitaciones de hardware y tiempo de entrenamiento, no se espera un resultado perfecto, sino una implementación que demuestre el entendimiento de los conceptos fundamentales.
  
  El informe debe incluir:

  • Introducción  

  • Desarrollo  

  • Resultados  

  • Conclusiones  

  • Bibliografía y/o Webgrafía`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };
  
  
  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación.",
      description: `Este criterio evalúa la correcta implementación del proceso de fine-tuning de Stable Diffusion utilizando la librería Diffuser en Google Colab. Los estudiantes deben demostrar cómo cargar el modelo preentrenado de Stable Diffusion y aplicar técnicas de fine-tuning para ajustar el modelo a un nuevo conjunto de datos o dominio específico. La implementación debe incluir los pasos necesarios para configurar el modelo, ajustar los hiperparámetros de entrenamiento y aplicar el fine-tuning de manera eficiente, asegurando que el proceso sea reproducible y funcional.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "La implementación del fine-tuning está correctamente realizada. El código es claro, eficiente y sigue buenas prácticas. Los hiperparámetros están bien ajustados y explicados." },
        { rating: "(3 - 4) : Bueno", description: "El fine-tuning está bien implementado, aunque algunos aspectos del código o la optimización de los hiperparámetros podrían mejorarse." },
        { rating: "(2 - 3) : Suficiente", description: "El fine-tuning está parcialmente implementado o contiene errores que afectan el resultado." },
        { rating: "(1 - 2) : Deficiente", description: "La implementación del fine-tuning es incorrecta o incompleta, afectando el rendimiento del modelo." },
        { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente el fine-tuning de Stable Diffusion." }
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación.",
      description: `Este criterio evalúa cómo los estudiantes evalúan los resultados obtenidos después de aplicar el fine-tuning a Stable Diffusion. Se espera que presenten las imágenes generadas antes y después del fine-tuning, mostrando cómo el ajuste del modelo ha impactado la calidad y el estilo de las imágenes. Deben incluir comparaciones claras y visualizaciones que permitan evaluar la efectividad del fine-tuning, explicando si el modelo se ha adaptado al nuevo dominio.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "Las imágenes generadas antes y después del fine-tuning están claramente visualizadas y analizadas. El análisis refleja una buena comprensión de los efectos del fine-tuning sobre la calidad de las imágenes generadas." },
        { rating: "(3 - 4) : Bueno", description: "Las visualizaciones y el análisis son adecuados, pero podrían mejorarse en la presentación o en el nivel de detalle." },
        { rating: "(2 - 3) : Suficiente", description: "La evaluación de las imágenes generadas es limitada, pero ofrece una idea general del impacto del fine-tuning." },
        { rating: "(1 - 2) : Deficiente", description: "La evaluación es mínima o mal presentada, con poca claridad sobre los resultados del fine-tuning." },
        { rating: "(0 - 1) : Insuficiente", description: "No se realizaron visualizaciones ni análisis adecuados de los resultados." }
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación.",
      description: `Este criterio mide la organización y documentación del código en el notebook de Google Colab. El código debe estar bien estructurado, con comentarios que describan cada paso del proceso, desde la carga del modelo Stable Diffusion hasta la implementación del fine-tuning y la evaluación de los resultados. Se espera que el código sea limpio, bien documentado y fácil de seguir, permitiendo que cualquier lector comprenda cómo se realizó el fine-tuning y las configuraciones empleadas.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso del proceso. Está organizado de manera lógica y es fácil de seguir." },
        { rating: "(3 - 4) : Bueno", description: "El código está documentado, pero podrían agregarse más comentarios o mejorar la organización en algunas partes." },
        { rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es comprensible en su mayoría." },
        { rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, lo que dificulta seguir el código." },
        { rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código." }
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación.",
      description: `Este criterio evalúa la comprensión de los estudiantes sobre el fine-tuning y cómo afecta al modelo de Stable Diffusion. Los estudiantes deben explicar claramente cómo el fine-tuning ajusta las capas del modelo y permite que el modelo preentrenado se adapte a un nuevo dominio o conjunto de datos. Se espera una explicación teórica sólida sobre el impacto del fine-tuning en el rendimiento del modelo y una discusión sobre las aplicaciones prácticas de esta técnica en modelos generativos.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "El análisis y la implementación reflejan una excelente comprensión del fine-tuning de Stable Diffusion, con una clara justificación de los cambios realizados y su impacto en los resultados." },
        { rating: "(3 - 4) : Bueno", description: "La comprensión del fine-tuning es adecuada, pero algunos aspectos del análisis o justificación podrían incluir más detalles." },
        { rating: "(2 - 3) : Suficiente", description: "La comprensión de los conceptos es limitada, ofreciendo solo una idea básica del impacto del fine-tuning." },
        { rating: "(1 - 2) : Deficiente", description: "La comprensión es mínima o mal explicada, con poca claridad sobre el propósito del fine-tuning y sus resultados." },
        { rating: "(0 - 1) : Insuficiente", description: "No se presentó una comprensión adecuada de los conceptos de fine-tuning y su impacto." }
      ]
    }
  ];
  
  
const S14_4_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 14. Implementación del Fine-Tuning de Stable Diffusion usando Diffuser en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S14_4_1;