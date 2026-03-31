'use client'

import { useEffect, useRef } from 'react'

const commitments = [
  {
    title: '48-Hour Scoped Plan',
    desc: 'Describe what you need. Within two business days you\u2019ll have a detailed architecture plan, timeline, and cost estimate. No discovery phase.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l2.5 2.5" />
      </svg>
    ),
  },
  {
    title: 'Weekly Production Deployments',
    desc: 'Working code deployed to a staging environment every week. You see real progress — not slide updates, not mockups, not status meetings.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16l3-3m0 0l3-3m-3 3L4 10m3 3l3 3" />
        <rect x="11" y="4" width="5" height="12" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Direct Builder Access',
    desc: 'You talk directly to the engineer writing the code. No project managers, no account reps, no telephone game. One point of contact from start to finish.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
        <path d="M10 7v3h3" />
      </svg>
    ),
  },
  {
    title: 'Full System Ownership',
    desc: 'Every line of code, every deployment configuration, every database — transferred to you on delivery. No vendor lock-in. No proprietary frameworks. It\u2019s yours.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 11l-5 5-5-5" />
        <path d="M10 16V4" />
      </svg>
    ),
  },
]

export default function Commitments() {
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
    <section id="process" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }} className="reveal">
          <p className="section-label">How We Work</p>
          <h2 className="section-title">Four commitments, every engagement</h2>
        </div>
        <div className="commitments__grid">
          {commitments.map((c, i) => (
            <div key={c.title} className={`commit-card reveal${i === 1 ? ' reveal-d1' : i === 2 ? ' reveal-d2' : i === 3 ? ' reveal-d3' : ''}`}>
              <div className="commit-card__icon">
                {c.icon}
              </div>
              <div>
                <h3 className="commit-card__title">{c.title}</h3>
                <p className="commit-card__desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
