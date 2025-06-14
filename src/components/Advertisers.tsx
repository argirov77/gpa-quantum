// src/components/Advertisers.tsx
'use client'
import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import OfferCard from './OfferCard'
import { FaBullseye, FaChartLine, FaUsers } from 'react-icons/fa'

export default function Advertisers() {
  const ref = useRef<HTMLDivElement>(null)
  const vis = useInView(ref)

  const items = [
    { icon:<FaBullseye size={32} color="var(--clr-accent1)"/>, title:'Precision Targeting', desc:'AI-driven audience segmentation.' },
    { icon:<FaChartLine size={32} color="var(--clr-accent1)"/>, title:'Live Analytics',       desc:'Real-time campaign dashboards.' },
    { icon:<FaUsers size={32} color="var(--clr-accent1)"/>, title:'User Insights',        desc:'Deep behavioral metrics.' },
  ]

  return (
    <section
      id="advertisers"
      ref={ref}
      className={`section bg-advertisers-pattern fade-in${vis?' visible':''}`}
    >
      <div className="container" style={{ textAlign:'center' }}>
        <h2>For Advertisers</h2>
        <div className="grid-3">
          {items.map((it,i)=><OfferCard key={i} {...it}/>)}
        </div>
      </div>
    </section>
  )
}
