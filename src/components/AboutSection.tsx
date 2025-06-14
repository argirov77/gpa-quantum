'use client'
import { useRef } from 'react'
import { useInView } from '../hooks/useInView'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref)

  return (
    <section id="about" ref={ref}
             className={`section fade-in${visible?' visible':''}`}>
      <div className="container" style={{ textAlign:'center' }}>
        <h2>About Our Work</h2>
        <p>
          At CPA Quantum, we leverage quantum-inspired computing to optimize ad campaigns,
          delivering unmatched ROI and performance at scale.
        </p>
      </div>
    </section>
  )
}
