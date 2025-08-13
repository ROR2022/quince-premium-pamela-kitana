import { premiumDemoData } from '@/components/demo/quince/premium/data/premium-demo-data';

// Datos demo para el paquete premium de quinceañera con tema Aurora (Princess Disney)
export const auroraDemoData = {
  // Heredar todos los datos del premium
  ...premiumDemoData,
  
  // Sobreescribir configuración del hero con imágenes de Aurora
  hero: {
    ...premiumDemoData.hero,
    name: "Pamela Kitana",
    subtitle: "¡Mis XV años!",
    backgroundImages: [
      "/images/custom/aurora/aurora_1.jpeg",
      "/images/custom/aurora/aurora_3.jpeg",
      "/images/custom/aurora/aurora_5.jpeg",
      "/images/custom/aurora/aurora_7.jpeg",
    ],
    // Imágenes optimizadas para móviles (usando las mismas)
    mobileBackgroundImages: [
      "/images/custom/aurora/aurora_1.jpeg",
      "/images/custom/aurora/aurora_3.jpeg",
      "/images/custom/aurora/aurora_5.jpeg",
      "/images/custom/aurora/aurora_7.jpeg",
    ],
    carouselOptions: {
      delay: 5000, // tiempo entre cambios de imagen (5 segundos)
      loop: true,
      fadeTransition: true,
    },
    // Nuevos estilos para el tema Aurora
    styles: {
      nameFont: "font-princess", // Nueva fuente de estilo princesa
      subtitleFont: "font-princess",
      nameColor: "text-aurora-primary aurora-text-gradient",
      subtitleColor: "text-aurora-secondary",
      containerBackground: "bg-aurora-accent/30 backdrop-blur-sm",
      animationClass: "animate-fade-in aurora-shimmer"
    }
  },
  
  // Sobreescribir información demo con datos premium Aurora
  demo: {
    ...premiumDemoData.demo,
    badge: "👑 DEMO - Paquete Premium Aurora ($499)",
    description: "¡Tema exclusivo de Princesa Aurora! - Incluye música, galería y padrinos",
    features: [
      ...premiumDemoData.demo.features,
      "Diseño exclusivo inspirado en Aurora"
    ],
    cta: {
      ...premiumDemoData.demo.cta,
      title: "¿Te encanta el tema Aurora?",
      subtitle: "Tema exclusivo de Princesa Disney - Con todos los detalles premium",
      buttonText: "Contratar Paquete Premium Aurora - $499"
    }
  },
  
  // Configuración de música temática de Aurora
  music: {
    ...premiumDemoData.music,
    title: "No Crezcas Más",
    track: "/images/custom/noCrezcas.mp3", // Canción real del proyecto
    description: "Una melodía perfecta para un momento perfecto"
  },
  
  // Información completa de invitación (tema Aurora)
  invitation: {
    ...premiumDemoData.invitation,
    title: "INVITACIÓN REAL",
    message: "Sus Majestades solicitan el honor de vuestra presencia",
    decorativeMessage: "En este cuento de hadas que comienza"
  },
  
  // Galería de fotos categorizada (tema Aurora)
  gallery: {
    title: "Álbum Real",
    subtitle: "Momentos mágicos de Pamela Kitana",
    description: "Una colección de recuerdos dignos de un cuento de hadas",
    defaultCategory: "Quinceañera",
    categories: {
      "Quinceañera": {
        title: "La Protagonista",
        description: "Los momentos más especiales de nuestra princesa",
        icon: "👑",
        images: [
          {
            src: "/images/custom/quinceañera/pamela_1.jpg",
            alt: "Pamela Kitana - Momento especial 1",
            caption: "Como una verdadera princesa",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_2.jpg",
            alt: "Pamela Kitana - Momento especial 2", 
            caption: "Elegancia y gracia real",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_3.jpg",
            alt: "Pamela Kitana - Momento especial 3",
            caption: "Un sueño hecho realidad",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_4.jpg",
            alt: "Pamela Kitana - Momento especial 4",
            caption: "La magia de ser princesa",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_5.jpg",
            alt: "Pamela Kitana - Momento especial 5",
            caption: "Momentos únicos e irrepetibles",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_7.jpg",
            alt: "Pamela Kitana - Momento especial 7",
            caption: "Belleza que deslumbra",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_8.jpg",
            alt: "Pamela Kitana - Momento especial 8",
            caption: "La quinceañera más hermosa",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_9.jpg",
            alt: "Pamela Kitana - Momento especial 9",
            caption: "Recuerdos para toda la vida",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_10.jpg",
            alt: "Pamela Kitana - Momento especial 10",
            caption: "Sonrisa que ilumina el día",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_11.jpg",
            alt: "Pamela Kitana - Momento especial 11",
            caption: "Un día para recordar siempre",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_12.jpg",
            alt: "Pamela Kitana - Momento especial 12",
            caption: "La protagonista del cuento",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_13.jpg",
            alt: "Pamela Kitana - Momento especial 13",
            caption: "Dulzura y elegancia",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_14.jpg",
            alt: "Pamela Kitana - Momento especial 14",
            caption: "Momentos mágicos capturados",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_15.jpg",
            alt: "Pamela Kitana - Momento especial 15",
            caption: "La quinceañera soñada",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_16.jpg",
            alt: "Pamela Kitana - Momento especial 16",
            caption: "Belleza natural y radiante",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_17.jpg",
            alt: "Pamela Kitana - Momento especial 17",
            caption: "Un día perfecto para una princesa",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_18.jpg",
            alt: "Pamela Kitana - Momento especial 18",
            caption: "El brillo de una estrella",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_19.jpg",
            alt: "Pamela Kitana - Momento especial 19",
            caption: "La esencia de una princesa",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_20.jpg",
            alt: "Pamela Kitana - Momento especial 20",
            caption: "La magia de ser princesa",
            category: "Quinceañera"
          },
          {
            src: "/images/custom/quinceañera/pamela_21.jpg",
            alt: "Pamela Kitana - Momento especial 21",
            caption: "El sueño de una noche mágica",
            category: "Quinceañera"
          }
        ]
      },
      "Familia": {
        title: "Seres Queridos",
        description: "Los pilares que hacen este día especial",
        icon: "👨‍👩‍👧‍👦",
        images: [
          {
            src: "/images/custom/familia/padres.jpg",
            alt: "Padres de Pamela Kitana",
            caption: "Los padres amorosos que la guiaron hasta aquí",
            category: "Familia"
          },
          {
            src: "/images/custom/familia/abuelos_paternos.jpg",
            alt: "Abuelos paternos de Pamela",
            caption: "Los abuelos paternos, pilares de sabiduría",
            category: "Familia"
          },
          {
            src: "/images/custom/familia/abuelos_maternos.jpg",
            alt: "Abuelos maternos de Pamela",
            caption: "Los abuelos maternos, llenos de amor",
            category: "Familia"
          },
          {
            src: "/images/custom/familia/hermana_davne.jpg",
            alt: "Hermana Davne",
            caption: "Davne, la hermana cómplice y amiga",
            category: "Familia"
          },
          {
            src: "/images/custom/familia/hermana_raiza.jpg",
            alt: "Hermana Raiza",
            caption: "Raiza, la hermana querida del corazón",
            category: "Familia"
          },
          {
            src: "/images/custom/familia/padrinos_velacion.jpg",
            alt: "Padrinos de velación",
            caption: "Los padrinos especiales de esta celebración",
            category: "Familia"
          }
        ]
      },
      "Chambelanes": {
        title: "Caballeros de Honor",
        description: "Los guardianes de nuestra princesa",
        icon: "🤵",
        images: [
          {
            src: "/images/custom/chambelanes/hermano_cristian.jpg",
            alt: "Hermano Cristian",
            caption: "Cristian, el hermano protector y querido",
            category: "Chambelanes"
          },
          {
            src: "/images/custom/chambelanes/primo_aaron.jpg",
            alt: "Primo Aaron",
            caption: "Aaron, el primo que siempre está presente",
            category: "Chambelanes"
          },
          {
            src: "/images/custom/chambelanes/primo_edson.jpg",
            alt: "Primo Edson",
            caption: "Edson, el primo de confianza",
            category: "Chambelanes"
          },
          {
            src: "/images/custom/chambelanes/primo_jonathan.jpg",
            alt: "Primo Jonathan",
            caption: "Jonathan, el primo del alma",
            category: "Chambelanes"
          },
          {
            src: "/images/custom/chambelanes/angel_jahir.jpg",
            alt: "Angel Jahir",
            caption: "Angel Jahir, el caballero de honor especial",
            category: "Chambelanes"
          }
        ]
      }
    }
  },
  
  // Cuenta regresiva (tema Aurora)
  countdown: {
    targetDate: "October 11, 2025 15:00:00",
    backgroundImage: "/images/countdown-bg.jpg",
    title: "La Magia Comienza En",
    subtitle: "Cada segundo nos acerca a un momento que quedará grabado para siempre en nuestros corazones",
  },
  
  // Confirmación de asistencia (tema Aurora)
  attendance: {
    title: "Tu Presencia es Importante",
    message: "Codigo de Vestimenta Formal (Rosa Gold solo la Quinceañera)",
    subtitle: "Espero que puedas acompañarme en este día tan especial de mi vida",
    fields: {
      name: "Tu nombre completo",
      response: "¿Podrás asistir a mi fiesta de cuento de hadas?",
      companions: "Nombre(s) de quienes te acompañarán",
      phone: "Tu número de contacto",
      responseOptions: {
        yes: "¡Sí, no me lo perdería por nada!",
        no: "Lo siento, no podré asistir."
      }
    }
  },
  
  // Opciones de regalo (tema Aurora)
  gifts: {
    title: "Regalos Encantados",
    message: "Tu presencia es mi mayor regalo, pero si deseas obsequiarme algo más, aquí te comparto algunas sugerencias:",
    options: [
      {
        icon: "👑",
        title: "Tiara Real",
        description: "Mesa de Regalos",
        details: "Liverpool\nEvento: XV años Pamela Kitana\nCódigo: #PAMK2025"
      },
      {
        icon: "💎",
        title: "Tesoro Real",
        description: "Transferencia Bancaria",
        details: "Bancoppel\nTitular: David Ulister Gómez Villanueva\nCuenta: 4169-1608-4236-4219"
      },
      {
        icon: "✨",
        title: "Regalo Mágico",
        description: "El día del evento",
        details: "Puedes entregarlo en la recepción\nHabrá un cofre especial para todos los presentes"
      }
    ]
  },
  
  // Mensaje final personalizado (tema Aurora)
  thankYou: {
    ...premiumDemoData.thankYou,
    title: "¡Gracias por hacer mi sueño realidad!",
    personalMessage: "Como en un cuento de hadas, cada uno de ustedes ha sido parte de la magia de este día tan especial para mí.",
    signature: "Con cariño, Pamela Kitana",
    // Usamos una imagen placeholder para la firma mientras se obtiene la real
    imageUrl: "/images/custom/firma.png"
  },
  
  // Configuración temática de Aurora
  theme: {
    name: "Aurora",
    type: "princess",
    primaryColor: "aurora-primary", // #dea193
    secondaryColor: "aurora-secondary", // #b18075
    accentColor: "aurora-accent", // #e3e4e5
    tertiaryColor: "aurora-tertiary", // #e4b3a8
    fontPrimary: "font-princess",
    fontSecondary: "font-playfair",
    gradientClass: "aurora-gradient",
    textGradientClass: "aurora-text-gradient",
    shadowClass: "aurora-shadow",
    shimmerClass: "aurora-shimmer"
  },
  
  // Configuración premium explícita para Aurora (asegura que la música funcione)
  premium: {
    ...premiumDemoData.premium,
    hasMusic: true,
    badge: "AURORA PREMIUM",
    color: "from-aurora-primary to-aurora-tertiary"
  }
}

export type AuroraDemoData = typeof auroraDemoData;
