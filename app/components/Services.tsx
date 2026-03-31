'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Full-Stack SaaS Build',
    desc: 'We design, build, and deploy production SaaS systems. Auth, billing, admin dashboard, customer-facing UI, infrastructure. You own 100% of the code.',
    meta: 'Typical engagement: 8–16 weeks',
    viz: 'dashboard',
  },
  {
    title: 'Custom Operations System',
    desc: 'Replace manual workflows and spreadsheets with purpose-built internal software. Designed around how your team actually works — not a template\u2019s assumptions.',
    meta: 'Typical engagement: 4–8 weeks',
    viz: 'system',
  },
  {
    title: 'Revenue Infrastructure',
    desc: 'Software that directly generates or accelerates revenue. Estimating engines, pricing systems, marketplace platforms, and automated sales infrastructure.',
    meta: 'Typical engagement: 6–12 weeks',
    viz: 'revenue',
  },
]

function DashboardViz() {
  return (
    <div className="viz-dash">
      <div className="viz-dash__sidebar">
        <div className="viz-dash__sidebar-item" />
        <div className="viz-dash__sidebar-item" />
        <div className="viz-dash__sidebar-item" />
        <div className="viz-dash__sidebar-item" />
      </div>
      <div className="viz-dash__main">
        <div className="viz-dash__header" />
        <div className="viz-dash__bar-row">
          <div className="viz-dash__bar" /><div className="viz-dash__bar" /><div className="viz-dash__bar" /><div className="viz-dash__bar" /><div className="viz-dash__bar" /><div className="viz-dash__bar" /><div className="viz-dash__bar" />
        </div>
      </div>
    </div>
  )
}

function SystemViz() {
  return (
    <div className="viz-system">
      <div className="viz-node viz-node--a" />
      <div className="viz-node viz-node--b" />
      <div className="viz-node viz-node--c" />
      <div className="viz-node viz-node--d" />
      <div className="viz-line viz-line--1" />
      <div className="viz-line viz-line--2" />
      <div className="viz-line viz-line--3" />
    </div>
  )
}

function RevenueViz() {
  return (
    <div className="viz-revenue">
      <p className="viz-revenue__label">Revenue</p>
      <p className="viz-revenue__value">+127%</p>
      <div className="viz-revenue__line">
        <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
          <path d="M0 55 Q30 50 50 42 T100 28 T150 12 T200 4" stroke="rgba(46,107,255,0.4)" strokeWidth="2" fill="none" />
          <path d="M0 55 Q30 50 50 42 T100 28 T150 12 T200 4 V60 H0 Z" fill="rgba(46,107,255,0.06)" />
        </svg>
      </div>
    </div>
  )
}

const vizMap: Record<string, () => React.ReactElement> = {
  dashboard: DashboardViz,
  system: SystemViz,
  revenue: RevenueViz,
}

export default function Services() {
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
    <section id="services" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }} className="reveal">
          <p className="section-label">What We Build</p>
          <h2 className="section-title">Three ways we build</h2>
        </div>
        <div className="services__grid">
          {services.map((s, i) => {
            const Viz = vizMap[s.viz]
            return (
              <div key={s.title} className={`svc-card reveal${i === 1 ? ' reveal-d1' : i === 2 ? ' reveal-d2' : ''}`}>
                <div className="svc-card__visual">
                  <Viz />
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <p className="svc-card__meta">{s.meta}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
