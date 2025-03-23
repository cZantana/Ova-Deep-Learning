// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
  activityCode: "S14.2.1",
  activityTitle: "Actividad 14. Aplicación de los Conceptos de GANs en Google Colab",
  activitySubtitle: "Implementación de los conceptos de GANs en un notebook de Google Colab",
  metaText: `En esta actividad, los estudiantes implementarán los conceptos de Redes Generativas Adversarias (GANs) en un notebook de Google Colab.

  El objetivo principal es comprender cómo funciona el entrenamiento de una GAN, incluyendo la interacción entre el generador y el discriminador. Dado que el entrenamiento de GANs puede ser intensivo en recursos, no se espera un resultado perfecto, sino una implementación que demuestre el entendimiento de los conceptos fundamentales.`,
  imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
};
  
  
const rubricData = [
  {
    criteriaTitle: "Primer criterio de Evaluación.",
    description: `Este criterio evalúa la correcta implementación de una GAN: Los estudiantes deben implementar una Red Generativa Adversaria (GAN) básica, con un generador que crea imágenes y un discriminador que evalúa la autenticidad de las imágenes.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "La GAN está implementada correctamente, con un generador y un discriminador bien estructurados. El código es eficiente y sigue buenas prácticas de programación." },
      { rating: "(3 - 4) : Bueno", description: "La GAN está bien implementada, pero algunos aspectos de la arquitectura o eficiencia del código podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "La GAN está parcialmente implementada, con errores menores que afectan el rendimiento del modelo." },
      { rating: "(1 - 2) : Deficiente", description: "La implementación de la GAN es incorrecta o incompleta, afectando el funcionamiento del modelo." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente la GAN." }
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación.",
    description: `Este criterio evalúa cómo los estudiantes entrenan la GAN con un dataset simple (por ejemplo, MNIST o un dataset pequeño de imágenes), permitiendo que el generador y el discriminador aprendan juntos. El enfoque debe estar en la comprensión de cómo los dos modelos interactúan durante el proceso de entrenamiento.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El generador y el discriminador interactúan correctamente, con un entrenamiento bien coordinado. El código refleja una buena comprensión de la dinámica entre ambos modelos." },
      { rating: "(3 - 4) : Bueno", description: "La interacción entre el generador y el discriminador es adecuada, pero podría mejorarse en términos de eficiencia o sincronización en el entrenamiento." },
      { rating: "(2 - 3) : Suficiente", description: "La interacción entre los modelos es limitada, con problemas en la convergencia o coordinación entre ellos." },
      { rating: "(1 - 2) : Deficiente", description: "La interacción entre el generador y el discriminador es incorrecta, afectando significativamente el entrenamiento." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente la interacción entre los modelos." }
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación.",
    description: `Este criterio mide la Evaluación de los Resultados: Los estudiantes deben mostrar imágenes generadas por el modelo y analizar el rendimiento de la GAN en función de la calidad de las imágenes generadas.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Las imágenes generadas por la GAN son claramente visualizadas, y el análisis de los resultados refleja una buena comprensión de las limitaciones del modelo y la calidad de las imágenes generadas." },
      { rating: "(3 - 4) : Bueno", description: "Las visualizaciones de las imágenes son adecuadas, pero algunos aspectos del análisis o la presentación podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "Las visualizaciones y análisis son limitados, pero se ofrece una idea general del rendimiento del modelo." },
      { rating: "(1 - 2) : Deficiente", description: "Las visualizaciones y análisis son mínimos o mal presentados, con poca claridad sobre los resultados obtenidos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizaron visualizaciones ni análisis adecuados de los resultados." }
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación.",
    description: `Este criterio evalúa la entrega final del documento: Los estudiantes entregarán un notebook de Google Colab que contenga la implementación de la GAN, el código usado para el entrenamiento, visualizaciones de las imágenes generadas y un análisis de los resultados obtenidos.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso del proceso. Está organizado de manera lógica y es fácil de seguir." },
      { rating: "(3 - 4) : Bueno", description: "El código está bien documentado, pero podrían haber más comentarios o mejor organización en algunas partes." },
      { rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es comprensible en su mayoría." },
      { rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, lo que hace difícil seguir el código." },
      { rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil de entender." }
    ]
  }
];
  
  
const S14_2_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 14. Aplicación de los Conceptos de GANs en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S14_2_1;