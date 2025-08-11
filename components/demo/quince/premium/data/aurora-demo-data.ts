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
      "/images/custom/princesaAurora1.jpg",
      "/images/custom/Aurora2.webp",
      "/images/custom/Aurora3.webp",
      "/images/custom/aurora4.jpg",
    ],
    // Imágenes optimizadas para móviles (usando las mismas por ahora)
    mobileBackgroundImages: [
      "/images/custom/princesaAurora1.jpg",
      "/images/custom/Aurora2.webp",
      "/images/custom/Aurora3.webp",
      "/images/custom/aurora4.jpg",
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
    title: "Perfect - Ed Sheeran",
    track: "/images/custom/perfect.mp3", // Canción real del proyecto
    description: "Una melodía perfecta para un momento perfecto"
  },
  
  // Información completa de invitación (tema Aurora)
  invitation: {
    ...premiumDemoData.invitation,
    title: "INVITACIÓN REAL",
    message: "Sus Majestades solicitan el honor de vuestra presencia",
    decorativeMessage: "En este cuento de hadas que comienza"
  },
  
  // Galería de fotos (tema Aurora)
  gallery: {
    ...premiumDemoData.gallery,
    title: "Álbum Real",
    subtitle: "Momentos mágicos de Pamela Kitana",
    description: "Una colección de recuerdos dignos de un cuento de hadas",
    images: [
      { 
        src: "/images/custom/princesaAurora1.jpg", 
        alt: "Pamela Kitana - Sesión Aurora 1", 
        caption: "Como una verdadera princesa",
        category: "princesa"
      },
      { 
        src: "/images/custom/Aurora2.webp", 
        alt: "Pamela Kitana - Sesión Aurora 2", 
        caption: "Momentos mágicos",
        category: "magia"
      },
      { 
        src: "/images/custom/Aurora3.webp", 
        alt: "Pamela Kitana - Sesión Aurora 3", 
        caption: "Un sueño hecho realidad",
        category: "sueno"
      },
      { 
        src: "/images/custom/aurora4.jpg", 
        alt: "Pamela Kitana - Sesión Aurora 4", 
        caption: "La princesa del cuento",
        category: "princesa"
      }
    ]
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
    message: "Respetuosamente <No Niños>",
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
        details: "BBVA\nTitular: Familia Gómez Robles\nCuenta: XXXX-XXXX-XXXX-XXXX"
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
