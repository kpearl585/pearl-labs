'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

function PearlLogo({ height = 28 }: { height?: number }) {
  return (
    <span className="pl-logo">
      <Image
        src="/logo-eclipse-icon.png"
        alt=""
        width={height}
        height={height}
        className="pl-logo__mark"
      />
      <span className="pl-logo__wordmark">
        <span className="pl-logo__pearl">PEARL</span>
        <span className="pl-logo__labs">LABS</span>
      </span>
    </span>
  )
}

export { PearlLogo }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
    setMobileOpen(false)
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <Link href="/" aria-label="Pearl Labs home" onClick={closeMobile}>
          <PearlLogo />
        </Link>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="main-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <div id="main-navigation" className={`nav__links${mobileOpen ? ' nav__links--open' : ''}`}>
          <Link href="/#services" className="nav__link" onClick={closeMobile}>Services</Link>
          <Link href="/#proof" className="nav__link" onClick={closeMobile}>Work</Link>
          <Link href="/blog" className="nav__link" onClick={closeMobile}>Notes</Link>
          <Link href="/for-small-business" className="nav__link" onClick={closeMobile}>Small Business</Link>
          <button type="button" onClick={openModal} className="nav__cta">REQUEST A BRIEF</button>
        </div>
      </div>
    </nav>
  )
}
