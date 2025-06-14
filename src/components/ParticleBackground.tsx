// src/components/ParticleSection.tsx
'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticleSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })

  const init = async (engine: any) => { await loadFull(engine) }

  return (
    <section className="particle-section">
      <Particles
        init={init}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 40 },
            color: { value: '#00ffff' },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 2 } },
            move: { enable: true, speed: 0.3 },
            links: { enable: true, distance: 100, color: '#00ffff', opacity: 0.1 }
          },
          interactivity: { events: { onHover: { enable: true, mode: 'grab'} }}
        }}
        style={{ position: 'absolute', inset: 0 }}
      />
      <div
        ref={ref}
        className={`fade-up ${inView ? 'in-view' : ''}`}
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)',
          fontSize: '1.5rem'
        }}
      >
        Наши достижения
      </div>
    </section>
  )
}
