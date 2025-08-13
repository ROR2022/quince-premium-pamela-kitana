"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { useIsClient } from "@/hooks/useIsClient"
import { auroraDemoData } from "../data/aurora-demo-data"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function AuroraCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isClient = useIsClient()

  // Set your event date here - solo en cliente
  const eventDate = useRef<number | undefined>(undefined)

  // Inicializar la fecha del evento solo en cliente
  useEffect(() => {
    if (!isClient) return
    // Usamos los datos del básico a través del premium ya que son heredados
    eventDate.current = new Date(auroraDemoData.countdown.targetDate).getTime()
    
    // Calcular tiempo inicial inmediatamente
    const now = new Date().getTime()
    const distance = eventDate.current - now

    if (distance < 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    setTimeLeft({ days, hours, minutes, seconds })
  }, [isClient])

  // Contador en tiempo real - solo en cliente
  useEffect(() => {
    if (!isClient || !eventDate.current) return

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.current! - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [isClient])

  return (
    <section className="py-16 px-4 relative">
      {/* Capa de fondo con imagen temática Aurora */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-80"
        style={{
          backgroundImage: `url('${auroraDemoData.countdown.backgroundImage}')`,
        }}
      />
      
      {/* Overlay con gradiente temático */}
      <div className="absolute inset-0 bg-gradient-to-b from-aurora-primary/20 via-aurora-secondary/30 to-aurora-primary/20 z-0"></div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Marco decorativo superior */}
        <div className="mb-8 inline-block relative">
          {/* Elemento decorativo - estilo corona/tiara */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12">
            <svg 
              viewBox="0 0 24 24" 
              className="w-full h-full text-aurora-tertiary"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" 
                stroke="currentColor" 
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 aurora-shimmer rounded-full"></div>
          </div>
          
          <h2 className="font-princess text-white text-3xl md:text-5xl mb-3 drop-shadow-md">
            La Magia Comienza En
          </h2>

          {/* Línea decorativa */}
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
            <div className="mx-4 relative">
              <span className="text-aurora-50 text-sm">✧</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
          </div>
        </div>

        {/* Contenedor de la cuenta regresiva */}
        <div className="flex justify-center gap-4 md:gap-8 relative">
          {/* Elementos decorativos laterales */}
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-aurora-tertiary opacity-60 hidden md:block">
            <svg width="40" height="80" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L16 8L24 12L16 16L12 24L8 16L0 12L8 8L12 0Z" fill="currentColor" fillOpacity="0.3"/>
              <path d="M12 24L14 28L18 30L14 32L12 36L10 32L6 30L10 28L12 24Z" fill="currentColor" fillOpacity="0.5"/>
              <path d="M12 36L13 39L16 40L13 41L12 44L11 41L8 40L11 39L12 36Z" fill="currentColor" fillOpacity="0.7"/>
            </svg>
          </div>
          
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-aurora-tertiary opacity-60 hidden md:block">
            <svg width="40" height="80" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L16 8L24 12L16 16L12 24L8 16L0 12L8 8L12 0Z" fill="currentColor" fillOpacity="0.3"/>
              <path d="M12 24L14 28L18 30L14 32L12 36L10 32L6 30L10 28L12 24Z" fill="currentColor" fillOpacity="0.5"/>
              <path d="M12 36L13 39L16 40L13 41L12 44L11 41L8 40L11 39L12 36Z" fill="currentColor" fillOpacity="0.7"/>
            </svg>
          </div>
          
          {/* Días */}
          <div className="bg-white/10 backdrop-blur-sm p-3 md:p-6 rounded-lg w-16 md:w-24 text-center border border-aurora-tertiary/30 aurora-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-aurora-primary/10 group-hover:bg-aurora-primary/20 transition-all duration-300"></div>
            <div className="absolute inset-0 aurora-shimmer opacity-30"></div>
            <div className="text-white text-2xl md:text-4xl font-bold font-playfair relative">
              {isClient ? String(timeLeft.days).padStart(2, "0") : "00"}
            </div>
            <div className="text-aurora-50 text-xs md:text-sm mt-1 font-princess relative">Días</div>
          </div>

          {/* Horas */}
          <div className="bg-white/10 backdrop-blur-sm p-3 md:p-6 rounded-lg w-16 md:w-24 text-center border border-aurora-tertiary/30 aurora-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-aurora-primary/10 group-hover:bg-aurora-primary/20 transition-all duration-300"></div>
            <div className="absolute inset-0 aurora-shimmer opacity-30"></div>
            <div className="text-white text-2xl md:text-4xl font-bold font-playfair relative">
              {isClient ? String(timeLeft.hours).padStart(2, "0") : "00"}
            </div>
            <div className="text-aurora-50 text-xs md:text-sm mt-1 font-princess relative">Horas</div>
          </div>

          {/* Minutos */}
          <div className="bg-white/10 backdrop-blur-sm p-3 md:p-6 rounded-lg w-16 md:w-24 text-center border border-aurora-tertiary/30 aurora-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-aurora-primary/10 group-hover:bg-aurora-primary/20 transition-all duration-300"></div>
            <div className="absolute inset-0 aurora-shimmer opacity-30"></div>
            <div className="text-white text-2xl md:text-4xl font-bold font-playfair relative">
              {isClient ? String(timeLeft.minutes).padStart(2, "0") : "00"}
            </div>
            <div className="text-aurora-50 text-xs md:text-sm mt-1 font-princess relative">Min.</div>
          </div>

          {/* Segundos */}
          <div className="bg-white/10 backdrop-blur-sm p-3 md:p-6 rounded-lg w-16 md:w-24 text-center border border-aurora-tertiary/30 aurora-shadow relative overflow-hidden group">
            <div className="absolute inset-0 bg-aurora-primary/10 group-hover:bg-aurora-primary/20 transition-all duration-300"></div>
            <div className="absolute inset-0 aurora-shimmer opacity-30"></div>
            <div className="text-white text-2xl md:text-4xl font-bold font-playfair relative">
              {isClient ? String(timeLeft.seconds).padStart(2, "0") : "00"}
            </div>
            <div className="text-aurora-50 text-xs md:text-sm mt-1 font-princess relative">Seg.</div>
          </div>
        </div>
        
        {/* Mensaje inspiracional */}
        <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-aurora-tertiary/30 max-w-lg mx-auto">
          <p className="text-white/90 italic font-princess text-xl">
            &ldquo;Cada segundo nos acerca a un momento que quedará grabado para siempre en nuestros corazones&rdquo;
          </p>
        </div>
        
        
      </div>
    </section>
  )
}
