// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S10.2.1",
    activityTitle: "Actividad 10. Implementación de una Red Neuronal Siamesa para Reconocimiento Facial en Google Colab",
    activitySubtitle: "Implementación de una red siamesa para reconocimiento facial mediante triplets",
    metaText: `En esta actividad, los estudiantes implementarán una red neuronal siamesa en un notebook de Google Colab con el objetivo de realizar reconocimiento facial. Para ello, deberán construir un dataset utilizando imágenes propias o de otra persona bajo su consentimiento, creando un conjunto de triplets (tripletas) para entrenar el modelo.
  
  El informe debe incluir: Introducción, Desarrollo, Resultados, Conclusiones y Bibliografía y/o Webgrafía.`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };
  
  
  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación.",
      description: `Este criterio evalúa la capacidad de los estudiantes para construir un dataset de triplets para el entrenamiento de la red siamesa. El dataset debe contener imágenes de anclaje, imágenes positivas y negativas que permitan al modelo aprender a distinguir entre diferentes rostros. Se espera que los estudiantes recolecten imágenes de manera adecuada y procesen el dataset (alineación, normalización, etc.), asegurando que los triplets estén bien organizados y equilibrados en términos de clases y variaciones faciales.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El dataset está bien construido, con imágenes propias u obtenidas bajo consentimiento. Las tripletas están bien estructuradas y preparadas para el entrenamiento."},
        {rating: "(3 - 4) : Bueno", description: "El dataset está bien organizado, pero podría mejorarse en términos de diversidad o cantidad de triplets."},
        {rating: "(2 - 3) : Suficiente", description: "El dataset está parcialmente construido o contiene pocos triplets, lo que afecta el entrenamiento."},
        {rating: "(1 - 2) : Deficiente", description: "El dataset está mal estructurado o incompleto, afectando gravemente el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se construyó correctamente el dataset de triplets."}
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación.",
      description: `Este criterio mide la implementación de la red siamesa utilizando TensorFlow/Keras o PyTorch. Los estudiantes deben construir una arquitectura que acepte dos entradas de imágenes (anclaje y otra imagen) y calcule la distancia entre sus embeddings mediante una función de pérdida adecuada (por ejemplo, triplet loss o contrastive loss). Se espera que ambas ramas de la red compartan pesos y que la red aprenda a identificar si las imágenes pertenecen a la misma clase.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La red siamesa está implementada correctamente, con una arquitectura clara y adecuada para el reconocimiento facial. El código es eficiente y sigue buenas prácticas."},
        {rating: "(3 - 4) : Bueno", description: "La red siamesa está bien implementada, pero podría optimizarse en términos de estructura o eficiencia del código."},
        {rating: "(2 - 3) : Suficiente", description: "La red siamesa está parcialmente implementada, con algunos errores que afectan el rendimiento o la lógica del modelo."},
        {rating: "(1 - 2) : Deficiente", description: "La implementación de la red siamesa es incorrecta o incompleta, afectando el funcionamiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente la red siamesa."}
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación.",
      description: `Este criterio evalúa el proceso de entrenamiento del modelo siamesa con el dataset de triplets. Los estudiantes deben ajustar los hiperparámetros (tasa de aprendizaje, número de épocas, tamaño de lote) y entrenar la red de manera eficiente. Se espera que demuestren cómo la red aprende a minimizar la distancia entre imágenes de la misma persona y a maximizar la distancia entre imágenes de personas diferentes.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El entrenamiento del modelo se realizó correctamente con el dataset de triplets. Los hiperparámetros están bien ajustados y se observa una buena convergencia."},
        {rating: "(3 - 4) : Bueno", description: "El entrenamiento se realizó de manera adecuada, pero algunos aspectos, como el ajuste de hiperparámetros, podrían mejorarse."},
        {rating: "(2 - 3) : Suficiente", description: "El entrenamiento presenta problemas de convergencia o falta de ajuste en los hiperparámetros, afectando parcialmente el rendimiento."},
        {rating: "(1 - 2) : Deficiente", description: "El entrenamiento fue incompleto o con fallos graves que afectaron el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento de la red siamesa."}
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación.",
      description: `Este criterio evalúa cómo los estudiantes evalúan el rendimiento del modelo siamesa después del entrenamiento. Se espera que utilicen métricas (por ejemplo, precisión, accuracy o distancia promedio entre embeddings) para medir el rendimiento en la tarea de reconocimiento facial, probando el modelo con imágenes nuevas para demostrar que puede distinguir correctamente entre rostros conocidos y desconocidos.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El modelo fue evaluado correctamente, mostrando resultados claros y consistentes. Se presentan pruebas con nuevas imágenes para demostrar su capacidad."},
        {rating: "(3 - 4) : Bueno", description: "La evaluación del modelo fue adecuada, pero podría incluir más pruebas o una mejor presentación de los resultados."},
        {rating: "(2 - 3) : Suficiente", description: "La evaluación es limitada, con pruebas básicas realizadas pero sin profundización."},
        {rating: "(1 - 2) : Deficiente", description: "La evaluación es mínima o los resultados no son concluyentes."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó una evaluación adecuada del modelo."}
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación.",
      description: `Este criterio mide la organización y documentación del código en el notebook. El código debe estar bien estructurado y contar con comentarios claros que expliquen cada paso, desde la construcción del dataset hasta el entrenamiento y evaluación de la red siamesa. Se espera que la organización permita una comprensión clara del proceso completo.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros y organizados de manera lógica."},
        {rating: "(3 - 4) : Bueno", description: "El código está documentado, pero podría mejorarse la organización o incluir más comentarios."},
        {rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es mayormente comprensible."},
        {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, dificultando la comprensión."},
        {rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código."}
      ]
    },
    {
      criteriaTitle: "Sexto criterio de Evaluación.",
      description: `Este criterio evalúa la capacidad de los estudiantes para analizar los resultados obtenidos y explicar el funcionamiento de la red siamesa. Se espera que interpreten las métricas y gráficos generados durante el entrenamiento, proporcionando un análisis crítico que incluya una discusión sobre las fortalezas y limitaciones del modelo, y sugerencias para futuras mejoras.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El análisis de los resultados es claro y bien fundamentado, explicando detalladamente el funcionamiento y la efectividad del modelo."},
        {rating: "(3 - 4) : Bueno", description: "El análisis es adecuado, pero podría incluir más detalles o explicaciones en algunas áreas."},
        {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, ofreciendo una explicación básica de los resultados."},
        {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados."},
        {rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos."}
      ]
    }
  ];
  
  
const S10_2_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 10. Implementación de una Red Neuronal Siamesa para Reconocimiento Facial en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S10_2_1;