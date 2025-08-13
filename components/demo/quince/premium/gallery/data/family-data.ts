/**
 * Datos de la familia para el componente EspecialGallery
 * Estructura de datos completa con toda la información familiar
 */

import { FamilyData } from '../types/family';

const familyData: FamilyData = {
  // 1.1 Mis Padres
  padres: {
    title: "Mis Padres",
    subtitle: "Los pilares de mi vida que me guiaron hasta aquí",
    icon: "👨‍👩‍👧‍👦",
    members: [
      {
        name: "Liliana Robles Nicolás & David Ulister Gómez Villanueva",
        image: "/images/custom/familia/padres.jpg",
        role: "Mis Padres",
        order: 1
      }
    ]
  },

  // 1.2 Mis Hermanos (orden específico: hermano mayor → hermanas)
  hermanos: {
    title: "Mis Hermanos",
    subtitle: "Los compañeros de vida que siempre estarán conmigo",
    icon: "👫",
    members: [
      {
        name: "Cristian",
        image: "/images/custom/chambelanes/hermano_cristian.jpg",
        role: "Hermano mayor",
        order: 1
      },
      {
        name: "Davne",
        image: "/images/custom/familia/hermana_davne.jpg", 
        role: "Hermana",
        order: 2
      },
      {
        name: "Raiza",
        image: "/images/custom/familia/hermana_raiza.jpg",
        role: "Hermana",
        order: 3
      }
    ]
  },

  // 1.3 Mis Abuelos (orden específico: paternos → maternos)
  abuelos: {
    title: "Mis Abuelos", 
    subtitle: "La sabiduría y el amor que han marcado mi camino",
    icon: "👴👵",
    members: [
      {
        name: "Mario Gómez Moreno & Elva Villanueva Cruz",
        image: "/images/custom/familia/abuelos_paternos.jpg",
        role: "Abuelos Paternos",
        order: 1
      },
      {
        name: "Antonio Robles Flores & Trinidad Nicolás Sarabia", 
        image: "/images/custom/familia/abuelos_maternos.jpg",
        role: "Abuelos Maternos",
        order: 2
      }
    ]
  },

  // 1.4 Mis Padrinos de Velación
  padrinos: {
    title: "Mis Padrinos de Velación",
    subtitle: "Los segundos padres que eligieron acompañarme en este camino",
    icon: "🙏",
    members: [
      {
        name: "Juan Fajardo rueda & Dalia Sánchez Jiménez", 
        image: "/images/custom/familia/padrinos_velacion.jpg",
        role: "Padrinos de Velación",
        order: 1
      }
    ]
  },

  // 1.5 Corte de Honor (Chambelanes)
  chambelanes: {
    title: "Corte de Honor",
    subtitle: "Los caballeros que me acompañarán en esta noche mágica",
    icon: "🤵",
    members: [
      {
        name: "Cristian",
        image: "/images/custom/chambelanes/hermano_cristian.jpg",
        role: "Hermano y Chambelán de honor",
        order: 1
      },
      {
        name: "Aaron",
        image: "/images/custom/chambelanes/primo_aaron.jpg", 
        role: "Primo",
        order: 2
      },
      {
        name: "Edson",
        image: "/images/custom/chambelanes/primo_edson.jpg",
        role: "Primo",
        order: 3
      },
      {
        name: "Jonathan",
        image: "/images/custom/chambelanes/primo_jonathan.jpg",
        role: "Primo",
        order: 4
      },
      {
        name: "Angel Jahir",
        image: "/images/custom/chambelanes/angel_jahir.jpg",
        role: "Chambelán especial",
        order: 5
      }
    ]
  }
};

export default familyData;
