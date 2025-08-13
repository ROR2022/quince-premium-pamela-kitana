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

  const eventDate = useRef<number | undefined>(undefined)

  // Inicializar la fecha del evento solo en cliente
  useEffect(() => {
    if (!isClient) return
    eventDate.current = new Date(auroraDemoData.countdown.targetDate).getTime()

    const now = new Date().getTime()
    const distance = eventDate.current - now

    if (distance < 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    setTimeLeft({ days, hours, minutes, seconds })
  }, [isClient])

  // Contador en tiempo real
  useEffect(() => {
    if (!isClient || !eventDate.current) return

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.current! - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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
    <section
      className="py-16 px-4 relative min-h-[600px] flex items-center"
      role="timer"
      aria-label="Cuenta regresiva del evento"
    >
      {/* Fondo mejorado con mejor contraste */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${auroraDemoData.countdown.backgroundImage}')`,
        }}
        aria-hidden="true"
      />

      {/* Overlay más oscuro para mejor contraste */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-purple-900/80 to-slate-900/85 z-0"
        aria-hidden="true"
      ></div>

      {/* Overlay adicional para texto más legible */}
      <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Encabezado mejorado */}
        <div className="mb-12 relative">
          {/* Elemento decorativo mejorado */}
          <div className="mb-6 inline-block relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16">
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-amber-300 drop-shadow-lg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          </div>

          <h2 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-2xl font-bold tracking-wide">
            La Magia Comienza En
          </h2>

          {/* Línea decorativa mejorada */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <div className="mx-6 relative">
              <span className="text-amber-300 text-2xl drop-shadow-lg">✧</span>
            </div>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          </div>
        </div>

        {/* Contenedor de la cuenta regresiva mejorado */}
        <div className="flex justify-center gap-3 md:gap-6 lg:gap-8 relative mb-8">
          {/* Días */}
          <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl w-20 md:w-28 lg:w-32 text-center border-2 border-amber-300/50 shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-purple-200/20 group-hover:from-purple-200/30 group-hover:to-purple-300/30 transition-all duration-300"></div>
            <div className="text-slate-800 text-3xl md:text-5xl lg:text-6xl font-bold font-serif relative drop-shadow-sm">
              {isClient ? String(timeLeft.days).padStart(2, "0") : "00"}
            </div>
            <div className="text-slate-600 text-sm md:text-base lg:text-lg mt-2 font-semibold relative">Días</div>
          </div>

          {/* Horas */}
          <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl w-20 md:w-28 lg:w-32 text-center border-2 border-amber-300/50 shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-purple-200/20 group-hover:from-purple-200/30 group-hover:to-purple-300/30 transition-all duration-300"></div>
            <div className="text-slate-800 text-3xl md:text-5xl lg:text-6xl font-bold font-serif relative drop-shadow-sm">
              {isClient ? String(timeLeft.hours).padStart(2, "0") : "00"}
            </div>
            <div className="text-slate-600 text-sm md:text-base lg:text-lg mt-2 font-semibold relative">Horas</div>
          </div>

          {/* Minutos */}
          <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl w-20 md:w-28 lg:w-32 text-center border-2 border-amber-300/50 shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-purple-200/20 group-hover:from-purple-200/30 group-hover:to-purple-300/30 transition-all duration-300"></div>
            <div className="text-slate-800 text-3xl md:text-5xl lg:text-6xl font-bold font-serif relative drop-shadow-sm">
              {isClient ? String(timeLeft.minutes).padStart(2, "0") : "00"}
            </div>
            <div className="text-slate-600 text-sm md:text-base lg:text-lg mt-2 font-semibold relative">Min.</div>
          </div>

          {/* Segundos */}
          <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl w-20 md:w-28 lg:w-32 text-center border-2 border-amber-300/50 shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-purple-200/20 group-hover:from-purple-200/30 group-hover:to-purple-300/30 transition-all duration-300"></div>
            <div className="text-slate-800 text-3xl md:text-5xl lg:text-6xl font-bold font-serif relative drop-shadow-sm">
              {isClient ? String(timeLeft.seconds).padStart(2, "0") : "00"}
            </div>
            <div className="text-slate-600 text-sm md:text-base lg:text-lg mt-2 font-semibold relative">Seg.</div>
          </div>
        </div>

        {/* Mensaje inspiracional mejorado */}
        <div className="mt-12 p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-2xl border-2 border-amber-300/50 max-w-2xl mx-auto shadow-2xl">
          <p className="text-slate-700 italic font-serif text-lg md:text-xl lg:text-2xl leading-relaxed">
            &ldquo;Cada segundo nos acerca a un momento que quedará grabado para siempre en nuestros corazones&rdquo;
          </p>
        </div>

        {/* Información adicional para accesibilidad */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Tiempo restante: {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos, {timeLeft.seconds}{" "}
          segundos
        </div>
      </div>
    </section>
  )
}
