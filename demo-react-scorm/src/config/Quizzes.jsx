import iconMap from "../utils/dynamicIcons";
// src/config/quizzes.js
export const quizzes = [
  {
    id: 'quiz1',
    title: 'Quiz 1: Deep Learning',
    weight: 0.3,
    maxScore: 5,  // opcional: la escala de calificación
    route: 'quiz1'
  },
  {
    id: 'quiz2',
    title: 'Quiz 2: Deep Learning Avanzado',
    weight: 0.7,
    maxScore: 5,
    route: 'quiz2'
  }
  // Si en el futuro agregas más quizzes, solo añádelos aquí.
];

export const weeksData = [
  {
    id: "semana1",
    icon: iconMap["semana1"],
    title: "Semana 1",
    description:
      "Comprender el perceptrón y las redes neuronales, familiarizarse con Google Colab y GitHub para crear proyectos.",
    link: "semana1",
  },
  {
    id: "semana2",
    icon: iconMap["semana2"],
    title: "Semana 2",
    description:
      "Implementar redes neuronales básicas con Python y entrenarlas para resolver problemas simples.",
    link: "semana2",
  },
  {
    id: "semana3",
    icon: iconMap["semana3"],
    title: "Semana 3",
    description:
      "Abarcar gradiente descendiente, feedforward y backpropagation, MLNN y analizar sesgo y varianza en modelos.",
    link: "semana3",
  },
  {
    id: "semana4",
    icon: iconMap["semana4"],
    title: "Semana 4",
    description:
      "Optimización y regularización de redes neuronales, comparación de estas técnicas y prevención de overfitting.",
    link: "semana4",
  },
  {
    id: "semana5",
    icon: iconMap["semana5"],
    title: "Semana 5",
    description:
      "Crear una red neuronal para clasificación multiclase con TensorFlow o PyTorch, usando MNIST.",
    link: "semana5",
  },
  {
    id: "semana6",
    icon: iconMap["semana6"],
    title: "Semana 6",
    description:
      "Preprocesar los datos para mejorar los modelos e implementar métricas para evaluar su desempeño.",
    link: "semana6",
  },
  {
    id: "semana7",
    icon: iconMap["semana7"],
    title: "Semana 7",
    description:
      "Entender las imágenes digitales, implementar convolución y aplicar filtros para resaltar características.",
    link: "semana7",
  },
  {
    id: "semana8",
    icon: iconMap["semana8"],
    title: "Semana 8",
    description:
      "Entender las CNNs, implementar un modelo con TensorFlow o PyTorch y evaluar con métricas su desempeño.",
    link: "semana8",
  },
  {
    id: "semana9",
    icon: iconMap["semana9"],
    title: "Semana 9",
    description:
      "Data Augmentation y Transfer Learning con modelos preentrenados para mejorar la clasificación de imágenes.",
    link: "semana9",
  },
  {
    id: "semana10",
    icon: iconMap["semana10"],
    title: "Semana 10",
    description:
      "Entender las redes siamesas e implementarlas para reconocimiento facial con datos propios.",
    link: "semana10",
  },
  {
    id: "semana11",
    icon: iconMap["semana11"],
    title: "Semana 11",
    description:
      "Entender RNN, LSTM y GRU, e implementar estas redes para series de tiempo y evaluar su desempeño.",
    link: "semana11",
  },
  {
    id: "semana12",
    icon: iconMap["semana12"],
    title: "Semana 12",
    description:
      "Implementación de mecanismos de atención y Transformers para series de tiempo evaluando los resultados.",
    link: "semana12",
  },
  {
    id: "semana13",
    icon: iconMap["semana13"],
    title: "Semana 13",
    description:
      "Autoencoders, Red Denoising con MNIST y evaluación de su efectividad en la reconstrucción de imágenes.",
    link: "semana13",
  },
  {
    id: "semana14",
    icon: iconMap["semana14"],
    title: "Semana 14",
    description:
      "Implementación de Latent Diffusion Models, GANs y fine-tuning a Stable Diffusion para creación de imágenes.",
    link: "semana14",
  },
  {
    id: "semana15",
    icon: iconMap["semana15"],
    title: "Semana 15",
    description:
      "Entender el ciclo de vida del ML, usar MLOps para monitoreo y Model Serving para proyectos colaborativos.",
    link: "semana15",
  },
  {
    id: "semana16",
    icon: iconMap["semana16"],
    title: "Semana 16",
    description:
      "Aplicar conocimientos en un proyecto real, optimizar y monitorear modelos, y documentar profesionalmente.",
    link: "semana16",
  },
];

export const CalificacionesSemanas = [
  {
    weekNumber: 1,
    items: [
      {
        title: "Funciones de activación",
        status: "Completado",
        score: "", // sin nota
      },
      {
        title: "Programación de red neuronal de una sola capa",
        status: "Completado",
        score: "4.5",
      },
      {
        title: "Programación de red neuronal multicapa simple",
        status: "Completado",
        score: "4.5",
      },
    ],
  },
  {
    weekNumber: 2,
    items: [
      {
        title: "Funciones de activación",
        status: "Completado",
        score: "",
      },
      {
        title: "Programación de red neuronal de una sola capa",
        status: "Completado",
        score: "4.5",
      },
      {
        title: "Programación de red neuronal multicapa simple",
        status: "Completado",
        score: "4.5",
      },
    ],
  },
  {
    weekNumber: 3,
    items: [
      {
        title: "Funciones de activación",
        status: "Completado",
        score: "6",
      },
      {
        title: "Programación de red neuronal de una sola capa",
        status: "Completado",
        score: "4.5",
      },
      {
        title: "Programación de red neuronal multicapa simple",
        status: "Completado",
        score: "4.5",
      },
    ],
  },
  // ...más semanas
];
