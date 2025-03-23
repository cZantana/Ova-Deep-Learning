// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S8.2.1",
    activityTitle: "Actividad 8. Implementación de un Modelo Popular de CNN en TensorFlow + Keras y/o PyTorch en Google Colab",
    activitySubtitle: "Implementación de un modelo CNN popular utilizando frameworks de deep learning",
    metaText: `En esta actividad, los estudiantes implementarán uno de los modelos populares de Redes Neuronales Convolucionales (CNN) utilizando TensorFlow + Keras y/o PyTorch en un notebook de Google Colab. Los estudiantes podrán elegir uno de los siguientes modelos para implementar:

• LeNet

• AlexNet

• VGGNet

• ResNet

• Otro modelo CNN popular`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };
  
  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación",
      description: `Este criterio evalúa la correcta implementación de un modelo de red neuronal convolucional (CNN) utilizando TensorFlow + Keras o PyTorch en Google Colab. Los estudiantes deben seleccionar e implementar un modelo popular de CNN, como LeNet, AlexNet, VGG o ResNet, y configurar correctamente las capas convolucionales, de pooling y fully connected, según la arquitectura del modelo seleccionado. Se espera que demuestren una comprensión clara de cómo estructurar el modelo y extraer características de las imágenes.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El modelo CNN elegido está implementado correctamente. El código es eficiente, sigue buenas prácticas y está completamente funcional."},
        {rating: "(3 - 4) : Bueno", description: "El modelo está bien implementado, aunque podría mejorarse en términos de eficiencia o claridad en el código."},
        {rating: "(2 - 3) : Suficiente", description: "El modelo está parcialmente implementado, con algunos errores que afectan los resultados o el rendimiento."},
        {rating: "(1 - 2) : Deficiente", description: "La implementación es incorrecta o incompleta, con errores significativos que impiden el funcionamiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se ha implementado correctamente el modelo CNN."}
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación",
      description: `Este criterio evalúa el entrenamiento del modelo CNN con un conjunto de datos adecuado, como CIFAR-10, MNIST u otro dataset de imágenes. Los estudiantes deben demostrar que pueden ajustar los hiperparámetros del modelo (tasa de aprendizaje, número de épocas, tamaño de lote, etc.) y monitorear el progreso del entrenamiento mediante métricas como la precisión y la pérdida. Se espera que el entrenamiento sea adecuado para evitar overfitting o underfitting.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El modelo fue entrenado correctamente, con ajustes de hiperparámetros y optimización adecuados. El entrenamiento muestra una buena convergencia."},
        {rating: "(3 - 4) : Bueno", description: "El entrenamiento fue adecuado, pero podría haberse optimizado mejor o ajustado los hiperparámetros."},
        {rating: "(2 - 3) : Suficiente", description: "El entrenamiento se realizó con problemas de convergencia o falta de ajuste en los hiperparámetros."},
        {rating: "(1 - 2) : Deficiente", description: "El entrenamiento fue incorrecto o incompleto, con fallos que afectaron el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento del modelo."}
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación",
      description: `Este criterio evalúa cómo los estudiantes miden y evalúan el rendimiento del modelo CNN en un conjunto de prueba o validación. Deben utilizar métricas de evaluación como precisión, recall, F1 score, entre otras, para medir el rendimiento en la clasificación de imágenes. Además, se espera que proporcionen una evaluación completa que demuestre cómo el modelo generaliza a datos no vistos y expliquen cualquier desajuste entre los resultados de entrenamiento y prueba.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La evaluación del modelo está bien realizada, mostrando métricas claras y resultados presentados con gráficos y análisis detallados."},
        {rating: "(3 - 4) : Bueno", description: "La evaluación fue correcta, pero algunos aspectos podrían ser mejor presentados o más detallados."},
        {rating: "(2 - 3) : Suficiente", description: "La evaluación fue parcial, con resultados incompletos o mal presentados."},
        {rating: "(1 - 2) : Deficiente", description: "La evaluación fue incorrecta o mal realizada, afectando la interpretación de los resultados."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó una evaluación adecuada del modelo."}
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación",
      description: `Este criterio mide la claridad y organización del código implementado por los estudiantes. El código debe estar bien estructurado, con comentarios explicativos que describan cada parte del proceso, desde la implementación del modelo CNN hasta el entrenamiento y la evaluación. Se espera que el código sea limpio, organizado y fácil de seguir, permitiendo a cualquier lector entender el flujo de trabajo completo y las decisiones de diseño tomadas.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros y explicativos, y está bien organizado."},
        {rating: "(3 - 4) : Bueno", description: "El código está documentado y organizado, pero algunos comentarios o partes del código podrían mejorarse."},
        {rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es comprensible en su mayoría."},
        {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, y el código es difícil de seguir."},
        {rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil o imposible de entender."}
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación",
      description: `Este criterio evalúa la capacidad de los estudiantes para analizar y explicar los resultados obtenidos después de entrenar y evaluar el modelo CNN. Los estudiantes deben interpretar las métricas y los gráficos obtenidos durante el entrenamiento, explicando cómo el modelo mejora durante el entrenamiento y rinde en el conjunto de prueba. El análisis debe ser detallado e incluir reflexiones sobre posibles mejoras, los efectos de los hiperparámetros y la capacidad del modelo para generalizar a nuevos datos.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El análisis de los resultados obtenidos es detallado, explicando claramente cómo el modelo CNN ha funcionado y las conclusiones basadas en las métricas obtenidas."},
        {rating: "(3 - 4) : Bueno", description: "El análisis de los resultados es adecuado, pero podría incluir más detalle o justificación en algunos aspectos."},
        {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, pero ofrece una explicación básica de los resultados obtenidos."},
        {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados obtenidos."},
        {rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos."}
      ]
    }
  ];
  
  
  
const S8_2_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 8. Implementación de un Modelo Popular de CNN en TensorFlow + Keras y/o PyTorch en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S8_2_1;