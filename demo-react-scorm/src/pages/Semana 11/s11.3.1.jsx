// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
  activityCode: "S11.3.1",
  activityTitle: "Actividad 11. Implementación de una Red Neuronal Recurrente (RNN) para la Predicción de Series de Tiempo en Google Colab",
  activitySubtitle: "Implementación de una RNN (LSTM o GRU) para la predicción de series de tiempo",
  metaText: `En esta actividad, los estudiantes desarrollarán un código en un notebook de Google Colab para implementar una Red Neuronal Recurrente (RNN) utilizando TensorFlow o PyTorch, con alguna de las variantes avanzadas, como LSTM o GRU. El objetivo es predecir valores futuros de una serie de tiempo utilizando un dataset proporcionado o seleccionado por los estudiantes.`,
  imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
};
  
  
const rubricData = [
  {
    criteriaTitle: "Primer criterio de Evaluación.",
    description: `Este criterio evalúa la correcta implementación de una variante de red neuronal recurrente (RNN), como LSTM o GRU, utilizando TensorFlow/Keras o PyTorch. Los estudiantes deben demostrar cómo estructurar el modelo de RNN para la predicción de series de tiempo, ajustando correctamente las capas recurrentes y asegurándose de que la arquitectura pueda capturar dependencias temporales en los datos. Se espera que los estudiantes justifiquen la elección de la variante utilizada y que implementen un modelo eficiente y funcional.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "La variante de RNN seleccionada (LSTM o GRU) está implementada correctamente. El código es eficiente y sigue buenas prácticas de programación."},
      {rating: "(3 - 4) : Bueno", description: "La RNN está bien implementada, pero puede mejorarse en términos de eficiencia o claridad en el código."},
      {rating: "(2 - 3) : Suficiente", description: "La implementación de la RNN está parcialmente completa, con algunos errores que afectan el rendimiento o la lógica del modelo."},
      {rating: "(1 - 2) : Deficiente", description: "La implementación de la RNN es incorrecta o incompleta, afectando el funcionamiento del modelo."},
      {rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente la RNN."}
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación.",
    description: `Este criterio evalúa la carga y preprocesamiento del dataset de series de tiempo. Los estudiantes deben cargar un dataset adecuado y aplicar el preprocesamiento necesario, que puede incluir normalización, manejo de valores faltantes, división en ventanas temporales y la creación de secuencias de entrada y salida. El preprocesamiento debe estar integrado en el flujo de trabajo para garantizar que los datos estén listos para el entrenamiento del modelo.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "El dataset está bien seleccionado, cargado y preprocesado. El preprocesamiento es correcto y adecuado para el modelo."},
      {rating: "(3 - 4) : Bueno", description: "El preprocesamiento de los datos está bien realizado, pero puede mejorarse en algunos aspectos."},
      {rating: "(2 - 3) : Suficiente", description: "El preprocesamiento es limitado o tiene errores menores que afectan el rendimiento del modelo."},
      {rating: "(1 - 2) : Deficiente", description: "El preprocesamiento es incorrecto o incompleto, lo que afecta gravemente el entrenamiento del modelo."},
      {rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el preprocesamiento del dataset."}
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación.",
    description: `Este criterio evalúa el entrenamiento del modelo recurrente para la predicción de series de tiempo. Los estudiantes deben ajustar los hiperparámetros del modelo (tasa de aprendizaje, número de épocas, tamaño del lote, etc.) y realizar un entrenamiento adecuado, monitoreando el progreso a través de métricas como la pérdida o el error cuadrático medio (MSE). El entrenamiento debe mostrar cómo el modelo mejora su capacidad para predecir valores futuros y cómo los hiperparámetros afectan el rendimiento.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "El modelo ha sido entrenado correctamente, con ajustes adecuados de hiperparámetros y una buena convergencia."},
      {rating: "(3 - 4) : Bueno", description: "El entrenamiento fue adecuado, pero algunos aspectos, como el ajuste de hiperparámetros, podrían mejorarse."},
      {rating: "(2 - 3) : Suficiente", description: "El entrenamiento presenta problemas de convergencia o falta de ajuste en los hiperparámetros, afectando parcialmente el rendimiento."},
      {rating: "(1 - 2) : Deficiente", description: "El entrenamiento fue incorrecto o con fallos graves que afectaron el rendimiento del modelo."},
      {rating: "(0 - 1) : Insuficiente", description: "No se realizó correctamente el entrenamiento del modelo."}
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación.",
    description: `Este criterio evalúa la evaluación del rendimiento del modelo después del entrenamiento. Los estudiantes deben probar el modelo con datos no vistos o del conjunto de prueba, utilizando métricas de evaluación como MSE, MAE o RMSE para medir la precisión de las predicciones. Se espera que presenten gráficos que muestren las predicciones frente a los valores reales, demostrando la capacidad del modelo para predecir tendencias y patrones en la serie de tiempo.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "La evaluación del modelo se realizó correctamente, utilizando métricas adecuadas y presentando resultados claros con gráficos y análisis."},
      {rating: "(3 - 4) : Bueno", description: "La evaluación del modelo fue adecuada, pero algunos aspectos podrían ser mejor presentados o más detallados."},
      {rating: "(2 - 3) : Suficiente", description: "La evaluación es parcial o con resultados incompletos."},
      {rating: "(1 - 2) : Deficiente", description: "La evaluación es mínima o los resultados obtenidos no son concluyentes."},
      {rating: "(0 - 1) : Insuficiente", description: "No se realizó una evaluación adecuada del modelo."}
    ]
  },
  {
    criteriaTitle: "Quinto criterio de Evaluación.",
    description: `Este criterio mide la organización y documentación del código en el notebook de Google Colab. El código debe estar bien estructurado, con comentarios claros que expliquen cada parte del proceso, desde la implementación de la RNN hasta el preprocesamiento, entrenamiento y evaluación. Se espera que la organización del código permita a cualquier lector seguir el flujo de trabajo de manera clara y comprensible.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros y organizado de manera lógica."},
      {rating: "(3 - 4) : Bueno", description: "El código está documentado, pero podría mejorar en organización o incluir más comentarios."},
      {rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero el código es mayormente comprensible."},
      {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, dificultando la comprensión."},
      {rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código."}
    ]
  },
  {
    criteriaTitle: "Sexto criterio de Evaluación.",
    description: `Este criterio evalúa la capacidad de los estudiantes para analizar los resultados obtenidos y explicar el funcionamiento del modelo RNN. Los estudiantes deben interpretar las métricas y los gráficos generados durante la evaluación, proporcionando un análisis crítico del rendimiento del modelo. El análisis debe incluir reflexiones sobre las fortalezas y limitaciones del modelo en la predicción de series de tiempo, así como posibles mejoras, y explicar cómo el modelo captura las dependencias temporales.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "El análisis de los resultados es claro y bien fundamentado, explicando cómo el modelo predice la serie de tiempo y detallando las conclusiones basadas en las métricas."},
      {rating: "(3 - 4) : Bueno", description: "El análisis es adecuado, pero podría incluir más detalles o justificaciones en algunas áreas."},
      {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, pero ofrece una explicación básica de los resultados obtenidos."},
      {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados obtenidos."},
      {rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos."}
    ]
  }
];
  
  
const S11_3_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 11. Implementación de una Red Neuronal Recurrente (RNN) para la Predicción de Series de Tiempo en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S11_3_1;