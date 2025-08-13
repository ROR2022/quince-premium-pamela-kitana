"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { auroraDemoData } from "../data/aurora-demo-data"
import { premiumDemoData } from "../data/premium-demo-data";

export function AuroraThankYou() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Obtener los datos desde auroraDemoData
  const thankYouData = auroraDemoData.thankYou

  return (
    <section 
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/custom/aurora/aurora_14.jpeg"
        alt="Aurora Background"
        fill
        style={{ objectFit: "cover" }}
        quality={90}
        priority={false}
        className="z-0"
      />
      
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-aurora-50/85 to-white/80 backdrop-blur-sm z-5"></div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-[15%] w-8 h-8 text-aurora-tertiary opacity-20 animate-pulse z-5">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute top-40 right-[20%] w-12 h-12 text-aurora-tertiary opacity-20 animate-pulse z-5" style={{ animationDelay: "1s" }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-[30%] w-10 h-10 text-aurora-tertiary opacity-20 animate-pulse z-5" style={{ animationDelay: "2s" }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div 
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 relative z-10 ${
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

        {/* CTA Aurora Elegante */}
        <div className="relative mb-8 group">
          {/* Marco principal con glassmorphism */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border-2 border-aurora-tertiary/40 shadow-2xl relative overflow-hidden">
            {/* Efecto shimmer de fondo */}
            <div className="absolute inset-0 aurora-shimmer opacity-30"></div>
            
            {/* Decoraciones en las esquinas */}
            <div className="absolute top-3 left-3 w-6 h-6 text-aurora-tertiary/50">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
              </svg>
            </div>
            <div className="absolute top-3 right-3 w-6 h-6 text-aurora-tertiary/50">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
              </svg>
            </div>
            
            {/* Contenido del CTA */}
            <div className="relative z-10 text-center">
              {/* Corona decorativa */}
              <div className="mx-auto w-12 h-12 mb-4 text-aurora-tertiary">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              
              <h3 className="font-princess aurora-text-gradient text-2xl md:text-3xl font-bold mb-3">
                {premiumDemoData.thankYou.footer.cta.question}
              </h3>
              
              {/* Separador decorativo */}
              <div className="flex items-center justify-center my-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
                <div className="mx-3 text-aurora-tertiary text-xs">✧</div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
              </div>
              
              <p className="text-aurora-secondary text-base mb-6 leading-relaxed max-w-md mx-auto">
                {premiumDemoData.thankYou.footer.cta.action}
              </p>
              
              {/* Botón Aurora mágico */}
              <a
                href={premiumDemoData.thankYou.footer.cta.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-aurora-primary via-aurora-secondary to-aurora-tertiary 
                         text-white px-8 py-4 rounded-full font-semibold text-lg
                         hover:shadow-xl hover:shadow-aurora-tertiary/30 
                         transform hover:scale-105 transition-all duration-300
                         border border-aurora-tertiary/20 relative overflow-hidden group"
              >
                {/* Efecto brillante al hover */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Icono de estrella */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor" />
                </svg>
                
                <span className="relative z-10">{premiumDemoData.thankYou.footer.cta.linkText}</span>
                
                {/* Icono de flecha */}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Efecto de brillo exterior */}
          <div className="absolute inset-0 bg-gradient-to-r from-aurora-primary/20 via-aurora-secondary/20 to-aurora-tertiary/20 rounded-2xl blur-xl -z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        </div>
        
        
      </div>
    </section>
  )
}
