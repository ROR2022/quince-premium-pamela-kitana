import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { MusicProvider } from '@/context/music-context'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'XV Años Pamela Kitana - 11 de Octubre 2025',
  description: 'Invitación digital para los XV años de Pamela Kitana Gómez Robles - 11 de Octubre 2025',
  generator: 'Invitaciones Web MX',
  // Next.js 15 detecta automáticamente favicon.ico, icon.png y apple-icon.png en /app
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <MusicProvider>
          {children}
          <Toaster />
        </MusicProvider>
      </body>
    </html>
  )
}
