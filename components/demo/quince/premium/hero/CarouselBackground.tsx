import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel"

type CarouselBackgroundProps = {
  images: string[]
  fallbackImage: string
  onApiChange: (api: CarouselApi | null) => void
  debugLog: (message: string) => void
  onLoaded?: () => void
}

export function CarouselBackground({ 
  images, 
  fallbackImage, 
  onApiChange, 
  debugLog,
  onLoaded
}: CarouselBackgroundProps) {
  const [isPreloading, setIsPreloading] = useState(true)
  
  // Usar un ref para rastrear el montaje del componente
  const isMounted = useRef(true)
  
  // Precargar imágenes
  useEffect(() => {
    // Esta primera llamada puede estar causando re-renderizados si debugLog cambia
    // así que la movemos dentro del efecto
    const imagesToPreload = images?.length > 0 ? images : [fallbackImage]
    const totalImages = imagesToPreload.length
    let loadedCount = 0
    
    // Función segura para el log que verifica si el componente está montado
    const safeDebugLog = (message: string) => {
      if (isMounted.current) {
        debugLog(message)
      }
    }
    
    safeDebugLog(`Precargando ${imagesToPreload.length} imágenes...`)
    
    const preloadPromises = imagesToPreload.map((src, index) => {
      return new Promise<void>((resolve, reject) => {
        // Corregimos la instanciación de HTMLImageElement
        const img = document.createElement('img')
        img.src = src
        img.onload = () => {
          if (!isMounted.current) return
          loadedCount++
          safeDebugLog(`Imagen ${index} cargada (${loadedCount}/${totalImages})`)
          resolve()
        }
        img.onerror = () => {
          if (!isMounted.current) return
          safeDebugLog(`Error cargando imagen ${index}`)
          reject()
        }
      })
    })
    
    // Timeout de seguridad
    const timeout = setTimeout(() => {
      if (!isMounted.current) return
      safeDebugLog('Tiempo de precarga agotado')
      setIsPreloading(false)
      onLoaded?.()
    }, 5000)
    
    Promise.all(preloadPromises)
      .then(() => {
        if (!isMounted.current) return
        safeDebugLog('Todas las imágenes precargadas con éxito')
        clearTimeout(timeout)
        setIsPreloading(false)
        onLoaded?.()
      })
      .catch(() => {
        if (!isMounted.current) return
        safeDebugLog('Error en precarga de algunas imágenes')
        clearTimeout(timeout)
        setIsPreloading(false)
        onLoaded?.()
      })
    
    // Cleanup function
    return () => {
      isMounted.current = false
      clearTimeout(timeout)
    }
  }, [images, fallbackImage, debugLog, onLoaded])
  
  // Memoizar handlers para eventos de imagen
  const handleImageLoad = useCallback((index: number) => {
    console.log(`[DEBUG-IMG] Imagen ${index} cargada y renderizada en el DOM`)
    debugLog(`Imagen ${index} cargada`)
  }, [debugLog])
  
  const handleImageError = useCallback((index: number) => {
    console.log(`[DEBUG-IMG] ERROR: Imagen ${index} falló al cargar. Verifique la URL y los permisos.`)
    debugLog(`Error cargando imagen ${index}`)
  }, [debugLog])
  
  const handleFallbackImageLoad = useCallback(() => {
    console.log(`[DEBUG-IMG] Imagen fallback cargada y renderizada en el DOM`)
    debugLog('Imagen fallback cargada')
  }, [debugLog])
  
  const handleFallbackImageError = useCallback(() => {
    console.log(`[DEBUG-IMG] ERROR: Imagen fallback falló al cargar. Verifique la URL: ${fallbackImage}`)
    debugLog('Error cargando imagen fallback')
  }, [debugLog, fallbackImage])
  
  // Debug de dimensiones con useEffect
  useEffect(() => {
    console.log('[DEBUG-CONTAINER] Verificando si el contenedor del carrusel tiene dimensiones:')
    const timer = setTimeout(() => {
      const carouselContainer = document.querySelector('.carousel-container')
      if (carouselContainer) {
        const rect = carouselContainer.getBoundingClientRect()
        console.log('[DEBUG-CONTAINER] Dimensiones del contenedor:', {
          width: rect.width,
          height: rect.height,
          visible: rect.width > 0 && rect.height > 0
        })
      } else {
        console.log('[DEBUG-CONTAINER] ERROR: No se encontró el contenedor del carrusel')
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [isPreloading])

  // Debug de visibilidad
  useEffect(() => {
    console.log(`[DEBUG-STATE] Estado del carrusel - isPreloading: ${isPreloading}, hay imágenes: ${images.length > 0}`)
  }, [isPreloading, images])

  return (
    <>
      {/* Indicador de carga */}
      {isPreloading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="text-white text-center">
            <div className="w-16 h-16 border-4 border-t-rosa-gold-500 border-r-rosa-gold-500 border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Cargando imágenes...</p>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 z-0 carousel-container" style={{ border: '1px solid red', background: '#000' }}>
        {/* Debug box para verificar contenedor visible */}
        <div 
        style={{display:'none'}}
        className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs z-50">
          Debug: Contenedor del carrusel
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full h-full relative"
          setApi={onApiChange}
        >
          <CarouselContent className="h-full relative">
            {images && images.length > 0 ? 
              images.map((image, index) => (
                <CarouselItem key={index} className="h-full w-full relative">
                  {/* Debug index del slide */}
                  <div 
                  style={{display:'none'}}
                  className="absolute top-2 right-2 bg-pink-600 z-50 text-white px-2 py-1 rounded-full text-xs">
                    Slide {index + 1}
                  </div>
                  
                  <div className="relative w-full h-full overflow-hidden">
                    <Image 
                      src={image} 
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                      style={{
                        filter: "brightness(0.7)",
                      }}
                      priority={index === 0}
                      fill={true}
                      sizes="100vw"
                      quality={90}
                      onLoadingComplete={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                    />
                  </div>
                </CarouselItem>
              ))
            : 
              <CarouselItem className="h-full w-full relative">
                {/* Debug fallback */}
                <div className="absolute top-2 right-2 bg-pink-600 z-50 text-white px-2 py-1 rounded-full text-xs">
                  Fallback Image
                </div>
                
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={fallbackImage}
                    alt="Imagen principal"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: "brightness(0.7)",
                    }}
                    priority={true}
                    fill={true}
                    sizes="100vw"
                    quality={90}
                    onLoadingComplete={handleFallbackImageLoad}
                    onError={handleFallbackImageError}
                  />
                </div>
              </CarouselItem>
            }
          </CarouselContent>
          
          <CarouselPrevious 
            className="hidden md:flex absolute left-4 z-20 bg-gradient-to-r from-rosa-gold-500/20 to-rosa-gold-600/20 backdrop-blur-sm border-plateado-300/20 hover:from-rosa-gold-500/30 hover:to-rosa-gold-600/30 transition-all duration-300"
          />
          <CarouselNext 
            className="hidden md:flex absolute right-4 z-20 bg-gradient-to-r from-rosa-gold-500/20 to-rosa-gold-600/20 backdrop-blur-sm border-plateado-300/20 hover:from-rosa-gold-500/30 hover:to-rosa-gold-600/30 transition-all duration-300"
          />
        </Carousel>
      </div>
    </>
  )
}
