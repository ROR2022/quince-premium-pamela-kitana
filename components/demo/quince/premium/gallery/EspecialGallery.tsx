"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FamilySection from './components/FamilySection';
import familyData from './data/family-data';

/**
 * Componente EspecialGallery - Galería familiar especial para quinceañera
 * 
 * Componente principal refactorizado que muestra 5 secciones familiares específicas:
 * 1. Mis Padres
 * 2. Mis Hermanos
 * 3. Mis Abuelos  
 * 4. Mis Padrinos de Velación
 * 5. Corte de Honor
 * 
 * Features:
 * - Diseño responsivo con Aurora theme
 * - Animaciones avanzadas con framer-motion
 * - Glassmorphism effects
 * - Background image aurora_9.jpeg
 * - Componentes modulares para mejor mantenimiento
 */
const EspecialGallery = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/custom/aurora/aurora_9.jpeg')",
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay mejorado para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Gradiente Aurora complementario con mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-20" />

      {/* Container principal */}
      <div className="max-w-7xl mx-auto relative z-40 py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        
        {/* Header principal */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Corona decorativa */}
          <motion.div 
            className="inline-flex items-center justify-center w-24 h-24 bg-white/95 backdrop-blur-md rounded-full mb-8 aurora-shimmer relative border-2 border-aurora-primary/40 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-5xl filter drop-shadow-lg">👑</span>
            {/* Sparkle effect */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-aurora-primary/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-aurora-tertiary/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </motion.div>
          
          <h2 className="font-princess text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl mb-6 relative">
            ✨ Mi Familia Real ✨
            {/* Text shadow effect mejorado */}
            <span className="absolute inset-0 text-aurora-primary/80 blur-sm">✨ Mi Familia Real ✨</span>
          </h2>
          
          <p className="font-playfair text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-xl bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
            Las personas más importantes de mi vida que hacen posible este sueño de princesa
          </p>
          
          {/* Línea decorativa Aurora */}
          <div className="flex justify-center items-center space-x-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-aurora-primary"></div>
            <div className="w-3 h-3 bg-aurora-primary rounded-full"></div>
            <div className="w-8 h-px bg-aurora-primary"></div>
            <div className="w-6 h-6 bg-gradient-to-br from-aurora-primary to-aurora-tertiary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-8 h-px bg-aurora-primary"></div>
            <div className="w-3 h-3 bg-aurora-primary rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-aurora-primary"></div>
          </div>
        </motion.div>

        {/* Secciones familiares usando componentes modulares */}
        <div className="space-y-24">
          {Object.entries(familyData).map(([key, section], index) => (
            <FamilySection
              key={key}
              section={section}
              sectionKey={key}
              index={index}
              isLast={index === Object.entries(familyData).length - 1}
            />
          ))}
        </div>
        
        {/* Footer decorativo */}
        <motion.div 
          className="text-center mt-20 pt-16 border-t border-aurora-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-8 h-px bg-aurora-primary/40"></div>
            <span className="text-2xl">💖</span>
            <div className="w-8 h-px bg-aurora-primary/40"></div>
          </div>
          <p className="font-playfair text-white/90 italic text-lg bg-black/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
            &ldquo;Cada uno de ustedes tiene un lugar especial en mi corazón&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EspecialGallery