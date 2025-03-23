// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
  activityCode: "S12.3.1",
  activityTitle: "Actividad 12. Implementación del Mecanismo de Atención para Series de Tiempo y un Transformer Básico en Google Colab",
  activitySubtitle: "Implementación del mecanismo de atención y de un Transformer básico para series de tiempo",
  metaText: `En esta actividad, los estudiantes trabajarán en dos notebooks de Google Colab.

Notebook 1: Implementación del Mecanismo de Atención para Series de Tiempo  
• Implementar el mecanismo de atención para analizar una serie de tiempo.

Notebook 2: Implementación de un Transformer Básico  
• Construir e implementar un Transformer básico para el procesamiento de series de tiempo.

El objetivo es comprender y aplicar los conceptos clave detrás de los mecanismos de atención y de los Transformers en el análisis de series de tiempo.

El informe debe incluir: Introducción, Desarrollo, Resultados, Conclusiones y Bibliografía y/o Webgrafía.`,
  imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
};
  
  
const rubricData = [
  {
    criteriaTitle: "Primer criterio de Evaluación.",
    description: `Este criterio evalúa la correcta implementación del mecanismo de atención en un modelo de predicción de series de tiempo. Los estudiantes deben demostrar cómo integrar el mecanismo de atención en una arquitectura recurrente o basada en redes neuronales para permitir que el modelo aprenda a enfocarse en partes específicas de la secuencia temporal. Se espera que expliquen el funcionamiento de la atención, cómo mejora la capacidad del modelo para capturar patrones importantes y cómo se integra en el proceso de predicción.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El mecanismo de atención está implementado correctamente y aplicado a un modelo para analizar o predecir una serie de tiempo. El código es claro, eficiente y sigue buenas prácticas." },
      { rating: "(3 - 4) : Bueno", description: "La implementación del mecanismo de atención es adecuada, pero podría mejorar en términos de claridad o eficiencia del código." },
      { rating: "(2 - 3) : Suficiente", description: "El mecanismo de atención está parcialmente implementado o contiene errores que afectan el rendimiento del modelo." },
      { rating: "(1 - 2) : Deficiente", description: "La implementación es incorrecta o incompleta, afectando el análisis de la serie de tiempo." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente el mecanismo de atención." }
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación.",
    description: `Este criterio mide la capacidad de los estudiantes para implementar un modelo Transformer básico. Deben construir una arquitectura Transformer simplificada, implementando componentes principales como la codificación posicional, las capas de atención y los bloques feedforward. El enfoque debe estar en aplicar el Transformer a tareas de series de tiempo o secuencias de datos, demostrando cómo procesa la información de manera eficiente a través de múltiples capas de atención.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El Transformer básico está correctamente implementado, con una buena comprensión de su arquitectura (encoder, decoder, atención). El código es claro y eficiente." },
      { rating: "(3 - 4) : Bueno", description: "El Transformer básico está bien implementado, pero algunos aspectos podrían mejorarse en cuanto a la explicación o eficiencia del código." },
      { rating: "(2 - 3) : Suficiente", description: "El Transformer está parcialmente implementado o tiene errores que afectan su rendimiento." },
      { rating: "(1 - 2) : Deficiente", description: "La implementación del Transformer es incorrecta o incompleta." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente el Transformer." }
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación.",
    description: `Este criterio evalúa cómo los estudiantes manejan la carga y el preprocesamiento de los datos de series de tiempo. Se espera que carguen un dataset adecuado (financiero, meteorológico, etc.), apliquen la normalización o estandarización, creen ventanas o secuencias temporales para entrenar el modelo y dividan correctamente el dataset en entrenamiento y prueba, dejando los datos listos para su uso en los modelos de atención y Transformer.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Los datos están bien seleccionados, cargados y preprocesados de manera adecuada (normalización, manejo de datos faltantes, etc.)." },
      { rating: "(3 - 4) : Bueno", description: "El preprocesamiento es adecuado, aunque podría mejorarse en aspectos como el manejo de datos faltantes o la normalización." },
      { rating: "(2 - 3) : Suficiente", description: "El preprocesamiento es limitado o tiene errores menores que afectan el rendimiento del modelo." },
      { rating: "(1 - 2) : Deficiente", description: "El preprocesamiento es incorrecto o incompleto, afectando gravemente el análisis o la predicción." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el preprocesamiento del dataset." }
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación.",
    description: `Este criterio evalúa el entrenamiento y evaluación del modelo con mecanismo de atención. Los estudiantes deben ajustar hiperparámetros (tasa de aprendizaje, épocas, tamaño de lote) y entrenar el modelo de manera eficiente, monitoreando métricas de rendimiento (MSE, MAE, etc.). Además, deben evaluar el modelo en un conjunto de prueba, demostrando cómo el mecanismo de atención mejora la capacidad de predecir valores futuros en la serie de tiempo.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El modelo fue entrenado correctamente utilizando el mecanismo de atención, y las métricas de evaluación están claramente presentadas y explicadas." },
      { rating: "(3 - 4) : Bueno", description: "El entrenamiento y la evaluación fueron adecuados, pero algunos aspectos podrían mejorarse en la presentación de los resultados." },
      { rating: "(2 - 3) : Suficiente", description: "El entrenamiento y la evaluación son limitados, pero se presentan algunas métricas básicas." },
      { rating: "(1 - 2) : Deficiente", description: "El entrenamiento o la evaluación fueron incompletos o mal ejecutados." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento ni la evaluación del modelo." }
    ]
  },
  {
    criteriaTitle: "Quinto criterio de Evaluación.",
    description: `Este criterio evalúa el entrenamiento y evaluación del modelo Transformer. Los estudiantes deben entrenar el Transformer en el conjunto de datos de series de tiempo, monitorear su rendimiento y ajustar los hiperparámetros para lograr buenos resultados. Se espera que el entrenamiento muestre cómo el Transformer procesa secuencias y captura patrones temporales, y que se demuestre su capacidad para generalizar mediante métricas adecuadas.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El Transformer fue entrenado correctamente y los resultados se presentan de manera clara, explicando el funcionamiento del modelo y las métricas obtenidas." },
      { rating: "(3 - 4) : Bueno", description: "El Transformer fue entrenado adecuadamente, pero los resultados podrían presentarse con mayor claridad o detalle." },
      { rating: "(2 - 3) : Suficiente", description: "El entrenamiento y la evaluación son limitados, pero se presentan algunos resultados básicos." },
      { rating: "(1 - 2) : Deficiente", description: "El entrenamiento o evaluación del Transformer fueron incompletos o incorrectos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento ni la evaluación del Transformer." }
    ]
  },
  {
    criteriaTitle: "Sexto criterio de Evaluación.",
    description: `Este criterio evalúa la organización y documentación del código en los notebooks de mecanismo de atención y Transformer. El código debe estar bien estructurado, con comentarios claros que expliquen cada parte del proceso, desde la carga y preprocesamiento de los datos hasta la implementación del modelo y la evaluación. Se espera que el código sea limpio y fácil de seguir, permitiendo comprender cómo se implementaron el mecanismo de atención y el Transformer, así como las decisiones de ajuste realizadas.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Ambos notebooks están bien documentados, con comentarios claros y explicaciones detalladas. El código está organizado de manera lógica y es fácil de seguir." },
      { rating: "(3 - 4) : Bueno", description: "El código está bien documentado, pero podrían mejorarse algunos comentarios o la organización en ciertas partes." },
      { rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es comprensible en su mayoría." },
      { rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, dificultando la comprensión del código." },
      { rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código." }
    ]
  },
  {
    criteriaTitle: "Séptimo criterio de Evaluación.",
    description: `Este criterio mide la capacidad de los estudiantes para analizar los resultados obtenidos y explicar el funcionamiento de los modelos. Los estudiantes deben interpretar las métricas y gráficos generados durante el entrenamiento y la evaluación, proporcionando un análisis crítico del rendimiento de los modelos. Se espera que discutan cómo el mecanismo de atención y el Transformer capturan patrones en los datos de series de tiempo, las ventajas sobre otros enfoques y las posibles mejoras futuras.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El análisis de los resultados es claro y bien fundamentado, explicando cómo funcionan el mecanismo de atención y el Transformer, incluyendo gráficos o comparaciones para mejorar la presentación." },
      { rating: "(3 - 4) : Bueno", description: "El análisis es adecuado, pero podría incluir más detalle o explicaciones en algunas áreas." },
      { rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, ofreciendo una explicación básica de los resultados obtenidos." },
      { rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados." },
      { rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados." }
    ]
  }
];
  
  
const S12_3_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 12. Implementación del Mecanismo de Atención para Series de Tiempo y un Transformer Básico en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S12_3_1;