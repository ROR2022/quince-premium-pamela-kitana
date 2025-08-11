"use client"

import { useEffect, useRef, useState } from "react"
import { useMusicContext } from "@/context/music-context"
import { auroraDemoData } from "./data/aurora-demo-data"

export function AuroraMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isPlaying, setIsPlaying, isClient } = useMusicContext()
  const [showControls, setShowControls] = useState(true)
  const [hovered, setHovered] = useState(false)

  // Inicializar audio y event listeners solo en cliente
  useEffect(() => {
    if (!isClient) return

    // Usar la música específica del tema Aurora
    audioRef.current = new Audio(auroraDemoData.music.track)
    audioRef.current.loop = true

    const handleUserInteraction = () => {
      if (audioRef.current && !audioRef.current.paused) return

      audioRef.current
        ?.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error("Error playing Aurora theme audio:", error)
        })

      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }

    // Auto-iniciar con interacción del usuario
    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    return () => {
      audioRef.current?.pause()
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [setIsPlaying, isClient])

  // Control de reproducción solo en cliente
  useEffect(() => {
    if (!isClient || !audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing Aurora theme audio:", error)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, isClient])

  // Ocultar controles después de 5 segundos si no están en hover
  useEffect(() => {
    if (hovered) return

    let timeout: NodeJS.Timeout;
    
    if (isPlaying && !hovered) {
      timeout = setTimeout(() => {
        setShowControls(false)
      }, 5000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isPlaying, hovered])

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
    setShowControls(true)
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
        showControls || hovered ? "opacity-100" : "opacity-40 scale-90"
      }`}
      onMouseEnter={() => {
        setHovered(true)
        setShowControls(true)
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setShowControls(true)}
    >
      <button 
        onClick={handleTogglePlay}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-aurora-primary bg-opacity-90 backdrop-blur-sm shadow-lg border border-aurora-tertiary hover:bg-aurora-secondary transition-all duration-300 group relative overflow-hidden"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {/* Efecto de brillo */}
        <div className="absolute inset-0 aurora-shimmer opacity-30"></div>
        
        {/* Icono de música */}
        <div className="relative">
          {isPlaying ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </div>
      </button>

      {/* Título de la canción - aparece al hacer hover */}
      <div 
        className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-aurora-accent/80 backdrop-blur-sm text-xs py-1 px-3 rounded-full text-aurora-secondary border border-aurora-tertiary/30 whitespace-nowrap transition-all duration-300 ${
          hovered ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        {auroraDemoData.music.title}
      </div>
    </div>
  )
}
