// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";

const actividadData = {
    activityCode: "S6.3.1",
    activityTitle: "Actividad 6. Aplicación de Métricas y Preprocesamiento en una Red Neuronal con TensorFlow/Keras en Google Colab",
    activitySubtitle: "Desarrollo de código en notebook para aplicar métricas de evaluación y preprocesamiento de datos",
    metaText: `En esta práctica, los estudiantes trabajarán en un notebook de Google Colab para aplicar diversas métricas de evaluación sobre una red neuronal. Además, deberán realizar una correcta distribución de los datos (train/dev/test) y aplicar técnicas de preprocesamiento de datos. Al finalizar, el notebook deberá ser cargado en GitHub y los resultados documentados.
  
  Métricas de Evaluación a Implementar:

• Matriz de Confusión

• Classification Accuracy

• Precision

• Recall

• F1 Score

• Sensitivity

• Specificity

Preprocesamiento de Datos:

• Distribución correcta de los datos en train/dev/test.

• Técnicas de preprocesamiento de datos, como normalización, estandarización, y manejo de datos faltantes.
`,
    imageUrl: "/src/assets/actividad-img.png" // Ajusta la ruta según tu proyecto
  };
  
  


  const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación",
      description: `Este criterio evalúa la correcta implementación y uso de las métricas de evaluación en el modelo de red neuronal. Los estudiantes deben demostrar el uso de métricas como la matriz de confusión, precisión, recall, F1 score, sensibilidad y especificidad para evaluar el rendimiento del modelo en tareas de clasificación. Se espera que implementen correctamente estas métricas en TensorFlow/Keras y que presenten un análisis de los resultados obtenidos, explicando cómo cada métrica refleja el desempeño del modelo.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Todas las métricas (Matriz de Confusión, Accuracy, Precision, Recall, F1 Score, Sensitivity, Specificity) están correctamente implementadas y aplicadas sobre el modelo entrenado. Los resultados son claros y bien presentados."},
        {rating: "(3 - 4) : Bueno", description: "La mayoría de las métricas están correctamente implementadas, pero podría mejorarse la presentación o justificación de algunos resultados."},
        {rating: "(2 - 3) : Suficiente", description: "Las métricas están parcialmente implementadas o contienen errores menores que afectan los resultados."},
        {rating: "(1 - 2) : Deficiente", description: "Las métricas están implementadas de manera incorrecta o incompleta, lo que afecta gravemente el análisis de los resultados."},
        {rating: "(0 - 1) : Insuficiente", description: "No se han implementado correctamente las métricas de evaluación."}
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación",
      description: `Este criterio mide la calidad del preprocesamiento de los datos realizado por los estudiantes antes de entrenar la red neuronal. Se espera que los estudiantes implementen adecuadamente técnicas de normalización o estandarización para asegurarse de que los datos están escalados correctamente para el entrenamiento. Además, los estudiantes deben mostrar que han realizado una limpieza de datos adecuada, eliminando o manejando valores nulos, inconsistencias o ruido en los datos. Todo el preprocesamiento debe estar integrado en el pipeline del modelo.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El preprocesamiento de los datos (normalización, estandarización, manejo de datos faltantes, etc.) se realizó de manera correcta y completa, asegurando que los datos sean aptos para el entrenamiento."},
        {rating: "(3 - 4) : Bueno", description: "El preprocesamiento se realizó de manera adecuada, pero podrían mejorarse algunos aspectos o técnicas aplicadas."},
        {rating: "(2 - 3) : Suficiente", description: "El preprocesamiento es limitado, pero la mayoría de los pasos básicos fueron implementados correctamente."},
        {rating: "(1 - 2) : Deficiente", description: "El preprocesamiento es mínimo o incorrecto, lo que afecta el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó un preprocesamiento adecuado de los datos."}
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación",
      description: `Este criterio evalúa cómo los estudiantes dividen los datos en conjuntos de entrenamiento (train), validación (dev) y prueba (test). Es crucial que los estudiantes demuestren una correcta distribución de los datos y que expliquen por qué han seleccionado una determinada proporción (por ejemplo, 70% para entrenamiento, 15% para validación y 15% para prueba). Además, se evalúa si los conjuntos de datos están bien equilibrados y si la separación asegura que los resultados de la evaluación reflejen el rendimiento real del modelo.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "La distribución de los datos en conjuntos de entrenamiento, validación y prueba se realizó correctamente, siguiendo buenas prácticas y asegurando una correcta generalización del modelo."},
        {rating: "(3 - 4) : Bueno", description: "La distribución de los datos está bien realizada, aunque podrían mejorarse algunos aspectos como la proporción o la justificación de la división."},
        {rating: "(2 - 3) : Suficiente", description: "La distribución de los datos es limitada o tiene errores, pero se sigue una lógica básica."},
        {rating: "(1 - 2) : Deficiente", description: "La distribución de los datos es incorrecta o incompleta, afectando el rendimiento del modelo."},
        {rating: "(0 - 1) : Insuficiente", description: "No se realizó una distribución adecuada de los datos."}
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación",
      description: `En este criterio, se evalúa si los estudiantes han integrado adecuadamente el preprocesamiento de datos en el flujo de trabajo del modelo. Esto implica que el preprocesamiento debe realizarse antes de que los datos sean utilizados para entrenar la red neuronal y debe ser parte del pipeline completo, sin errores o desajustes. Se espera que los estudiantes demuestren cómo el preprocesamiento afecta positivamente el rendimiento del modelo y que incluyan una justificación clara del tipo de preprocesamiento elegido.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El notebook fue correctamente subido a GitHub, bien documentado, con un repositorio organizado y de fácil acceso para su revisión."},
        {rating: "(3 - 4) : Bueno", description: "El notebook está subido a GitHub, pero la organización del repositorio o la presentación podría mejorarse."},
        {rating: "(2 - 3) : Suficiente", description: "El notebook está en GitHub, pero con problemas en la organización o documentación."},
        {rating: "(1 - 2) : Deficiente", description: "El notebook fue subido a GitHub, pero está mal documentado o desorganizado, dificultando su revisión."},
        {rating: "(0 - 1) : Insuficiente", description: "No se subió el notebook a GitHub o está incompleto."}
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación",
      description: `Este criterio evalúa la documentación y organización del código presentado por los estudiantes. El código debe estar claramente estructurado, con secciones bien definidas para el preprocesamiento, entrenamiento del modelo, y evaluación. Se espera que los estudiantes proporcionen comentarios explicativos en el código, detallando las decisiones clave (como el tipo de preprocesamiento aplicado, las métricas utilizadas, etc.). La documentación debe ser suficiente para que otro lector pueda entender fácilmente el flujo del código y las implementaciones realizadas.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "Las técnicas de preprocesamiento y las métricas de evaluación están bien justificadas, explicando claramente su importancia y cómo afectan el rendimiento del modelo."},
        {rating: "(3 - 4) : Bueno", description: "La justificación de las técnicas y métricas es adecuada, aunque podría incluirse más detalle o profundidad en algunos aspectos."},
        {rating: "(2 - 3) : Suficiente", description: "Las justificaciones son limitadas, pero cubren la mayoría de los conceptos."},
        {rating: "(1 - 2) : Deficiente", description: "Las justificaciones son mínimas o confusas, con poca claridad sobre las razones detrás de las técnicas aplicadas."},
        {rating: "(0 - 1) : Insuficiente", description: "No se ofreció una justificación adecuada de las técnicas de preprocesamiento y evaluación."}
      ]
    },
    {
      criteriaTitle: "Sexto criterio de Evaluación",
      description: `Este criterio evalúa la capacidad de los estudiantes para analizar los resultados obtenidos después de aplicar las métricas de evaluación y el preprocesamiento. Los estudiantes deben interpretar los resultados de las métricas (como precisión, recall, F1 score, etc.) y explicar cómo las técnicas de preprocesamiento afectaron el rendimiento general del modelo. Se espera un análisis crítico que incluya reflexiones sobre qué funcionó bien y qué se podría mejorar en futuros entrenamientos.`,
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        {rating: "(4 - 5) : Excelente", description: "El análisis de los resultados obtenidos es detallado y bien fundamentado, mostrando una comprensión clara del impacto de las métricas y el preprocesamiento sobre el modelo."},
        {rating: "(3 - 4) : Bueno", description: "El análisis es adecuado, pero podría incluir más detalle o justificación en algunas áreas."},
        {rating: "(2 - 3) : Suficiente", description: "El análisis es limitado, pero ofrece una idea general del rendimiento del modelo y los resultados."},
        {rating: "(1 - 2) : Deficiente", description: "El análisis es mínimo o mal presentado, con poca claridad sobre los resultados obtenidos."},
        {rating: "(0 - 1) : Insuficiente", description: "No se presentó un análisis adecuado de los resultados obtenidos."}
      ]
    }
  ];
  
  
  
const S6_3_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 6. Aplicación de Métricas y Preprocesamiento en una Red Neuronal con TensorFlow/Keras en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S6_3_1;