"use client";

import { AuroraHero } from "@/components/demo/quince/premium/hero/AuroraHero";
import { AuroraInvitation } from "@/components/demo/quince/premium/invitation/AuroraInvitation";
import { AuroraGallery } from "@/components/demo/quince/premium/gallery/AuroraGallery";
import { AuroraCountdown } from "@/components/demo/quince/premium/countdown/AuroraCountdown";
import { AuroraAttendance } from "@/components/demo/quince/premium/attendance/AuroraAttendance";
import { AuroraGifts } from "@/components/demo/quince/premium/gifts/AuroraGifts";
import { AuroraThankYou } from "@/components/demo/quince/premium/thankyou/AuroraThankYou";
import { AuroraMusicPlayer } from "@/components/demo/quince/premium/AuroraMusicPlayer";
import { auroraDemoData } from "@/components/demo/quince/premium/data/aurora-demo-data";
import { MusicProvider } from "@/context/music-context";

export default function AuroraDemo() {
  return (
    <MusicProvider>
      <main className="min-h-screen">
        {/* Reproductor de música flotante para tema Aurora */}
        <AuroraMusicPlayer />
        
        {/* Hero Section */}
        <AuroraHero data={auroraDemoData} />
        
        {/* Invitación con tema Aurora */}
        <AuroraInvitation />
        
        {/* Galería con tema Aurora */}
        <AuroraGallery />
        
        {/* Cuenta regresiva con tema Aurora */}
        <AuroraCountdown />
        
        {/* Confirmación de asistencia con tema Aurora */}
        <AuroraAttendance />
        
        {/* Opciones de regalo con tema Aurora */}
        <AuroraGifts />
        
        {/* Agradecimiento con tema Aurora */}
        <AuroraThankYou />
        
        {/* Indicador de componentes en desarrollo */}
        <div 
        style={{ display: "none" }}
        className="p-8 text-center">
          <h2 className="text-3xl font-princess aurora-text-gradient">
            Tema Aurora en Desarrollo
          </h2>
          <p className="mt-4 text-aurora-secondary">
            Estamos implementando más componentes del tema completo.
          </p>
          <div className="max-w-xl mx-auto mt-8 p-4 border border-aurora-tertiary/30 rounded-lg bg-white/50">
            <h3 className="text-xl text-aurora-secondary mb-2">Componentes implementados:</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Hero con carrusel temático</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Invitación con estilo Aurora</span>
              </li>
            </ul>
            <h3 className="text-xl text-aurora-secondary mt-4 mb-2">Próximos componentes:</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Galería de Fotos</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Cuenta Regresiva</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Asistencia</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Regalos</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </MusicProvider>
  );
}
