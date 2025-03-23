// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S4.6.1",
    activityTitle: "Actividad 4. Aplicación de Métodos de Regularización en una Red Neuronal con TensorFlow + Keras y/o PyTorch",
    activitySubtitle: "Desarrollo de código en notebook para implementar métodos de regularización en una red neuronal",
    metaText: `En esta actividad, los estudiantes aplicarán métodos de regularización en una red neuronal implementada desde cero, sin el uso de librerías especializadas como TensorFlow o PyTorch. La red neuronal debe ser programada utilizando NumPy para realizar las operaciones matriciales y debe incluir al menos una capa oculta. Los estudiantes deberán implementar manualmente las técnicas de regularización, incluyendo L2, L1, Dropout, Data Augmentation y Early Stopping.

Requerimientos de la Actividad:

Implementación de la Red Neuronal:

1. Crear una red neuronal multicapa desde cero, utilizando operaciones matriciales y funciones de activación básicas (sigmoide, ReLU, etc.).

2. Implementar el algoritmo de backpropagation para ajustar los pesos de la red.

Aplicación de Métodos de Regularización:

1. Implementar manualmente técnicas de regularización como L2, L1, Dropout, Data Augmentation y Early Stopping en el proceso de entrenamiento del modelo.

2. Asegurarse de que cada técnica esté correctamente integrada en el flujo de cálculo de los pesos y el entrenamiento de la red.

Análisis de Resultados:

1. Comparar el rendimiento del modelo antes y después de aplicar los métodos de regularización, utilizando métricas como precisión, pérdida, etc.

2. Demostrar cómo las técnicas de regularización afectan el comportamiento de la red y previenen el overfitting.

Documentación y Organización del Código:

1. Documentar cada parte del código, explicando claramente la lógica detrás de las implementaciones de las técnicas de regularización.

2. Organizar el código de manera que sea fácil de entender y seguir.

Entrega Final:

1. Los estudiantes entregarán un notebook con la implementación de la red neuronal y las técnicas de regularización.

2. Incluirán gráficos y análisis que muestren el impacto de las regularizaciones sobre el modelo.`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };


  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación",
      description: `Este criterio evalúa la correcta implementación de diversos métodos de regularización en una red neuronal. Los estudiantes deben aplicar uno o más de los siguientes métodos: L2 (Ridge), L1 (Lasso), Dropout, Data Augmentation, y Early Stopping. La implementación debe mostrar cómo cada técnica contribuye a mejorar el rendimiento y prevenir el overfitting del modelo, utilizando las funciones y herramientas de TensorFlow + Keras o PyTorch.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El estudiante implementó correctamente al menos dos técnicas de regularización desde cero, asegurándose de que cada técnica está completamente integrada en el flujo de cálculo de los pesos y el entrenamiento. El código funciona sin errores y las técnicas aplicadas mejoran claramente el modelo."},
        {rating: "(3 - 4) : Bueno", description: "El estudiante implementó correctamente al menos una técnica de regularización. La integración está bien realizada, pero algunos aspectos pueden optimizarse o falta detalle en una técnica adicional. El modelo muestra una mejora moderada."},
        {rating: "(2 - 3) : Suficiente", description: "El estudiante implementó al menos una técnica de regularización, pero hay errores menores o áreas donde la técnica no está completamente integrada en el modelo. El impacto en el modelo es visible, pero limitado."},
        {rating: "(1 - 2) : Deficiente", description: "La implementación de las técnicas de regularización es incompleta o incorrecta, lo que afecta negativamente el rendimiento del modelo. Se implementó una técnica de forma parcial."},
        {rating: "(0 - 1) : Insuficiente", description: "No se implementó ninguna técnica de regularización o la implementación es completamente incorrecta, sin impacto positivo en el modelo."}
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación",
      description: `En este criterio, se evalúa la capacidad de los estudiantes para justificar la selección de los métodos de regularización aplicados. Los estudiantes deben explicar por qué eligieron cada técnica en función de las características del modelo y del problema a resolver. La justificación debe incluir las razones por las que ciertas técnicas de regularización son más adecuadas para su red neuronal, cómo se relacionan con el riesgo de overfitting, y cómo afectan al rendimiento general.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La justificación de los métodos seleccionados es clara, detallada y bien fundamentada. El estudiante demuestra una comprensión profunda de cómo cada técnica de regularización es adecuada para el problema y cómo mejora el rendimiento del modelo."},
        {rating: "(3 - 4) : Bueno", description: "El estudiante proporciona una justificación adecuada, aunque podría incluir más detalles o ser más clara en algunas partes. La elección de las técnicas es razonable y está alineada con el problema."},
        {rating: "(2 - 3) : Suficiente", description: "La justificación está presente, pero es limitada o poco clara en cuanto a por qué se eligieron ciertas técnicas. La relación entre la técnica y el problema no está completamente justificada."},
        {rating: "(1 - 2) : Deficiente", description: "La justificación es mínima o incorrecta. El estudiante no demuestra una comprensión clara de por qué se eligieron las técnicas de regularización o cómo afectan al modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se proporcionó una justificación adecuada o la justificación es completamente incorrecta."}
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación",
      description: `Este criterio mide la capacidad de los estudiantes para analizar el impacto de los métodos de regularización en el modelo. Los estudiantes deben demostrar cómo las técnicas de regularización afectan el rendimiento del modelo, evaluando cambios en las métricas clave (precisión, pérdida, F1 score, etc.). El análisis debe incluir comparaciones claras entre los resultados antes y después de la regularización, destacando las mejoras en términos de prevención de overfitting y generalización del modelo.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El análisis es detallado y muestra claramente cómo las técnicas de regularización afectaron positivamente el rendimiento del modelo. Se proporcionan comparaciones claras entre el modelo regularizado y el modelo sin regularización, respaldadas por métricas relevantes y gráficos bien presentados."},
        {rating: "(3 - 4) : Bueno", description: "El análisis es adecuado y muestra el impacto de las técnicas de regularización. Se utilizan métricas clave y comparaciones con el modelo no regularizado, aunque algunos aspectos podrían estar más detallados o visualizados de forma más clara."},
        {rating: "(2 - 3) : Suficiente", description: "El análisis está presente, pero es limitado. Aunque se presenta una comparación entre el modelo regularizado y no regularizado, faltan detalles importantes o no se utilizan métricas clave para respaldar el análisis."},
        {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o incorrecto, con poca claridad sobre cómo las técnicas de regularización impactaron en el modelo. Las métricas no son claras o están mal presentadas."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó un análisis adecuado o no se proporcionó una comparación entre el modelo regularizado y el no regularizado."}
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación",
      description: `Este criterio evalúa la claridad y organización del código implementado. Los estudiantes deben asegurarse de que el código esté bien estructurado, con secciones claras y comentarios explicativos sobre cada técnica de regularización aplicada. La organización debe facilitar la comprensión de cómo se integran las técnicas de regularización en la red neuronal y su impacto en el entrenamiento del modelo.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El código está muy bien documentado, con comentarios claros que explican cada paso y cada técnica de regularización aplicada. La estructura del código es lógica y fácil de seguir, permitiendo a cualquier persona entender el flujo del programa."},
        {rating: "(3 - 4) : Bueno", description: "El código está bien documentado, pero algunos comentarios adicionales o mejoras en la organización del código podrían ser útiles. En general, el código es comprensible y sigue una estructura adecuada."},
        {rating: "(2 - 3) : Suficiente", description: "El código está documentado, pero de manera limitada. Los comentarios son mínimos o poco explicativos, lo que dificulta seguir algunos pasos del proceso de regularización."},
        {rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o inexistente, y la organización del código es confusa, lo que hace difícil entender el flujo de trabajo o la implementación de las técnicas de regularización."},
        {rating: "(0 - 1) : Insuficiente", description: "No se proporcionó documentación adecuada ni se organizó el código de manera que pueda ser comprendido fácilmente."}
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación",
      description: `En este criterio, se espera que los estudiantes realicen una comparación clara entre los resultados obtenidos con y sin la aplicación de regularización. La comparación debe mostrar de manera cuantitativa y cualitativa cómo las técnicas de regularización impactan en el rendimiento del modelo, utilizando gráficos y métricas de evaluación para ilustrar los cambios. Se espera que los estudiantes identifiquen diferencias significativas en la capacidad del modelo para generalizar correctamente cuando se utilizan técnicas de regularización.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La comparación entre el modelo con y sin regularización está bien presentada, con gráficos y métricas claras que demuestran cómo las técnicas de regularización impactaron en el rendimiento del modelo. Se destacan las diferencias clave y se proporciona un análisis profundo de los resultados."},
        {rating: "(3 - 4) : Bueno", description: "La comparación entre los modelos es adecuada, con diferencias claramente expuestas entre el rendimiento con y sin regularización. Algunos aspectos podrían estar mejor detallados o visualizados."},
        {rating: "(2 - 3) : Suficiente", description: "La comparación es limitada o carece de detalle, pero presenta una idea general del impacto de las técnicas de regularización. Las diferencias entre los modelos son visibles, pero el análisis es superficial."},
        {rating: "(1 - 2) : Deficiente", description: "La comparación es mínima o mal presentada, con poca claridad sobre cómo las técnicas de regularización afectaron al modelo. Las métricas no son claras o están mal interpretadas."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó una comparación adecuada entre los resultados con y sin regularización."}
      ]
    }
  ];
  

  


const S4_5_2 = () => {
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
  
  export default S4_5_2;