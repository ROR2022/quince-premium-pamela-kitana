"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FamilyMemberCardProps } from '../types/family';
import { 
  shimmerVariants, 
  floatingVariants, 
  sparkleVariants, 
  glowVariants 
} from '../animations/family-animations';

const FamilyMemberCard: React.FC<FamilyMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      className="bg-white/98 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8 border-2 border-aurora-tertiary/40 shadow-2xl hover:shadow-aurora-primary/20 hover:shadow-2xl transition-all duration-500 w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs group aurora-shimmer relative overflow-hidden"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      variants={floatingVariants}
      animate="animate"
    >
      {/* Shimmer effect overlay */}
      <motion.div 
        className="absolute inset-0 aurora-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
        variants={shimmerVariants}
        initial="initial"
        whileHover="animate"
      ></motion.div>
      
      {/* Sparkle effects con animaciones - Responsivos */}
      <motion.div 
        className="absolute top-2 md:top-4 right-2 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-aurora-primary rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        variants={sparkleVariants}
        animate="animate"
      ></motion.div>
      <motion.div 
        className="absolute bottom-4 md:bottom-6 left-2 md:left-4 w-1 md:w-1.5 h-1 md:h-1.5 bg-aurora-tertiary rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300" 
        style={{animationDelay: '0.5s'}}
        variants={sparkleVariants}
        animate="animate"
      ></motion.div>

      {/* Imagen del miembro - Altura responsiva */}
      <motion.div 
        className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-2xl overflow-hidden mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-500 shadow-lg"
        whileHover={{ scale: 1.08, rotateY: 5 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        {/* Marco decorativo con glow */}
        <motion.div 
          className="absolute inset-0 rounded-2xl border-2 border-aurora-primary/30 group-hover:border-aurora-primary/60 transition-colors duration-300 z-10"
          variants={glowVariants}
          whileHover="animate"
        ></motion.div>
        
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover filter group-hover:brightness-110 transition-all duration-500"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
          onError={(e) => {
            // Fallback en caso de error de imagen
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
        />
        
        {/* Overlay gradient Aurora con animación */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-aurora-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            background: [
              'linear-gradient(to top, rgba(222, 161, 147, 0.2), transparent)',
              'linear-gradient(to top, rgba(177, 128, 117, 0.3), transparent)',
              'linear-gradient(to top, rgba(222, 161, 147, 0.2), transparent)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        ></motion.div>
        
        {/* Corner decorations con animaciones - Responsivos */}
        <motion.div 
          className="absolute top-1 md:top-2 left-1 md:left-2 w-3 md:w-4 h-3 md:h-4 border-l-2 border-t-2 border-aurora-primary/40 group-hover:border-aurora-primary transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1 md:top-2 right-1 md:right-2 w-3 md:w-4 h-3 md:h-4 border-r-2 border-t-2 border-aurora-primary/40 group-hover:border-aurora-primary transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: -5 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1 md:bottom-2 left-1 md:left-2 w-3 md:w-4 h-3 md:h-4 border-l-2 border-b-2 border-aurora-primary/40 group-hover:border-aurora-primary transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: -5 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1 md:bottom-2 right-1 md:right-2 w-3 md:w-4 h-3 md:h-4 border-r-2 border-b-2 border-aurora-primary/40 group-hover:border-aurora-primary transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
        ></motion.div>
      </motion.div>
      
      {/* Información del miembro - Texto mejorado con excelente contraste */}
      <div className="text-center relative z-10">
        <motion.h4 
          className="font-princess text-lg sm:text-xl md:text-2xl text-gray-800 font-bold mb-1 md:mb-2 transition-all duration-300 leading-tight drop-shadow-sm"
          whileHover={{ 
            scale: 1.05,
            color: '#b18075',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}
          transition={{ duration: 0.3 }}
          style={{
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}
        >
          {member.name}
        </motion.h4>
        {member.role && (
          <motion.p 
            className="font-playfair text-gray-600 font-medium text-sm sm:text-base mb-2 md:mb-4 transition-all duration-300"
            initial={{ opacity: 0.9 }}
            whileHover={{ 
              opacity: 1, 
              y: -2,
              color: '#8b5963',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}
            style={{
              textShadow: '0 0.5px 1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {member.role}
          </motion.p>
        )}
      </div>
      
      {/* Decoración inferior Aurora - Mejorada con mejor visibilidad */}
      <div className="flex justify-center items-center space-x-1 md:space-x-2 mt-2 md:mt-4">
        <motion.div 
          className="w-4 md:w-6 h-px bg-gray-400 group-hover:bg-aurora-primary transition-colors duration-300"
          whileHover={{ scaleX: 1.2 }}
        ></motion.div>
        <motion.div 
          className="w-1.5 md:w-2 h-1.5 md:h-2 bg-aurora-primary rounded-full group-hover:scale-125 transition-transform duration-300 shadow-sm"
          variants={sparkleVariants}
          animate="animate"
        ></motion.div>
        <motion.div 
          className="w-6 md:w-8 h-px bg-aurora-primary group-hover:bg-aurora-secondary transition-colors duration-300"
          whileHover={{ scaleX: 1.3 }}
        ></motion.div>
        <motion.div 
          className="w-1.5 md:w-2 h-1.5 md:h-2 bg-aurora-primary rounded-full group-hover:scale-125 transition-transform duration-300 shadow-sm"
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '0.5s' }}
        ></motion.div>
        <motion.div 
          className="w-4 md:w-6 h-px bg-gray-400 group-hover:bg-aurora-primary transition-colors duration-300"
          whileHover={{ scaleX: 1.2 }}
        ></motion.div>
      </div>
      
      {/* Glow effect en hover con animación */}
      <motion.div 
        className="absolute inset-0 rounded-3xl aurora-shadow opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
        variants={glowVariants}
        whileHover="animate"
      ></motion.div>
    </motion.div>
  );
};

export default FamilyMemberCard;
