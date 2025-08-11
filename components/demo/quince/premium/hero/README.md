# PremiumHero Component

Este componente implementa un hero carrusel optimizado para dispositivos móviles y escritorio, inspirado en el componente HeroCarousel de la landing.

## Características

- **Optimizado para móviles**: Las imágenes ocupan el 100% del viewport con escalado y posicionamiento optimizados.
- **Carga progresiva**: El contenido se muestra tan pronto como la primera imagen está cargada.
- **Rendimiento optimizado**: Usa Next.js Image para mejor optimización y precarga de imágenes.
- **Seguridad contra bloqueos**: Implementa timeouts de seguridad para prevenir problemas de UI.
- **Integración con música**: Compatible con el contexto de música existente.

## Mejoras implementadas

1. **Reemplazo de `img` por Next.js `Image`**:
   - Optimización automática de imágenes
   - Carga diferida (lazy loading)
   - Priorización de primera imagen (critical path)

2. **Sistema de transiciones mejorado**:
   - Estado `isTransitioning` explícito para prevenir múltiples clics
   - Timeout de seguridad para evitar bloqueos
   - Transiciones suaves entre imágenes

3. **Optimización para móviles**:
   - Escalado al 125% en móviles para ocupar correctamente la pantalla
   - Reposicionamiento del objeto para mejor visualización
   - Áreas táctiles adecuadas (mínimo 44x44px)

4. **Carga y visualización mejorada**:
   - Indicador de carga más sutil
   - Timeout de seguridad para evitar spinner infinito
   - Precarga de siguiente imagen para transiciones más suaves

## Uso

```tsx
import { PremiumHero } from './path/to/PremiumHero'

export default function MyPage() {
  return (
    <main>
      <PremiumHero />
      {/* Resto del contenido */}
    </main>
  )
}
```

## Componentes integrados

- **CarouselIndicators**: Muestra los puntos indicadores del carrusel
- **MusicControl**: Control de reproducción de música
- **PremiumBadge**: Badge de versión premium
- **ScrollIndicator**: Indicador para desplazarse hacia abajo
- **HeroContent**: Contenido central (título y subtítulo)

## Estructura del código

- **Estados**: Gestión de estados para carga, transiciones e imágenes
- **Efectos**: Precarga, timeouts de seguridad, etc.
- **Renderizado condicional**: Muestra/oculta elementos según estado
- **Optimizaciones móviles**: Clases y estilos específicos para móviles

## Consideraciones técnicas

- El componente está optimizado para hidratación correcta en Next.js
- Los timeouts de seguridad garantizan que la UI nunca se bloquee
- El sistema de carga progresiva mejora la percepción de velocidad
- Las optimizaciones móviles aseguran buena visualización en cualquier dispositivo
