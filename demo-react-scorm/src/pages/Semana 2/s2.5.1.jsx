// src/pages/PaginaRubrica.jsx
import React from "react";
import TablaRubrica from "../../components/molecules/TablaRubrica";
import Actividad from "../../components/organisms/Actividad";
import ArrastrarSoltar from "../../components/molecules/ArrastrarSoltar";


const actividadData = {
    activityCode: "S2.5.1",
    activityTitle: "Actividad Implementación de Redes Neuronales Básicas en Google Colab",
    activitySubtitle: "Implementación de modelos básicos sin uso de librerías especializadas",
    metaText: `En esta actividad se evaluará la implementación de un perceptrón y redes neuronales simples utilizando únicamente operaciones matriciales con NumPy. Se espera que se realice la implementación desde cero, demostrando comprensión de los conceptos fundamentales del Deep Learning y la lógica de clasificación.
    
  Nota: Todo el contenido mostrado aquí corresponde a la parte introductoria que antecede la sección "Introducción".`,
    imageUrl: "/src/assets/actividad-img.png", // Ajusta la ruta según tu proyecto
  };    

const rubricData = [
    {
      criteriaTitle: "Primer criterio de Evaluación",
      description: "En este criterio, los estudiantes deben implementar un perceptrón desde cero, sin utilizar librerías especializadas en deep learning como TensorFlow o PyTorch. El perceptrón debe estar programado utilizando operaciones matriciales y lógicas con NumPy. Se espera que los estudiantes demuestren cómo este modelo puede realizar una clasificación binaria, basándose en un conjunto de datos sencillo.",
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "El perceptrón está completamente implementado y resuelve correctamente problemas de clasificación linealmente separables. El código es eficiente, claro y sigue buenas prácticas de programación." },
        { rating: "(3 - 4) : Bueno", description: "El perceptrón está implementado correctamente y resuelve la mayoría de los problemas de clasificación lineal. El código es funcional, aunque puede mejorar en claridad o eficiencia." },
        { rating: "(2 - 3) : Suficiente", description: "El perceptrón está parcialmente implementado, con algunos errores que afectan su funcionamiento. Resuelve algunos casos de clasificación, pero con limitaciones." },
        { rating: "(1 - 2) : Deficiente", description: "El perceptrón está incompleto o con fallos graves que impiden que funcione en la mayoría de los casos." },
        { rating: "(0 - 1) : Insuficiente", description: "El perceptrón no está implementado o la implementación es incorrecta y no clasifica correctamente ningún conjunto de datos." }
      ]
    },
    {
      criteriaTitle: "Segundo criterio de Evaluación",
      description: "Este criterio evalúa la implementación de una red neuronal de una sola capa. El modelo debe extender el concepto de perceptrón a múltiples neuronas en una capa de salida, utilizando operaciones matriciales.",
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "La red neuronal de una capa está correctamente implementada. Los resultados son correctos y el código sigue buenas prácticas." },
        { rating: "(3 - 4) : Bueno", description: "La red neuronal de una capa está mayormente implementada, con pequeños detalles que pueden mejorarse en términos de eficiencia o claridad." },
        { rating: "(2 - 3) : Suficiente", description: "La red neuronal de una capa tiene algunos errores, pero la lógica básica está presente." },
        { rating: "(1 - 2) : Deficiente", description: "La red neuronal de una capa está incompleta o con errores graves que afectan su funcionamiento." },
        { rating: "(0 - 1) : Insuficiente", description: "La red neuronal de una capa no está implementada correctamente o no produce resultados válidos." }
      ]
    },
    {
      criteriaTitle: "Tercer criterio de Evaluación",
      description: "Este criterio evalúa la implementación de una red neuronal multicapa, que incluye al menos una capa oculta. Se espera que los estudiantes ajusten manualmente los pesos y realicen la clasificación.",
      note: "Este criterio representa 3 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "La red neuronal multicapa está completamente implementada con múltiples capas y funciones de activación, que funcionan correctamente." },
        { rating: "(3 - 4) : Bueno", description: "La red neuronal multicapa está implementada, pero podría mejorar en claridad o eficiencia del código. Los resultados son en su mayoría correctos." },
        { rating: "(2 - 3) : Suficiente", description: "La red neuronal multicapa tiene algunos errores en la implementación, pero funciona parcialmente." },
        { rating: "(1 - 2) : Deficiente", description: "La red neuronal multicapa está incompleta o con errores graves." },
        { rating: "(0 - 1) : Insuficiente", description: "La red neuronal multicapa no está implementada correctamente o no produce resultados válidos." }
      ]
    },
    {
      criteriaTitle: "Cuarto criterio de Evaluación",
      description: "Este criterio evalúa el uso adecuado de NumPy para realizar las operaciones matriciales necesarias en la implementación de las redes neuronales. Se espera que los estudiantes utilicen operaciones vectorizadas para mejorar la eficiencia de los cálculos y evitar el uso de bucles innecesarios.",
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "Todas las operaciones matriciales están correctamente implementadas usando NumPy. El código es eficiente y bien optimizado." },
        { rating: "(3 - 4) : Bueno", description: "Las operaciones con NumPy están bien implementadas, pero podrían mejorarse algunas áreas para mayor eficiencia." },
        { rating: "(2 - 3) : Suficiente", description: "Las operaciones con NumPy están parcialmente implementadas, pero tienen errores o ineficiencias en algunos puntos." },
        { rating: "(1 - 2) : Deficiente", description: "El uso de NumPy es limitado o tiene errores significativos en la implementación." },
        { rating: "(0 - 1) : Insuficiente", description: "El uso de NumPy es incorrecto o mínimo, y las operaciones no se realizan de manera correcta." }
      ]
    },
    {
      criteriaTitle: "Quinto criterio de Evaluación",
      description: "Este criterio evalúa la documentación y organización del código. Los estudiantes deben presentar un código bien estructurado, fácil de seguir, con comentarios que expliquen cada parte del proceso.",
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "El código está bien documentado, con comentarios claros que explican cada paso. Está organizado y estructurado correctamente." },
        { rating: "(3 - 4) : Bueno", description: "El código está mayormente documentado y organizado, pero podría mejorarse en algunos comentarios o en la estructura del código." },
        { rating: "(2 - 3) : Suficiente", description: "La documentación y organización del código son mínimas, pero aún así es posible entenderlo." },
        { rating: "(1 - 2) : Deficiente", description: "La documentación es escasa o inexistente y el código está desorganizado." },
        { rating: "(0 - 1) : Insuficiente", description: "No hay documentación ni organización en el código, lo que lo hace difícil de entender." }
      ]
    },
    {
      criteriaTitle: "Sexto criterio de Evaluación",
      description: "Este criterio evalúa el funcionamiento global del código y la calidad de los resultados obtenidos. El enfoque está en qué tan bien el modelo implementado funciona en términos de clasificación y si los resultados obtenidos son consistentes y de alta calidad.",
      note: "Este criterio representa 1 unidades del total de 5 que tiene la actividad.",
      ranges: [
        { rating: "(4 - 5) : Excelente", description: "Todos los modelos funcionan correctamente y los resultados son consistentes." },
        { rating: "(3 - 4) : Bueno", description: "Los modelos funcionan correctamente en su mayoría, aunque algunos resultados podrían presentarse mejor." },
        { rating: "(2 - 3) : Suficiente", description: "Los resultados son parcialmente correctos, pero hay errores o inconsistencias." },
        { rating: "(1 - 2) : Deficiente", description: "Los resultados son mayormente incorrectos y hay errores importantes en el funcionamiento de los modelos." },
        { rating: "(0 - 1) : Insuficiente", description: "Los modelos no funcionan correctamente y no producen resultados válidos." }
      ]
    }
  ];




const S2_5_1 = () => {
    return (
        <div className="min-h-screen bg-[var(--color-neutral-300)] p-4">
          <Actividad {...actividadData} />            
          <TablaRubrica
            title="Rúbrica de Evaluación"
            subtitle="Actividad 1: Implementación de Redes Neuronales Básicas en Google Colab"
            maxScore="5.0"
            rubricData={rubricData}
          />
            <ArrastrarSoltar/>
        </div>
      );
    };
  
  export default S2_5_1;