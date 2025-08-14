import { AuroraHero } from "@/components/demo/quince/premium/hero/AuroraHero";
import { AuroraInvitation } from "@/components/demo/quince/premium/invitation/AuroraInvitation";
import { AuroraEventDetails } from "@/components/demo/quince/premium/eventdetails/AuroraEventDetails";
import { AuroraGallery } from "@/components/demo/quince/premium/gallery/AuroraGallery";
import { AuroraCountdown } from "@/components/demo/quince/premium/countdown/AuroraCountdown";
import { AuroraAttendance } from "@/components/demo/quince/premium/attendance/AuroraAttendance";
import { AuroraGifts } from "@/components/demo/quince/premium/gifts/AuroraGifts";
import { AuroraThankYou } from "@/components/demo/quince/premium/thankyou/AuroraThankYou";
import { AuroraMusicPlayer } from "@/components/demo/quince/premium/AuroraMusicPlayer";
import { auroraDemoData } from "@/components/demo/quince/premium/data/aurora-demo-data";
import EspecialGallery from "@/components/demo/quince/premium/gallery/EspecialGallery";
import CustomInvitations from "@/components/demo/quince/premium/CustomInvitations";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Reproductor de música flotante para tema Aurora */}
              <AuroraMusicPlayer />
              
              {/* Hero Section */}
              <AuroraHero data={auroraDemoData} />
              
              {/* Invitación con tema Aurora */}
              <AuroraInvitation />
              
              {/* Detalles del evento con tema Aurora */}
              <AuroraEventDetails />

              {/** Galería especial por requerimiento del cliente */}
              <EspecialGallery />

              {/* Galería con tema Aurora */}
              <AuroraGallery />
              
              {/* Cuenta regresiva con tema Aurora */}
              <AuroraCountdown />
              
              {/* Confirmación de asistencia con tema Aurora */}
              <AuroraAttendance />
              
              {/* Opciones de regalo con tema Aurora */}
              <AuroraGifts />

              <CustomInvitations />

              {/* Agradecimiento con tema Aurora */}
              <AuroraThankYou />
      
    </div>
  )
}
