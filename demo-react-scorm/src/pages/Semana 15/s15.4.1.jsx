// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
  activityCode: "S15.4.1",
  activityTitle: "Actividad 16. Trabajo Cooperativo sobre Data Journey, Acceso y Manipulación de Datos, Monitoreo y Logging, y Model Serving con Weights & Biases",
  activitySubtitle: "Trabajo cooperativo sobre conceptos de Data Journey, acceso y manipulación de datos, monitoreo y logging, y model serving usando W&B",
  metaText: `En esta actividad, los estudiantes se dividirán en pequeños grupos para profundizar en los siguientes conceptos clave del flujo de trabajo en machine learning:

• Data Journey (desde la recolección hasta la implementación en modelos)

• Acceso y manipulación de datos (SQL, MongoDB, API, JSON, etc.)

• Herramientas de monitoreo y logging

• Model Serving

Cada grupo trabajará de manera colaborativa para entender y aplicar estos conceptos en un proyecto práctico.  

El informe debe incluir:  

• Introducción  

• Desarrollo  

• Resultados  

• Conclusiones  

• Bibliografía y/o Webgrafía`,
  imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
};
  
  
const rubricData = [
  {
    criteriaTitle: "Primer criterio de Evaluación.",
    description: `Este criterio evalúa el nivel de investigación y comprensión que los estudiantes han logrado en los temas clave del trabajo cooperativo: Data Journey, Acceso y Manipulación de Datos, y Herramientas de Monitoreo y Logging. Se espera que demuestren una sólida comprensión de cada concepto, presentando su investigación de manera clara y con referencias a prácticas actuales y casos de uso.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "La investigación y el análisis de los conceptos clave son detallados, bien documentados y demuestran una comprensión profunda." },
      { rating: "(3 - 4) : Bueno", description: "La investigación es adecuada, pero algunos conceptos podrían estar mejor explicados o detallados." },
      { rating: "(2 - 3) : Suficiente", description: "La investigación es limitada, pero cubre los aspectos básicos de los temas." },
      { rating: "(1 - 2) : Deficiente", description: "La investigación es mínima o incompleta, con poca profundidad en la comprensión de los conceptos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó una investigación adecuada o los conceptos clave no fueron comprendidos." }
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación.",
    description: `Este criterio evalúa la implementación práctica del proyecto utilizando Weights & Biases (W&B) para monitorear y registrar los experimentos. Los estudiantes deben configurar adecuadamente el seguimiento de los entrenamientos y métricas del modelo en la plataforma, integrando W&B en su flujo de trabajo y configurando gráficos y dashboards que visualicen los datos en tiempo real.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "La integración con W&B está correctamente realizada, con un proyecto bien organizado que incluye monitoreo y registro detallado." },
      { rating: "(3 - 4) : Bueno", description: "La implementación en W&B es adecuada, pero algunos aspectos del monitoreo o registro podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "La implementación es limitada, pero incluye las funciones básicas de monitoreo y registro." },
      { rating: "(1 - 2) : Deficiente", description: "La implementación de W&B es incorrecta o incompleta, afectando el monitoreo del modelo." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente el monitoreo del modelo en W&B." }
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación.",
    description: `Este criterio evalúa la calidad del monitoreo y logging del modelo durante su entrenamiento. Los estudiantes deben mostrar cómo se monitorean las métricas clave (pérdida, precisión, etc.) y cómo se registran los experimentos en W&B, utilizando técnicas de logging que faciliten el análisis y la mejora continua del proceso de entrenamiento.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El monitoreo está bien implementado, con visualizaciones claras de las métricas y una comprensión completa del uso de W&B." },
      { rating: "(3 - 4) : Bueno", description: "El monitoreo y logging son adecuados, pero algunos aspectos del seguimiento de métricas podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "El monitoreo es básico, ofreciendo una idea general del rendimiento del modelo." },
      { rating: "(1 - 2) : Deficiente", description: "El monitoreo es mínimo o mal presentado, con poca claridad sobre el rendimiento." },
      { rating: "(0 - 1) : Insuficiente", description: "No se realizó un monitoreo adecuado del modelo." }
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación.",
    description: `Este criterio mide la colaboración efectiva dentro del equipo. Se evaluará cómo los miembros del grupo distribuyen las responsabilidades, colaboran en la implementación del proyecto y resuelven problemas de manera conjunta. Se espera que todos los miembros contribuyan de manera equitativa, mostrando buena coordinación y un esfuerzo cooperativo claramente reflejado en el resultado final.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El equipo trabajó de manera colaborativa, dividiendo las tareas eficientemente y demostrando una excelente comunicación." },
      { rating: "(3 - 4) : Bueno", description: "El equipo trabajó adecuadamente, pero algunos aspectos de la colaboración o distribución de tareas podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "El trabajo en equipo fue limitado, con problemas en la distribución de tareas o comunicación." },
      { rating: "(1 - 2) : Deficiente", description: "El trabajo en equipo fue mínimo, con falta de colaboración o participación desigual." },
      { rating: "(0 - 1) : Insuficiente", description: "No hubo una colaboración adecuada entre los miembros del equipo." }
    ]
  },
  {
    criteriaTitle: "Quinto criterio de Evaluación.",
    description: `Este criterio evalúa la documentación y presentación del proyecto completo. Se espera que los estudiantes documenten cada parte del proceso, desde la investigación de los conceptos clave hasta la implementación y evaluación del proyecto en W&B. La documentación debe incluir comentarios en el código, explicaciones en el notebook y una presentación final bien estructurada que destaque los logros, dificultades y soluciones aplicadas.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El documento final está bien organizado, con explicaciones claras y detalladas que reflejan una comprensión profunda y un trabajo cohesionado." },
      { rating: "(3 - 4) : Bueno", description: "La documentación es adecuada, pero algunos aspectos podrían estar mejor explicados o presentados." },
      { rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, pero ofrece una idea general de los resultados y conceptos aprendidos." },
      { rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o confusa, con poca claridad sobre los conceptos y el proyecto." },
      { rating: "(0 - 1) : Insuficiente", description: "No se entregó una documentación adecuada ni se presentó correctamente el proyecto." }
    ]
  }
];
  
  
const S15_4_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 16. Trabajo Cooperativo sobre Data Journey, Acceso y Manipulación de Datos, Monitoreo y Logging, y Model Serving con Weights & Biases"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S15_4_1;