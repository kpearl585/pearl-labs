'use client'

import { useState, useEffect, useCallback } from 'react'

function PearlLogo({ height = 32, id = 'nPG' }: { height?: number; id?: string }) {
  return (
    <svg height={height} viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#FFF" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#E8EDF5" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#C4D4F0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="18" stroke="#2E6BFF" strokeWidth="2.5" fill="none" />
      <circle cx="32" cy="32" r="11" fill={`url(#${id})`} opacity="0.85" />
      <text x="64" y="40" fontSize="24" fill="#F1F5F9" fontFamily="Inter,Arial,sans-serif" fontWeight="600">PEARL LABS</text>
    </svg>
  )
}

export { PearlLogo }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a href="/" aria-label="Pearl Labs home">
          <PearlLogo />
        </a>
        <div className="nav__links">
          <a href="/#services" className="nav__link">Services</a>
          <a href="/#proof" className="nav__link">Work</a>
          <a href="/blog" className="nav__link">Notes</a>
          <a href="/for-small-business" className="nav__link">Small Business</a>
          <button onClick={openModal} className="nav__cta">REQUEST A BRIEF</button>
        </div>
      </div>
    </nav>
  )
}
