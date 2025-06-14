// src/components/Metrics.tsx
'use client'
import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { FaChartPie, FaChartBar, FaFunnelDollar } from 'react-icons/fa'

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null)
  const vis = useInView(ref)

  const stats = [
    { icon:<FaChartPie size={32}/>,      label:'Conversion Rate', value:'35%' },
    { icon:<FaChartBar size={32}/>,      label:'Daily Impressions', value:'1.2M' },
    { icon:<FaFunnelDollar size={32}/>,  label:'Avg. ROI',         value:'420%' },
  ]

  return (
    <section
      id="metrics"
      ref={ref}
      className={`section bg-metrics-pattern fade-in${vis?' visible':''}`}
    >
      <div className="container" style={{ textAlign:'center' }}>
        <h2>Key Metrics</h2>
        <div className="grid-3">
          {stats.map((s,i)=>(
            <div key={i} className="card" style={{ cursor:'default' }}>
              {s.icon}
              <h3 style={{ margin:'1rem 0 0' }}>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
