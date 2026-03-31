'use client'

import { useRef, useCallback, useEffect } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return
    const r = hero.getBoundingClientRect()
    glow.style.left = (e.clientX - r.left) + 'px'
    glow.style.top = (e.clientY - r.top) + 'px'
    glow.style.opacity = '1'
  }, [])

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    const els = heroRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={heroRef} onMouseMove={onMouseMove} className="hero" id="hero">
      <div ref={glowRef} className="hero__glow" />
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__overline reveal">
              <span className="hero__overline-dot" />
              Pearl Labs
            </p>
            <h1 className="hero__headline reveal reveal-d1">
              BUILD SYSTEMS THAT <span className="gradient-text">GENERATE REVENUE</span>
            </h1>
            <p className="hero__sub reveal reveal-d2">
              Pearl Labs builds production software for companies that need systems shipped — not decks, not wireframes, not sprints. Three systems live. Full code ownership. One senior engineer.
            </p>
            <div className="hero__metric reveal reveal-d2">
              <span className="hero__metric-item">
                <span className="hero__metric-dot" />
                3 systems in production
              </span>
              <span className="hero__metric-item">
                <span className="hero__metric-dot" />
                Defense &middot; SaaS &middot; Revenue
              </span>
            </div>
            <div className="hero__actions reveal reveal-d3">
              <button onClick={openModal} className="btn-primary">BOOK A SCOPE CALL</button>
              <a href="#proof" className="btn-secondary">VIEW SYSTEMS →</a>
            </div>
          </div>
          <div className="hero__visual reveal reveal-d2">
            <div className="sphere-wrap">
              <div className="sphere-glow" />
              <div className="sphere-canvas">
                <div className="sphere-ring" />
                <div className="sphere-ring" />
                <div className="sphere-ring" />
                <div className="sphere-ring" />
                <div className="sphere-ring" />
                <div className="sphere-ring" />
                <div className="sphere-ring" />
                <div className="sphere-core" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
