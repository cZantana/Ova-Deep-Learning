// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
  activityCode: "S13.3.1",
  activityTitle: "Actividad 13. Implementación de un Autoencoder en una Red Denoising usando el dataset MNIST en Google Colab",
  activitySubtitle: "Implementación de un autoencoder denoising para restaurar imágenes MNIST",
  metaText: `En esta actividad, los estudiantes trabajarán en un notebook de Google Colab para implementar un Autoencoder enfocado en Denoising. Utilizarán el dataset MNIST para entrenar el modelo, añadiendo ruido a las imágenes y utilizando el autoencoder para restaurarlas. El objetivo es comprender el funcionamiento de los autoencoders y su capacidad para eliminar ruido de las imágenes.`,
  imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
};
  
  
const rubricData = [
  {
    criteriaTitle: "Primer criterio de Evaluación.",
    description: `Este criterio evalúa cómo los estudiantes manejan la carga y preprocesamiento del dataset MNIST en Google Colab. Se espera que los estudiantes carguen correctamente el conjunto de datos de imágenes de dígitos escritos a mano y realicen un preprocesamiento adecuado, que puede incluir la normalización de los valores de los píxeles y la adición de ruido para convertir las imágenes en entradas ruidosas para el autoencoder. El preprocesamiento debe estar claramente integrado en el pipeline del modelo, asegurando que las imágenes estén preparadas para el entrenamiento de la red denoising.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El dataset MNIST fue cargado correctamente, y el preprocesamiento (normalización, adición de ruido) se realizó de manera adecuada. El código es eficiente y bien documentado." },
      { rating: "(3 - 4) : Bueno", description: "El preprocesamiento del dataset fue adecuado, aunque algunos aspectos, como el manejo del ruido, podrían haber sido mejor presentados o justificados." },
      { rating: "(2 - 3) : Suficiente", description: "El preprocesamiento es limitado o tiene errores menores, pero el dataset es funcional para el modelo." },
      { rating: "(1 - 2) : Deficiente", description: "El preprocesamiento del dataset es incorrecto o incompleto, afectando el entrenamiento del modelo." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente la carga o el preprocesamiento del dataset MNIST." }
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación.",
    description: `Este criterio evalúa la correcta implementación del autoencoder, un modelo diseñado para aprender una representación compacta (codificación) de los datos y luego reconstruir los datos originales a partir de esa representación. Los estudiantes deben implementar un autoencoder básico que tenga una capa de codificación y una de decodificación, asegurando que el modelo pueda reconstruir las imágenes de dígitos a partir de sus representaciones comprimidas. Se espera que los estudiantes expliquen la arquitectura del autoencoder, su estructura de capas y las funciones de activación utilizadas.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El autoencoder está implementado correctamente, con una fase de codificación y una de decodificación bien estructuradas. El código es eficiente y sigue buenas prácticas de programación." },
      { rating: "(3 - 4) : Bueno", description: "El autoencoder está bien implementado, pero algunos aspectos de la arquitectura o la eficiencia del código podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "El autoencoder está parcialmente implementado o contiene errores menores que afectan el rendimiento del modelo." },
      { rating: "(1 - 2) : Deficiente", description: "La implementación del autoencoder es incorrecta o incompleta, afectando el funcionamiento del modelo." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente el autoencoder." }
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación.",
    description: `Este criterio mide la capacidad de los estudiantes para entrenar el autoencoder utilizando el dataset MNIST ruidoso. Los estudiantes deben ajustar los hiperparámetros (tasa de aprendizaje, número de épocas, tamaño de lote) y monitorizar el proceso de entrenamiento utilizando la pérdida y otras métricas relevantes. El entrenamiento debe mostrar cómo el modelo aprende a eliminar el ruido de las imágenes, mejorando gradualmente la capacidad de reconstrucción de las imágenes originales. Se espera que el proceso de entrenamiento esté bien estructurado y sea eficiente.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El modelo fue entrenado correctamente, con un ajuste adecuado de hiperparámetros y una buena convergencia. Se observan resultados claros y bien documentados." },
      { rating: "(3 - 4) : Bueno", description: "El entrenamiento fue adecuado, pero algunos aspectos como el ajuste de hiperparámetros o la presentación de resultados podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "El entrenamiento tiene problemas de convergencia o falta de ajuste en los hiperparámetros, pero el modelo produce resultados aceptables." },
      { rating: "(1 - 2) : Deficiente", description: "El entrenamiento fue incompleto o con fallos graves que afectaron el rendimiento del modelo." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento del modelo." }
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación.",
    description: `Este criterio evalúa cómo los estudiantes evalúan el rendimiento del autoencoder y visualizan los resultados obtenidos. Los estudiantes deben mostrar las imágenes reconstruidas por el autoencoder y compararlas con las imágenes ruidosas y las originales, proporcionando gráficos que visualicen estas reconstrucciones. Se espera que los estudiantes expliquen cómo el autoencoder aprende a eliminar el ruido y evalúen la calidad de las reconstrucciones mediante métricas o inspección visual.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "La evaluación del modelo está bien realizada, con métricas claras y una presentación de resultados que compara de manera efectiva las imágenes ruidosas con las restauradas. Las visualizaciones son claras y útiles." },
      { rating: "(3 - 4) : Bueno", description: "La evaluación del modelo es adecuada, pero algunos aspectos como la presentación de los resultados o las visualizaciones podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "La evaluación es limitada o con resultados incompletos, pero se presenta una idea general del rendimiento del autoencoder." },
      { rating: "(1 - 2) : Deficiente", description: "La evaluación es mínima o los resultados obtenidos no son concluyentes." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente la evaluación ni la visualización de los resultados." }
    ]
  },
  {
    criteriaTitle: "Quinto criterio de Evaluación.",
    description: `Este criterio evalúa la organización y documentación del código en el notebook de Google Colab. El código debe estar bien estructurado, con comentarios explicativos que describan cada paso del proceso, desde la carga y preprocesamiento del dataset MNIST hasta la implementación, entrenamiento y evaluación del autoencoder. Se espera que la organización sea clara y que cualquier lector pueda seguir el flujo del código de manera sencilla y comprender las decisiones detrás de la arquitectura del autoencoder y las configuraciones de entrenamiento.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso del proceso. Está organizado de manera lógica y es fácil de seguir." },
      { rating: "(3 - 4) : Bueno", description: "El código está bien documentado, pero podrían haber más comentarios o mejor organización en algunas partes." },
      { rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es comprensible en su mayoría." },
      { rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, lo que hace difícil seguir el código." },
      { rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil de entender." }
    ]
  },
  {
    criteriaTitle: "Sexto criterio de Evaluación.",
    description: `Este criterio mide la capacidad de los estudiantes para analizar los resultados obtenidos y explicar el funcionamiento del autoencoder. Los estudiantes deben interpretar las métricas de rendimiento y los resultados visualizados, proporcionando un análisis crítico del rendimiento del modelo. Se espera que expliquen cómo el autoencoder aprendió a reconstruir las imágenes eliminando el ruido, qué tan efectivas fueron las representaciones comprimidas, y si hay áreas de mejora. Además, deben explicar cómo el autoencoder es útil en tareas de denoising y otras aplicaciones de reducción de ruido.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El análisis de los resultados obtenidos es claro y bien fundamentado, explicando cómo el autoencoder es capaz de eliminar el ruido de las imágenes. Se incluyen gráficos o comparaciones para mejorar la presentación." },
      { rating: "(3 - 4) : Bueno", description: "El análisis de los resultados es adecuado, pero podría incluir más detalles o explicaciones en algunas áreas." },
      { rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, pero ofrece una explicación básica de los resultados obtenidos." },
      { rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados obtenidos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos." }
    ]
  }
];
  
  
const S13_3_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 13. Implementación de un Autoencoder en una Red Denoising usando el dataset MNIST en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S13_3_1;