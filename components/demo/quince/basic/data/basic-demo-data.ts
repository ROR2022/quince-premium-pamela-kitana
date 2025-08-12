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
      father: "David Ulister Gómez Villanueva",
      mother: "Liliana Robles Nicolás"
    },
    date: {
      full: "Sábado 11 de Octubre 2025",
      day: "Sábado",
      date: "11 de Octubre 2025"
    },
    ceremony: {
      time: "7:00 PM",
      venue: "Parroquia Cristo Rey",
      address: "Viena y Pino Suárez 7407, Buena Vista, 88120 Nuevo Laredo, Tamps.",
      type: "Misa de Acción de Gracias"
    },
    party: {
      time: "8:00 PM",
      venue: "Salon Melany's",
      address: "C. Berlín 2021, Unidad Nacional, 88134 Nuevo Laredo, Tamps.",
      type: "Recepción"
    },
    dressCode: "Formal (Rosa Gold unicamente la quinceañera)",
    restrictions: ""
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