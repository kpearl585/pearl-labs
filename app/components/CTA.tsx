'use client'

import { useCallback, useEffect, useRef } from 'react'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="cta-section" ref={ref}>
      <div className="container reveal">
        <h2 className="cta__headline">Let&apos;s scope your system.</h2>
        <p className="cta__sub">One call. A detailed architecture plan and estimate within 48 hours. No sales process. No discovery phase. Just the plan.</p>
        <div className="cta__actions">
          <button onClick={openModal} className="btn-primary">BOOK A SCOPE CALL</button>
          <a href="#proof" className="btn-secondary">VIEW OUR WORK</a>
        </div>
      </div>
    </section>
  )
}
