# Plan de implementación: CustomInvitations.tsx (Aurora Quinceañera)

## Objetivo
Crear un componente para invitaciones personalizadas de quinceañera, con lógica y diseño adaptados al tema aurora (morado/fucsia), siguiendo la estructura y funcionalidades de VipWeddingRoles, incluyendo autenticación admin.

---

## Fases y pasos

### FASE 1: Estructura y autenticación admin
1. Crear el layout principal del componente.
2. Implementar sistema de autenticación admin discreto (popover, validación, estado).
3. Mostrar/ocultar funcionalidades según autenticación.

### FASE 2: Formulario de invitación
4. Crear formulario con los siguientes campos:
   - Nombre del invitado (obligatorio)
   - Relación con la quinceañera (familia, amigos, padrinos, otros)
   - Mensaje personalizado (obligatorio)
   - Número de invitados (obligatorio)
   - WhatsApp México (obligatorio, validación 10 dígitos)
5. Validar campos y formatear teléfono.
6. Sugerencias de mensajes temáticos para quinceañera.

### FASE 3: Lógica de invitación y WhatsApp
7. Generar mensaje de WhatsApp adaptado a quinceañera (nombre, mensaje, evento, fecha, lugar, número de invitados, URL).
8. Implementar función para enviar invitación por WhatsApp.

### FASE 4: Vista previa y descarga
9. Crear vista previa de la invitación con diseño aurora (morado/fucsia, decoraciones, textos temáticos).
10. Implementar función para descargar la invitación como imagen (PNG, usando html2canvas).

### FASE 5: Acciones y detalles finales
11. Botones de acción: enviar por WhatsApp, descargar imagen.
12. Mensajes de ayuda, validaciones y feedback visual.
13. Información adicional sobre el evento y la funcionalidad admin.

---

## Notas de diseño
- Usar paleta vibrante de morado y fucsia en todos los elementos de contenido, respetando el fondo.
- Decoraciones aurora: gradientes, iconos, bordes, brillos.
- Textos temáticos para quinceañera.
- Accesibilidad y responsividad.

---

## Archivo: CustomInvitations.tsx
Cada fase se implementará y confirmará paso a paso.

---

## Autor: GitHub Copilot
Fecha: 2025-08-13
