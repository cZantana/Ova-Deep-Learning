// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";



const actividadData = {
  activityCode: "S3.5.1",
  activityTitle: "Actividad 2. Implementación de Backpropagation y Funciones de Activación en Redes Neuronales en Google Colab",
  activitySubtitle: "Desarrollo de código en notebook para aplicar backpropagation y funciones de activación",
  metaText: `En esta práctica, los estudiantes continuarán desarrollando sus modelos de perceptrón, redes de una sola capa y redes multicapa en un notebook de Google Colab. Se les solicita que:

• Apliquen el algoritmo de backpropagation utilizando el gradiente descendiente para ajustar los pesos.

• Integren funciones de activación (como sigmoide o ReLU) para mejorar el rendimiento en clasificación binaria.

• Rediseñen cada modelo para adaptarlo a un dataset de clasificación binaria, realizando las modificaciones necesarias en su estructura.

• Entrenen el modelo rediseñado con un dataset real, verificando el desempeño y ajustando los hiperparámetros.`,
  imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
};  

const rubricData = [
  {
    criteriaTitle: "Primer criterio de Evaluación",
    description: "Este criterio evalúa la capacidad de los estudiantes para implementar el algoritmo de backpropagation en tres tipos de modelos: el perceptrón, la red de una sola capa y la red neuronal multicapa. Los estudiantes deben demostrar que comprenden el proceso de ajuste de los pesos a través de la retropropagación del error y la actualización de los pesos en función de la derivada del error con respecto a los parámetros del modelo.",
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El algoritmo de backpropagation está implementado correctamente en todos los modelos (perceptrón, una capa y multicapa). Los ajustes de pesos se realizan de manera eficiente y producen resultados consistentes." },
      { rating: "(3 - 4) : Bueno", description: "El backpropagation está mayormente bien implementado en los tres modelos, pero hay áreas de optimización o claridad en el código que podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "El backpropagation está implementado de manera parcial o con errores en alguno de los modelos, afectando el rendimiento general." },
      { rating: "(1 - 2) : Deficiente", description: "La implementación del backpropagation es incompleta o incorrecta en la mayoría de los modelos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se ha implementado correctamente el backpropagation en ninguno de los modelos." }
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación",
    description: "Los estudiantes deben integrar adecuadamente las funciones de activación en los modelos que desarrollen. Esto incluye seleccionar y aplicar funciones de activación adecuadas como la sigmoide, ReLU, tanh o softmax en los lugares correctos dentro de la arquitectura del modelo. La función de activación debe ajustarse a las tareas de clasificación y permitir que la red aprenda características no lineales de los datos.",
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Las funciones de activación como sigmoide o ReLU están integradas correctamente en todos los modelos y mejoran significativamente la capacidad de los modelos para realizar clasificación binaria." },
      { rating: "(3 - 4) : Bueno", description: "Las funciones de activación están implementadas en la mayoría de los modelos, pero podrían optimizarse o documentarse mejor en algunos casos." },
      { rating: "(2 - 3) : Suficiente", description: "Las funciones de activación están parcialmente integradas o mal implementadas, lo que afecta el rendimiento de los modelos en la clasificación binaria." },
      { rating: "(1 - 2) : Deficiente", description: "Las funciones de activación no están implementadas correctamente en la mayoría de los modelos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se ha implementado ninguna función de activación, lo que afecta gravemente el desempeño de los modelos." }
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación",
    description: "En este criterio, se evalúa el rediseño del modelo para realizar una tarea de clasificación binaria. Los estudiantes deben adaptar su red (perceptrón, red de una sola capa o multicapa) para resolver problemas de clasificación binaria, ajustando la arquitectura, las funciones de activación y los mecanismos de optimización del modelo. Esto incluye seleccionar una estructura adecuada para la tarea binaria y asegurar que la salida del modelo sea consistente con un problema de dos clases.",
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Los modelos han sido rediseñados de manera efectiva para trabajar con datasets de clasificación binaria. El rediseño es eficiente, bien documentado y el código sigue buenas prácticas." },
      { rating: "(3 - 4) : Bueno", description: "El rediseño de los modelos es funcional en su mayoría, pero hay detalles en la implementación que podrían mejorarse en términos de claridad o eficiencia." },
      { rating: "(2 - 3) : Suficiente", description: "El rediseño de los modelos está incompleto o tiene fallos que limitan su efectividad en la clasificación binaria." },
      { rating: "(1 - 2) : Deficiente", description: "El rediseño es incorrecto o incompleto, lo que impide que los modelos funcionen correctamente con datos de clasificación binaria." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó un rediseño adecuado de los modelos para adaptarse a la clasificación binaria." }
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación",
    description: "Este criterio evalúa cómo los estudiantes entrenan el modelo utilizando un dataset de clasificación binaria. Se debe demostrar que el modelo puede aprender y generalizar a partir de los datos de entrenamiento. Se considera la configuración adecuada del dataset, el preprocesamiento necesario (normalización o escalado) y la división en conjuntos de entrenamiento y prueba. También se evaluará si el modelo convergió adecuadamente durante el entrenamiento y si los resultados obtenidos reflejan un buen desempeño en la tarea binaria.",
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El modelo rediseñado se entrena correctamente con un dataset de clasificación binaria. Los resultados son claros y bien presentados, mostrando un buen ajuste y rendimiento del modelo." },
      { rating: "(3 - 4) : Bueno", description: "El modelo se entrena correctamente, pero los resultados o la presentación de los mismos podrían ser más claros o mejor justificados." },
      { rating: "(2 - 3) : Suficiente", description: "El modelo se entrena parcialmente con el dataset de clasificación binaria, pero los resultados son inconsistentes o no están bien presentados." },
      { rating: "(1 - 2) : Deficiente", description: "El modelo no se entrena correctamente o no produce resultados adecuados con el dataset de clasificación binaria." },
      { rating: "(0 - 1) : Insuficiente", description: "No se ha realizado el entrenamiento con el dataset de clasificación binaria, o los resultados son completamente incorrectos." }
    ]
  },
  {
    criteriaTitle: "Quinto criterio de Evaluación",
    description: "Este criterio mide la claridad y organización del código escrito por los estudiantes. El código debe estar bien estructurado y debe incluir comentarios que expliquen cada parte del proceso, desde la configuración del modelo hasta el entrenamiento y la evaluación. La organización del código debe facilitar su comprensión y mantenimiento, permitiendo a cualquier lector seguir el flujo de trabajo del proyecto con facilidad.",
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso del proceso, y está organizado de manera eficiente y lógica." },
      { rating: "(3 - 4) : Bueno", description: "El código está mayormente documentado y organizado, pero algunas secciones podrían beneficiarse de más detalles o una mejor estructura." },
      { rating: "(2 - 3) : Suficiente", description: "La documentación es limitada y la organización del código no es clara, lo que dificulta la comprensión del proceso." },
      { rating: "(1 - 2) : Deficiente", description: "La documentación es escasa o inexistente, y el código está desorganizado, dificultando su lectura y comprensión." },
      { rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil de seguir o entender." }
    ]
  },
  {
    criteriaTitle: "Sexto criterio de Evaluación",
    description: "En este criterio, los estudiantes deben proporcionar una justificación adecuada de las decisiones tomadas durante el diseño del modelo y el proceso de entrenamiento. También deben analizar los resultados obtenidos, discutiendo el desempeño del modelo en términos de precisión, pérdida u otra métrica relevante para la clasificación binaria. El análisis debe incluir una reflexión sobre posibles mejoras o limitaciones del modelo, y una interpretación de los resultados en función del dataset utilizado.",
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Los resultados obtenidos se justifican claramente con un análisis detallado. Se presentan conclusiones sólidas sobre el desempeño de los modelos y la eficacia del rediseño." },
      { rating: "(3 - 4) : Bueno", description: "Los resultados están bien presentados, pero la justificación podría ser más profunda o detallada." },
      { rating: "(2 - 3) : Suficiente", description: "Los resultados son presentados, pero hay poca justificación o análisis del desempeño de los modelos." },
      { rating: "(1 - 2) : Deficiente", description: "Los resultados son incompletos o incorrectos, con poco o ningún análisis de los mismos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se presentan resultados o análisis adecuados." }
    ]
  }
];



const S3_5_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 2.  Implementación de Backpropagation y Funciones de Activación en Redes Neuronales en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S3_5_1;