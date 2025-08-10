"use client"

import { Heart, Users } from 'lucide-react'
import { premiumDemoData } from './data/premium-demo-data'

export function PremiumInvitation() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {premiumDemoData.invitation.title}
          </h2>
          <p className="text-xl text-gray-600">
            {premiumDemoData.invitation.message}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Título principal */}
          <div className="text-center mb-8">
            <h3 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
              {premiumDemoData.invitation.subtitle}
            </h3>
            <p className="text-lg text-gray-600">
              {premiumDemoData.invitation.blessing}
            </p>
          </div>

          {/* Información de los novios */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {premiumDemoData.invitation.celebrants.bride}
              </h4>
              <div className="text-4xl text-pink-500 mb-4">&</div>
              <h4 className="text-2xl font-bold text-gray-900">
                {premiumDemoData.invitation.celebrants.groom}
              </h4>
            </div>
          </div>

          {/* Información de padres */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Padres de la novia */}
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-600" />
                <h5 className="text-xl font-semibold text-purple-800">
                  Padres de la Novia
                </h5>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">
                  {premiumDemoData.invitation.parents.brideParents.father}
                </p>
                <p className="font-medium">
                  {premiumDemoData.invitation.parents.brideParents.mother}
                </p>
              </div>
            </div>

            {/* Padres del novio */}
            <div className="bg-pink-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-pink-600" />
                <h5 className="text-xl font-semibold text-pink-800">
                  Padres del Novio
                </h5>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">
                  {premiumDemoData.invitation.parents.groomParents.father}
                </p>
                <p className="font-medium">
                  {premiumDemoData.invitation.parents.groomParents.mother}
                </p>
              </div>
            </div>
          </div>

          {/* Mensaje decorativo */}
          <div className="text-center">
            <p className="text-lg text-gray-600 italic">
              {premiumDemoData.invitation.decorativeMessage}
            </p>
          </div>

          {/* Elementos decorativos */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
              <div className="w-12 h-12 bg-pink-200 rounded-full"></div>
              <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Nota del demo */}
        <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-800 text-center">
            <strong>💡 Demo:</strong> Esta sección premium incluye información completa de la invitación. 
            En tu invitación real, podrás personalizar completamente el contenido y diseño.
          </p>
        </div>
      </div>
    </section>
  )
} 