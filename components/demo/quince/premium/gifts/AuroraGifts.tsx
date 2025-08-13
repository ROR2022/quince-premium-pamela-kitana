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
    message:
      "Mi mejor regalo es compartir contigo este gran día, si deseas obsequiarme algo, puedo sugerir las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "[DATOS BANCARIOS DE LA FAMILIA GÓMEZ ROBLES - Por Confirmar]",
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: XV años Pamela Kitana\nCódigo: [Por Confirmar]",
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Puedes entregarlo en la recepción",
      },
    ],
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
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-aurora-50/95 to-white/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="absolute top-16 left-10 w-16 h-16 text-fuchsia-500 opacity-40 animate-pulse z-5 drop-shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-16 right-10 w-16 h-16 text-purple-700 opacity-40 animate-pulse z-5 drop-shadow-sm"
        style={{ animationDelay: "1.5s" }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Encabezado decorativo - Fucsia/Morado */}
        <div className="mb-12 inline-block relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 drop-shadow-md">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-fuchsia-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 12L12 12L12 4L20 4L20 12Z" fill="currentColor" fillOpacity="0.4" />
              <path d="M4 12L12 12L12 4L4 4L4 12Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M20 20L12 20L12 12L20 12L20 20Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M4 20L12 20L12 12L4 12L4 20Z" fill="currentColor" fillOpacity="0.4" />
              <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12L22 12" stroke="currentColor" strokeWidth="2" />
              <path d="M3 3L8 8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 8L21 3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 21L8 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 opacity-30 rounded-full"></div>
          </div>

          <h2 className="font-princess bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent text-4xl md:text-5xl mt-6 drop-shadow-sm font-bold">
            Regalos Encantados
          </h2>

          <div className="flex items-center justify-center mt-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
            <div className="mx-4 relative">
              <span className="text-purple-700 text-lg font-bold drop-shadow-sm">✧</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>
          </div>

          <p className="text-fuchsia-700 mt-4 max-w-xl mx-auto font-medium text-lg drop-shadow-sm">
            {giftsData.message}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {giftsData.options.map((option, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-md rounded-lg border-2 transition-all duration-300 relative overflow-hidden group cursor-pointer shadow-lg
                ${activeGift === index ? "border-fuchsia-500 shadow-xl scale-105 bg-white/95" : "border-purple-700/50 hover:border-fuchsia-500 hover:shadow-xl"}
              `}
              onClick={() => setActiveGift(activeGift === index ? null : index)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-700 to-fuchsia-500 transition-opacity duration-300 ${activeGift === index ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 opacity-30 transition-opacity duration-300 ${activeGift === index ? "opacity-40" : "opacity-0 group-hover:opacity-20"}`}
              ></div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 relative">
                <div className="w-16 h-16 flex items-center justify-center text-4xl mx-auto mb-4 drop-shadow-sm text-fuchsia-500">
                  {option.icon}
                </div>

                <h3 className="font-princess bg-gradient-to-r from-fuchsia-500 via-purple-700 to-fuchsia-500 bg-clip-text text-transparent text-2xl mb-2 font-bold drop-shadow-sm">
                  {option.title}
                </h3>

                <div className="text-purple-700 font-semibold mb-1 text-lg drop-shadow-sm">
                  {option.description}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 text-fuchsia-700 text-sm mt-2 
                    ${activeGift === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="py-3 px-4 bg-gradient-to-r from-fuchsia-500/10 via-purple-700/10 to-fuchsia-500/10 rounded-md border-2 border-fuchsia-500/30 mt-2 shadow-inner">
                    {option.details.split("\n").map((line, i) => (
                      <p key={i} className="my-1 font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div
                  className={`text-fuchsia-700 mt-2 text-sm font-semibold transition-transform duration-300 drop-shadow-sm ${activeGift === index ? "rotate-180" : ""}`}
                >
                  {activeGift === index ? "↑ Ocultar detalles" : "↓ Ver detalles"}
                </div>

                <div className="absolute top-2 right-2 w-6 h-6 text-purple-700/60 drop-shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                      fillOpacity="0.4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white/85 backdrop-blur-md rounded-lg border-2 border-fuchsia-500/40 max-w-lg mx-auto shadow-lg">
          <p className="italic font-medium text-lg drop-shadow-sm bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
            &ldquo;Tu presencia es el regalo más valioso que podría recibir en este día tan especial para mí&rdquo;
          </p>
          <div className="mt-3 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 via-purple-700 to-fuchsia-500 bg-clip-text text-transparent">— Pamela Kitana</div>
        </div>
      </div>
    </section>
  )
}
