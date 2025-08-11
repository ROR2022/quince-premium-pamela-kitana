import { basicDemoData } from '@/components/demo/quince/basic/data/basic-demo-data'

// Datos demo para el paquete premium de quinceañera
export const premiumDemoData = {
  // Heredar todos los datos del básico
  ...basicDemoData,
  
  // Sobreescribir configuración del hero con múltiples imágenes para el carrusel
  hero: {
    ...basicDemoData.hero,
    backgroundImages: [
      "/images/quince/quince1.jpeg",
      "/images/quince/quince2.jpeg",
      "/images/quince/quince3.jpeg",
      "/images/quince/quince4.jpeg",
    ],
    // Imágenes optimizadas para móviles (utilizamos las mismas pero se pueden reemplazar por versiones específicas)
    mobileBackgroundImages: [
      "/images/quince/quince1.jpeg",
      "/images/quince/quince2.jpeg",
      "/images/quince/quince3.jpeg",
      "/images/quince/quince4.jpeg",
    ],
    carouselOptions: {
      delay: 5000, // tiempo entre cambios de imagen (5 segundos)
      loop: true,
      fadeTransition: true,
    },
  },
  
  // Sobreescribir información demo con datos premium
  demo: {
    badge: "🌟 DEMO - Paquete Premium ($499)",
    description: "¡La más solicitada! - Incluye música, galería y padrinos",
    features: [
      ...basicDemoData.demo.features,
      "Música personalizada",
      "Galería de fotos", 
      "Lista de padrinos"
    ],
    cta: {
      title: "¿Te encanta el paquete Premium?",
      subtitle: "El más solicitado - Incluye TODAS las características esenciales + 3 premium exclusivas",
      buttonText: "Contratar Paquete Premium - $499",
      link: "/#pricing"
    }
  },
  
  // Configuración de música premium
  music: {
    title: "Música Especial",
    track: "/music/romantic-wedding1.mp3",
    autoplay: false, // Por UX, mejor no autoplay automático
    loop: true,
    description: "Música personalizada para tu evento"
  },
  
  // Información completa de invitación (característica premium)
  invitation: {
    title: "INVITACIÓN ESPECIAL",
    message: "Acompáñanos a celebrar",
    subtitle: "Mis XV años",
    blessing: "con la bendición de Dios y mis padres:",
    celebrant: basicDemoData.event.celebrant,
    parents: basicDemoData.event.parents,
    decorativeMessage: "Te esperamos en este día tan especial"
  },
  
  // Lista de padrinos (característica premium NUEVA)
  padrinos: [
    { 
      role: "Padrinos de Honor", 
      names: ["[PADRINO DE HONOR - Por Confirmar]", "[MADRINA DE HONOR - Por Confirmar]"],
      description: "Quienes han sido como segundos padres"
    },
    { 
      role: "Padrinos del Vestido", 
      names: ["[PADRINO DEL VESTIDO - Por Confirmar]", "[MADRINA DEL VESTIDO - Por Confirmar]"],
      description: "Por hacer realidad mi vestido soñado"
    },
    { 
      role: "Padrinos del Ramo", 
      names: ["[PADRINO DEL RAMO - Por Confirmar]", "[MADRINA DEL RAMO - Por Confirmar]"],
      description: "Por las flores más hermosas"
    },
    { 
      role: "Padrinos de la Música", 
      names: ["[PADRINO DE LA MÚSICA - Por Confirmar]", "[MADRINA DE LA MÚSICA - Por Confirmar]"],
      description: "Por llenar de melodía mi celebración"
    },
    { 
      role: "Padrinos del Vals", 
      names: ["[PADRINO DEL VALS - Por Confirmar]", "[MADRINA DEL VALS - Por Confirmar]"],
      description: "Por hacer mágico mi primer vals"
    },
    { 
      role: "Padrinos de las Flores", 
      names: ["[PADRINO DE LAS FLORES - Por Confirmar]", "[MADRINA DE LAS FLORES - Por Confirmar]"],
      description: "Por decorar este día especial"
    }
  ],
  
  // Galería de fotos (característica premium)
  gallery: {
    title: "Galería de Recuerdos",
    subtitle: "Momentos especiales de Pamela Kitana",
    description: "Una colección de mis fotos favoritas preparándome para este gran día",
    images: [
      { 
        src: "/images/quince/quince1.jpeg", 
        alt: "Pamela Kitana - Sesión fotográfica 1", 
        caption: "Preparándome para este día especial",
        category: "preparacion"
      },
      { 
        src: "/images/quince/quince2.jpeg", 
        alt: "Pamela Kitana - Sesión fotográfica 2", 
        caption: "Con mi vestido soñado",
        category: "vestido"
      },
      { 
        src: "/images/quince/quince3.jpeg", 
        alt: "Pamela Kitana - Sesión fotográfica 3", 
        caption: "Momento de alegría",
        category: "alegria"
      },
      { 
        src: "/images/quince/quince4.jpeg", 
        alt: "Pamela Kitana - Sesión fotográfica 4", 
        caption: "Lista para celebrar",
        category: "celebracion"
      }
    ]
  },
  
  // Mensaje final personalizado (característica premium)
  thankYou: {
    title: "¡Gracias por ser parte de uno de los mejores días de mi vida!",
    personalMessage: "Cada uno de ustedes tiene un lugar especial en mi corazón, y no puedo imaginar esta celebración sin su presencia.",
    message: "Con todo mi cariño:",
    signature: "Pamela Kitana",
    footer: {
      year: "2025",
      name: "PAMELA KITANA XV",
      company: "BY INVITACIONES WEB MX",
      rights: "ALL RIGHTS RESERVED",
      cta: {
        question: "¿TIENES UN EVENTO EN PUERTA?",
        action: "DISEÑA CON NOSOTROS TU INVITACIÓN WEB DIGITAL.",
        linkText: "AQUÍ",
        link: "/"
      }
    }
  },
  
  // Configuración premium adicional
  premium: {
    hasMusic: true,
    hasGallery: true,
    hasPadrinos: true,
    hasFullInvitation: true,
    hasPersonalizedThankYou: true,
    badge: "PREMIUM",
    color: "from-purple-600 to-pink-600"
  }
}

export type PremiumDemoData = typeof premiumDemoData 