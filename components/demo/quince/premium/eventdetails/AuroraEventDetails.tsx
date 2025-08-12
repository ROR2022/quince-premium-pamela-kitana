"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { auroraDemoData } from "../data/aurora-demo-data";

export function AuroraEventDetails() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();

  // Verificación de datos - si no existen, mostrar error
  if (
    !auroraDemoData.event ||
    !auroraDemoData.event.ceremony ||
    !auroraDemoData.event.party
  ) {
    return (
      <section className="relative py-20 px-4 min-h-screen overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>Error:</strong> No se pudieron cargar los datos del evento.
            <br />
            <small>
              auroraDemoData.event:{" "}
              {JSON.stringify(auroraDemoData.event, null, 2)}
            </small>
          </div>
        </div>
      </section>
    );
  }

  // Función simplificada para abrir Google Maps - UNA SOLA VENTANA
  const openInMaps = (address: string, locationName: string) => {
    // Verificar que tenemos una dirección válida
    if (!address || address.trim() === "") {
      toast({
        title: "Error",
        description: "Dirección no disponible en este momento.",
        variant: "destructive",
      });
      return;
    }

    try {
      const encodedAddress = encodeURIComponent(address.trim());
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      
      // Solución simple: siempre abrir en nueva pestaña web
      // Esto funciona en todos los dispositivos y nunca abre ventanas dobles
      window.open(mapsUrl, "_blank", "noopener,noreferrer");
      
      toast({
        title: "¡Perfecto! 🗺️",
        description: `Abriendo ${locationName} en Google Maps...`,
        duration: 3000,
      });
      
    } catch (error) {
      console.error("❌ Error al abrir Maps:", error);
      toast({
        title: "Error al abrir Maps",
        description: "Por favor, verifica que tienes conexión a internet.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section className="relative py-20 px-4 min-h-screen overflow-hidden">
      {/* Imagen de fondo Aurora */}
      <Image
        src="/images/custom/aurora/aurora_8.jpeg"
        alt="Aurora Background"
        fill
        style={{ objectFit: "cover" }}
        quality={90}
        priority={false}
        className="z-0"
      />

      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-aurora-50/90 to-white/85 backdrop-blur-sm z-5"></div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-[10%] w-8 h-8 text-aurora-tertiary opacity-30 animate-pulse z-5">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div
        className="absolute top-32 right-[15%] w-10 h-10 text-aurora-tertiary opacity-30 animate-pulse z-5"
        style={{ animationDelay: "1s" }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-24 left-[20%] w-6 h-6 text-aurora-tertiary opacity-30 animate-pulse z-5"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* Contenido principal */}
      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header con estilo Aurora */}
        <div className="mb-12">
          <div className="inline-block aurora-gradient text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-aurora-tertiary/30 aurora-shadow">
            ✨ Detalles Mágicos del Evento
          </div>

          <h2 className="text-4xl md:text-5xl font-princess aurora-text-gradient mb-6">
            ¡Lo que Tienes que Saber!
          </h2>

          <p className="text-xl text-aurora-secondary mb-4">
            Todos los detalles importantes para acompañarme en mi día especial
          </p>
        </div>

        
        {/* Separador decorativo estilo Aurora */}
        <div className="flex items-center justify-center my-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
          <div className="mx-4 relative">
            <div className="w-8 h-8 aurora-gradient rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="absolute inset-0 aurora-shimmer rounded-full"></div>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-aurora-tertiary to-transparent"></div>
        </div>

        {/* Fecha principal destacada */}
        <div className="mb-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-aurora-tertiary/40 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 aurora-shimmer opacity-20"></div>
            <div className="relative z-10 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-aurora-primary" />
              <div className="text-left">
                <p className="text-sm text-aurora-secondary font-medium">
                  📅 Fecha del Evento
                </p>
                <p className="text-2xl font-princess aurora-text-gradient font-bold">
                  {auroraDemoData.event.date.day}
                </p>
                <p className="text-lg text-aurora-secondary">
                  {auroraDemoData.event.date.date}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de detalles del evento */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Ceremonia */}
          <div 
            data-testid="ceremony-section"
            className="bg-white/90 rounded-2xl p-8 border-2 border-aurora-tertiary/30 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{ position: 'static', zIndex: 'auto', pointerEvents: 'auto' }}
          >
            {/* Icono decorativo */}
            <div className="relative z-10 flex justify-center mb-6">
              <div className="w-16 h-16 aurora-gradient rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-princess aurora-text-gradient font-bold mb-4">
              Ceremonia Religiosa
            </h3>

            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-aurora-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-aurora-primary">
                    {auroraDemoData.event.ceremony.time}
                  </p>
                  <p className="text-sm text-aurora-secondary">
                    Misa de Acción de Gracias
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-aurora-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-aurora-primary">
                    {auroraDemoData.event.ceremony.venue}
                  </p>
                  <p className="text-sm text-aurora-secondary leading-relaxed">
                    {auroraDemoData.event.ceremony.address}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full mt-6 border-aurora-primary text-aurora-primary hover:bg-aurora-primary hover:text-white transition-all duration-300 font-medium"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                openInMaps(
                  auroraDemoData.event.ceremony.address,
                  "Ceremonia - " + auroraDemoData.event.ceremony.venue
                );
              }}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Ver en Google Maps
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>

          {/* Recepción */}
          <div 
            data-testid="party-section"
            className="bg-white/90 rounded-2xl p-8 border-2 border-aurora-tertiary/30 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{ position: 'static', zIndex: 'auto', pointerEvents: 'auto' }}
          >
            {/* Icono decorativo */}
            <div className="relative z-10 flex justify-center mb-6">
              <div className="w-16 h-16 aurora-gradient rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-princess aurora-text-gradient font-bold mb-4">
              Recepción
            </h3>

            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-aurora-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-aurora-primary">
                    {auroraDemoData.event.party.time}
                  </p>
                  <p className="text-sm text-aurora-secondary">
                    Celebración y Fiesta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-aurora-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-aurora-primary">
                    {auroraDemoData.event.party.venue}
                  </p>
                  <p className="text-sm text-aurora-secondary leading-relaxed">
                    {auroraDemoData.event.party.address}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full mt-6 border-aurora-primary text-aurora-primary hover:bg-aurora-primary hover:text-white transition-all duration-300 font-medium"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                openInMaps(
                  auroraDemoData.event.party.address,
                  "Recepción - " + auroraDemoData.event.party.venue
                );
              }}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Ver en Google Maps
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>

          {/* Código de Vestimenta */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-aurora-tertiary/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group md:col-span-2 lg:col-span-1">
            {/* Efecto shimmer de fondo */}
            <div className="absolute inset-0 aurora-shimmer opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

            {/* Icono decorativo */}
            <div className="relative z-10 flex justify-center mb-6">
              <div className="w-16 h-16 aurora-gradient rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-princess aurora-text-gradient font-bold mb-4">
              Código de Vestimenta
            </h3>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg font-semibold text-aurora-primary mb-2">
                  {auroraDemoData.event.dressCode}
                </p>
                <div className="bg-aurora-accent/20 rounded-lg p-4 border border-aurora-tertiary/30">
                  <p className="text-sm text-aurora-secondary leading-relaxed">
                    <strong>Importante:</strong> Rosa Gold es un color exclusivo
                    para la quinceañera. Les agradecemos respetar esta tradición
                    especial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-aurora-tertiary/30 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 aurora-shimmer opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-princess aurora-text-gradient font-bold mb-6">
              Información Importante
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-aurora-primary mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Antes del Evento
                </h4>
                <ul className="space-y-2 text-aurora-secondary">
                  <li>• Confirmar asistencia con anticipación</li>
                  <li>• Llegar 30 minutos antes a la ceremonia</li>
                  <li>• Respetar el código de vestimenta</li>
                  <li>• Coordinar transporte si es necesario</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-aurora-primary mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Durante la Celebración
                </h4>
                <ul className="space-y-2 text-aurora-secondary">
                  <li>• Estacionamiento gratuito disponible</li>
                  <li>• Cena y baile en la recepción</li>
                  <li>• Mesa de regalos disponible</li>
                  <li>• Espacio para fotos especiales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Nota del tema Aurora */}
        <div className="mt-12 p-4 bg-aurora-50/80 rounded-lg border border-aurora-tertiary/30 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-sm text-aurora-secondary">
            👑 <strong>Tema Aurora:</strong> Detalles del evento con diseño de
            cuento de hadas para una experiencia mágica e inolvidable.
          </p>
        </div>
      </div>
    </section>
  );
}
