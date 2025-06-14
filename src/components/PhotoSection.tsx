// src/components/PhotoSection.tsx
'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import Image from 'next/image'

export default function PhotoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.2 })

  return (
    <section id="gallery" className="photo-section fade-up" ref={ref}>
      <h2>Наши кейсы в кадре</h2>
      <div className="gallery-grid">
        <Image src="/images/img1.jpg" alt="Кейс 1" width={600} height={400} style={{ objectFit: 'cover', width:'100%', height:'100%' }}/>
        <Image src="/images/img2.jpg" alt="Кейс 2" width={600} height={400} style={{ objectFit: 'cover', width:'100%', height:'100%' }}/>
      </div>
    </section>
  )
}
