# PLAN DE IMPLEMENTACIÓN: TEMÁTICA PRINCESA AURORA
## Adaptación para Invitación de XV Años de Pamela Kitana

### RESUMEN EJECUTIVO
Este plan detalla los pasos necesarios para transformar la invitación digital de XV años con una temática inspirada en la princesa Aurora de Disney, utilizando una paleta específica de colores rosa/durazno (#dea193, #b18075, #e4b3a8) con detalles en gris plateado (#e3e4e5).

---

## FASE 1: PREPARACIÓN Y RECURSOS

### Paso 1.1: Inventario de Recursos
**Acción:** Organizar recursos disponibles y necesarios
- Catalogar imágenes disponibles de la princesa Aurora
- Identificar elementos gráficos adicionales necesarios (rosas, espinas, destellos, etc.)
- Determinar qué fuentes tipográficas se usarán

### Paso 1.2: Actualizar Configuración de Colores
**Archivo:** `tailwind.config.ts`
```typescript
// Añadir nueva paleta de colores para Aurora
'aurora': {
  '50': '#f9f1f0',
  '100': '#f3e4e1',
  '200': '#e9cdc8',
  '300': '#e4b3a8',
  '400': '#dea193',
  '500': '#c7887a',
  '600': '#b18075',
  '700': '#956960',
  '800': '#78544d',
  '900': '#5f433d'
},
'aurora-accent': {
  '100': '#f9f9f9',
  '200': '#f0f0f1',
  '300': '#e3e4e5',
  '400': '#c8c9ca',
  '500': '#aeafb0'
}
```

### Paso 1.3: Crear Variables CSS
**Archivo:** `app/globals.css`
```css
:root {
  /* Variables existentes */
  
  /* Nueva paleta Aurora */
  --aurora-primary: 12 30% 72%;      /* #dea193 */
  --aurora-secondary: 9 40% 80%;     /* #e4b3a8 */
  --aurora-tertiary: 11 21% 57%;     /* #b18075 */
  --aurora-accent: 220 2% 89%;       /* #e3e4e5 */
  --aurora-gold: 46 60% 52%;         /* #d4af37 */
  --aurora-forest: 120 15% 81%;      /* #c9d8c5 */
}
```

### Paso 1.4: Crear Utilidades CSS
**Archivo:** `app/globals.css`
```css
/* Gradientes temáticos Aurora */
.aurora-gradient {
  background: linear-gradient(135deg, #dea193, #e4b3a8, #b18075);
}

.aurora-text-gradient {
  background: linear-gradient(135deg, #b18075, #dea193);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aurora-overlay {
  background: linear-gradient(to bottom, rgba(177, 128, 117, 0.7), rgba(222, 161, 147, 0.7));
}

/* Animaciones para elementos mágicos */
@keyframes fairy-dust {
  0% { opacity: 0; transform: translateY(10px); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-10px); }
}

.fairy-dust-animation {
  animation: fairy-dust 2s infinite;
}

/* Bordes decorativos */
.aurora-border {
  border-image: linear-gradient(45deg, #dea193, #e4b3a8, #b18075) 1;
}
```

---

## FASE 2: MODIFICACIÓN DE COMPONENTES BASE

### Paso 2.1: Actualizar Tema Global
**Archivo:** `context/theme-context.tsx` o similar (crear si no existe)
```tsx
// Crear o actualizar un contexto para el tema
export const themes = {
  default: {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    // ...otros colores
  },
  aurora: {
    primary: "hsl(var(--aurora-primary))",
    secondary: "hsl(var(--aurora-secondary))",
    tertiary: "hsl(var(--aurora-tertiary))",
    accent: "hsl(var(--aurora-accent))",
    gold: "hsl(var(--aurora-gold))",
    forest: "hsl(var(--aurora-forest))",
  }
};

// Proveer este tema a toda la aplicación
```

### Paso 2.2: Modificar Componente HeroContent
**Archivo:** `components/demo/quince/premium/hero/HeroContent.tsx`
```tsx
// Modificar para incluir elementos temáticos de Aurora
return (
  <div className="relative z-20 text-center w-full max-w-4xl mx-auto">
    {/* Fondo con estilo Aurora */}
    <div className="absolute inset-0 bg-aurora-tertiary/40 backdrop-blur-sm rounded-2xl pointer-events-none" />
    
    {/* Elementos decorativos */}
    <div className="absolute top-0 right-0 w-24 h-24 opacity-50 aurora-accent">
      {/* Decoración de corona */}
    </div>
    
    {/* Contenido */}
    <div className="relative z-10 p-8 sm:p-10 md:p-12">
      <motion.p
        // animaciones existentes
        className="text-aurora-accent font-light mb-4 break-words"
        // resto del contenido
      >
        {extraContent}
      </motion.p>
      
      {/* Título y subtítulo con nuevos estilos */}
    </div>
  </div>
)
```

### Paso 2.3: Actualizar Sistema de Overlay
**Archivo:** `components/demo/quince/premium/hero/NewPremiumHero.tsx`
```tsx
// Modificar el overlay para usar los colores Aurora
{/* Overlay estilo Aurora para imágenes */}
<div className="absolute inset-0 aurora-overlay" />
```

---

## FASE 3: INTEGRACIÓN DE IMÁGENES Y RECURSOS

### Paso 3.1: Actualizar Datos Demo con Imágenes de Aurora
**Archivo:** `components/demo/quince/premium/data/premium-demo-data.ts`
```typescript
hero: {
  ...basicDemoData.hero,
  backgroundImages: [
    "/images/custom/princesaAurora1.jpg",
    "/images/quince/quince1.jpeg",
    "/images/custom/aurora4.jpg",
    "/images/quince/quince2.jpeg",
  ],
  mobileBackgroundImages: [
    "/images/custom/princesaAurora1.jpg",
    "/images/quince/quince1.jpeg",
    "/images/custom/aurora4.jpg",
    "/images/quince/quince2.jpeg",
  ],
  // ...resto de configuración
}
```

### Paso 3.2: Crear Componentes Decorativos
**Archivo:** `components/demo/quince/premium/hero/decorations/Rose.tsx`
```tsx
export function Rose({ className = "" }) {
  return (
    <svg 
      className={`text-aurora-primary ${className}`} 
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      {/* SVG de una rosa estilizada */}
    </svg>
  );
}
```

**Archivo:** `components/demo/quince/premium/hero/decorations/FairyDust.tsx`
```tsx
export function FairyDust({ className = "" }) {
  return (
    <div className={`fairy-dust-animation ${className}`}>
      {/* Partículas que simulan polvo de hadas */}
    </div>
  );
}
```

### Paso 3.3: Actualizar Componente PremiumBadge
**Archivo:** `components/demo/quince/premium/hero/PremiumBadge.tsx`
```tsx
// Actualizar el badge para usar la estética Aurora
return (
  <div className="aurora-gradient text-white rounded-full px-4 py-2 shadow-lg">
    <span className="font-script text-aurora-accent">Premium</span>
  </div>
);
```

---

## FASE 4: ESTILIZACIÓN DE SECCIONES PRINCIPALES

### Paso 4.1: Implementar Estilos para Countdown
**Archivo:** `components/demo/quince/premium/CountdownSection.tsx` (o similar)
```tsx
// Estilos temáticos Aurora para la cuenta regresiva
<section className="relative py-16">
  {/* Fondo con overlay */}
  <div className="absolute inset-0 bg-aurora-primary/10"></div>
  
  {/* Decoración de rosas */}
  <div className="absolute top-0 left-0">
    <Rose className="w-16 h-16 opacity-20" />
  </div>
  
  {/* Contenido */}
  <div className="container mx-auto relative z-10">
    <h2 className="font-script text-3xl md:text-4xl text-aurora-tertiary text-center mb-8">
      Érase una vez...
    </h2>
    
    {/* Countdown con nuevos estilos */}
  </div>
</section>
```

### Paso 4.2: Estilizar Sección de Evento
**Archivo:** `components/demo/quince/premium/EventSection.tsx` (o similar)
```tsx
// Estilos para la sección de detalles del evento
return (
  <section className="py-16 bg-gradient-to-b from-white to-aurora-primary/10">
    {/* Título de cuento */}
    <h2 className="text-center font-script text-3xl md:text-4xl text-aurora-tertiary mb-2">
      El gran día
    </h2>
    
    <p className="text-center text-aurora-tertiary/80 mb-12">
      Acompáñanos al baile real
    </p>
    
    {/* Tarjetas de información con estilo Aurora */}
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="border border-aurora-secondary rounded-lg p-6 shadow-md">
        {/* Detalles ceremonia */}
      </div>
      
      <div className="border border-aurora-secondary rounded-lg p-6 shadow-md">
        {/* Detalles recepción */}
      </div>
    </div>
  </section>
);
```

### Paso 4.3: Estilizar Galería
**Archivo:** `components/demo/quince/premium/GallerySection.tsx` (o similar)
```tsx
// Galería con tema Aurora
return (
  <section className="py-16 bg-aurora-accent/20">
    <div className="container mx-auto">
      <h2 className="text-center font-script text-3xl md:text-4xl text-aurora-tertiary mb-2">
        Recuerdos encantados
      </h2>
      
      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {gallery.images.map((image) => (
          <div 
            key={image.src}
            className="relative overflow-hidden rounded-lg aspect-square border-2 border-aurora-secondary hover:border-aurora-primary transition-all duration-300"
          >
            {/* Imagen */}
            <Image 
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            
            {/* Caption con estilo Aurora */}
            <div className="absolute bottom-0 left-0 right-0 bg-aurora-tertiary/70 p-3 text-white">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
```

---

## FASE 5: ELEMENTOS DECORATIVOS Y OPTIMIZACIÓN

### Paso 5.1: Crear Componente de Separador
**Archivo:** `components/demo/quince/premium/decorations/Divider.tsx`
```tsx
type DividerProps = {
  className?: string;
  type?: 'rose' | 'crown' | 'spindle';
}

export function AuroraDivider({ className = "", type = "rose" }: DividerProps) {
  return (
    <div className={`flex items-center my-12 ${className}`}>
      <div className="h-px bg-aurora-secondary flex-grow"></div>
      <div className="px-4">
        {type === "rose" && <Rose className="w-6 h-6 text-aurora-primary" />}
        {type === "crown" && <Crown className="w-6 h-6 text-aurora-gold" />}
        {type === "spindle" && <Spindle className="w-6 h-6 text-aurora-tertiary" />}
      </div>
      <div className="h-px bg-aurora-secondary flex-grow"></div>
    </div>
  );
}
```

### Paso 5.2: Crear Componentes para Botones Temáticos
**Archivo:** `components/demo/quince/premium/ui/AuroraButton.tsx`
```tsx
type AuroraButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function AuroraButton({ 
  children, 
  className = "", 
  variant = "primary",
  onClick
}: AuroraButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-medium transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-aurora-primary text-white hover:bg-aurora-tertiary' 
          : 'bg-aurora-accent text-aurora-tertiary hover:bg-aurora-accent/80'}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full fairy-dust-animation opacity-0 hover:opacity-30 bg-white"></span>
    </button>
  );
}
```

### Paso 5.3: Optimizar Imágenes y Rendimiento
**Acción:** Asegurar optimización de nuevos recursos
- Optimizar imágenes de Aurora para diferentes dispositivos
- Implementar lazy loading para elementos decorativos
- Verificar rendimiento después de añadir elementos decorativos

---

## FASE 6: INTEGRACIÓN Y PRUEBAS

### Paso 6.1: Crear Lista de Verificación de Implementación
**Archivo:** `VERIFICACION_AURORA.md`
```markdown
# Lista de Verificación - Implementación Temática Aurora

## Elementos Visuales
- [ ] Paleta de colores aplicada correctamente (#dea193, #b18075, #e4b3a8, #e3e4e5)
- [ ] Imágenes de Aurora integradas en el carrusel
- [ ] Elementos decorativos (rosas, coronas, etc.) implementados
- [ ] Fuentes tipográficas actualizadas al estilo de cuento

## Componentes Actualizados
- [ ] Hero con nueva estética Aurora
- [ ] Badge Premium con nuevo estilo
- [ ] Countdown con elementos decorativos
- [ ] Galería con marco temático
- [ ] Secciones informativas con estilo cuento de hadas

## Responsividad
- [ ] Elementos decorativos se adaptan correctamente en móviles
- [ ] Texto legible con los nuevos colores de fondo
- [ ] Imágenes optimizadas para dispositivos móviles

## Rendimiento
- [ ] Tiempo de carga aceptable a pesar de nuevos elementos
- [ ] Animaciones funcionan sin afectar el rendimiento
- [ ] No hay problemas de memoria con elementos decorativos

## Consistencia
- [ ] Tema Aurora aplicado de forma consistente en toda la invitación
- [ ] Transiciones entre secciones mantienen la coherencia visual
- [ ] Mensajes y tono adaptados al estilo cuento de hadas
```

### Paso 6.2: Probar en Diferentes Dispositivos
**Acción:** Verificar la visualización en múltiples plataformas
- Probar en diferentes tamaños de pantalla (móviles, tablets, escritorio)
- Verificar rendimiento en dispositivos de gama baja
- Comprobar compatibilidad con diferentes navegadores

### Paso 6.3: Obtener Feedback y Realizar Ajustes
**Acción:** Iterar basado en retroalimentación
- Solicitar opiniones sobre la estética y usabilidad
- Ajustar elementos que no se alineen con la visión del cliente
- Refinar detalles para mejorar la experiencia

---

## FASE 7: DOCUMENTACIÓN FINAL

### Paso 7.1: Documentar Implementación
**Archivo:** `DOCUMENTACION_AURORA.md`
```markdown
# Documentación - Temática Princesa Aurora

Este documento detalla la implementación del tema de la Princesa Aurora para la invitación de XV años de Pamela Kitana.

## Paleta de Colores
- **Rosa primario**: #dea193 - Utilizado para fondos principales y elementos destacados
- **Rosa secundario**: #e4b3a8 - Utilizado para elementos complementarios
- **Marrón rosado**: #b18075 - Utilizado para acentos y texto
- **Gris plateado**: #e3e4e5 - Utilizado para detalles y efectos especiales

## Componentes Personalizados
- `AuroraDivider` - Separadores temáticos con elementos decorativos
- `AuroraButton` - Botones con efecto de polvo de hadas
- `FairyDust` - Elemento animado para efectos mágicos
- `Rose`, `Crown`, `Spindle` - Iconos decorativos temáticos

## Estructura de Archivos
- `/components/demo/quince/premium/decorations/` - Elementos decorativos
- `/components/demo/quince/premium/ui/` - Componentes de UI temáticos
- `/app/globals.css` - Estilos globales y animaciones

## Consideraciones de Uso
- Los efectos animados pueden desactivarse para mejorar rendimiento
- Las imágenes pueden sustituirse manteniendo las proporciones
- Los textos pueden personalizarse manteniendo el estilo de cuento
```

### Paso 7.2: Crear Guía para Futuros Cambios
**Archivo:** `GUIA_MODIFICACIONES_AURORA.md`
```markdown
# Guía para Modificaciones - Tema Aurora

Este documento proporciona instrucciones para realizar cambios en el tema de Princesa Aurora.

## Cambio de Imágenes
Para sustituir imágenes:
1. Coloque nuevas imágenes en `/public/images/custom/`
2. Actualice las rutas en `premium-demo-data.ts`
3. Mantenga proporciones similares para evitar distorsiones

## Ajuste de Colores
Para modificar la paleta:
1. Actualice las variables en `globals.css`
2. Modifique los valores en `tailwind.config.ts`
3. Pruebe en diferentes dispositivos para asegurar legibilidad

## Adición de Elementos Decorativos
Para añadir nuevas decoraciones:
1. Cree componentes SVG en `/components/demo/quince/premium/decorations/`
2. Integre los componentes en las secciones deseadas
3. Asegure que sean responsivos y ligeros

## Personalización de Textos
Para adaptar mensajes al estilo cuento:
1. Utilice frases como "Érase una vez...", "En un reino lejano..."
2. Mantenga coherencia en todo el contenido
3. Use la fuente script para títulos y elementos destacados
```

---

## ARCHIVOS A CREAR/MODIFICAR

1. **`tailwind.config.ts`** - Añadir nueva paleta de colores Aurora
2. **`app/globals.css`** - Añadir variables y utilidades CSS para Aurora
3. **`components/demo/quince/premium/hero/NewPremiumHero.tsx`** - Actualizar Hero
4. **`components/demo/quince/premium/hero/HeroContent.tsx`** - Modificar contenido
5. **`components/demo/quince/premium/hero/PremiumBadge.tsx`** - Actualizar badge
6. **`components/demo/quince/premium/data/premium-demo-data.ts`** - Actualizar datos
7. **`components/demo/quince/premium/decorations/*.tsx`** - Crear elementos decorativos
8. **`components/demo/quince/premium/ui/*.tsx`** - Crear componentes UI temáticos
9. **Documentación**: VERIFICACION_AURORA.md, DOCUMENTACION_AURORA.md, GUIA_MODIFICACIONES_AURORA.md

---

## ORDEN DE IMPLEMENTACIÓN

1. **FASE 1** - Preparación y recursos (crítico)
2. **FASE 2** - Modificación de componentes base (crítico)
3. **FASE 3** - Integración de imágenes y recursos (crítico)
4. **FASE 4** - Estilización de secciones principales (alto)
5. **FASE 5** - Elementos decorativos y optimización (medio)
6. **FASE 6** - Integración y pruebas (crítico)
7. **FASE 7** - Documentación final (medio)

---

## ESTIMADO DE TIEMPO

- **FASE 1**: 2-3 horas (configuración inicial)
- **FASE 2**: 3-4 horas (adaptación de componentes principales)
- **FASE 3**: 2-3 horas (integración de recursos visuales)
- **FASE 4**: 3-4 horas (implementación de estilos en todas las secciones)
- **FASE 5**: 2-3 horas (elementos decorativos y optimización)
- **FASE 6**: 2-3 horas (pruebas y ajustes)
- **FASE 7**: 1-2 horas (documentación)
- **Total estimado**: 15-22 horas

---

## CONSIDERACIONES ADICIONALES

1. **Equilibrio**: Mantener un balance entre elementos Disney y la elegancia de una invitación de XV años
2. **Rendimiento**: Monitorear cómo afectan los elementos decorativos al tiempo de carga
3. **Accesibilidad**: Asegurar suficiente contraste con los nuevos colores
4. **Consistencia**: Aplicar la temática de forma uniforme en todas las secciones

---

*Este plan debe seguirse de manera secuencial, verificando el resultado de cada fase antes de continuar con la siguiente.*
