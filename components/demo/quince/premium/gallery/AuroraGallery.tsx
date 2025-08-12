'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useIsClient } from "@/hooks/useIsClient"
import { auroraDemoData } from "../data/aurora-demo-data"

// Tipos para TypeScript
interface GalleryImage {
  src: string
  alt: string
  caption: string
  category?: string
}

interface CategoryData {
  title: string
  icon: string
  description: string
  images: GalleryImage[]
}

interface Categories {
  [key: string]: CategoryData
}

export function AuroraGallery() {
  // Estados para manejo de categorías
  const [activeCategory, setActiveCategory] = useState<string>("Quinceañera")
  const [categoryIndexes, setCategoryIndexes] = useState<Record<string, number>>({
    "Quinceañera": 0,
    "Familia": 0,
    "Chambelanes": 0
  })
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isClient = useIsClient()

  // Obtener categorías y datos
  const categories = auroraDemoData.gallery.categories as Categories

  // Funciones helper para manejo de categorías
  const getCurrentImages = useCallback((): GalleryImage[] => {
    return categories[activeCategory]?.images || []
  }, [categories, activeCategory])

  const getCurrentIndex = useCallback((): number => {
    return categoryIndexes[activeCategory] || 0
  }, [categoryIndexes, activeCategory])

  const setCurrentIndex = useCallback((index: number) => {
    setCategoryIndexes(prev => ({
      ...prev,
      [activeCategory]: index
    }))
  }, [activeCategory, setCategoryIndexes])

  const switchCategory = useCallback((category: string) => {
    if (category !== activeCategory && categories[category]) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveCategory(category)
        setIsTransitioning(false)
      }, 150)
    }
  }, [activeCategory, categories, setIsTransitioning, setActiveCategory])

  // Variables derivadas
  const images = getCurrentImages()
  const currentIndex = getCurrentIndex()

  const goToPrevious = useCallback(() => {
    if (!isClient) return
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }, [currentIndex, isClient, images.length, setCurrentIndex])

  const goToNext = useCallback(() => {
    if (!isClient) return
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, isClient, images.length, setCurrentIndex])

  const goToSlide = (slideIndex: number) => {
    if (!isClient) return
    setCurrentIndex(slideIndex)
  }

  const openModal = () => {
    if (!isClient) return
    setIsModalOpen(true)
  }

  const closeModal = useCallback(() => {
    if (!isClient) return
    setIsModalOpen(false)
  }, [isClient])

  // Event listeners solo en cliente
  useEffect(() => {
    if (!isClient) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, isModalOpen, goToNext, goToPrevious, closeModal, isClient])

  return (
    <section className="relative py-16 px-4 min-h-screen">
      {/* Fondo con imagen aurora_9 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/custom/aurora/aurora_9.jpeg"
          alt="Fondo Galería Aurora"
          fill
          className="object-cover"
          quality={85}
        />
        {/* Overlay específico para galería - más transparente */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-50/80 via-white/85 to-aurora-100/80 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Contenido principal */}
      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header con estilo Aurora */}
        <div className="mb-12">
          <div className="inline-block aurora-gradient text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-aurora-tertiary/30 aurora-shadow">
            📸 Recuerdos de Princesa
          </div>
          
          <h2 className="text-3xl md:text-4xl font-princess aurora-text-gradient mb-4">
            {auroraDemoData.gallery.title}
          </h2>
          <p className="text-xl text-aurora-secondary mb-2">
            {auroraDemoData.gallery.subtitle}
          </p>
          <p className="text-aurora-700 max-w-2xl mx-auto">
            {auroraDemoData.gallery.description}
          </p>
        </div>

        {/* Separador decorativo estilo Aurora */}
        <div className="flex items-center justify-center my-8">
          <div className="w-12 h-px bg-gradient-to-r from-aurora-tertiary to-aurora-primary"></div>
          <div className="mx-4 relative">
            {/* Corona - símbolo de Aurora */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-aurora-primary"
            >
              <path 
                d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" 
                stroke="currentColor" 
                strokeWidth="2" 
              />
            </svg>
            <div className="absolute inset-0 aurora-shimmer rounded-full"></div>
          </div>
          <div className="w-12 h-px bg-gradient-to-r from-aurora-primary to-aurora-tertiary"></div>
        </div>

        {/* Filtros de Categorías */}
        <div className="mt-8 mb-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {Object.entries(categories).map(([categoryKey, categoryData]: [string, CategoryData]) => {
              const isActive = activeCategory === categoryKey
              const imageCount = categoryData.images?.length || 0
              
              return (
                <button
                  key={categoryKey}
                  onClick={() => switchCategory(categoryKey)}
                  disabled={isTransitioning}
                  className={`
                    group relative px-4 py-3 rounded-xl font-medium text-sm md:text-base
                    transition-all duration-300 ease-out transform hover:scale-105
                    border-2 backdrop-blur-sm
                    ${isActive 
                      ? 'bg-aurora-primary text-white border-aurora-primary shadow-lg shadow-aurora-primary/30' 
                      : 'bg-white/70 text-aurora-700 border-aurora-tertiary/50 hover:bg-aurora-primary/10 hover:border-aurora-primary/60'
                    }
                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  {/* Icono y texto */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{categoryData.icon}</span>
                    <span className="font-princess">{categoryData.title}</span>
                    <span className={`
                      text-xs px-2 py-1 rounded-full
                      ${isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-aurora-primary/10 text-aurora-primary group-hover:bg-aurora-primary/20'
                      }
                    `}>
                      {imageCount}
                    </span>
                  </div>
                  
                  {/* Efecto shimmer para categoría activa */}
                  {isActive && (
                    <div className="absolute inset-0 aurora-shimmer rounded-xl opacity-30"></div>
                  )}
                  
                  {/* Indicador de transición */}
                  {isTransitioning && isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
          
          {/* Descripción de categoría activa */}
          <div className="mt-4 text-center">
            <p className="text-aurora-600 text-sm md:text-base italic">
              {categories[activeCategory]?.description}
            </p>
          </div>
        </div>

        {/* Marco decorativo de galería estilo Aurora */}
        <div className="relative mt-8 border-4 border-aurora-tertiary/30 p-4 rounded-xl bg-white/50 backdrop-blur-sm">
          {/* Decoraciones esquinas - estilo castillo/cuento de hadas */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-aurora-primary -translate-x-1 -translate-y-1"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-aurora-primary translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-aurora-primary -translate-x-1 translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-aurora-primary translate-x-1 translate-y-1"></div>
          
          {/* Galería principal */}
          <div className="relative h-64 md:h-96 group">
            <div className="w-full h-full flex justify-center">
              <div className="relative w-full max-w-2xl h-full overflow-hidden rounded-xl shadow-xl border-4 border-white">
                {/* Indicador para hacer clic */}
                <div className="absolute top-4 right-4 bg-aurora-primary/80 text-white px-3 py-1 rounded-full shadow-md z-10 text-xs backdrop-blur-sm font-medium">
                  <span>Haz clic para ampliar</span>
                </div>
                
                {images.map((image: GalleryImage, index: number) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={openModal}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openModal()
                        e.preventDefault()
                      }
                    }}
                    role="button"
                    tabIndex={isClient ? 0 : -1}
                  >
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Caption overlay con estilo Aurora */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-aurora-primary/80 to-transparent p-4">
                      <p className="text-white md:text-base font-medium font-princess text-lg">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons - solo mostrar en cliente */}
            {isClient && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 aurora-gradient text-white p-3 rounded-full shadow-md hover:opacity-90 transition-all z-10 aurora-shadow"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 aurora-gradient text-white p-3 rounded-full shadow-md hover:opacity-90 transition-all z-10 aurora-shadow"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Contador de categoría y posición */}
            {isClient && (
              <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-aurora-tertiary/30">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{categories[activeCategory]?.icon}</span>
                    <span className="font-medium text-aurora-700">
                      {categories[activeCategory]?.title}
                    </span>
                    <span className="text-aurora-500">•</span>
                    <span className="text-aurora-600">
                      {currentIndex + 1} de {images.length}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Indicators - solo mostrar en cliente */}
            {isClient && (
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                {images.map((_: GalleryImage, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-aurora-primary w-8' 
                        : 'bg-aurora-tertiary/50 w-3 hover:bg-aurora-tertiary'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Nota del tema Aurora */}
        <div className="mt-12 p-4 bg-aurora-50/80 rounded-lg border border-aurora-tertiary/30 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-sm text-aurora-700">
            👑 <strong>Tema Aurora:</strong> Galería de imágenes con estilo de cuento de hadas para tus momentos más mágicos.
          </p>
        </div>
      </div>

      {/* Modal - solo renderizar en cliente con estilo Aurora */}
      {isClient && isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl h-[80vh]">
            <button
              onClick={closeModal}
              className="absolute right-2 top-2 aurora-gradient text-white p-2 rounded-full z-20 hover:opacity-90 transition-all"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex].src || '/placeholder.svg'}
                alt={images[currentIndex].alt}
                fill
                sizes="100vw"
                className="object-contain" 
                priority
              />
              
              {/* Caption en modal con estilo Aurora */}
              <div className="absolute bottom-4 left-4 right-4 aurora-gradient/90 text-white p-4 rounded-lg shadow-lg">
                <p className="font-medium font-princess text-xl">{images[currentIndex].caption}</p>
                <p className="text-sm mt-1 text-white/80">{images[currentIndex].category && `Categoría: ${images[currentIndex].category}`}</p>
              </div>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 aurora-gradient text-white p-3 rounded-full shadow-md hover:opacity-90 transition-all z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 aurora-gradient text-white p-3 rounded-full shadow-md hover:opacity-90 transition-all z-10"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={30} />
            </button>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_: GalleryImage, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-aurora-tertiary w-8' : 'bg-white/50 w-3'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
