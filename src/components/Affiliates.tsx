// src/components/Affiliates.tsx
'use client'
import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import OfferCard from './OfferCard'
import { FaHandshake, FaMoneyBillWave, FaHeadset } from 'react-icons/fa'

export default function Affiliates() {
  const ref = useRef<HTMLDivElement>(null)
  const vis = useInView(ref)

  const items = [
    { icon:<FaHandshake size={32} color="var(--clr-accent2)"/>, title:'Partnerships',    desc:'Top brands collaboration.' },
    { icon:<FaMoneyBillWave size={32} color="var(--clr-accent2)"/>, title:'Fast Payouts',  desc:'Daily settlement options.' },
    { icon:<FaHeadset size={32} color="var(--clr-accent2)"/>, title:'24/7 Support',    desc:'Dedicated account manager.' },
  ]

  return (
    <section
      id="affiliates"
      ref={ref}
      className={`section bg-affiliates-pattern fade-in${vis?' visible':''}`}
    >
      <div className="container" style={{ textAlign:'center' }}>
        <h2>For Affiliates</h2>
        <div className="grid-3">
          {items.map((it,i)=><OfferCard key={i} {...it}/>)}
        </div>
      </div>
    </section>
  )
}
