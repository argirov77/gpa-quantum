// src/components/OfferCard.tsx
import { ReactNode } from 'react'

interface OfferCardProps {
  icon: ReactNode
  title: string
  desc: string
}

export default function OfferCard({ icon, title, desc }: OfferCardProps) {
  return (
    <div className="card">
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
