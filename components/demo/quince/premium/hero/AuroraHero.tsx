"use client"
import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMusicContext } from '@/context/music-context';
import { AuroraDemoData } from '../data/aurora-demo-data';

interface AuroraHeroProps {
  data: AuroraDemoData;
}

export const AuroraHero: React.FC<AuroraHeroProps> = ({ data }) => {
  const isMobile = useIsMobile();
  // Usamos el contexto de música disponible
  const { setIsPlaying } = useMusicContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeout = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const heroStyles = data.hero.styles || {
    nameFont: "font-princess",
    subtitleFont: "font-princess",
    nameColor: "text-aurora-primary aurora-text-gradient",
    subtitleColor: "text-aurora-secondary",
    containerBackground: "bg-aurora-accent/30 backdrop-blur-sm",
    animationClass: "animate-fade-in aurora-shimmer"
  };

  // Configurar música si está disponible
  useEffect(() => {
    if (data.music && data.premium?.hasMusic && typeof window !== 'undefined') {
      // Crear elemento de audio
      if (!audioRef.current) {
        audioRef.current = new Audio(data.music.track);
        audioRef.current.loop = data.music.loop || false;
        
        // Listener para cuando termine de cargar
        audioRef.current.addEventListener('canplaythrough', () => {
          if (data.music?.autoplay) {
            audioRef.current?.play()
              .then(() => setIsPlaying(true))
              .catch(e => console.error("Error autoplaying audio:", e));
          }
        });
      }
    }
    
    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [data.music, data.premium, setIsPlaying]);

  // Función para avanzar a la siguiente imagen
  const handleNextImage = useCallback(() => {
    const images = isMobile ? data.hero.mobileBackgroundImages : data.hero.backgroundImages;
    setIsTransitioning(true);
    
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

    // Configurar timeout para la transición
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }
    
    transitionTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // duración de la transición

    // Timeout de seguridad para evitar bloqueos
    if (safetyTimeout.current) {
      clearTimeout(safetyTimeout.current);
    }
    
    safetyTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000); // timeout de seguridad si algo falla
  }, [isMobile, data.hero.backgroundImages, data.hero.mobileBackgroundImages]);

  // Gestionar la rotación de imágenes del carrusel
  useEffect(() => {
    if (!data.hero.carouselOptions?.loop || !imagesLoaded) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNextImage();
      }
    }, data.hero.carouselOptions.delay || 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, isTransitioning, imagesLoaded, data.hero.carouselOptions, handleNextImage]);

  // Cuando los componentes se desmonten, limpiar los timeouts
  useEffect(() => {
    return () => {
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
      if (safetyTimeout.current) clearTimeout(safetyTimeout.current);
    };
  }, []);

  // Manejar la precarga de imágenes
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = isMobile ? 
      data.hero.mobileBackgroundImages.length : 
      data.hero.backgroundImages.length;
      
    const imagesToLoad = isMobile ?
      data.hero.mobileBackgroundImages :
      data.hero.backgroundImages;

    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        console.error('Error loading image:', src);
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, [isMobile, data.hero.backgroundImages, data.hero.mobileBackgroundImages]);

  const images = isMobile ? data.hero.mobileBackgroundImages : data.hero.backgroundImages;
  const currentImage = images[currentImageIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        {imagesLoaded && (
          <Image
            src={currentImage}
            alt={`Portada de ${data.hero.name}`}
            fill
            priority
            quality={90}
            sizes="100vw"
            className={`object-cover ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
          />
        )}
      </div>

      {/* Capa de superposición con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

      {/* Contenedor del contenido del hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        {/* Nombre y subtítulo con estilos temáticos de Aurora */}
        <div 
          className={`${heroStyles.containerBackground} p-6 rounded-lg shadow-lg max-w-3xl mx-auto border border-aurora-tertiary/30`}
        >
          <h1 
            className={`${heroStyles.nameFont} text-fuchsia-500 text-5xl md:text-7xl font-bold mb-2 animate-fade-in`}
          >
            {data.hero.name}
          </h1>
          
          <h2 
            className={`${heroStyles.subtitleFont} text-pink-600 text-3xl md:text-4xl animate-fade-in-delay`}
          >
            {data.hero.subtitle}
          </h2>

          {/* Elemento decorativo temático de Aurora */}
          <div className="w-32 h-1 bg-gradient-to-r from-aurora-primary to-aurora-tertiary mx-auto my-4 rounded-full animate-pulse"></div>
          
          {/* Badge de Aurora Theme */}
          <div className="mt-6">
            <span className={`${heroStyles.animationClass} inline-block px-4 py-2 rounded-full bg-aurora-primary/80 text-white text-sm font-medium`}>
              Tema Aurora 👑
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
