'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

const SECTIONS = ['hero', 'advertisers', 'affiliates', 'about', 'contact']

export default function Header() {
  const [light, setLight] = useState(false)
  const [active, setActive] = useState('hero')

  // Инициализация темы
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') setLight(true)
  }, [])
  useEffect(() => {
    document.body.classList.toggle('light', light)
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])

  // IntersectionObserver для подсветки nav
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id)
            e.target.classList.add('active')
          } else {
            e.target.classList.remove('active')
          }
        })
      },
      { threshold: 0.6 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className={`logo ${active === 'hero' ? 'active' : ''}`}>
          CPA Quantum
        </Link>
        <nav>
          <Link
            href="#advertisers"
            className={active === 'advertisers' ? 'active' : ''}
          >
            Advertisers
          </Link>
          <Link
            href="#affiliates"
            className={active === 'affiliates' ? 'active' : ''}
          >
            Affiliates
          </Link>
          <Link
            href="#about"
            className={active === 'about' ? 'active' : ''}
          >
            About
          </Link>
          {/* Новая ссылка для секции Contact */}
          <Link
            href="#contact"
            className={active === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
          <button
            onClick={() => setLight((l) => !l)}
            aria-label="Toggle theme"
          >
            {light ? <HiMoon size={24} /> : <HiSun size={24} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
