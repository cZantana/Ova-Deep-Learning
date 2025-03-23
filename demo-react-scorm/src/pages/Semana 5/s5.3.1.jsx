// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S5.3.2",
    activityTitle: "Actividad 5. Implementación de una Red Neuronal para Clasificación Multiclase en TensorFlow Keras o PyTorch (sin Convolución)",
    activitySubtitle: "Desarrollo de código en notebook para implementar una red neuronal de clasificación multiclase con MNIST",
    metaText: `En esta práctica, los estudiantes desarrollarán una red neuronal para realizar una clasificación multiclase utilizando TensorFlow Keras o PyTorch, con el dataset MNIST, que contiene imágenes de dígitos escritos a mano (0-9). No deben emplearse capas convolucionales en la red neuronal.

    Además de la implementación técnica, los estudiantes complementarán su comprensión leyendo los Capítulos 1 y 2 del libro "Deep Learning with PyTorch: Build, train, and tune neural networks using Python tools".

    Este material permitirá a los estudiantes consolidar sus conocimientos sobre la construcción y entrenamiento de redes neuronales.`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };


  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación",
      description: `Este criterio evalúa la correcta implementación de una red neuronal para resolver un problema de clasificación multiclase, utilizando TensorFlow Keras o PyTorch. La red debe incluir al menos una capa oculta, una función de activación adecuada (por ejemplo, softmax en la capa de salida) y una arquitectura que permita clasificar múltiples clases. Se espera que los estudiantes configuren correctamente las capas de entrada, ocultas y salida, asegurándose de que el modelo esté optimizado para la clasificación de más de dos clases.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La red neuronal está correctamente implementada, sin el uso de capas convolucionales. El código sigue buenas prácticas, y el diseño del modelo es adecuado para la tarea de clasificación multiclase."},
        {rating: "(3 - 4) : Bueno", description: "La red neuronal está bien implementada, aunque el diseño o la estructura podrían mejorarse para mayor eficiencia o claridad."},
        {rating: "(2 - 3) : Suficiente", description: "La red neuronal está parcialmente implementada o contiene errores menores, pero la lógica básica está presente."},
        {rating: "(1 - 2) : Deficiente", description: "La implementación de la red neuronal es incorrecta o incompleta, afectando el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se ha implementado correctamente la red neuronal, o el diseño es completamente erróneo."}
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación",
      description: `En este criterio se evalúa si los estudiantes seleccionaron y aplicaron correctamente las funciones de activación en la red neuronal. Para la tarea de clasificación multiclase, es esencial que los estudiantes apliquen la función softmax en la capa de salida para garantizar que el modelo devuelva probabilidades por clase. Además, deben elegir funciones adecuadas para las capas ocultas, como ReLU, tanh, u otras, justificando su elección en función de la naturaleza del problema y los datos.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El modelo ha sido entrenado adecuadamente en el dataset MNIST, y se observa una buena convergencia. Se utilizaron técnicas apropiadas para ajustar el modelo, como el manejo del learning rate o el batch size."},
        {rating: "(3 - 4) : Bueno", description: "El entrenamiento se realizó de manera adecuada, pero algunos aspectos podrían haberse optimizado mejor para una mayor eficiencia o convergencia."},
        {rating: "(2 - 3) : Suficiente", description: "El modelo fue entrenado, pero con problemas de convergencia o falta de ajuste en los hiperparámetros."},
        {rating: "(1 - 2) : Deficiente", description: "El entrenamiento del modelo fue inadecuado, con fallos en la convergencia o problemas significativos en el ajuste."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento del modelo, o los resultados son incorrectos."}
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación",
      description: `Este criterio evalúa cómo los estudiantes configuran y preparan el dataset para una tarea de clasificación multiclase. Esto incluye el preprocesamiento necesario para convertir las etiquetas en formato categórico (como one-hot encoding) y dividir correctamente los datos en conjuntos de entrenamiento, validación y prueba. Además, se espera que los estudiantes configuren correctamente el flujo de datos hacia el modelo para garantizar que la red entrene con el formato correcto y las etiquetas adecuadas.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Los resultados del modelo han sido evaluados correctamente, mostrando métricas como la precisión, y los resultados son claros y bien presentados."},
        {rating: "(3 - 4) : Bueno", description: "La evaluación del modelo fue correcta, pero la presentación de los resultados o el análisis podría mejorarse."},
        {rating: "(2 - 3) : Suficiente", description: "La evaluación fue realizada, pero los resultados son confusos o no se presentaron adecuadamente."},
        {rating: "(1 - 2) : Deficiente", description: "La evaluación fue incompleta o los resultados no fueron precisos."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó una evaluación adecuada del modelo, o los resultados son completamente erróneos."}
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación",
      description: `En este criterio se mide la capacidad de los estudiantes para entrenar el modelo y ajustar los hiperparámetros relevantes, como la tasa de aprendizaje, el número de épocas, el tamaño del lote, etc. Se espera que el modelo sea entrenado adecuadamente, con un buen ajuste en los datos de entrenamiento y una validación que permita asegurar que no hay overfitting ni underfitting. Además, los estudiantes deben realizar un monitoreo adecuado de las métricas durante el entrenamiento.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La lectura de los capítulos 1 y 2 del libro fue aplicada correctamente en la práctica, mostrando una buena integración de los conceptos aprendidos."},
        {rating: "(3 - 4) : Bueno", description: "Los conceptos teóricos fueron aplicados de manera adecuada, pero podría haberse realizado un uso más profundo de la teoría."},
        {rating: "(2 - 3) : Suficiente", description: "Se integraron algunos conceptos teóricos, pero de manera limitada o con errores en su interpretación."},
        {rating: "(1 - 2) : Deficiente", description: "Los conceptos teóricos fueron mal aplicados o no se integraron adecuadamente en la práctica."},
        {rating: "(0 - 1) : Insuficiente", description: "No se aplicaron los conceptos teóricos aprendidos en la lectura."}
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación",
      description: `Este criterio evalúa cómo los estudiantes evalúan el rendimiento del modelo en el conjunto de prueba o validación, utilizando métricas como la precisión, recall, F1 score, y otras que sean relevantes para una tarea de clasificación multiclase. Es crucial que los estudiantes demuestren que el modelo generaliza bien y que su rendimiento en el conjunto de prueba es consistente con lo esperado. Deben proporcionar un análisis basado en los resultados obtenidos y demostrar comprensión de las métricas.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso del proceso. La estructura es lógica y fácil de seguir."},
        {rating: "(3 - 4) : Bueno", description: "El código está bien organizado y documentado, aunque algunos comentarios o partes de la organización podrían mejorarse."},
        {rating: "(2 - 3) : Suficiente", description: "La documentación y organización del código son limitadas, pero sigue siendo comprensible."},
        {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, y el código es difícil de seguir."},
        {rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil o imposible de entender."}
      ]
    },
    {
      criteriaTitle: "Sexto criterio de Evaluación",
      description: `Este criterio evalúa la organización del código y la documentación proporcionada por los estudiantes. El código debe estar bien estructurado y debe incluir comentarios explicativos que describan cada paso, desde la configuración del dataset hasta el entrenamiento y evaluación del modelo. Se espera que el código sea fácil de seguir y que la documentación explique claramente las decisiones tomadas durante la implementación, como la elección de hiperparámetros y funciones de activación.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Los resultados obtenidos han sido analizados de manera crítica, mostrando una buena comprensión de los puntos fuertes y débiles del modelo. Se presentan conclusiones sólidas y justificadas."},
        {rating: "(3 - 4) : Bueno", description: "El análisis de los resultados es adecuado, pero podría incluir más detalles o justificaciones."},
        {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado o incompleto, pero se ofrece una idea general del rendimiento del modelo."},
        {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poco o ningún razonamiento detrás de los resultados."},
        {rating: "(0 - 1) : Insuficiente", description: "No se presenta un análisis adecuado de los resultados obtenidos, o el análisis es incorrecto."}
      ]
    }
  ];
  
  
const S5_3_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 5. Implementación de una Red Neuronal para Clasificación Multiclase en TensorFlow Keras o PyTorch (sin Convolución)"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S5_3_1;