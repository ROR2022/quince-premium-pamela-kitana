/**
 * Configuraciones de animación para framer-motion
 * Variantes reutilizables para el componente EspecialGallery
 */

export const shimmerVariants = {
  initial: { x: '-100%' },
  animate: { 
    x: '100%',
    transition: {
      duration: 1.5,
      ease: 'easeInOut' as const,
      repeat: Infinity,
      repeatDelay: 3
    }
  }
};

export const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      ease: 'easeInOut' as const,
      repeat: Infinity,
      repeatType: 'reverse' as const
    }
  }
};

export const sparkleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      ease: 'easeInOut' as const,
      repeat: Infinity,
      repeatType: 'reverse' as const
    }
  }
};

export const glowVariants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(222, 161, 147, 0.3)',
      '0 0 30px rgba(222, 161, 147, 0.6)',
      '0 0 20px rgba(222, 161, 147, 0.3)'
    ],
    transition: {
      duration: 3,
      ease: 'easeInOut' as const,
      repeat: Infinity,
      repeatType: 'reverse' as const
    }
  }
};
