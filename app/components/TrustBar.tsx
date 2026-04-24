'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const credentials = [
  { src: '/badge-veteran.png', alt: 'U.S. Veteran Owned Business', width: 287, height: 105 },
  { src: '/badge-score.png', alt: 'SCORE Service Partner', width: 196, height: 165 },
  { src: '/badge-florida.png', alt: 'Florida Based Company', width: 258, height: 113 },
]

const domains = [
  'Defense & Intelligence',
  'SaaS Platforms',
  'Construction Tech',
  'Strategic Advisory',
]

export default function TrustBar() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="trust" ref={ref}>
      <div className="container">
        <div className="trust__tier reveal">
          <span className="trust__tier-label">Credentials</span>
          <div className="trust__credentials">
            {credentials.map((c) => (
              <div key={c.src} className="trust__credential">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  className="trust__badge-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="trust__tier-divider" />
        <div className="trust__tier reveal">
          <span className="trust__tier-label">Operational Domains</span>
          <div className="trust__inner">
            {domains.map((b) => (
              <span key={b} className="trust__badge">
                <span className="trust__badge-dot" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
