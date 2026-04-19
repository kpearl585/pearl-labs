'use client'

import { useEffect, useRef } from 'react'

const badges = [
  'Defense & Intelligence',
  'SaaS Platforms',
  'Construction Tech',
  'Veteran Owned',
  'SCORE Service Partner',
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
        <div className="trust__inner reveal">
          {badges.map((b) => (
            <span key={b} className="trust__badge">
              <span className="trust__badge-dot" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
