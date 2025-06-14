// src/app/layout.tsx
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CPA Quantum',
  description: 'Quantum-inspired digital marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 
        suppressHydrationWarning говорит React не ругаться на атрибуты, 
        которые вставляют расширения (Grammarly, др.) 
      */}
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
