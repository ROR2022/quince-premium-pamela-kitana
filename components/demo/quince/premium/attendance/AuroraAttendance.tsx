"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { auroraDemoData } from "../data/aurora-demo-data"

// Configuración del número de WhatsApp para confirmaciones
const WHATSAPP_NUMBER = "528671544765" // Número de México con código de país

export function AuroraAttendance() {
  const [formData, setFormData] = useState({
    name: "",
    response: "",
    companions: "",
    phone: "",
    message: ""
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  // Función para generar el mensaje de WhatsApp
  const generateWhatsAppMessage = (data: typeof formData) => {
    const { name, response, companions, phone, message } = data
    
    let whatsappMessage = `🌟 *CONFIRMACIÓN QUINCEAÑERA PAMELA KITANA* 🌟\n\n`
    whatsappMessage += `👤 *Nombre:* ${name}\n`
    whatsappMessage += `📅 *Asistencia:* ${response === 'yes' ? '✅ SÍ asistiré' : '❌ NO podré asistir'}\n`
    
    if (response === 'yes') {
      whatsappMessage += `📞 *Teléfono:* ${phone}\n`
      
      if (companions.trim()) {
        whatsappMessage += `👥 *Acompañantes:* ${companions}\n`
      }
      
      if (message.trim()) {
        whatsappMessage += `💌 *Mensaje:* ${message}\n`
      }
    }
    
    whatsappMessage += `\n🎭 *Fecha del evento:* 11 de Octubre, 2025`
    whatsappMessage += `\n👑 Enviado desde la invitación digital oficial`
    
    return encodeURIComponent(whatsappMessage)
  }
  
  // Función para validar número de teléfono mexicano
  const validateMexicanPhone = (phone: string): boolean => {
    // Remover espacios, guiones y paréntesis
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
    
    // Validar formato mexicano (10 dígitos)
    const mexicanPhoneRegex = /^[0-9]{10}$/
    
    return mexicanPhoneRegex.test(cleanPhone)
  }
  
  // Función para manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Función para manejar cambios en el RadioGroup
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      response: value
    }))
  }
  
  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Validaciones adicionales
      if (formData.response === 'yes' && formData.phone && !validateMexicanPhone(formData.phone)) {
        alert('Por favor ingresa un número de teléfono válido (10 dígitos)')
        setIsSubmitting(false)
        return
      }
      
      // Generar mensaje de WhatsApp
      const whatsappMessage = generateWhatsAppMessage(formData)
      
      // Crear URL de WhatsApp
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`
      
      // Log para desarrollo (opcional)
      console.log("Confirmación enviada:", formData)
      console.log("URL de WhatsApp:", whatsappURL)
      
      // Abrir WhatsApp en nueva ventana
      window.open(whatsappURL, '_blank')
      
      // Mostrar mensaje de confirmación
      setFormSubmitted(true)
      
      // Limpiar formulario
      setFormData({
        name: "",
        response: "",
        companions: "",
        phone: "",
        message: ""
      })
      
      // Después de 8 segundos, ocultar mensaje de confirmación
      setTimeout(() => {
        setFormSubmitted(false)
      }, 8000)
      
    } catch (error) {
      console.error('Error al procesar la confirmación:', error)
      alert('Hubo un error al procesar tu confirmación. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-16 px-4 min-h-screen">
      {/* Fondo con imagen aurora_10 */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src="/images/custom/aurora/aurora_10.jpeg"
          alt="Fondo Confirmación Aurora"
          fill
          className="object-cover"
          quality={85}
        />
        {/* Overlay específico para formulario - mayor opacidad */}
        <div className="absolute inset-0 bg-white/88 backdrop-blur-sm"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-10 left-10 w-16 h-16 opacity-20 text-aurora-tertiary z-5">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-12 h-12 opacity-20 text-aurora-tertiary z-5">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div 
        ref={ref}
        className={`relative z-10 max-w-2xl mx-auto transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Encabezado decorativo */}
        <div className="text-center mb-10">
          <div className="inline-block relative">
            {/* Elemento decorativo superior - corona */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12">
              <svg 
                viewBox="0 0 24 24" 
                className="w-full h-full text-aurora-tertiary"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 aurora-shimmer rounded-full"></div>
            </div>
            
            <h2 className="font-princess aurora-text-gradient text-4xl md:text-5xl relative">
              Confirma tu Asistencia
            </h2>
          </div>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center mt-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
            <div className="mx-4 relative">
              <span className="text-aurora-tertiary text-sm">✧</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
          </div>
          
          <p className="text-aurora-secondary mt-4 italic text-xl">
            {auroraDemoData.attendance?.message || "Rosa Gold solo la Quinceañera"}
          </p>
          <p className="text-gray-600 mt-2">
            {auroraDemoData.attendance?.subtitle || "Espero que no sea impedimento para que ustedes puedan asistir a mi fiesta."}
          </p>
        </div>
        
        {/* Formulario decorativo */}
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-aurora-tertiary/30 aurora-shadow relative overflow-hidden">
          {/* Efecto decorativo de fondo */}
          <div className="absolute inset-0 aurora-shimmer opacity-10"></div>
          
          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 text-aurora-primary">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-princess text-3xl text-aurora-primary mb-2">¡Perfecto!</h3>
              <p className="text-aurora-secondary mb-4">Se ha abierto WhatsApp con tu confirmación.</p>
              <div className="bg-aurora-50/50 p-4 rounded-lg border border-aurora-tertiary/30 mb-4">
                <p className="text-sm text-aurora-700">
                  📱 <strong>Siguiente paso:</strong> Envía el mensaje de WhatsApp que se generó automáticamente
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Si no se abrió WhatsApp automáticamente, puedes enviarnos tu confirmación al <strong>867-154-4765</strong>
                </p>
              </div>
              <p className="text-gray-500 text-sm">
                💌 ¡Gracias por confirmar tu asistencia! Nos emociona tenerte en este día tan especial.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Campo de nombre */}
              <div>
                <Label htmlFor="name" className="text-aurora-secondary font-medium">
                  Nombre completo <span className="text-red-400">*</span>
                </Label>
                <Input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="mt-1 border-aurora-tertiary/30 focus:border-aurora-primary focus:ring-aurora-primary/30"
                  required
                />
              </div>
              
              {/* Campo de confirmación */}
              <div>
                <Label className="text-aurora-secondary font-medium">
                  ¿Podrás acompañarme? <span className="text-red-400">*</span>
                </Label>
                <RadioGroup
                  value={formData.response}
                  onValueChange={handleRadioChange}
                  className="mt-2 flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" className="text-aurora-primary" />
                    <Label htmlFor="yes" className="text-gray-700">Sí, ahí estaré</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="text-aurora-primary" />
                    <Label htmlFor="no" className="text-gray-700">No podré asistir</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {formData.response === 'yes' && (
                <>
                  {/* Campo de acompañantes */}
                  <div>
                    <Label htmlFor="companions" className="text-aurora-secondary font-medium">
                      Nombre(s) de acompañante(s)
                    </Label>
                    <Input 
                      type="text"
                      id="companions"
                      name="companions"
                      value={formData.companions}
                      onChange={handleChange}
                      placeholder="Nombre de las personas que te acompañarán"
                      className="mt-1 border-aurora-tertiary/30 focus:border-aurora-primary focus:ring-aurora-primary/30"
                    />
                  </div>
                  
                  {/* Campo de teléfono */}
                  <div>
                    <Label htmlFor="phone" className="text-aurora-secondary font-medium">
                      Número de celular (México) <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="5512345678 (10 dígitos)"
                      className="mt-1 border-aurora-tertiary/30 focus:border-aurora-primary focus:ring-aurora-primary/30"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      📱 Formato: 10 dígitos sin espacios ni guiones
                    </p>
                  </div>
                  
                  {/* Campo de mensaje */}
                  <div>
                    <Label htmlFor="message" className="text-aurora-secondary font-medium">
                      Mensaje (opcional)
                    </Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿Algo que quieras decirme?"
                      className="mt-1 border-aurora-tertiary/30 focus:border-aurora-primary focus:ring-aurora-primary/30"
                      rows={3}
                    />
                  </div>
                </>
              )}
              
              {/* Botón de envío */}
              <div className="pt-2 relative">
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.response || (formData.response === 'yes' && !formData.phone)}
                  className="w-full bg-aurora-primary hover:bg-aurora-secondary text-white transition-all duration-300 relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        📱 Confirmar por WhatsApp
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 aurora-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </Button>
                
                {/* Nota informativa */}
                <p className="text-gray-600 text-xs mt-3 text-center">
                  🔒 Tu confirmación se enviará via WhatsApp al número oficial de la quinceañera.
                  <br />
                  📱 Se abrirá WhatsApp con el mensaje prellenado para que solo tengas que enviarlo.
                </p>
              </div>
            </form>
          )}
          
          {/* Elementos decorativos en las esquinas */}
          <div className="absolute top-3 left-3 w-6 h-6 text-aurora-tertiary/40">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>
          <div className="absolute bottom-3 right-3 w-6 h-6 text-aurora-tertiary/40">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
