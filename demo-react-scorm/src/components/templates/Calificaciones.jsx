// src/components/Calificaciones.jsx
import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import SemanaAcordion from '../organisms/SemanaAcordion';
import SCORMContext from '../../context/SCORMContext';

// Ejemplo de definición de actividades
const activitiesDefinition = {
  "S2.5.1": {
    "Actividad": "Implementación de Redes Neuronales Básicas en Google Colab",
    "criterios": [
      "Implementación de un perceptrón desde cero",
      "Implementación de una red neuronal de una sola capa",
      "Implementación de una red neuronal multicapa",
      "Uso adecuado de NumPy para operaciones matriciales",
      "Documentación y organización del código",
      "Funcionamiento global del código y calidad de resultados"
    ]
  },
  "S3.5.1": {
    "Actividad": "Implementación de Backpropagation y Funciones de Activación en Redes Neuronales en Google Colab",
    "criterios": [
      "Implementación del algoritmo de backpropagation en distintos modelos",
      "Integración de funciones de activación en los modelos",
      "Rediseño del modelo para clasificación binaria",
      "Entrenamiento del modelo con dataset de clasificación binaria",
      "Claridad y organización del código",
      "Justificación de decisiones y análisis de resultados"
    ]
  },
  "S4.5.1": {
    "Actividad": "Aplicación de Técnicas de Optimización en una Red Neuronal en Google Colab",
    "criterios": [
      "Implementación de técnicas de optimización en el modelo",
      "Comparación del rendimiento del modelo antes y después de la optimización",
      "Justificación de la técnica de optimización seleccionada",
      "Claridad y organización del código",
      "Análisis del impacto de la técnica de optimización aplicada"
    ]
  },
  "S4.6.1": {
    "Actividad": "Aplicación de Métodos de Regularización en una Red Neuronal",
    "criterios": [
      "Implementación de técnicas de regularización en la red neuronal",
      "Justificación de los métodos de regularización aplicados",
      "Análisis del impacto de la regularización en el modelo",
      "Claridad y organización del código",
      "Comparación del rendimiento con y sin regularización"
    ]
  },
  "S5.3.1": {
    "Actividad": "Implementación de una Red Neuronal para Clasificación Multiclase en TensorFlow Keras o PyTorch",
    "criterios": [
      "Implementación de la red neuronal para clasificación multiclase",
      "Selección y aplicación de funciones de activación adecuadas",
      "Configuración y preprocesamiento del dataset",
      "Entrenamiento del modelo y ajuste de hiperparámetros",
      "Evaluación del modelo con métricas adecuadas"
    ]
  },
  "S6.3.1": {
    "Actividad": "Aplicación de Métricas y Preprocesamiento en una Red Neuronal con TensorFlow/Keras",
    "criterios": [
      "Implementación de métricas de evaluación en el modelo",
      "Calidad del preprocesamiento de datos",
      "División adecuada de los datos en conjuntos de entrenamiento, validación y prueba",
      "Integración del preprocesamiento en el flujo del modelo",
      "Análisis de los resultados obtenidos"
    ]
  },
  "S7.3.1": {
    "Actividad": "Implementación de la Convolución de Matrices y su Aplicación en Imágenes con Padding y Stride en Google Colab",
    "criterios": [
      "Implementación de la operación de convolución de matrices desde cero",
      "Aplicación de la convolución en imágenes",
      "Implementación de padding y stride en la convolución",
      "Claridad y organización del código",
      "Análisis y explicación de los resultados obtenidos"
    ]
  },
  "S8.2.1": {
    "Actividad": "Implementación de un Modelo Popular de CNN en TensorFlow + Keras y/o PyTorch en Google Colab",
    "criterios": [
      "Implementación de un modelo CNN popular",
      "Entrenamiento del modelo con un dataset adecuado",
      "Evaluación del rendimiento del modelo con métricas apropiadas",
      "Claridad y organización del código",
      "Análisis de los resultados obtenidos"
    ]
  },
  "S9.3.1": {
    "Actividad": "Implementación de Data Augmentation y Transfer Learning en Imágenes en Google Colab",
    "criterios": [
      "Implementación de técnicas de Data Augmentation",
      "Evaluación del impacto de Data Augmentation en el modelo",
      "Implementación de Transfer Learning con modelos preentrenados",
      "Entrenamiento y evaluación del modelo Transfer Learning",
      "Organización y documentación del código",
      "Análisis comparativo de resultados con y sin Transfer Learning"
    ]
  },
  "S10.2.1": {
    "Actividad": "Implementación de una Red Neuronal Siamesa para Reconocimiento Facial en Google Colab",
    "criterios": [
      "Construcción del dataset de triplets para entrenamiento",
      "Implementación de la red siamesa",
      "Entrenamiento del modelo con dataset de triplets",
      "Evaluación del rendimiento del modelo siamesa",
      "Organización y documentación del código",
      "Análisis de los resultados y funcionamiento de la red siamesa"
    ]
  },
  "S11.3.1": {
    "Actividad": "Implementación de una Red Neuronal Recurrente (RNN) para la Predicción de Series de Tiempo en Google Colab",
    "criterios": [
      "Implementación de una RNN con LSTM o GRU",
      "Preprocesamiento del dataset de series de tiempo",
      "Entrenamiento del modelo recurrente",
      "Evaluación del modelo con métricas relevantes",
      "Organización y documentación del código",
      "Análisis de los resultados obtenidos"
    ]
  },
  "S12.3.1": {
    "Actividad": "Implementación del Mecanismo de Atención para Series de Tiempo y un Transformer Básico en Google Colab",
    "criterios": [
      "Implementación del mecanismo de atención en un modelo de series de tiempo",
      "Implementación de un modelo Transformer básico",
      "Preprocesamiento del dataset de series de tiempo",
      "Entrenamiento y evaluación del modelo con atención",
      "Entrenamiento y evaluación del Transformer",
      "Organización y documentación del código",
      "Análisis de los resultados obtenidos"
    ]
  },
  "S13.3.1": {
    "Actividad": "Implementación de un Autoencoder en una Red Denoising usando el dataset MNIST en Google Colab",
    "criterios": [
      "Carga y preprocesamiento del dataset MNIST",
      "Implementación del autoencoder",
      "Entrenamiento del autoencoder con imágenes ruidosas",
      "Evaluación y visualización de los resultados del autoencoder",
      "Organización y documentación del código",
      "Análisis de los resultados obtenidos"
    ]
  },
  "S14.2.1": {
    "Actividad": "Aplicación de los Conceptos de GANs en Google Colab",
    "criterios": [
      "Implementación de una Red Generativa Adversaria (GAN)",
      "Entrenamiento de la GAN con un dataset simple",
      "Evaluación de los resultados con imágenes generadas",
      "Entrega de un notebook con implementación, entrenamiento y análisis"
    ]
  },
  "S14.4.1": {
    "Actividad": "Implementación del Fine-Tuning de Stable Diffusion usando Diffuser en Google Colab",
    "criterios": [
      "Implementación del proceso de fine-tuning de Stable Diffusion",
      "Evaluación del impacto del fine-tuning con imágenes generadas",
      "Organización y documentación del código",
      "Explicación teórica sobre el fine-tuning y su impacto en el modelo"
    ]
  },
  "S15.4.1": {
    "Actividad": "Trabajo Cooperativo sobre Data Journey, Acceso y Manipulación de Datos, Monitoreo y Logging, y Model Serving con Weights & Biases",
    "criterios": [
      "Investigación y comprensión de los temas clave",
      "Implementación del monitoreo del modelo con Weights & Biases",
      "Calidad del monitoreo y logging durante el entrenamiento",
      "Colaboración efectiva dentro del equipo",
      "Documentación y presentación del proyecto"
    ]
  },
  "S16.1.1": {
    "Actividad": "Proyecto Libre de Aplicación de Modelos con Monitoreo y Optimización en Google Colab",
    "criterios": [
      "Selección del modelo y aplicación en un campo disciplinar",
      "Aplicación de técnicas de optimización para mejorar el modelo",
      "Integración de múltiples conceptos aprendidos durante el curso",
      "Implementación del monitoreo del modelo con Weights & Biases u otra herramienta",
      "Entrega de notebook con implementación, optimización, monitoreo y análisis de resultados",
      "Documentación detallada del proyecto"
    ]
  }
  // Agrega las demás actividades según corresponda...
};

const Calificaciones = () => {
  // Obtenemos suspendData (que es el JSON con las evaluaciones) desde el contexto SCORM
  const { suspendData } = useContext(SCORMContext);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Calificaciones y Retroalimentación
      </Typography>
      {Object.keys(activitiesDefinition).map((activityKey) => (
        <SemanaAcordion
          key={activityKey}
          activityKey={activityKey}
          activityDefinition={activitiesDefinition[activityKey]}
          evaluation={suspendData[activityKey]}
        />
      ))}
    </Box>
  );
};

export default Calificaciones;
