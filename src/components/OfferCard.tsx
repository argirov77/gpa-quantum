import React, { ReactNode } from 'react'

interface OfferCardProps {
  icon: ReactNode
  title: string
  // теперь — ReactNode, а не string
  desc: ReactNode
}

export default function OfferCard({ icon, title, desc }: OfferCardProps) {
  return (
    <div className="card">
      <div style={{ marginBottom: '0.75rem', color: 'var(--clr-accent1)' }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ margin: 0 }}>{desc}</p>
    </div>
  )
}
