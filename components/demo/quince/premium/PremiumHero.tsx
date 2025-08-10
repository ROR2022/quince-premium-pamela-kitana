"use client"

import { useState, useCallback, useEffect } from "react"
import { useMusicContext } from "@/context/music-context"
import { CarouselApi } from "@/components/ui/carousel"
import { premiumDemoData } from "./data/premium-demo-data"
import { CarouselBackground } from "./hero/CarouselBackground"
import { HeroContent } from "./hero/HeroContent"
import { CarouselIndicators } from "./hero/HeroControls/CarouselIndicators"
import { MusicControl } from "./hero/HeroControls/MusicControl"
import { ScrollIndicator } from "./hero/HeroControls/ScrollIndicator"
import { PremiumBadge } from "./hero/PremiumBadge"
import { useDebugLog } from "./hooks/useDebugLog"

export function PremiumHero() {
  // Estado del carrusel
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)
  
  // Contexto de música
  const musicContext = useMusicContext()
  
  // Hook de depuración
  const debug = useDebugLog()
  
  // Configuración de imágenes
  const images = premiumDemoData.hero.backgroundImages || []
  const fallbackImage = premiumDemoData.hero.backgroundImage || "/images/quince/quince1.jpeg"
  
  // Memoizar handlers para evitar renderizados innecesarios
  const handleApiChange = useCallback((newApi: CarouselApi | null) => {
    if (newApi) {
      debug.debugLog('API de carrusel inicializada')
      newApi.on('select', () => {
        setCurrentIndex(newApi.selectedScrollSnap())
      })
    }
    
    setApi(newApi)
  }, [debug, setCurrentIndex])

  // Marcar como cargado cuando termina la precarga
  const handleImagesLoaded = useCallback(() => {
    console.log('[DEBUG-HERO] Todas las imágenes cargadas, cambiando estado isLoaded a true')
    setIsLoaded(true)
  }, [])
  
  // Monitor de estado del componente
  useEffect(() => {
    console.log(`[DEBUG-HERO] Estado actual - isLoaded: ${isLoaded}, currentIndex: ${currentIndex}, api disponible: ${api !== null}`)
  }, [isLoaded, currentIndex, api])
  
  // Eliminamos el handler comentado que no se usa

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Panel de depuración */}
      {/* <DebugPanel 
        showDebug={debug.showDebug}
        debugMessages={debug.debugMessages}
        onClose={handleCloseDebug}
        onToggle={debug.toggleDebugPanel}
      /> */}
      
      {/* Carrusel de fondo */}
      <CarouselBackground
        images={images}
        fallbackImage={fallbackImage}
        onApiChange={handleApiChange}
        debugLog={debug.debugLog}
        onLoaded={handleImagesLoaded}
      />
      
      {/* Indicadores del carrusel */}
      {images.length > 0 && (
        <CarouselIndicators 
          count={images.length}
          currentIndex={currentIndex}
          onSelect={(index) => api?.scrollTo(index)}
        />
      )}

      {/* Control de música */}
      <MusicControl 
        isPlaying={musicContext.isPlaying}
        onToggle={musicContext.togglePlay}
        isClient={musicContext.isClient}
      />

      {/* Badge premium */}
      <PremiumBadge />

      {/* Contenido central */}
      {isLoaded && (
        <HeroContent 
          title={premiumDemoData.hero.name}
          subtitle={premiumDemoData.hero.subtitle}
        />
      )}

      {/* Indicador de desplazamiento */}
      <ScrollIndicator isLoaded={isLoaded} />
    </section>
  )
}