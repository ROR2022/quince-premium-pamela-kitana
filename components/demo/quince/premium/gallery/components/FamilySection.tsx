"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FamilySectionProps, FamilyMember } from '../types/family';
import FamilyMemberCard from './FamilyMemberCard';

const FamilySection: React.FC<FamilySectionProps> = ({ section, sectionKey, index, isLast }) => {
  return (
    <motion.section
      className="mb-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decorativo con glassmorphism Aurora */}
      <div className="absolute inset-0 -mx-8 -my-12 aurora-gradient opacity-3 rounded-[3rem] blur-3xl transform rotate-1"></div>
      <div className="absolute top-10 right-20 w-32 h-32 bg-aurora-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-aurora-secondary/10 rounded-full blur-xl"></div>
      
      {/* Encabezado de sección mejorado */}
      <motion.div 
        className="text-center mb-16 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Decoración superior con líneas Aurora */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-px bg-aurora-primary/40"></div>
            <div className="w-3 h-3 bg-aurora-primary rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-aurora-primary"></div>
            <div className="w-4 h-4 bg-aurora-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-12 h-px bg-aurora-primary"></div>
            <div className="w-3 h-3 bg-aurora-primary rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-aurora-primary/40"></div>
          </div>
        </div>
        
        {/* Icono de sección con efectos Aurora */}
        <motion.div 
          className="inline-flex items-center justify-center w-24 h-24 bg-white/95 backdrop-blur-md rounded-full mb-8 aurora-shimmer border-2 border-aurora-tertiary/40 shadow-2xl relative overflow-hidden"
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 aurora-gradient opacity-20 rounded-full"></div>
          
          {/* Corner sparkles */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-aurora-primary rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-aurora-secondary rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.3s'}}></div>
          
          <span className="text-5xl filter drop-shadow-lg relative z-10">{section.icon}</span>
        </motion.div>
        
        {/* Título principal con mejor contraste y fondo */}
        <div className="relative mb-6">
          {/* Fondo para mejor legibilidad */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl -mx-8 -my-4"></div>
          <h3 className="relative font-princess text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-6 leading-tight text-center px-8">
            <span className="relative z-10">{section.title}</span>
            {/* Aurora glow effect manteniendo legibilidad */}
            <span className="absolute inset-0 text-aurora-primary/60 blur-sm z-0">{section.title}</span>
          </h3>
        </div>
        
        {/* Subtítulo mejorado con mejor contraste */}
        {section.subtitle && (
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-black/25 backdrop-blur-sm rounded-2xl -mx-4 -my-3"></div>
            <p className="relative font-playfair text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg">
              {section.subtitle}
            </p>
          </div>
        )}
        
        {/* Decoración inferior elegante con mejor visibilidad */}
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-2">
            <div className="w-6 h-px bg-white/60"></div>
            <div className="w-2 h-2 bg-aurora-primary rounded-full shadow-lg"></div>
            <div className="w-16 h-px bg-aurora-primary/80"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
            <div className="w-24 h-px bg-aurora-primary"></div>
            <div className="w-4 h-4 bg-aurora-tertiary rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.5s'}}></div>
            <div className="w-24 h-px bg-aurora-primary"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
            <div className="w-16 h-px bg-aurora-primary/80"></div>
            <div className="w-2 h-2 bg-aurora-primary rounded-full shadow-lg"></div>
            <div className="w-6 h-px bg-white/60"></div>
          </div>
        </div>
      </motion.div>

      {/* Grid inteligente con espaciado Aurora optimizado y responsivo */}
      <div className={`
        grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 justify-items-center relative px-4 sm:px-6 md:px-8
        ${section.members.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' : ''}
        ${section.members.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' : ''}
        ${section.members.length >= 3 && section.members.length <= 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto' : ''}
        ${section.members.length === 5 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-8xl mx-auto' : ''}
        ${section.members.length > 5 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-full mx-auto' : ''}
      `}>
        {/* Background pattern decorativo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-aurora-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-aurora-secondary rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-0 w-20 h-20 bg-aurora-tertiary rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-0 w-28 h-28 bg-aurora-primary rounded-full blur-3xl"></div>
        </div>
        
        {section.members.map((member: FamilyMember, memberIndex: number) => (
          <FamilyMemberCard 
            key={`${sectionKey}-${memberIndex}`}
            member={member} 
            index={memberIndex}
          />
        ))}
      </div>
      
      {/* Separador Aurora ultra-elegante entre secciones */}
      {!isLast && (
        <motion.div 
          className="flex justify-center items-center mt-24 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-aurora-primary/30"></div>
            
            <div className="relative">
              <div className="w-3 h-3 bg-aurora-primary rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-aurora-primary rounded-full animate-ping opacity-25"></div>
            </div>
            
            <div className="w-12 h-px bg-aurora-primary/60"></div>
            
            <div className="relative">
              <div className="w-5 h-5 bg-aurora-secondary rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute inset-0 w-5 h-5 bg-aurora-secondary rounded-full animate-ping opacity-20" style={{animationDelay: '0.3s'}}></div>
            </div>
            
            <div className="w-16 h-px bg-aurora-primary"></div>
            
            <div className="relative">
              <div className="w-4 h-4 bg-aurora-tertiary rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute inset-0 w-4 h-4 bg-aurora-tertiary rounded-full animate-ping opacity-30" style={{animationDelay: '0.6s'}}></div>
            </div>
            
            <div className="w-16 h-px bg-aurora-primary"></div>
            
            <div className="relative">
              <div className="w-5 h-5 bg-aurora-secondary rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
              <div className="absolute inset-0 w-5 h-5 bg-aurora-secondary rounded-full animate-ping opacity-20" style={{animationDelay: '0.9s'}}></div>
            </div>
            
            <div className="w-12 h-px bg-aurora-primary/60"></div>
            
            <div className="relative">
              <div className="w-3 h-3 bg-aurora-primary rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute inset-0 w-3 h-3 bg-aurora-primary rounded-full animate-ping opacity-25" style={{animationDelay: '1.2s'}}></div>
            </div>
            
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-aurora-primary/30"></div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default FamilySection;
