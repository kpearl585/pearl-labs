'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

function PearlLogo({ height = 28 }: { height?: number }) {
  return (
    <span className="pl-logo" style={{ height }}>
      <Image
        src="/logo-eclipse-icon.png"
        alt=""
        width={height}
        height={height}
        className="pl-logo__mark"
        style={{ width: height, height: height }}
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
