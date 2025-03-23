// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
  activityCode: "S4.5.1",
  activityTitle: "Actividad 3. Aplicación de Técnicas de Optimización en una Red Neuronal en Google Colab",
  activitySubtitle: "Desarrollo de código en notebook para aplicar técnicas de optimización en redes neuronales",
  metaText: `En esta práctica, los estudiantes aplicarán diferentes técnicas de optimización a una red neuronal en un notebook de Google Colab, bajo la orientación del profesor. Se les solicita que:

1. Apliquen técnicas de Feature Scaling para asegurar que los valores de las entradas sean comparables.

2. Implementen Batch Normalization para normalizar las salidas de las capas intermedias y acelerar el entrenamiento.

3. Utilicen Mini-batch Gradient Descent para mejorar la convergencia y eficiencia del modelo.

4. Empleen Gradient Descent with Momentum para evitar caer en mínimos locales.

5. Apliquen RMSProp Optimization, que ajusta el learning rate basado en el promedio de los gradientes.

6. Implementen Adam Optimization, combinando RMSProp y Momentum para mejorar el rendimiento y la convergencia.

7. Utilicen Learning Rate Decay para ajustar dinámicamente el learning rate durante el entrenamiento.`,
  imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
};


const rubricData = [
  {
    criteriaTitle: "Primer criterio de Evaluación",
    description: `Este criterio evalúa la correcta implementación de una o varias técnicas de optimización en el modelo. Los estudiantes deben seleccionar e implementar técnicas como Gradient Descent, Adam, RMSProp, Learning Rate Decay, entre otras, con el objetivo de mejorar el rendimiento del modelo. Se espera que el código refleje una implementación adecuada de estas técnicas, asegurando que los hiperparámetros de la optimización (tasa de aprendizaje, momentum, etc.) estén ajustados de manera efectiva.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "La técnica de optimización seleccionada está implementada correctamente, mejorando el rendimiento de la red neuronal. El código es eficiente y sigue buenas prácticas de programación."},
      {rating: "(3 - 4) : Bueno", description: "La técnica de optimización está bien implementada, pero podría haber áreas de mejora en cuanto a eficiencia o claridad en el código."},
      {rating: "(2 - 3) : Suficiente", description: "La técnica de optimización está parcialmente implementada o tiene errores que afectan su funcionamiento, pero el esfuerzo es evidente."},
      {rating: "(1 - 2) : Deficiente", description: "La técnica de optimización está incompleta o mal implementada, con errores significativos que impiden su uso adecuado."},
      {rating: "(0 - 1) : Insuficiente", description: "No se ha implementado ninguna técnica de optimización, o la implementación es incorrecta y no produce ningún resultado válido."}
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación",
    description: `Este criterio mide la capacidad de los estudiantes para comparar el rendimiento del modelo antes y después de aplicar la técnica de optimización. Los estudiantes deben mostrar claramente cómo el modelo ha mejorado (o no) después de la optimización, utilizando métricas de evaluación como la precisión, pérdida, recall, F1 score, entre otras. La comparación debe incluir resultados numéricos y, si es posible, visualizaciones (gráficas de entrenamiento, curvas de aprendizaje, etc.).`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "La comparación entre el rendimiento del modelo con y sin la técnica de optimización está claramente documentada, con resultados bien presentados y conclusiones sólidas."},
      {rating: "(3 - 4) : Bueno", description: "La comparación está bien realizada, pero podría incluir más detalles o justificar mejor los resultados obtenidos."},
      {rating: "(2 - 3) : Suficiente", description: "La comparación es parcial o los resultados no están bien documentados, pero hay evidencia de que se ha hecho algún análisis."},
      {rating: "(1 - 2) : Deficiente", description: "La comparación es confusa o incompleta, con resultados poco claros o mal presentados."},
      {rating: "(0 - 1) : Insuficiente", description: "No se ha realizado una comparación clara entre el modelo con y sin optimización, o los resultados son incorrectos."}
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación",
    description: `Los estudiantes deben proporcionar una justificación clara y lógica de por qué seleccionaron la técnica de optimización utilizada. La explicación debe mostrar que comprenden las fortalezas y debilidades de la técnica seleccionada en relación con el modelo y los datos, y por qué era la mejor opción para mejorar el rendimiento. Se evaluará cómo esta decisión se relaciona con la naturaleza del modelo, el dataset y las necesidades de optimización específicas.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "La técnica de optimización seleccionada está bien justificada con un análisis claro de por qué es adecuada para este caso. El razonamiento está bien documentado y fundamentado."},
      {rating: "(3 - 4) : Bueno", description: "La justificación de la técnica es clara, pero podría profundizarse en algunos aspectos o mejorar la documentación."},
      {rating: "(2 - 3) : Suficiente", description: "La justificación es limitada, con pocas explicaciones sobre por qué se eligió la técnica de optimización, pero la elección tiene sentido."},
      {rating: "(1 - 2) : Deficiente", description: "La justificación es mínima o no está clara, con pocas explicaciones de por qué se eligió la técnica."},
      {rating: "(0 - 1) : Insuficiente", description: "No hay ninguna justificación para la técnica de optimización seleccionada, o la elección no tiene sentido para el problema."}
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación",
    description: `Este criterio mide la claridad y organización del código escrito por los estudiantes. El código debe estar bien estructurado y documentado con comentarios claros que expliquen las partes clave, especialmente aquellas relacionadas con la implementación de la técnica de optimización. El código debe ser fácil de leer y seguir, y la organización debe permitir que cualquier lector comprenda cómo se aplica la técnica de optimización en el modelo.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso de la implementación. La estructura es lógica y fácil de seguir."},
      {rating: "(3 - 4) : Bueno", description: "El código está documentado, pero algunos comentarios o partes de la organización podrían mejorarse para facilitar la comprensión."},
      {rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, y la organización del código podría mejorarse significativamente, pero sigue siendo comprensible."},
      {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, y el código es difícil de seguir por su organización confusa."},
      {rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil o imposible de entender."}
    ]
  },
  {
    criteriaTitle: "Quinto criterio de Evaluación",
    description: `Este criterio evalúa el análisis del impacto de la técnica de optimización aplicada. Los estudiantes deben explicar cómo la técnica afectó el rendimiento del modelo, destacando mejoras, limitaciones y cualquier resultado inesperado. El análisis debe ser detallado, basándose en las métricas de rendimiento obtenidas, y debe incluir reflexiones sobre la efectividad de la técnica en comparación con otras posibles opciones.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      {rating: "(4 - 5) : Excelente", description: "Se presenta un análisis detallado del impacto de la técnica de optimización sobre el modelo, explicando claramente cómo ha afectado la precisión, el tiempo de entrenamiento y otros factores clave."},
      {rating: "(3 - 4) : Bueno", description: "El análisis del impacto está bien realizado, pero podría ser más detallado en algunos aspectos."},
      {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, pero ofrece una idea general del impacto de la técnica de optimización."},
      {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o está mal presentado, con poca o ninguna explicación sobre el impacto de la optimización."},
      {rating: "(0 - 1) : Insuficiente", description: "No se ha realizado ningún análisis del impacto de la técnica de optimización, o el análisis es completamente incorrecto."}
    ]
  }
];

  


const S4_5_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 3. Aplicación de Técnicas de Optimización en una Red Neuronal en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S4_5_1;