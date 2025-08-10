"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { basicDemoData } from "./data/basic-demo-data"

// Función helper para abrir Google Maps
const openInMaps = (address: string) => {
  try {
    const encodedAddress = encodeURIComponent(address)
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
    window.open(mapsUrl, '_blank')
  } catch (error) {
    console.error('Error al abrir Google Maps:', error)
  }
}

export function BasicEventDetails() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 px-4 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 rosa-gold-text-gradient">
          ¡LO QUE TIENES QUE SABER!
        </h2>

        <div className="divider">
          <div className="divider-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-rosa-gold-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-rosa-gold-500 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-rosa-gold-700">¿Cuándo?</h3>
            <p className="text-lg text-plateado-700">{basicDemoData.event.date.day}</p>
            <p className="text-lg text-plateado-700">{basicDemoData.event.date.date}</p>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-rosa-gold-500 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-rosa-gold-700">{basicDemoData.event.ceremony.type}</h3>
            <p className="text-lg text-plateado-700">{basicDemoData.event.ceremony.time}</p>
            <p className="text-lg mt-2 text-plateado-700">{basicDemoData.event.ceremony.venue}</p>
            <p className="text-sm mt-1 text-plateado-600">{basicDemoData.event.ceremony.address}</p>
            <Button 
              variant="outline" 
              className="mt-4 border-rosa-gold-400 text-rosa-gold-600 hover:bg-rosa-gold-500 hover:text-white hover:border-rosa-gold-500 transition-all duration-300"
              onClick={() => openInMaps(basicDemoData.event.ceremony.address)}
            >
              IR A MAPS
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-rosa-gold-500 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-rosa-gold-700">{basicDemoData.event.party.type}</h3>
            <p className="text-lg text-plateado-700">{basicDemoData.event.party.time}</p>
            <p className="text-lg mt-2 text-plateado-700">{basicDemoData.event.party.venue}</p>
            <p className="text-sm mt-1 text-plateado-600">{basicDemoData.event.party.address}</p>
            <Button 
              variant="outline" 
              className="mt-4 border-rosa-gold-400 text-rosa-gold-600 hover:bg-rosa-gold-500 hover:text-white hover:border-rosa-gold-500 transition-all duration-300"
              onClick={() => openInMaps(basicDemoData.event.party.address)}
            >
              IR A MAPS
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 text-rosa-gold-500 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-rosa-gold-700">Código de Vestimenta</h3>
            <p className="text-lg text-rosa-gold-600 font-medium">{basicDemoData.event.dressCode}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 