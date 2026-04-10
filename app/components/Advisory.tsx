'use client'

import { useCallback, useEffect, useRef } from 'react'

const cards = [
  { num: '01', title: 'System Design Review', desc: 'We evaluate your product, architecture, or model and identify gaps, risks, and opportunities before they become expensive.' },
  { num: '02', title: 'Positioning & Narrative', desc: 'We refine how your system is presented so it lands with decision-makers, not just builders.' },
  { num: '03', title: 'Execution Strategy', desc: 'We help define what to build next, what to ignore, and how to move forward with clarity.' },
]

export default function Advisory() {
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
    <section id="advisory" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }} className="reveal">
          <p className="section-label">Strategic Advisory</p>
          <h2 className="section-title">Strategic advisory for high-stakes systems</h2>
          <p className="section-subtitle" style={{ marginInline: 'auto' }}>Engaged by defense and SaaS companies where the cost of a wrong decision is measured in months, not hours.</p>
        </div>
        <div className="advisory__grid">
          {cards.map((c, i) => (
            <div key={c.num} className={`adv-card reveal${i === 1 ? ' reveal-d1' : i === 2 ? ' reveal-d2' : ''}`}>
              <p className="adv-card__num">{c.num}</p>
              <h3 className="adv-card__title">{c.title}</h3>
              <p className="adv-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="advisory__footer reveal">
          <p>Applied to real systems, not theory. Used to refine defense-grade modeling platforms and high-level technical documentation.</p>
          <p className="closing">Available selectively for projects where clarity and execution matter.</p>
          <div className="advisory__cta">
            <button
              onClick={openModal}
              className="btn-text"
              aria-label="Inquire about advisory services - Opens contact form"
              aria-haspopup="dialog"
            >
              INQUIRE ABOUT ADVISORY
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Business Systems & Clarity Advisory Subsection */}
        <div className="divider reveal" style={{ marginBlock: 'var(--space-16)' }}></div>

        <div className="business-systems">
          <div className="business-systems__header reveal">
            <p className="section-label">For Small Businesses</p>
            <h3 className="business-systems__title">Business Systems & Clarity Advisory</h3>
            <p className="business-systems__intro">
              For businesses running on spreadsheets, manual processes, or disconnected tools, Pearl Labs brings structure before implementation — turning operational complexity into a clear plan.
            </p>
          </div>

          <div className="business-systems__grid">
            <div className="business-card reveal">
              <h4 className="business-card__title">Clearer workflows</h4>
              <p className="business-card__desc">Replace messy manual processes with a more structured operating system.</p>
            </div>
            <div className="business-card reveal reveal-d1">
              <h4 className="business-card__title">Practical next steps</h4>
              <p className="business-card__desc">Turn bottlenecks and confusion into actionable priorities.</p>
            </div>
            <div className="business-card reveal reveal-d2">
              <h4 className="business-card__title">Roadmap before software</h4>
              <p className="business-card__desc">Define the right system before committing to a custom build.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
