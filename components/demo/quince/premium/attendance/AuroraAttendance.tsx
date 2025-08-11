"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { auroraDemoData } from "../data/aurora-demo-data"

export function AuroraAttendance() {
  const [formData, setFormData] = useState({
    name: "",
    response: "",
    companions: "",
    phone: "",
    message: ""
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  // Remove unused isClient variable
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En un escenario real, aquí enviaríamos los datos a una API
    console.log("Formulario enviado:", formData)
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
    
    // Después de 5 segundos, ocultar mensaje de confirmación
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <section 
      className="py-16 px-4 relative bg-gradient-to-b from-aurora-accent/10 to-aurora-secondary/5"
      ref={ref}
    >
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-10 left-10 w-16 h-16 opacity-20 text-aurora-tertiary">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-12 h-12 opacity-20 text-aurora-tertiary">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div 
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
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
          
          <p className="text-aurora-secondary mt-4 italic text-sm">
            {auroraDemoData.attendance?.message || "Respetuosamente <No Niños>"}
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
              <h3 className="font-princess text-3xl text-aurora-primary mb-2">¡Gracias!</h3>
              <p className="text-aurora-secondary">Hemos recibido tu confirmación y contamos con tu presencia.</p>
              <p className="text-gray-500 mt-4 text-sm">Este es un demo, en una invitación real la confirmación sería registrada.</p>
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
                      Número de celular <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu número de contacto"
                      className="mt-1 border-aurora-tertiary/30 focus:border-aurora-primary focus:ring-aurora-primary/30"
                      required
                    />
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
                  className="w-full bg-aurora-primary hover:bg-aurora-secondary text-white transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Enviar confirmación</span>
                  <div className="absolute inset-0 aurora-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </Button>
                
                {/* Nota de privacidad */}
                <p className="text-gray-500 text-xs mt-3 text-center">
                  Demo ilustrativo. En una invitación real, esta información se utilizaría únicamente para la organización del evento.
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
