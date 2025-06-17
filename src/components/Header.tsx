'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const SECTIONS = ['hero','advertisers','affiliates','about','contact']

export default function Header() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  // IntersectionObserver для подсветки текущей секции
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.6 }
    )
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className={`logo ${active==='hero'?'active':''}`}>
          CPA Quantum
        </Link>

        <nav className="nav-desktop">
          {SECTIONS.slice(1).map(id => (
            <Link
              key={id}
              href={`#${id}`}
              className={active===id?'active':''}
            >
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28}/> : <HiMenu size={28}/>}
        </button>
      </div>

      <nav className={`nav-mobile${menuOpen?' open':''}`}>
        {SECTIONS.slice(1).map(id => (
          <Link
            key={id}
            href={`#${id}`}
            className={active===id?'active':''}
            onClick={() => setMenuOpen(false)}
          >
            {id.charAt(0).toUpperCase()+id.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  )
}
