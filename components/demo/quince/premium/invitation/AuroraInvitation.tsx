"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { auroraDemoData } from "../data/aurora-demo-data"

export function AuroraInvitation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative py-16 px-4 min-h-screen">
      {/* Fondo con imagen aurora_2 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/custom/aurora/aurora_15.jpeg"
          alt="Fondo Invitación Aurora"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        {/* Overlay para legibilidad - FASE 1: Mejorado para mayor visibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-aurora-50/30 to-white/88 backdrop-blur-md"></div>
      </div>

      {/* Contenido principal */}
      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Badge premium con estilo Aurora - FASE 2: Intensificado para mayor impacto */}
        <div className="inline-block bg-gradient-to-r from-aurora-primary via-aurora-secondary to-aurora-tertiary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl border-2 border-aurora-primary/60 aurora-shadow ring-2 ring-aurora-primary/30">
          👑 Invitación Real Aurora
        </div>

        {/* Marco decorativo estilo Aurora */}
          <div className="relative p-8 border-6 border-aurora-primary/50 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl ring-2 ring-aurora-primary/30">
          {/* Decoraciones esquinas - estilo castillo/cuento de hadas */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-6 border-l-6 border-aurora-primary shadow-[0_0_8px_2px_rgba(255,180,255,0.5)] -translate-x-3 -translate-y-3"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-6 border-r-6 border-aurora-primary shadow-[0_0_8px_2px_rgba(255,180,255,0.5)] translate-x-3 -translate-y-3"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-6 border-l-6 border-aurora-primary shadow-[0_0_8px_2px_rgba(255,180,255,0.5)] -translate-x-3 translate-y-3"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-6 border-r-6 border-aurora-primary shadow-[0_0_8px_2px_rgba(255,180,255,0.5)] translate-x-3 translate-y-3"></div>

          <h2 className="text-2xl md:text-3xl mb-8 leading-relaxed text-gray-800">
            <span className="block font-princess text-4xl md:text-5xl aurora-text-gradient font-bold mb-2 drop-shadow-[0_2px_6px_rgba(180,80,255,0.25)]">
              {auroraDemoData.invitation.message}
            </span>
            <span className="text-3xl md:text-4xl font-princess font-bold text-aurora-primary drop-shadow-[0_2px_6px_rgba(180,80,255,0.25)]">
              {auroraDemoData.invitation.subtitle}
            </span>
            <br />
            <span className="text-xl md:text-2xl font-light italic text-aurora-primary mt-4 block drop-shadow-[0_1px_4px_rgba(180,80,255,0.18)]">
              {auroraDemoData.invitation.blessing}
            </span>
          </h2>

          {/* Nombre de la quinceañera - estilo Aurora */}
          <div className="my-8">
            <p className="font-princess text-3xl md:text-4xl text-gray-900 font-bold mb-2 drop-shadow-[0_2px_6px_rgba(180,80,255,0.22)]">
              {auroraDemoData.event.celebrant}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-aurora-primary via-aurora-secondary to-aurora-tertiary mx-auto rounded-full"></div>
          </div>

          {/* Información de padres - Estilo Aurora - FASE 6: Mejorada */}
          <div className="my-12 bg-white/95 rounded-2xl p-8 shadow-xl border-2 border-aurora-primary/40 backdrop-blur-md">
            <div className="space-y-4">
              <p className="font-playfair text-2xl font-bold text-gray-900 drop-shadow-[0_2px_6px_rgba(180,80,255,0.18)]">
                {auroraDemoData.invitation.parents.father}
              </p>
              <div className="flex items-center justify-center">
                <div className="w-8 h-1 bg-gradient-to-r from-aurora-primary via-aurora-secondary to-aurora-tertiary rounded-full"></div>
                <p className="mx-4 text-aurora-primary font-bold text-lg drop-shadow-[0_1px_4px_rgba(180,80,255,0.18)]">&</p>
                <div className="w-8 h-1 bg-gradient-to-r from-aurora-tertiary via-aurora-secondary to-aurora-primary rounded-full"></div>
              </div>
              <p className="font-playfair text-2xl font-bold text-gray-900 drop-shadow-[0_2px_6px_rgba(180,80,255,0.18)]">
                {auroraDemoData.invitation.parents.mother}
              </p>
            </div>
          </div>

          {/* Mensaje decorativo premium - estilo Aurora - FASE 7: Fortalecido */}
          <div className="mt-8 p-6 bg-gradient-to-r from-aurora-200/90 to-aurora-300/85 rounded-xl border-2 border-aurora-primary/50 shadow-lg">
            <p className="text-gray-900 italic font-princess text-2xl font-bold drop-shadow-[0_2px_6px_rgba(180,80,255,0.18)]">
              {auroraDemoData.invitation.decorativeMessage}
            </p>
          </div>

          {/* Decoración floral - símbolo de Aurora/La Bella Durmiente - FASE 8: Mejorada */}
          <div className="mt-8 flex justify-center animate-pulse-slow">
            <div className="relative w-16 h-16 shadow-xl ring-2 ring-aurora-primary/40">
              <div className="absolute inset-0 aurora-shimmer rounded-full bg-gradient-to-br from-aurora-primary/60 via-aurora-secondary/40 to-aurora-tertiary/60"></div>
              <svg 
                className="w-full h-full text-aurora-tertiary drop-shadow-[0_2px_8px_rgba(180,80,255,0.25)]" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                />
                <path 
                  d="M12 6C12 6 16 10 16 12C16 14 14 16 12 16C10 16 8 14 8 12C8 10 12 6 12 6Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                />
                <path 
                  d="M7 7L17 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                />
                <path 
                  d="M17 7L7 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Nota del tema Aurora - FASE 9: Mejorada */}
        <div 
        style={{display:'none'}}
        className="mt-8 p-3 bg-aurora-100/90 rounded-lg border-2 border-aurora-primary/40 backdrop-blur-md shadow-md">
          <p className="text-xs text-gray-900 font-semibold">
            👑 <strong>Tema Aurora:</strong> Invitación inspirada en la princesa Aurora con elementos de cuento de hadas y diseño exclusivo.
          </p>
        </div>
      </div>
    </section>
  )
}
