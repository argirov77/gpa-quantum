'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import OfferCard from './OfferCard'
import { FaLightbulb, FaShieldAlt } from 'react-icons/fa'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { threshold: 0.3 })

  const items = [
    {
      icon: <FaLightbulb size={32} color="var(--clr-accent1)" />,
      title: 'Innovation',
      desc: 'Continuous R&D in AI & web3.',
    },
    {
      icon: <FaShieldAlt size={32} color="var(--clr-accent1)" />,
      title: 'Reliability',
      desc: '99.9% uptime & secure infrastructure.',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className={`section fade-in${visible ? ' visible' : ''}`}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>About Us</h2>
        <p>
          CPA Quantum merges quantum-inspired algorithms with marketing science to
          supercharge your campaigns and maximize ROI.
        </p>
        <div className="grid-3">
          {items.map((it, i) => (
            <OfferCard key={i} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
