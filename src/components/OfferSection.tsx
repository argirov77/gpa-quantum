// src/components/OfferSection.tsx
'use client'

import { ReactNode, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import OfferCard from './OfferCard'

interface Item {
  icon: ReactNode
  title: string
  desc: string
}

interface OfferSectionProps {
  id: string
  title: string
  items: Item[]
}

export default function OfferSection({ id, title, items }: OfferSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { threshold: 0.2 })

  return (
    <section id={id} ref={ref} className={`section fade-in${visible ? ' visible' : ''}`}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>{title}</h2>
        <div className="grid-3">
          {items.map((it, i) => (
            <OfferCard key={i} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
