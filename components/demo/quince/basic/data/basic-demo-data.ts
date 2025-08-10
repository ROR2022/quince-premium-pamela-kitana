// Datos demo para el paquete básico de quinceañera
export const basicDemoData = {
  hero: {
    name: "Pamela Kitana",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quince/quince1.jpeg"
  },
  
  event: {
    celebrant: "Pamela Kitana Gómez Robles",
    parents: {
      father: "[PADRE DE PAMELA - Por Confirmar]",
      mother: "[MADRE DE PAMELA - Por Confirmar]"
    },
    date: {
      full: "Sábado 11 de Octubre 2025",
      day: "Sábado",
      date: "11 de Octubre 2025"
    },
    ceremony: {
      time: "[HORA MISA - Por Confirmar]",
      venue: "[PARROQUIA - Por Confirmar]",
      address: "[DIRECCIÓN PARROQUIA - Por Confirmar]",
      type: "Misa de Acción de Gracias"
    },
    party: {
      time: "[HORA RECEPCIÓN - Por Confirmar]",
      venue: "[SALÓN DE FIESTAS - Por Confirmar]",
      address: "[DIRECCIÓN SALÓN - Por Confirmar]",
      type: "Recepción"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "October 11, 2025 15:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Espero que no sea impedimento para que ustedes puedan asistir a mi fiesta.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Mi mejor regalo es compartir contigo este gran día, si deseas obsequiarme algo, puedo sugerir las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "[DATOS BANCARIOS DE LA FAMILIA GÓMEZ ROBLES - Por Confirmar]"
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: XV años Pamela Kitana\nCódigo: [Por Confirmar]"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Puedes entregarlo en la recepción"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu evento",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 