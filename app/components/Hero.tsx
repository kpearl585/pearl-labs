'use client'

import { useRef, useCallback } from 'react'

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

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden min-h-[92vh] flex items-center"
      style={{ paddingTop: 'calc(128px + 40px)', paddingBottom: '96px' }}
      id="hero"
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none opacity-0 transition-opacity duration-400 z-0"
        style={{
          background: 'radial-gradient(circle, rgba(46,107,255,0.07) 0%, transparent 70%)',
          transform: 'translate(-50%,-50%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)] relative z-[1] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="relative z-[2]">
            <p className="text-[0.8125rem] font-semibold text-accent tracking-[0.12em] uppercase mb-6 inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_12px_var(--color-accent-glow)]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
              Pearl Labs
            </p>
            <h1 className="text-[clamp(2.75rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">
              BUILD SYSTEMS THAT <span className="gradient-text">GENERATE REVENUE</span>
            </h1>
            <p className="text-base text-text-2 leading-[1.7] max-w-[480px] mb-4">
              Pearl Labs builds production software for companies that need systems shipped — not decks, not wireframes, not sprints. Three systems live. Full code ownership. One senior engineer.
            </p>
            <div className="text-sm text-text-3 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                3 systems in production
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Defense · SaaS · Revenue
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button onClick={openModal} className="btn-primary">BOOK A SCOPE CALL</button>
              <a href="#proof" className="btn-secondary">VIEW SYSTEMS →</a>
            </div>
          </div>

          {/* Sphere */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            <div className="relative w-full max-w-[480px] aspect-square mx-auto">
              {/* Glow */}
              <div
                className="absolute top-1/2 left-1/2 w-[110%] h-[110%] rounded-full"
                style={{
                  transform: 'translate(-50%,-50%)',
                  background: 'radial-gradient(circle, rgba(46,107,255,0.06) 0%, transparent 60%)',
                  animation: 'sphere-pulse 4s ease-in-out infinite',
                }}
              />
              {/* Canvas */}
              <div className="w-full h-full relative" style={{ animation: 'sphere-rotate 30s linear infinite' }}>
                {/* Rings */}
                {[
                  { size: '90%', color: 'rgba(46,107,255,0.3)' },
                  { size: '78%', color: 'rgba(46,107,255,0.22)' },
                  { size: '66%', color: 'rgba(46,107,255,0.16)' },
                  { size: '54%', color: 'rgba(46,107,255,0.1)' },
                ].map((ring, i) => (
                  <div
                    key={`c${i}`}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                      width: ring.size, height: ring.size,
                      border: `1.5px solid ${ring.color}`,
                      transform: 'translate(-50%,-50%)',
                    }}
                  />
                ))}
                {/* Orbital rings */}
                {[0, 60, 120].map((deg, i) => (
                  <div
                    key={`o${i}`}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                      width: '94%', height: '58%',
                      border: `1.5px solid rgba(46,107,255,${0.28 - i * 0.08})`,
                      transform: `translate(-50%,-50%) rotateX(70deg) rotateZ(${deg}deg)`,
                    }}
                  />
                ))}
                {/* Pearl core */}
                <div
                  className="absolute top-1/2 left-1/2 w-[36%] h-[36%] rounded-full"
                  style={{
                    transform: 'translate(-50%,-50%)',
                    background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, rgba(232,237,245,0.7) 20%, rgba(196,212,240,0.4) 40%, rgba(163,184,224,0.2) 60%, rgba(46,107,255,0.06) 80%, transparent 100%)',
                    boxShadow: '0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(46,107,255,0.1), inset 0 -8px 20px rgba(46,107,255,0.12), inset 0 4px 12px rgba(255,255,255,0.3)',
                    animation: 'pearl-shimmer 6s ease-in-out infinite',
                  }}
                >
                  {/* Highlight */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      inset: '10%',
                      background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.6) 0%, rgba(220,230,255,0.2) 40%, transparent 70%)',
                    }}
                  />
                  {/* Iridescence */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(255,200,200,0.05),rgba(200,200,255,0.07),rgba(200,255,220,0.05),rgba(255,240,200,0.05),rgba(255,200,200,0.05))',
                      mixBlendMode: 'overlay',
                      animation: 'iridescent-rotate 12s linear infinite',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
