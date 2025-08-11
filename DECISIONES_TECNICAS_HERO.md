# DECISIONES TÉCNICAS - REFACTORIZACIÓN DE PREMIUMHERO

Este documento explica las decisiones técnicas tomadas durante la refactorización del componente PremiumHero, proporcionando contexto sobre el porqué de cada cambio significativo.

## 1. Cambio de API de Carrusel a Solución Personalizada

**Decisión:** Eliminar la dependencia de CarouselApi y crear nuestra propia implementación de carrusel.

**Justificación:**
- La implementación original usando CarouselApi tenía problemas con la carga y transiciones.
- El spinner de carga a veces quedaba atrapado en un estado infinito.
- La API del carrusel no estaba manejando correctamente los estados de carga.

**Beneficios:**
- Control explícito sobre el estado de transición y carga.
- Mayor flexibilidad para implementar optimizaciones específicas.
- Mejor manejo de errores y casos extremos.

## 2. Reemplazo de `img` por Next.js `Image`

**Decisión:** Usar el componente `Image` de Next.js en lugar de etiquetas HTML `img` estándar.

**Justificación:**
- Las etiquetas `img` estándar no aprovechan las optimizaciones de Next.js.
- Las imágenes de fondo necesitaban optimización especialmente para dispositivos móviles.
- Se necesitaba mejor control sobre la prioridad de carga.

**Beneficios:**
- Optimización automática de imágenes (formato WebP/AVIF cuando es compatible).
- Carga diferida (lazy loading) inteligente con priorización de la primera imagen.
- Mejor rendimiento de LCP (Largest Contentful Paint).
- Redimensionamiento automático para diferentes dispositivos.

## 3. Implementación de Sistema de Estado Explícito

**Decisión:** Crear un sistema de estado explícito para transiciones y carga.

**Justificación:**
- El sistema original carecía de un mecanismo claro para prevenir múltiples clics durante transiciones.
- No había una forma confiable de saber cuándo se habían cargado todas las imágenes.
- Faltaban timeouts de seguridad para prevenir bloqueos de UI.

**Beneficios:**
- Prevención de múltiples clics durante transiciones.
- Sistema de seguridad para evitar bloqueos (isTransitioningRef + timeouts).
- Mejor experiencia de usuario con feedbacks visuales claros.

## 4. Optimizaciones para Móviles

**Decisión:** Implementar escalado y posicionamiento específicos para móviles.

**Justificación:**
- Las imágenes se veían demasiado pequeñas en dispositivos móviles.
- El posicionamiento no era óptimo, mostrando partes irrelevantes de las imágenes en móviles.
- Los controles táctiles no tenían tamaño suficiente para usarse cómodamente.

**Beneficios:**
- Escalado al 125% en móviles para llenar mejor la pantalla.
- Reposicionamiento del punto focal para mejor visualización en móviles.
- Áreas táctiles mejoradas (mínimo 44x44px) para mayor accesibilidad.
- Controles adaptados a diferentes tamaños de pantalla.

## 5. Carga Progresiva y Timeouts de Seguridad

**Decisión:** Implementar sistema de carga progresiva con timeouts de seguridad.

**Justificación:**
- A veces el spinner de carga se quedaba visible indefinidamente.
- El contenido debería mostrarse tan pronto como la primera imagen esté lista, sin esperar a todas.
- No había protección contra fallos de red o problemas de carga.

**Beneficios:**
- El contenido se muestra en cuanto la primera imagen está lista.
- Timeout máximo de 5 segundos para forzar la visualización incluso si hay problemas.
- Mejor percepción de velocidad para el usuario.
- Indicador de carga más sutil y menos intrusivo.

## 6. Detección de Dispositivos Móviles

**Decisión:** Usar un hook personalizado (useIsMobile) para detectar dispositivos móviles.

**Justificación:**
- Se necesitaba adaptar la interfaz según el tipo de dispositivo.
- Diferentes estrategias de visualización para móviles vs. escritorio.
- Media queries de CSS no eran suficientes para algunos ajustes programáticos.

**Beneficios:**
- Adaptación dinámica a diferentes tamaños de pantalla.
- Posibilidad de usar imágenes específicas para móviles si existen.
- Mejor posicionamiento de elementos según el tipo de dispositivo.

## 7. Precarga de Siguiente Imagen

**Decisión:** Implementar sistema de precarga para la siguiente imagen del carrusel.

**Justificación:**
- Las transiciones podían sentirse lentas cuando las imágenes no estaban precargadas.
- No había un sistema para anticiparse a las necesidades del usuario.

**Beneficios:**
- Transiciones más suaves entre imágenes.
- Mejor experiencia de usuario al navegar por el carrusel.
- Reducción de la percepción de latencia.

## 8. Diseño Responsivo Mejorado

**Decisión:** Implementar posicionamiento responsivo para todos los elementos.

**Justificación:**
- Los elementos tenían posiciones fijas que no se adaptaban bien a diferentes dispositivos.
- Se necesitaba mejorar la visualización en múltiples tamaños de pantalla.

**Beneficios:**
- Mejor visualización en todo tipo de dispositivos.
- Controles e indicadores correctamente posicionados según el dispositivo.
- Experiencia consistente en todas las plataformas.
