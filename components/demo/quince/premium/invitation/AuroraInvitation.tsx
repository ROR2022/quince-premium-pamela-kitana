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
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
      </div>

      {/* Contenido principal */}
      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Badge premium con estilo Aurora */}
        <div className="inline-block aurora-gradient text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg border border-aurora-tertiary/50 aurora-shadow">
          👑 Invitación Real Aurora
        </div>

        {/* Marco decorativo estilo Aurora */}
        <div className="relative p-8 border-4 border-aurora-tertiary/30 rounded-2xl bg-aurora-accent/10 backdrop-blur-sm shadow-lg">
          {/* Decoraciones esquinas - estilo castillo/cuento de hadas */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-aurora-primary -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-aurora-primary translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-aurora-primary -translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-aurora-primary translate-x-2 translate-y-2"></div>

          <h2 className="text-2xl md:text-3xl mb-8 leading-relaxed text-aurora-secondary">
            <span className="block font-princess text-4xl md:text-5xl aurora-text-gradient mb-2">
              {auroraDemoData.invitation.message}
            </span>
            <span className="text-3xl md:text-4xl font-princess font-medium text-aurora-primary">
              {auroraDemoData.invitation.subtitle}
            </span>
            <br />
            <span className="text-xl md:text-2xl font-light italic text-aurora-secondary mt-4 block">
              {auroraDemoData.invitation.blessing}
            </span>
          </h2>

          {/* Nombre de la quinceañera - estilo Aurora */}
          <div className="my-8">
            <p className="font-princess text-3xl md:text-4xl text-aurora-secondary mb-2">
              {auroraDemoData.event.celebrant}
            </p>
            <div className="w-32 h-1 aurora-gradient mx-auto rounded-full"></div>
          </div>

          {/* Información de padres - Estilo Aurora */}
          <div className="my-12 bg-white/80 rounded-2xl p-8 shadow-lg border border-aurora-tertiary/30 backdrop-blur-sm">
            <div className="space-y-4">
              <p className="font-playfair text-2xl font-medium text-aurora-secondary">
                {auroraDemoData.invitation.parents.father}
              </p>
              <div className="flex items-center justify-center">
                <div className="w-8 h-px bg-gradient-to-r from-aurora-primary to-aurora-tertiary"></div>
                <p className="mx-4 text-aurora-secondary font-light text-lg">&</p>
                <div className="w-8 h-px bg-gradient-to-r from-aurora-tertiary to-aurora-primary"></div>
              </div>
              <p className="font-playfair text-2xl font-medium text-aurora-secondary">
                {auroraDemoData.invitation.parents.mother}
              </p>
            </div>
          </div>

          {/* Mensaje decorativo premium - estilo Aurora */}
          <div className="mt-8 p-6 bg-gradient-to-r from-aurora-100/80 to-aurora-200/80 rounded-xl border border-aurora-primary/30">
            <p className="text-aurora-700 italic font-princess text-2xl">
              {auroraDemoData.invitation.decorativeMessage}
            </p>
          </div>

          {/* Decoración floral - símbolo de Aurora/La Bella Durmiente */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 aurora-shimmer rounded-full"></div>
              <svg 
                className="w-full h-full text-aurora-primary" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                />
                <path 
                  d="M12 6C12 6 16 10 16 12C16 14 14 16 12 16C10 16 8 14 8 12C8 10 12 6 12 6Z" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                />
                <path 
                  d="M7 7L17 17" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                />
                <path 
                  d="M17 7L7 17" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Nota del tema Aurora */}
        <div className="mt-8 p-3 bg-aurora-50/80 rounded-lg border border-aurora-tertiary/30 backdrop-blur-sm">
          <p className="text-xs text-aurora-700">
            👑 <strong>Tema Aurora:</strong> Invitación inspirada en la princesa Aurora con elementos de cuento de hadas y diseño exclusivo.
          </p>
        </div>
      </div>
    </section>
  )
}
