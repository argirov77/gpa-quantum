'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import OfferCard from './OfferCard'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { threshold: 0.3 })

  const items = [
    {
      icon: <FaEnvelope size={32} />,
      title: 'Email',
      desc: (
        <a
          href="mailto:info@cpa-quantum.com"
          style={{ color: 'var(--clr-accent1)', textDecoration: 'none' }}
        >
          info@cpa-quantum.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt size={32} />,
      title: 'Address',
      desc: (
        <>
          5 South Charlotte Street<br />
          Edinburgh EH2 4AN<br />
          Scotland, UK
        </>
      ),
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className={`section fade-in${visible ? ' visible' : ''}`}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <div className="grid-3" style={{ marginTop: '2rem' }}>
          {items.map((it, i) => (
            <OfferCard
              key={i}
              icon={it.icon}
              title={it.title}
              desc={it.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
