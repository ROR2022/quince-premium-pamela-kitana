"use client";
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const ADMIN_PASSWORD = "aurora1234";

interface FormData {
  guestName: string;
  guestRelation: string;
  personalMessage: string;
  numberOfGuests: string;
  whatsappNumber: string;
}

type FormField = keyof FormData;

const CustomInvitations: React.FC = () => {
  // Estados del formulario de invitación
  const [formData, setFormData] = useState<FormData>({
    guestName: "",
    guestRelation: "",
    personalMessage: "",
    numberOfGuests: "",
    whatsappNumber: "",
  });

  // Estado de autenticación admin
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showAuthPopover, setShowAuthPopover] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");

  // Estado para vista previa y descarga
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Mensajes sugeridos temáticos
  const suggestedMessages = [
    "¡Querida amiga! Te invito a celebrar conmigo el día más mágico de mi vida. ¡Espero verte brillar junto a mí!",
    "¡Familia querida! Este día especial no sería lo mismo sin ustedes. ¡Los espero con mucho amor!",
    "¡Hola! Me encantaría que seas parte de mi celebración de XV años. ¡Será una noche inolvidable!",
    "¡Queridos padrinos! Su presencia es fundamental en este momento tan especial. ¡Los espero con cariño!",
    "¡Amigos del alma! Vengan a celebrar conmigo esta nueva etapa. ¡Será una fiesta increíble!",
  ];

  // Validación y formateo de teléfono
  const formatMexicanPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    const limited = numbers.slice(0, 10);
    if (limited.length >= 6) {
      return `${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(
        6
      )}`;
    } else if (limited.length >= 3) {
      return `${limited.slice(0, 3)} ${limited.slice(3)}`;
    }
    return limited;
  };

  // Actualizar campos del formulario
  const updateFormData = (field: FormField, value: string): void => {
    setFormData((prev: FormData) => ({ ...prev, [field]: value }));
  };

  // Función de autenticación
  const handleAuthentication = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError("");
      setPassword("");
      setShowAuthPopover(false);
    } else {
      setAuthError("Contraseña incorrecta");
      setPassword("");
    }
  };

  // Lógica para generar mensaje de WhatsApp
  const generateWhatsAppMessage = (): string => {
    const invitationURL = "https://quince-premium-pamela-kitana.vercel.app/";
    return `👑 ¡Hola ${formData.guestName}! 👑\n\n${
      formData.personalMessage
    }\n\nTienes una invitación especial a mi fiesta de XV años:\n✨ Quinceañera Aurora ✨\n\n📅 Fecha: Sábado 11 de Octubre, 2025\n🕖 Hora: 7:00 PM\n📍 Lugar: Salón Melany's\n👥 Número de invitados: ${
      formData.numberOfGuests
    } ${
      parseInt(formData.numberOfGuests) === 1 ? "persona" : "personas"
    }\n\nVer tu invitación mágica aquí:\n👉 ${invitationURL}\n\n💜 ¡Espero que celebres conmigo este día tan especial!\n\nCon cariño,\nAurora`;
  };

  // Función para enviar por WhatsApp
  const sendWhatsAppInvitation = (): void => {
    if (
      !formData.guestName ||
      !formData.whatsappNumber ||
      !formData.numberOfGuests ||
      !formData.personalMessage
    ) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }
    const cleanNumber = formData.whatsappNumber.replace(/\D/g, "");
    if (cleanNumber.length !== 10) {
      alert("El número debe tener exactamente 10 dígitos");
      return;
    }
    const message = generateWhatsAppMessage();
    const mexicanNumber = `52${cleanNumber}`;
    const whatsappURL = `https://wa.me/${mexicanNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Función para descargar invitación como imagen
  const downloadInvitation = async (): Promise<void> => {
    if (!previewRef.current) {
      alert("No se encontró la vista previa para descargar.");
      return;
    }
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        background: undefined,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `invitacion_aurora_${formData.guestName.replace(
        /\s+/g,
        "_"
      )}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Error al descargar:", error);
      alert("Ocurrió un error al generar la imagen.");
    }
    setIsDownloading(false);
  };

  // Componente de vista previa de invitación
  const InvitationPreview: React.FC = () => (
    <div
      ref={previewRef}
      className="mt-8 p-6 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-purple-700 rounded-2xl text-white shadow-2xl relative overflow-hidden"
    >
      {/* Decoraciones aurora */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-4 left-4 text-4xl">✨</div>
        <div className="absolute top-8 right-8 text-3xl">👑</div>
        <div className="absolute bottom-4 left-8 text-2xl">💜</div>
        <div className="absolute bottom-8 right-4 text-3xl">🌟</div>
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-200">
          ✨ Quinceañera Aurora ✨
        </h2>
        <div className="space-y-3 text-lg">
          <p>
            <strong>Invitado especial:</strong> {formData.guestName}
          </p>
          <p className="italic bg-white/20 p-3 rounded-lg">
            &quot;{formData.personalMessage}&quot;
          </p>
          <div className="space-y-1 text-sm">
            <p>
              📅 <strong>Fecha:</strong> Sábado 11 de Octubre 2025
            </p>
            <p>
              🕖 <strong>Hora:</strong> 7:00 PM
            </p>
            <p>
              📍 <strong>Lugar:</strong> Salon Melany&#39;s
            </p>
            <p>
              👥 <strong>Invitados:</strong> {formData.numberOfGuests}{" "}
              {parseInt(formData.numberOfGuests) === 1 ? "persona" : "personas"}
            </p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white/20 rounded-lg">
          <p className="text-sm">💜 Con cariño, Aurora</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-100 via-fuchsia-100 to-white">
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl text-purple-400">
          ✨
        </div>
        <div className="absolute top-40 right-20 text-5xl text-fuchsia-400">
          👑
        </div>
        <div className="absolute bottom-40 left-20 text-4xl text-purple-400">
          💜
        </div>
        <div className="absolute bottom-20 right-10 text-5xl text-fuchsia-400">
          🌟
        </div>
      </div>

      {/* Badge de autenticación admin */}
      <div className="absolute top-4 right-4 z-50">
        {!isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setShowAuthPopover(!showAuthPopover)}
              className="p-2 bg-gradient-to-r from-fuchsia-500 to-purple-700 hover:from-fuchsia-600 hover:to-purple-800 rounded-full shadow-lg transition-colors"
              title="Área de administración"
            >
              <span
                role="img"
                aria-label="settings"
                className="text-white text-xl"
              >
                ⚙️
              </span>
            </button>

            {/* Popover de autenticación */}
            {showAuthPopover && (
              <div className="absolute top-12 right-0 w-80 bg-white rounded-xl shadow-2xl border-2 border-fuchsia-200 p-4 z-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-fuchsia-700">Admin Panel</h3>
                  <button
                    onClick={() => setShowAuthPopover(false)}
                    className="p-1 hover:bg-gray-100 rounded text-fuchsia-600"
                  >
                    <span className="text-lg">✖️</span>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Contraseña"
                      className={`w-full px-3 py-2 pr-10 border ${
                        authError ? "border-red-300" : "border-fuchsia-200"
                      } rounded-lg text-sm`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                  {authError && (
                    <p className="text-xs text-red-600">{authError}</p>
                  )}
                  <button
                    type="button"
                    onClick={handleAuthentication}
                    className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-700 hover:from-fuchsia-600 hover:to-purple-800 text-white py-2 rounded-lg font-bold"
                  >
                    Acceder
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 bg-fuchsia-500 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-xs font-medium">Admin</span>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto mt-32 text-center relative z-10">
        <h1 className="bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
          Invitaciones Personalizadas Quinceañera Aurora
        </h1>
        <p className="text-lg text-fuchsia-700 mb-8 max-w-2xl mx-auto">
          Crea invitaciones mágicas y personalizadas para la fiesta de XV años
          de Aurora, con mensajes especiales, número de invitados y envío
          directo por WhatsApp.
        </p>

        {!isAuthenticated && (
          <div className="mt-12 p-6 bg-white/90 rounded-2xl border-2 border-fuchsia-200 shadow-lg max-w-xl mx-auto relative z-20">
            <div className="text-fuchsia-500 font-semibold mb-4">
              🔐 Acceso Restringido
            </div>
            <p className="text-gray-600 text-sm">
              Esta herramienta es exclusiva para la creación de invitaciones
              personalizadas. Accede como administrador para comenzar.
            </p>
            <div className="mt-4 p-3 bg-fuchsia-50 rounded-lg">
              <p className="text-xs text-fuchsia-600">
                💡 <strong>Tip:</strong> Haz clic en el ícono ⚙️ en la esquina
                superior derecha
              </p>
            </div>
          </div>
        )}

        {isAuthenticated && (
          <div className="max-w-4xl mx-auto mt-12 space-y-8">
            {/* Formulario principal */}
            <div className="bg-white/90 rounded-2xl p-8 border-2 border-fuchsia-200 shadow-lg relative z-20">
              <h2 className="text-2xl font-bold text-fuchsia-700 mb-6">
                📝 Crear Invitación Personalizada
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Columna izquierda */}
                <div className="space-y-6">
                  {/* Nombre del invitado */}
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Nombre del invitado *
                    </label>
                    <input
                      type="text"
                      value={formData.guestName}
                      onChange={(e) =>
                        updateFormData("guestName", e.target.value)
                      }
                      placeholder="Ej: Valeria Martínez"
                      className="w-full px-4 py-3 border border-fuchsia-200 focus:ring-fuchsia-400 rounded-lg focus:ring-2 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Relación con la quinceañera */}
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Relación con la quinceañera
                    </label>
                    <select
                      value={formData.guestRelation}
                      onChange={(e) =>
                        updateFormData("guestRelation", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-fuchsia-200 focus:ring-fuchsia-400 rounded-lg focus:ring-2 focus:border-transparent"
                    >
                      <option value="">Selecciona relación (opcional)</option>
                      <option value="familia">👪 Familia</option>
                      <option value="amigos">👭 Amigos</option>
                      <option value="padrinos">🤝 Padrinos</option>
                      <option value="otros">👥 Otros</option>
                    </select>
                  </div>

                  {/* Número de invitados */}
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Número de invitados *
                    </label>
                    <select
                      value={formData.numberOfGuests}
                      onChange={(e) =>
                        updateFormData("numberOfGuests", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-fuchsia-200 focus:ring-fuchsia-400 rounded-lg focus:ring-2 focus:border-transparent"
                      required
                    >
                      <option value="">Selecciona número de invitados</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={String(i + 1)}>
                          {i + 1} {i === 0 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* WhatsApp México */}
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      WhatsApp México (10 dígitos) *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-medium">
                        🇲🇽 +52
                      </div>
                      <input
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) =>
                          updateFormData(
                            "whatsappNumber",
                            formatMexicanPhone(e.target.value)
                          )
                        }
                        placeholder="555 123 4567"
                        maxLength={13}
                        className={`w-full pl-16 pr-4 py-3 border ${
                          formData.whatsappNumber &&
                          formData.whatsappNumber.replace(/\D/g, "").length !==
                            10
                            ? "border-red-300 focus:ring-red-400"
                            : "border-fuchsia-200 focus:ring-fuchsia-400"
                        } rounded-lg focus:ring-2 focus:border-transparent`}
                        required
                      />
                    </div>
                    {formData.whatsappNumber &&
                      formData.whatsappNumber.replace(/\D/g, "").length !==
                        10 &&
                      formData.whatsappNumber.length > 0 && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          ⚠️ Debe tener exactamente 10 dígitos
                        </p>
                      )}
                  </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-6">
                  {/* Mensaje personalizado */}
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Mensaje especial *
                    </label>
                    <textarea
                      value={formData.personalMessage}
                      onChange={(e) =>
                        updateFormData("personalMessage", e.target.value)
                      }
                      placeholder="Escribe un mensaje personalizado..."
                      rows={4}
                      className="w-full px-4 py-3 border border-fuchsia-200 focus:ring-fuchsia-400 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Mensajes sugeridos */}
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      💡 Mensajes sugeridos
                    </label>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {suggestedMessages.map((message, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            updateFormData("personalMessage", message)
                          }
                          className="w-full text-left p-3 text-sm bg-fuchsia-50 hover:bg-fuchsia-100 rounded-lg border border-fuchsia-200 transition-colors"
                        >
                          {message}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="mt-8 flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white py-3 rounded-lg font-bold shadow-lg transition-all"
                >
                  {showPreview
                    ? "🙈 Ocultar Vista Previa"
                    : "👁️ Ver Vista Previa"}
                </button>
                <button
                  type="button"
                  onClick={sendWhatsAppInvitation}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-bold shadow-lg transition-all"
                >
                  📱 Enviar por WhatsApp
                </button>
                <button
                  type="button"
                  onClick={downloadInvitation}
                  disabled={isDownloading || !showPreview}
                  className="flex-1 bg-gradient-to-r from-fuchsia-500 to-purple-700 hover:from-fuchsia-600 hover:to-purple-800 text-white py-3 rounded-lg font-bold shadow-lg transition-all disabled:opacity-50"
                >
                  {isDownloading ? "⏳ Descargando..." : "💾 Descargar Imagen"}
                </button>
              </div>
            </div>

            {/* Vista previa */}
            {showPreview && formData.guestName && formData.personalMessage && (
              <InvitationPreview />
            )}

            {/* Información adicional */}
            <div className="bg-white/80 rounded-2xl p-6 border border-fuchsia-200 relative z-20">
              <h3 className="text-lg font-bold text-fuchsia-700 mb-4">
                ℹ️ Información del Evento
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p>
                    <strong>📅 Fecha:</strong> Sábado 11 de Octubre 2025
                  </p>
                  <p>
                    <strong>🕖 Hora:</strong> 7:00 PM
                  </p>
                </div>
                <div>
                  <p>
                    <strong>📍 Lugar:</strong> Salon Melany&#39;s
                  </p>
                  <p>
                    <strong>👗 Código de vestimenta:</strong> Formal -Rosa Gold
                    solo la quinceañera-
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomInvitations;
