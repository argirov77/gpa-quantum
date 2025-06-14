// src/components/ContactSection.tsx
'use client'

import { useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref)
  const [email, setEmail] = useState('')
  return (
    <section className="section" ref={ref}>
      <div className={`container fade-in ${visible?'visible':''}`}>
        <h2 style={{color:'var(--accent-magenta)'}}>Get in Touch</h2>
        <form onSubmit={e=>e.preventDefault()} style={{display:'flex',gap:'1rem',marginTop:'1rem'}}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            style={{
              flex:1,padding:'.75rem',border:'2px solid var(--accent-cyan)',borderRadius:'.5rem',
              background:'transparent',color:'inherit'
            }}
          />
          <button className="btn" disabled={!email}>Submit</button>
        </form>
      </div>
    </section>
  )
}
