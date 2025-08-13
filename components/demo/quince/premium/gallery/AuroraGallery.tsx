'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Crown, Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useIsClient } from "@/hooks/useIsClient"
import { auroraDemoData } from "../data/aurora-demo-data"

// Tipos simplificados para quinceañera
interface QuinceaneraImage {
  src: string
  alt: string
  caption: string
  category?: string
}

export function AuroraGallery() {
  // Estados simplificados - solo para quinceañera
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [favoriteImage, setFavoriteImage] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isClient = useIsClient()

  // Solo imágenes de quinceañera
  const images: QuinceaneraImage[] = auroraDemoData.gallery.categories.Quinceañera.images
  const totalImages = images.length

  // Navegación simplificada
  const goToPrevious = useCallback(() => {
    if (!isClient) return
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? totalImages - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }, [currentIndex, isClient, totalImages])

  const goToNext = useCallback(() => {
    if (!isClient) return
    const isLastSlide = currentIndex === totalImages - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, isClient, totalImages])

  const goToSlide = useCallback((slideIndex: number) => {
    if (!isClient) return
    setCurrentIndex(slideIndex)
  }, [isClient])

  const openModal = useCallback(() => {
    if (!isClient) return
    setIsModalOpen(true)
    setIsAutoPlaying(false)
  }, [isClient])

  const closeModal = useCallback(() => {
    if (!isClient) return
    setIsModalOpen(false)
  }, [isClient])

  const toggleFavorite = useCallback((index: number) => {
    if (!isClient) return
    setFavoriteImage(favoriteImage === index ? null : index)
  }, [isClient, favoriteImage])

  const toggleAutoPlay = useCallback(() => {
    if (!isClient) return
    setIsAutoPlaying(!isAutoPlaying)
  }, [isClient, isAutoPlaying])

  // Auto-play functionality
  useEffect(() => {
    if (!isClient || !isAutoPlaying || isModalOpen) return

    const interval = setInterval(() => {
      goToNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [isClient, isAutoPlaying, isModalOpen, goToNext])

  // Keyboard navigation
  useEffect(() => {
    if (!isClient) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      } else if (e.key === ' ' && !isModalOpen) {
        e.preventDefault()
        toggleAutoPlay()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isClient, isModalOpen, goToPrevious, goToNext, closeModal, toggleAutoPlay])

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
        className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header Premium de Quinceañera */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 aurora-gradient text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-aurora-tertiary/30 aurora-shadow">
            <Crown size={18} />
            <span>Galería Real de Pamela Kitana</span>
            <Sparkles size={16} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-princess aurora-text-gradient mb-4">
            Momentos de Princesa
          </h2>
          <p className="text-xl md:text-2xl text-aurora-secondary mb-3 font-medium">
            {totalImages} Recuerdos Mágicos
          </p>
          <p className="text-aurora-700 max-w-3xl mx-auto text-lg">
            Una colección de momentos únicos e irrepetibles de nuestra quinceañera. 
            Cada fotografía cuenta la historia de un sueño hecho realidad.
          </p>
        </motion.div>

        {/* Controles de Auto-play y Favoritos */}
        {isClient && (
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={toggleAutoPlay}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm
                transition-all duration-300 border-2 backdrop-blur-sm
                ${isAutoPlaying 
                  ? 'bg-aurora-primary text-white border-aurora-primary shadow-lg' 
                  : 'bg-white/70 text-aurora-700 border-aurora-tertiary/50 hover:bg-aurora-primary/10'
                }
              `}
            >
              {isAutoPlaying ? '⏸️' : '▶️'}
              <span>{isAutoPlaying ? 'Pausar' : 'Auto-play'}</span>
            </button>
            
            {favoriteImage !== null && (
              <div className="flex items-center gap-2 bg-aurora-tertiary/20 text-aurora-700 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-aurora-tertiary/30">
                <Heart size={16} className="text-aurora-primary" />
                <span>Foto favorita marcada</span>
              </div>
            )}
          </motion.div>
        )}

        {/* Separador decorativo estilo Aurora */}
        <motion.div 
          className="flex items-center justify-center my-8"
          initial={{ opacity: 0, width: 0 }}
          animate={isInView ? { opacity: 1, width: 'auto' } : { opacity: 0, width: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-aurora-tertiary to-aurora-primary"></div>
          <div className="mx-6 relative">
            <Crown size={28} className="text-aurora-primary" />
            <div className="absolute inset-0 aurora-shimmer rounded-full"></div>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-aurora-primary to-aurora-tertiary"></div>
        </motion.div>

        {/* Marco decorativo Premium para galería */}
        <motion.div 
          className="relative mt-8 border-4 border-aurora-tertiary/40 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Decoraciones esquinas mejoradas */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-aurora-primary -translate-x-2 -translate-y-2 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-aurora-primary translate-x-2 -translate-y-2 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-aurora-primary -translate-x-2 translate-y-2 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-aurora-primary translate-x-2 translate-y-2 rounded-br-lg"></div>
          
          {/* Coronas decorativas en las esquinas */}
          <Crown size={20} className="absolute top-2 left-2 text-aurora-primary" />
          <Crown size={20} className="absolute top-2 right-2 text-aurora-primary" />
          <Crown size={20} className="absolute bottom-2 left-2 text-aurora-primary" />
          <Crown size={20} className="absolute bottom-2 right-2 text-aurora-primary" />
          
          {/* Galería principal optimizada */}
          <div className="relative h-80 md:h-[500px] group">
            <div className="w-full h-full flex justify-center">
              <div className="relative w-full max-w-3xl h-full overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                {/* Indicadores superiores mejorados */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <div className="bg-aurora-primary/90 text-white px-4 py-2 rounded-full shadow-md text-sm backdrop-blur-sm font-medium">
                    <span>Haz clic para ampliar</span>
                  </div>
                  
                  {isClient && (
                    <button
                      onClick={() => toggleFavorite(currentIndex)}
                      className={`
                        p-2 rounded-full shadow-md transition-all backdrop-blur-sm
                        ${favoriteImage === currentIndex 
                          ? 'bg-aurora-primary text-white' 
                          : 'bg-white/80 text-aurora-primary hover:bg-aurora-primary/10'
                        }
                      `}
                      aria-label="Marcar como favorita"
                    >
                      <Heart size={18} fill={favoriteImage === currentIndex ? 'currentColor' : 'none'} />
                    </button>
                  )}
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="absolute top-0 left-0 w-full h-full cursor-pointer"
                    onClick={openModal}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openModal()
                        e.preventDefault()
                      }
                    }}
                    role="button"
                    tabIndex={isClient ? 0 : -1}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={images[currentIndex]?.src || '/placeholder.svg'}
                      alt={images[currentIndex]?.alt || 'Imagen de quinceañera'}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority={currentIndex <= 2}
                    />
                    
                    {/* Overlay gradiente mejorado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-aurora-primary/60 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Caption mejorado */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-aurora-primary/90 to-transparent p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {favoriteImage === currentIndex && (
                          <Heart size={20} className="text-white fill-white" />
                        )}
                        <Crown size={20} className="text-white" />
                      </div>
                      <p className="text-white text-lg md:text-xl font-medium font-princess">
                        {images[currentIndex]?.caption || 'Momento especial'}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Botones de navegación mejorados */}
            {isClient && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 aurora-gradient text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-10 aurora-shadow"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 aurora-gradient text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-10 aurora-shadow"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Contador mejorado */}
          {isClient && (
            <motion.div 
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-aurora-tertiary/30">
                <div className="flex items-center gap-3 text-base">
                  <Crown size={20} className="text-aurora-primary" />
                  <span className="font-medium text-aurora-700">
                    Foto {currentIndex + 1} de {totalImages}
                  </span>
                  {isAutoPlaying && (
                    <>
                      <span className="text-aurora-500">•</span>
                      <span className="text-aurora-600 text-sm">Auto-play activo</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Indicadores de navegación mejorados */}
          {isClient && (
            <div className="flex justify-center gap-2 mt-6 px-4 overflow-x-auto">
              {images.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    h-3 rounded-full transition-all duration-300 flex-shrink-0
                    ${index === currentIndex 
                      ? 'bg-aurora-primary w-12 shadow-md' 
                      : 'bg-aurora-tertiary/50 w-3 hover:bg-aurora-tertiary hover:w-6'
                    }
                    ${favoriteImage === index ? 'ring-2 ring-aurora-primary ring-offset-2' : ''}
                  `}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Información adicional de quinceañera */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="p-6 bg-aurora-50/80 rounded-xl border border-aurora-tertiary/30 backdrop-blur-sm text-center">
            <Crown size={32} className="text-aurora-primary mx-auto mb-3" />
            <h3 className="font-princess text-lg text-aurora-700 mb-2">Quinceañera</h3>
            <p className="text-aurora-600 text-sm">Pamela Kitana</p>
          </div>
          
          <div className="p-6 bg-aurora-50/80 rounded-xl border border-aurora-tertiary/30 backdrop-blur-sm text-center">
            <Sparkles size={32} className="text-aurora-primary mx-auto mb-3" />
            <h3 className="font-princess text-lg text-aurora-700 mb-2">Momentos</h3>
            <p className="text-aurora-600 text-sm">{totalImages} Recuerdos</p>
          </div>
          
          <div className="p-6 bg-aurora-50/80 rounded-xl border border-aurora-tertiary/30 backdrop-blur-sm text-center">
            <Heart size={32} className="text-aurora-primary mx-auto mb-3" />
            <h3 className="font-princess text-lg text-aurora-700 mb-2">Tema</h3>
            <p className="text-aurora-600 text-sm">Aurora Princess</p>
          </div>
        </motion.div>

        {/* Nota del tema Aurora */}
        <motion.div 
          className="mt-12 p-6 bg-aurora-50/80 rounded-xl border border-aurora-tertiary/30 max-w-3xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Crown size={24} className="text-aurora-primary" />
            <span className="font-princess text-xl text-aurora-700">Galería Real</span>
            <Crown size={24} className="text-aurora-primary" />
          </div>
          <p className="text-aurora-700 text-center">
            Una colección exclusiva de momentos mágicos de nuestra quinceañera. 
            Cada imagen ha sido cuidadosamente seleccionada para contar la historia 
            de este día tan especial.
          </p>
        </motion.div>
      </div>

      {/* Modal mejorado con funcionalidades premium */}
      {isClient && isModalOpen && (
        <AnimatePresence>
          <motion.div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative w-full max-w-6xl h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Controles del modal */}
              <div className="absolute right-4 top-4 flex gap-2 z-20">
                <button
                  onClick={() => toggleFavorite(currentIndex)}
                  className={`
                    p-3 rounded-full transition-all backdrop-blur-sm shadow-lg
                    ${favoriteImage === currentIndex 
                      ? 'bg-aurora-primary text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                    }
                  `}
                  aria-label="Marcar como favorita"
                >
                  <Heart size={20} fill={favoriteImage === currentIndex ? 'currentColor' : 'none'} />
                </button>
                
                <button
                  onClick={closeModal}
                  className="aurora-gradient text-white p-3 rounded-full z-20 hover:scale-110 transition-all shadow-lg"
                  aria-label="Cerrar modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={images[currentIndex]?.src || '/placeholder.svg'}
                      alt={images[currentIndex]?.alt || 'Imagen de quinceañera'}
                      fill
                      sizes="100vw"
                      className="object-contain" 
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Caption en modal mejorado */}
                <div className="absolute bottom-6 left-6 right-6 aurora-gradient/95 text-white p-6 rounded-xl shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Crown size={24} />
                    {favoriteImage === currentIndex && (
                      <Heart size={20} fill="currentColor" />
                    )}
                    <span className="font-princess text-lg">Pamela Kitana</span>
                  </div>
                  <p className="font-medium font-princess text-xl mb-2">
                    {images[currentIndex]?.caption || 'Momento especial'}
                  </p>
                  <p className="text-sm text-white/90">
                    Imagen {currentIndex + 1} de {totalImages} • Tema Aurora Princess
                  </p>
                </div>
              </div>

              {/* Navegación en modal */}
              <button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 aurora-gradient text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-10"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 aurora-gradient text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-10"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={32} />
              </button>

              {/* Indicadores en modal */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 p-3 rounded-full backdrop-blur-sm">
                {images.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`
                      h-3 rounded-full transition-all
                      ${index === currentIndex ? 'bg-aurora-tertiary w-8' : 'bg-white/50 w-3'}
                      ${favoriteImage === index ? 'ring-2 ring-aurora-tertiary ring-offset-2 ring-offset-black/30' : ''}
                    `}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  )
}
