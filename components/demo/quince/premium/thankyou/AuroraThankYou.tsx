"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { auroraDemoData } from "../data/aurora-demo-data"

export function AuroraThankYou() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Obtener los datos desde auroraDemoData
  const thankYouData = auroraDemoData.thankYou

  return (
    <section 
      ref={ref}
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-aurora-secondary/5 to-aurora-primary/10"
    >
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-[15%] w-8 h-8 text-aurora-tertiary opacity-20 animate-pulse">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute top-40 right-[20%] w-12 h-12 text-aurora-tertiary opacity-20 animate-pulse" style={{ animationDelay: "1s" }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-[30%] w-10 h-10 text-aurora-tertiary opacity-20 animate-pulse" style={{ animationDelay: "2s" }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div 
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Marco decorativo principal */}
        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-aurora-tertiary/30 shadow-xl relative overflow-hidden">
          {/* Efecto de fondo shimmer */}
          <div className="absolute inset-0 aurora-shimmer opacity-20"></div>
          
          {/* Elementos decorativos en las esquinas */}
          <div className="absolute top-3 left-3 w-8 h-8 text-aurora-tertiary/40">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>
          
          <div className="absolute bottom-3 right-3 w-8 h-8 text-aurora-tertiary/40">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>
          
          {/* Contenido principal */}
          <div className="relative">
            {/* Corona decorativa */}
            <div className="mx-auto w-16 h-16 mb-4 text-aurora-tertiary">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            
            <h2 className="font-princess aurora-text-gradient text-4xl md:text-5xl mb-6">
              {thankYouData.title}
            </h2>
            
            {/* Separador decorativo */}
            <div className="flex items-center justify-center my-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
              <div className="mx-4 relative">
                <span className="text-aurora-tertiary text-sm">✧</span>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
            </div>
            
            {/* Mensaje principal */}
            <div className="mb-8 max-w-2xl mx-auto">
              <p className="text-aurora-secondary text-lg italic leading-relaxed">
                {thankYouData.personalMessage}
              </p>
            </div>
            
            {/* Detalles adicionales */}
            <div className="p-6 bg-aurora-accent/10 rounded-lg border border-aurora-tertiary/20 max-w-xl mx-auto">
              <p className="text-gray-700">
                Les agradezco de todo corazón por hacer de este día algo tan especial y mágico. 
                Cada uno de sus buenos deseos, su presencia y su cariño han convertido mi fiesta de XV años 
                en una historia de cuento de hadas que siempre recordaré.
              </p>
            </div>
            
            {/* Firma */}
            <div className="mt-8 flex flex-col items-center">
              <div className="mb-2 italic text-aurora-secondary">
                {thankYouData.signature}
              </div>
              
              {/* Imagen de firma */}
              <div className="w-40 h-20 relative">
                {'imageUrl' in thankYouData && thankYouData.imageUrl ? (
                  <Image 
                    src={thankYouData.imageUrl} 
                    alt="Firma de Pamela Kitana" 
                    fill
                    style={{objectFit: "contain"}} 
                    className="opacity-80"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-princess text-aurora-primary text-xl">
                    Pamela Kitana
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Nota de tema */}
        <div className="mt-8 p-3 bg-aurora-50/10 backdrop-blur-sm rounded-lg border border-aurora-tertiary/20 max-w-md mx-auto">
          <p className="text-xs text-aurora-50">
            👑 <strong>Tema Aurora:</strong> Agradecimiento con diseño de cuento de hadas y elementos elegantes inspirados en la princesa Aurora.
          </p>
        </div>
      </div>
    </section>
  )
}
