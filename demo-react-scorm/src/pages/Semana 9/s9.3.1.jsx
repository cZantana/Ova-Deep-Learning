// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S9.3.1",
    activityTitle: "Actividad 9. Implementación de Data Augmentation y Transfer Learning en Imágenes en Google Colab",
    activitySubtitle: "Implementación de técnicas de Data Augmentation y Transfer Learning en imágenes",
    metaText: `En esta actividad, los estudiantes trabajarán en dos notebooks de Google Colab.

    Notebook 1: Implementación de Data Augmentation en Imágenes

• Aplicar técnicas de data augmentation (rotación, traslación, flip, zoom, etc.) para ampliar el dataset.  

• Evaluar el impacto de estas técnicas entrenando un modelo de clasificación con y sin data augmentation.  

• Utilizar TensorFlow + Keras y/o PyTorch para implementar las transformaciones.

Notebook 2: Implementación de Transfer Learning en Imágenes

• Cargar un modelo preentrenado (por ejemplo, VGG, ResNet, Inception, etc.) y adaptar sus capas finales para un nuevo problema de clasificación.  

• Congelar las capas base y ajustar las capas superiores según el nuevo dataset.`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };
  
  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación.",
      description: `Este criterio evalúa la correcta implementación de técnicas de Data Augmentation en imágenes utilizando TensorFlow/Keras o PyTorch en Google Colab. Los estudiantes deben aplicar transformaciones como rotación, escalado, recorte, volteo, entre otras, para aumentar la variabilidad del dataset. Se espera que los estudiantes demuestren un buen uso de las herramientas de data augmentation, mostrando cómo estas técnicas mejoran la capacidad de generalización del modelo al entrenarlo con variaciones de las imágenes originales.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Las técnicas de data augmentation (rotación, traslación, flip, zoom, etc.) están implementadas correctamente y se aplican adecuadamente sobre un dataset de imágenes. El código es eficiente y bien documentado."},
        {rating: "(3 - 4) : Bueno", description: "Las técnicas de data augmentation están implementadas, pero podrían optimizarse o documentarse mejor en algunas partes."},
        {rating: "(2 - 3) : Suficiente", description: "Las técnicas están parcialmente implementadas, pero contienen errores o no afectan significativamente al modelo."},
        {rating: "(1 - 2) : Deficiente", description: "La implementación de data augmentation es incompleta o incorrecta, afectando el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se ha implementado correctamente ninguna técnica de data augmentation."}
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación.",
      description: `Este criterio evalúa cómo los estudiantes evalúan el impacto de aplicar data augmentation en el rendimiento del modelo. Los estudiantes deben demostrar cómo las transformaciones de las imágenes afectan la precisión, pérdida, o cualquier otra métrica relevante durante el entrenamiento y prueba del modelo. Se espera una comparación clara entre el rendimiento del modelo entrenado con y sin data augmentation, junto con una explicación de las mejoras o limitaciones observadas.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La comparación entre el modelo entrenado con y sin data augmentation está bien documentada, mostrando claramente las diferencias de rendimiento y justificación de los resultados obtenidos."},
        {rating: "(3 - 4) : Bueno", description: "La comparación está bien realizada, pero podría incluir más detalles o gráficos que muestren los resultados de manera más clara."},
        {rating: "(2 - 3) : Suficiente", description: "La comparación es parcial o no está bien justificada, aunque los resultados son comprensibles."},
        {rating: "(1 - 2) : Deficiente", description: "La comparación es confusa o incompleta, con poca claridad sobre los efectos de la data augmentation."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó una comparación adecuada entre el modelo con y sin data augmentation."}
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación.",
      description: `En este criterio se evalúa la implementación de un modelo de Transfer Learning en imágenes. Los estudiantes deben cargar un modelo preentrenado, como VGG, ResNet, Inception o MobileNet, y adaptar su arquitectura para ajustarse al nuevo problema de clasificación, reemplazando las capas finales. Se espera que los estudiantes implementen la estrategia de congelación de capas base del modelo preentrenado y que ajusten las capas superiores para entrenar sobre el nuevo dataset.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Transfer Learning está implementado correctamente, utilizando un modelo preentrenado y aplicando las técnicas adecuadas para congelar capas y ajustar el modelo al nuevo dataset."},
        {rating: "(3 - 4) : Bueno", description: "Transfer Learning está bien implementado, pero podría mejorarse en términos de eficiencia o claridad en el código."},
        {rating: "(2 - 3) : Suficiente", description: "Transfer Learning está parcialmente implementado, con algunos errores en la congelación de capas o en la estructura del modelo."},
        {rating: "(1 - 2) : Deficiente", description: "La implementación de Transfer Learning es incorrecta o incompleta, afectando el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se ha implementado correctamente Transfer Learning."}
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación.",
      description: `Este criterio mide cómo los estudiantes entrenan y evalúan el modelo de Transfer Learning. Se espera que ajusten los hiperparámetros del modelo (tasa de aprendizaje, número de épocas, tamaño de lote, etc.) para entrenar las capas superiores y evaluar el rendimiento del modelo adaptado en un nuevo conjunto de datos. Los estudiantes deben demostrar cómo el uso de Transfer Learning mejora el rendimiento en comparación con un modelo entrenado desde cero, proporcionando métricas que muestren el desempeño del modelo en el conjunto de prueba.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El modelo ha sido entrenado correctamente utilizando Transfer Learning. Los resultados son presentados de manera clara, con métricas que demuestran la efectividad del enfoque."},
        {rating: "(3 - 4) : Bueno", description: "El entrenamiento y la evaluación son adecuados, pero algunos resultados o métricas podrían estar mejor presentados o justificados."},
        {rating: "(2 - 3) : Suficiente", description: "El entrenamiento del modelo se realizó con problemas de convergencia o falta de ajuste en los hiperparámetros."},
        {rating: "(1 - 2) : Deficiente", description: "El entrenamiento fue incorrecto o incompleto, afectando los resultados obtenidos."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento ni la evaluación del modelo con Transfer Learning."}
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación.",
      description: `Este criterio evalúa la organización y documentación del código en los notebooks de Data Augmentation y Transfer Learning. El código debe estar bien estructurado y debe incluir comentarios explicativos que describan cada paso del proceso, desde la aplicación de data augmentation hasta la implementación y evaluación de Transfer Learning. La documentación debe ser clara y debe permitir a cualquier lector seguir fácilmente el flujo de trabajo en ambos notebooks, incluyendo la configuración de los hiperparámetros, la manipulación de los datos y las decisiones de diseño.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Ambos notebooks están bien documentados, con comentarios que explican cada paso del proceso. El código está organizado de manera lógica y es fácil de seguir."},
        {rating: "(3 - 4) : Bueno", description: "El código está bien documentado, pero podría haber más comentarios o mejorar la organización en algunas partes."},
        {rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es comprensible en su mayoría."},
        {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, lo que hace difícil seguir el código."},
        {rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil de entender."}
      ]
    },
    {
      criteriaTitle: "Sexto criterio de Evaluación.",
      description: `Este criterio mide la capacidad de los estudiantes para analizar los resultados obtenidos tanto de data augmentation como de transfer learning. Los estudiantes deben interpretar las métricas y los gráficos obtenidos, proporcionando un análisis crítico de los resultados y cómo ambas técnicas impactaron el rendimiento del modelo. El análisis debe incluir reflexiones sobre las mejoras, posibles limitaciones y recomendaciones para mejorar aún más el modelo. Deben destacar las diferencias en el rendimiento del modelo con y sin las técnicas aplicadas, apoyándose en métricas clave y visualizaciones claras.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El análisis de los resultados obtenidos en ambos notebooks es claro y bien fundamentado, explicando cómo las técnicas de data augmentation y Transfer Learning afectaron al rendimiento del modelo."},
        {rating: "(3 - 4) : Bueno", description: "El análisis es adecuado, pero podría incluir más detalle o claridad en algunas áreas."},
        {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, pero ofrece una explicación básica de los resultados obtenidos."},
        {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados obtenidos."},
        {rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos."}
      ]
    }
  ];
  
  
const S9_3_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 9. Implementación de Data Augmentation y Transfer Learning en Imágenes en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S9_3_1;