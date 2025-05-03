import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Detalhes do Quiz Critão para Pais',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
