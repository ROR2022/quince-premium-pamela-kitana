import { useState, useEffect, useCallback, useRef } from 'react'
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
  onLoaded,
  debugLog
}: CarouselBackgroundProps) {
  const [isPreloading, setIsPreloading] = useState(true)
  const [loadedImages, setLoadedImages] = useState<boolean[]>(() => new Array(images.length).fill(false))
  const isMounted = useRef(true)
  
  // Limpiar referencia al desmontar
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])
  
  // Precargar imágenes
  useEffect(() => {
    const imagesToPreload = [...images]
    if (fallbackImage && !images.includes(fallbackImage)) {
      imagesToPreload.push(fallbackImage)
    }
    
    if (imagesToPreload.length === 0) {
      console.log('[DEBUG-PRELOAD] No hay imágenes para precargar')
      setIsPreloading(false)
      onLoaded?.()
      return
    }
    
    console.log(`[DEBUG-PRELOAD] Comenzando precarga de ${imagesToPreload.length} imágenes`)
    debugLog(`Precargando ${imagesToPreload.length} imágenes`)
    
    let loadedCount = 0
    const totalImages = imagesToPreload.length
    
    const preloadPromises = imagesToPreload.map((src, index) => {
      return new Promise<void>((resolve, reject) => {
        const img = document.createElement('img')
        img.src = src
        img.onload = () => {
          if (!isMounted.current) return
          loadedCount++
          console.log(`[DEBUG-PRELOAD] Imagen ${index} precargada (${loadedCount}/${totalImages}) - URL: ${src}`)
          debugLog(`Imagen ${index} cargada (${loadedCount}/${totalImages})`)
          resolve()
        }
        img.onerror = () => {
          if (!isMounted.current) return
          console.log(`[DEBUG-PRELOAD] Error cargando imagen ${index} - URL: ${src}`)
          debugLog(`Error cargando imagen ${index}`)
          reject()
        }
      })
    })
    
    // Consideramos el proceso completo cuando todas las imágenes se cargan o después de un timeout
    Promise.all(preloadPromises).then(() => {
      if (!isMounted.current) return
      console.log(`[DEBUG-PRELOAD] Todas las imágenes precargadas exitosamente`)
      debugLog(`Todas las imágenes precargadas exitosamente`)
      setIsPreloading(false)
      onLoaded?.()
    }).catch((error) => {
      if (!isMounted.current) return
      console.log(`[DEBUG-PRELOAD] Error en precarga: ${error}`)
      debugLog(`Error en precarga de imágenes`)
      // Continuamos a pesar de errores de carga
      setIsPreloading(false)
      onLoaded?.()
    })

    // Timeout de seguridad para asegurar que la carga no se queda bloqueada
    const timeoutId = setTimeout(() => {
      if (isPreloading && isMounted.current) {
        console.log('[DEBUG-PRELOAD] Timeout de precarga alcanzado, continuando de todos modos')
        debugLog('Timeout de precarga, continuando')
        setIsPreloading(false)
        onLoaded?.()
      }
    }, 5000) // 5 segundos máximo de espera

    return () => clearTimeout(timeoutId)
  }, [images, fallbackImage, debugLog, onLoaded, isPreloading])
  
  // Memoizar handlers para eventos de imagen
  const handleImageLoad = useCallback((index: number) => {
    console.log(`[DEBUG-CAROUSEL] Imagen ${index} cargada con éxito - URL: ${images?.[index] || 'unknown'}`)
    debugLog(`Imagen del carrusel ${index} cargada con éxito`)
    // Marcar imagen como cargada
    setLoadedImages(prev => {
      const newLoadedImages = [...prev]
      newLoadedImages[index] = true
      return newLoadedImages
    })
  }, [images, debugLog])
  
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
                  
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                      style={{
                        filter: "brightness(0.7)",
                      }}
                      loading="eager"
                      onLoad={() => handleImageLoad(index)}
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
                
                <div className="relative w-full h-full overflow-hidden bg-black">
                  <img
                    src={fallbackImage}
                    alt="Imagen principal"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: "brightness(0.7)",
                    }}
                    loading="eager"
                    onLoad={handleFallbackImageLoad}
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
