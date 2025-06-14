// src/components/Hero.tsx
'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const visible = useInView(ref, { threshold: 0.3 })

  // Optional: wait until hydration before playing video to avoid SSR issues
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className={`hero fade-in${visible ? ' visible' : ''}`}
    >
      {mounted && (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4"  type="video/mp4" />
        </video>
      )}

      <div className="container" style={{ zIndex: 1, color: 'var(--clr-text)' }}>
        <h1>Effective Advertising</h1>
        <p>
          We build the future of digital marketing using quantum-inspired algorithms.
        </p>
        <button
          className="btn"
          onClick={() =>
            document
              .getElementById('advertisers')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Get Started
        </button>
      </div>
    </section>
  )
}
