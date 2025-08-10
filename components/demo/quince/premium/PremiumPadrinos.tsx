"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Heart, Users } from "lucide-react"
import { useIsClient } from "@/hooks/useIsClient"
import { premiumDemoData } from "./data/premium-demo-data"

export function PremiumPadrinos() {
  const ref = useRef<HTMLDivElement>(null)
  // La variable isInView no se está utilizando actualmente, pero mantenemos useInView para futura animación
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isClient = useIsClient()



  // Mostrar loading mientras el cliente no esté listo
  if (!isClient) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-rosa-gold-50 to-rosa-gold-100">
        <div className="max-w-6xl mx-auto">
          {/* Header simplificado */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-rosa-gold-600 to-rosa-gold-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              👥 Característica Premium
            </div>
            
            <h2 className="section-title text-rosa-gold-800">PADRINOS</h2>
            
            <div className="divider">
              <div className="divider-icon">
                <Users className="w-8 h-8 text-rosa-gold-500" />
              </div>
            </div>
            
            <p className="text-lg text-plateado-600 mt-6 max-w-2xl mx-auto">
              Cargando información de padrinos...
            </p>
          </div>

          {/* Skeleton loading */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-rosa-gold-50 to-rosa-gold-100 rounded-xl p-6 shadow-md border border-rosa-gold-200 animate-pulse"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-rosa-gold-200 rounded-full"></div>
                </div>
                <div className="h-6 bg-rosa-gold-100 rounded mb-4"></div>
                <div className="space-y-3 mb-4">
                  <div className="h-4 bg-rosa-gold-50 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-rosa-gold-50 rounded w-2/3 mx-auto"></div>
                </div>
                <div className="h-3 bg-rosa-gold-50 rounded w-full mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rosa-gold-50 to-rosa-gold-100">
      <div className="max-w-6xl mx-auto">
        {/* Header DEBUG */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-rosa-gold-600 to-rosa-gold-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            👥 Característica Premium 
          </div>
          
          <h2 className="text-4xl font-bold text-rosa-gold-800 mb-4">PADRINOS</h2>
          
          <p className="text-lg text-plateado-600 max-w-2xl mx-auto">
            Personas especiales que nos acompañan y bendicen este día tan importante
          </p>
        </div>

        {/* Grid de padrinos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {premiumDemoData.padrinos && premiumDemoData.padrinos.map((padrino, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-rosa-gold-50 to-rosa-gold-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-rosa-gold-200 hover:border-rosa-gold-300"
            >
              {/* Icono decorativo */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rosa-gold-500 to-rosa-gold-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
              
              {/* Rol del padrino */}
              <h3 className="text-lg font-semibold text-rosa-gold-700 mb-4 text-center">
                {padrino.role}
              </h3>
              
              {/* Nombres */}
              <div className="space-y-3 mb-4">
                {padrino.names.map((name, i) => (
                  <div key={i} className="text-center">
                    <p className="text-plateado-700 font-medium">{name}</p>
                  </div>
                ))}
              </div>
              
              {/* Descripción */}
              <div className="text-center mt-4 pt-4 border-t border-rosa-gold-200">
                <p className="text-sm text-rosa-gold-600 italic">
                  {padrino.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje final */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-rosa-gold-100 to-rosa-gold-200 rounded-2xl p-8 border border-rosa-gold-300">
            <h3 className="text-xl font-semibold text-rosa-gold-800 mb-4">
              Gracias por ser parte de esta historia
            </h3>
            <p className="text-rosa-gold-700 leading-relaxed max-w-2xl mx-auto">
              Cada uno de nuestros padrinos tiene un lugar especial en nuestros corazones. 
              Su apoyo y cariño hacen que este día sea aún más especial.
            </p>
          </div>
        </div>

        {/* Nota del demo premium */}
        <div className="mt-8 p-4 bg-rosa-gold-50 rounded-lg border border-rosa-gold-200 max-w-2xl mx-auto">
          <p className="text-sm text-rosa-gold-700 text-center">
            💎 <strong>Premium:</strong> La lista de padrinos es una característica exclusiva que permite 
            reconocer a todas las personas especiales que apoyan tu celebración.
          </p>
        </div>
      </div>
    </section>
  )
} 