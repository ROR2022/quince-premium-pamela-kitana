# Plan de Implementación: Carrusel de Imágenes para PremiumHero

## Descripción
Implementación de un carrusel de imágenes para reemplazar la imagen de fondo estática en el componente PremiumHero, mejorando la experiencia visual de la invitación digital premium.

## Objetivos
- Reemplazar la imagen estática de fondo por un carrusel con al menos 4 imágenes
- Mantener la estética premium con transiciones suaves
- Configurar la reproducción automática del carrusel
- Conservar todos los elementos de la interfaz existentes

## Dependencias
- Componente UI Carousel (ya existente en el proyecto)
- Embla Carousel React (ya instalado)
- Plugin Autoplay para Embla Carousel (verificar disponibilidad)

## Plan de trabajo

### 1. Actualizar archivo de datos (premium-demo-data.ts)
- [x] Modificar la estructura para soportar múltiples imágenes de fondo
- [x] Añadir al menos 4 imágenes de fondo para el carrusel
- [x] Incluir configuración para el carrusel (velocidad, autoplay, etc.)

### 2. Instalar dependencias adicionales (si necesario)
- [x] Verificar si es necesario instalar el plugin autoplay para Embla Carousel
- [x] Implementar alternativa manual con hooks de React en lugar de instalar dependencias

### 3. Modificar el componente PremiumHero
- [x] Importar los componentes de carrusel necesarios
- [x] Configurar el estado y referencias para el carrusel
- [x] Reemplazar el div de fondo por la implementación del carrusel
- [x] Aplicar filtros de brillo consistentes a todas las imágenes
- [x] Implementar la funcionalidad de autoplay manual con useEffect
- [x] Adaptar los controles del carrusel al diseño premium

### 4. Estilización
- [x] Personalizar los controles del carrusel para adaptarse al estilo premium
- [x] Ajustar el posicionamiento para mantener los elementos flotantes
- [x] Implementar transiciones suaves entre imágenes
- [x] Asegurar consistencia visual en diferentes tamaños de pantalla

### 5. Pruebas y ajustes
- [ ] Verificar el funcionamiento en diferentes dispositivos y navegadores
- [ ] Ajustar tiempos y velocidades para una experiencia óptima
- [ ] Verificar la integración con los demás elementos del componente

## Implementación paso a paso

### Paso 1: Actualizar el archivo de datos
Modificar `premium-demo-data.ts` para incluir un array de imágenes para el carrusel:

```typescript
// Formato actual:
hero: {
  backgroundImage: "/images/quince/hero-bg.jpg",
  // ...otros campos
},

// Nueva estructura:
hero: {
  backgroundImages: [
    "/images/quince/hero-bg1.jpg",
    "/images/quince/hero-bg2.jpg",
    "/images/quince/hero-bg3.jpg",
    "/images/quince/hero-bg4.jpg",
  ],
  carouselOptions: {
    delay: 5000,
    fadeTransition: true,
  },
  // ...mantener otros campos existentes
},
```

### Paso 2: Modificar el componente PremiumHero
Reemplazar la imagen de fondo estática por el carrusel implementado:

```tsx
// 1. Importar componentes
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"

// 2. Añadir plugin de autoplay si es necesario
import Autoplay from 'embla-carousel-autoplay'

// 3. En el componente:
export function PremiumHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isPlaying, togglePlay, isClient } = useMusicContext()
  const [api, setApi] = React.useState<CarouselApi>()
  const plugin = React.useMemo(() => Autoplay({ delay: 5000 }), [])

  // ...resto del código existente

  // 4. En el JSX, reemplazar el div de fondo:
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[plugin]}
          className="w-full h-full"
          setApi={setApi}
        >
          <CarouselContent className="h-full">
            {premiumDemoData.hero.backgroundImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center w-full h-full"
                  style={{
                    backgroundImage: `url('${image}')`,
                    filter: "brightness(0.7)",
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Opcional: controles personalizados */}
          <CarouselPrevious className="hidden md:flex bg-rosa-gold-500/20 border-rosa-gold-300/20 hover:bg-rosa-gold-500/30" />
          <CarouselNext className="hidden md:flex bg-rosa-gold-500/20 border-rosa-gold-300/20 hover:bg-rosa-gold-500/30" />
        </Carousel>
      </div>

      {/* Mantener el resto del código existente */}
      {/* ... */}
    </section>
  )
}
```

### Paso 3: Refinamiento y optimización
Realizar ajustes para garantizar un rendimiento óptimo y la mejor experiencia visual:

- Ajustar tiempos de autoplay basados en pruebas
- Refinar transiciones y efectos visuales
- Verificar la carga previa de imágenes para evitar parpadeos
- Optimizar imágenes para un mejor rendimiento

## Recursos
- Documentación de Embla Carousel: https://www.embla-carousel.com/
- Componente UI Carousel en: `/components/ui/carousel.tsx`
- Datos de la invitación en: `/components/demo/quince/premium/data/premium-demo-data.ts`

## Consideraciones finales
Esta implementación debe mantener y mejorar la estética premium de la invitación, asegurando que el carrusel sea una característica que agregue valor y no distraiga del mensaje principal o la legibilidad del contenido.
