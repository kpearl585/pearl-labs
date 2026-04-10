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
            <button onClick={openModal} className="btn-text">
              INQUIRE ABOUT ADVISORY
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </button>
          </div>
        </div>

        {/* Business Systems & Clarity Advisory Subsection */}
        <div className="divider reveal" style={{ marginBlock: 'var(--space-16)' }}></div>

        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }} className="reveal">
          <h3 className="section-title" style={{ fontSize: 'var(--text-h2)' }}>Business Systems & Clarity Advisory</h3>
          <p className="section-subtitle" style={{ marginInline: 'auto', marginTop: 'var(--space-5)' }}>
            For small business owners, not every problem is high-stakes — but many are unclear. If your business is running on spreadsheets, manual processes, disconnected tools, or ideas that feel hard to organize, Pearl Labs helps turn that complexity into a clear, structured plan.
          </p>
          <p className="section-subtitle" style={{ marginInline: 'auto', marginTop: 'var(--space-4)' }}>
            We help identify bottlenecks, simplify workflows, and map out practical systems that save time, reduce friction, and make the business easier to run. In some cases that leads to custom software. In others, it starts with clarity, structure, and a better operational model.
          </p>
        </div>

        <div style={{ maxWidth: '720px', marginInline: 'auto', marginBottom: 'var(--space-8)' }} className="reveal">
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)'
          }}>
            <li style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              paddingLeft: 'var(--space-6)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--accent)',
                fontWeight: 600
              }}>→</span>
              Replace messy manual workflows with a clear system
            </li>
            <li style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              paddingLeft: 'var(--space-6)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--accent)',
                fontWeight: 600
              }}>→</span>
              Turn operational bottlenecks into actionable next steps
            </li>
            <li style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              paddingLeft: 'var(--space-6)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--accent)',
                fontWeight: 600
              }}>→</span>
              Create a practical roadmap before building software
            </li>
          </ul>
        </div>

        <div className="advisory__footer reveal" style={{ marginTop: 'var(--space-6)' }}>
          <p className="closing" style={{ fontSize: 'var(--text-sm)', marginTop: 0 }}>
            Good fit for SCORE-referred clients and small businesses that need clarity before implementation.
          </p>
        </div>
      </div>
    </section>
  )
}
