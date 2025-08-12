"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { auroraDemoData } from "../data/aurora-demo-data"

export function AuroraGifts() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeGift, setActiveGift] = useState<number | null>(null)

  // Obtener los datos de regalos desde auroraDemoData o usar valores predeterminados
  const giftsData = auroraDemoData.gifts || {
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
  }

  return (
    <section className="relative py-16 px-4 min-h-screen">
      {/* Fondo con imagen aurora_12 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/custom/aurora/aurora_12.jpeg"
          alt="Fondo Regalos Encantados Aurora"
          fill
          className="object-cover"
          quality={85}
        />
        {/* Overlay específico para tarjetas - gradiente elegante */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-aurora-50/90 to-white/85 backdrop-blur-[1px]"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-16 left-10 w-16 h-16 text-aurora-tertiary opacity-20 animate-pulse z-5">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-16 right-10 w-16 h-16 text-aurora-tertiary opacity-20 animate-pulse z-5" style={{ animationDelay: "1.5s" }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div 
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Encabezado decorativo */}
        <div className="mb-12 inline-block relative">
          {/* Elemento decorativo superior - corona o regalo */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16">
            <svg 
              viewBox="0 0 24 24" 
              className="w-full h-full text-aurora-tertiary"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 12L12 12L12 4L20 4L20 12Z" fill="currentColor" fillOpacity="0.3"/>
              <path d="M4 12L12 12L12 4L4 4L4 12Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M20 20L12 20L12 12L20 12L20 20Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M4 20L12 20L12 12L4 12L4 20Z" fill="currentColor" fillOpacity="0.3"/>
              <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 2L12 22" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12L22 12" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 3L8 8" stroke="currentColor" strokeWidth="1"/>
              <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1"/>
              <path d="M16 8L21 3" stroke="currentColor" strokeWidth="1"/>
              <path d="M3 21L8 16" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <div className="absolute inset-0 aurora-shimmer rounded-full"></div>
          </div>
          
          <h2 className="font-princess aurora-text-gradient text-4xl md:text-5xl mt-6">
            Regalos Encantados
          </h2>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center mt-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
            <div className="mx-4 relative">
              <span className="text-aurora-tertiary text-sm">✧</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
          </div>
          
          <p className="text-aurora-secondary mt-4 max-w-xl mx-auto">
            {giftsData.message}
          </p>
        </div>
        
        {/* Tarjetas de opciones de regalo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {giftsData.options.map((option, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-lg border transition-all duration-300 relative overflow-hidden group cursor-pointer
                ${activeGift === index ? 'border-aurora-primary shadow-lg scale-105' : 'border-aurora-tertiary/30 hover:border-aurora-tertiary'}
              `}
              onClick={() => setActiveGift(activeGift === index ? null : index)}
            >
              {/* Efectos de fondo */}
              <div className={`absolute inset-0 bg-aurora-primary/5 transition-opacity duration-300 ${activeGift === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
              <div className={`absolute inset-0 aurora-shimmer transition-opacity duration-300 ${activeGift === index ? 'opacity-30' : 'opacity-0 group-hover:opacity-10'}`}></div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-6 relative">
                <div className="w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4">
                  {option.icon}
                </div>
                
                <h3 className="font-princess text-2xl text-aurora-primary mb-2">
                  {option.title}
                </h3>
                
                <div className="text-aurora-secondary font-medium mb-1">
                  {option.description}
                </div>
                
                {/* Detalles expandibles */}
                <div 
                  className={`overflow-hidden transition-all duration-300 text-gray-600 text-sm mt-2 
                    ${activeGift === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="py-2 px-4 bg-aurora-accent/10 rounded-md border border-aurora-tertiary/20 mt-2">
                    {option.details.split('\n').map((line, i) => (
                      <p key={i} className="my-1">{line}</p>
                    ))}
                  </div>
                </div>
                
                {/* Indicador de expandir */}
                <div className={`text-aurora-secondary mt-2 text-sm transition-transform duration-300 ${activeGift === index ? 'rotate-180' : ''}`}>
                  {activeGift === index ? '↑ Ocultar detalles' : '↓ Ver detalles'}
                </div>
                
                {/* Elemento decorativo en esquina */}
                <div className="absolute top-2 right-2 w-5 h-5 text-aurora-tertiary/30">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Nota decorativa */}
        <div className="mt-12 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-aurora-tertiary/30 max-w-lg mx-auto">
          <p className="text-aurora-secondary italic">
            &ldquo;Tu presencia es el regalo más valioso que podría recibir en este día tan especial para mí&rdquo;
          </p>
          <div className="mt-2 text-xs text-gray-500">
            — Pamela Kitana
          </div>
        </div>
      </div>
    </section>
  )
}
