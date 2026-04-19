'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Founder() {
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
    <section className="founder" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }} className="reveal">
          <p className="section-label">Who Builds This</p>
        </div>
        <div className="founder__card reveal">
          <div className="founder__photo">
            <Image
              src="/founder.png"
              alt="Keegan Pearl, founder of Pearl Labs"
              width={88}
              height={88}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="founder__info">
            <h3 className="founder__name">Keegan Pearl</h3>
            <p className="founder__role">Founder and engineer. I build everything Pearl Labs ships — the code, the architecture, the deployment. Same quality bar on a small business website as on a defense intelligence platform. You talk to me from first call through handoff.</p>
            <div className="founder__badges">
              <span className="founder__badge">Veteran Owned</span>
              <span className="founder__badge">Full-Stack Engineer</span>
              <span className="founder__badge">Ocala, FL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
