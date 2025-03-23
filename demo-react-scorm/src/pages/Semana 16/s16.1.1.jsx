// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
  activityCode: "S16.1.1",
  activityTitle: "Actividad Final: Proyecto Libre de Aplicación de Modelos con Monitoreo y Optimización en Google Colab",
  activitySubtitle: "Proyecto libre en el que se aplican modelos con técnicas de optimización y herramientas de monitoreo",
  metaText: `En esta última actividad, los estudiantes realizarán un proyecto libre en un notebook de Google Colab en el que apliquen alguno de los modelos vistos durante el curso en un campo disciplinar de su elección. El objetivo es poner en práctica todo lo aprendido, aplicando conceptos de optimización y utilizando herramientas de monitoreo como Weights & Biases (W&B) u otra plataforma similar. Además, se evaluará el uso de la mayor cantidad posible de conceptos aprendidos durante el curso.

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
    description: `Elección del Modelo y Campo Disciplinar: Los estudiantes seleccionarán uno de los modelos estudiados durante el curso (CNN, RNN, GAN, Autoencoders, etc.) y lo aplicarán en un problema o dataset relacionado con el campo disciplinar de su elección.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El modelo seleccionado es relevante para el campo disciplinar y está correctamente implementado. La aplicación demuestra una comprensión profunda del problema y del modelo." },
      { rating: "(3 - 4) : Bueno", description: "El modelo es adecuado, aunque podría haberse explicado o implementado con mayor detalle." },
      { rating: "(2 - 3) : Suficiente", description: "El modelo está implementado, pero su relevancia para el campo es limitada o presenta errores menores." },
      { rating: "(1 - 2) : Deficiente", description: "El modelo no es adecuado o está mal implementado, afectando el resultado." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente un modelo adecuado para el campo disciplinar." }
    ]
  },
  {
    criteriaTitle: "Segundo criterio de Evaluación.",
    description: `Aplicación de Conceptos de Optimización: Los estudiantes deben optimizar el rendimiento del modelo ajustando hiperparámetros y utilizando técnicas de optimización (como Adam, RMSProp, Learning Rate Decay, etc.) para mejorar el desempeño.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Los conceptos de optimización están aplicados correctamente y de forma efectiva, demostrando una mejora significativa en el rendimiento." },
      { rating: "(3 - 4) : Bueno", description: "La optimización es adecuada, aunque algunos aspectos podrían estar mejor justificados o implementados." },
      { rating: "(2 - 3) : Suficiente", description: "La optimización es limitada o presenta problemas de implementación, aunque se entiende el concepto." },
      { rating: "(1 - 2) : Deficiente", description: "La optimización es mínima o incorrecta, afectando gravemente el rendimiento." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementaron correctamente las técnicas de optimización." }
    ]
  },
  {
    criteriaTitle: "Tercer criterio de Evaluación.",
    description: `Aplicación de Múltiples Conceptos Aprendidos Durante el Curso: Los estudiantes deberán integrar múltiples conceptos vistos en el curso, como preprocesamiento de datos, regularización (L2, L1, Dropout), evaluación de métricas, funciones de activación, convolución, atención, entre otros.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El proyecto integra de manera efectiva una amplia variedad de conceptos, aplicándolos y justificándolos correctamente." },
      { rating: "(3 - 4) : Bueno", description: "Se implementaron varios conceptos, aunque algunos podrían estar mejor justificados o aplicados." },
      { rating: "(2 - 3) : Suficiente", description: "Algunos conceptos están presentes, pero de forma limitada o con errores en la implementación." },
      { rating: "(1 - 2) : Deficiente", description: "Se aplicaron pocos conceptos o están mal implementados, afectando la calidad del proyecto." },
      { rating: "(0 - 1) : Insuficiente", description: "No se aplicaron correctamente los conceptos aprendidos durante el curso." }
    ]
  },
  {
    criteriaTitle: "Cuarto criterio de Evaluación.",
    description: `Monitoreo del Modelo: Los estudiantes deben implementar un sistema de monitoreo del desempeño del modelo utilizando Weights & Biases (W&B) u otra herramienta similar, configurando gráficos y dashboards que visualicen las métricas en tiempo real.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El monitoreo está bien implementado, con métricas claramente registradas y visualizadas de forma eficaz." },
      { rating: "(3 - 4) : Bueno", description: "El monitoreo es adecuado, pero algunos aspectos de la visualización o el seguimiento de métricas podrían mejorarse." },
      { rating: "(2 - 3) : Suficiente", description: "El monitoreo es básico y ofrece una idea general del rendimiento, pero carece de detalle." },
      { rating: "(1 - 2) : Deficiente", description: "La integración de la herramienta de monitoreo es mínima o incorrecta, afectando el seguimiento del modelo." },
      { rating: "(0 - 1) : Insuficiente", description: "No se implementó correctamente el monitoreo del modelo." }
    ]
  },
  {
    criteriaTitle: "Quinto criterio de Evaluación.",
    description: `Entrega Final: Se espera que los estudiantes entreguen un notebook de Google Colab que incluya la implementación del modelo seleccionado, las optimizaciones aplicadas, la integración de la herramienta de monitoreo, y un documento explicativo que detalle el proceso, resultados y decisiones tomadas.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "Los resultados están bien presentados y analizados, con una interpretación clara de las métricas y un análisis profundo de logros y limitaciones." },
      { rating: "(3 - 4) : Bueno", description: "Los resultados son adecuados, pero el análisis podría incluir más detalles o explicaciones en ciertas áreas." },
      { rating: "(2 - 3) : Suficiente", description: "Los resultados son limitados o el análisis es incompleto, ofreciendo solo una idea general del rendimiento del modelo." },
      { rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados obtenidos." },
      { rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos." }
    ]
  },
  {
    criteriaTitle: "Sexto criterio de Evaluación.",
    description: `Documentación y Presentación: Los estudiantes deben presentar un notebook bien documentado, con comentarios claros en el código, explicaciones detalladas de las decisiones de diseño y un análisis estructurado de los resultados. La presentación final debe ser clara, organizada y comprensible, reflejando la integración de los conceptos aprendidos a lo largo del curso.`,
    note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
    ranges: [
      { rating: "(4 - 5) : Excelente", description: "El proyecto está muy bien documentado, con explicaciones claras de cada paso y una presentación final organizada y fácil de seguir." },
      { rating: "(3 - 4) : Bueno", description: "La documentación es adecuada, pero algunos aspectos podrían estar mejor explicados o presentados de manera más detallada." },
      { rating: "(2 - 3) : Suficiente", description: "La documentación es limitada, ofreciendo solo una idea general del proceso y los resultados." },
      { rating: "(1 - 2) : Deficiente", description: "La documentación es mínima o confusa, con poca claridad sobre el proceso o los resultados." },
      { rating: "(0 - 1) : Insuficiente", description: "No se entregó una documentación adecuada ni se presentó correctamente el proyecto." }
    ]
  }
];
  
  
const S16_1_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad Final. Proyecto Libre de Aplicación de Modelos con Monitoreo y Optimización en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S16_1_1;