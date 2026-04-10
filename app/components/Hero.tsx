'use client'

import { useRef, useCallback, useEffect } from 'react'
import { useABTest } from '../lib/ab-testing'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // A/B test for hero headline
  const headlineVariant = useABTest('hero-headline-2026-04', ['control', 'variant-a'])

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
              {headlineVariant === 'control' ? (
                <>BUILD SYSTEMS THAT <span className="gradient-text">GENERATE REVENUE</span></>
              ) : (
                <>SHIP PRODUCTION SOFTWARE IN <span className="gradient-text">WEEKS, NOT MONTHS</span></>
              )}
            </h1>
            <p className="hero__sub reveal reveal-d2">
              Ship production systems in weeks. Full code ownership. One senior engineer. No agencies, no committees, no delays.
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
              <button
                onClick={openModal}
                className="btn-primary btn-with-subtext"
                aria-label="Get your system scoped - Free 48-hour plan"
                aria-haspopup="dialog"
              >
                <span className="btn-main">GET YOUR SYSTEM SCOPED</span>
                <span className="btn-sub">Free 48-hour plan</span>
              </button>
              <a
                href="#proof"
                className="btn-secondary"
                aria-label="View our production systems and case studies"
              >
                VIEW SYSTEMS →
              </a>
            </div>
            {/* Urgency indicator - only show if genuinely limited capacity */}
            {/* Remove or update based on actual availability */}
            <div className="hero__urgency reveal reveal-d3">
              <span className="urgency-dot">⚡</span>
              <span className="urgency-text">Limited availability — 2 project slots for Q2 2026</span>
            </div>

            <div className="hero__trust reveal reveal-d3">
              <p className="hero__trust-text">
                Trusted by defense contractors and high-growth SaaS companies
              </p>
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
