'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import NightOpsIcon from './NightOpsIcon'

const cards = [
  {
    num: '01',
    title: 'Custom Websites',
    copy: 'Fast, credible Next.js sites for serious businesses that need clarity, speed, and ownership without WordPress bloat.',
    timeline: '2–6 weeks',
    glyph: 'website',
  },
  {
    num: '02',
    title: 'Business Software',
    copy: 'Internal tools, portals, dashboards, and SaaS platforms built around the workflow your team actually runs.',
    timeline: '6–12 weeks',
    glyph: 'dashboard',
  },
  {
    num: '03',
    title: 'Workflow Automation',
    copy: 'Document pipelines, intake flows, approvals, reporting, and integrations that remove manual handoffs.',
    timeline: '4–8 weeks',
    glyph: 'workflow',
  },
]

function WebsiteGlyph() {
  return (
    <svg viewBox="0 0 240 220" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect x="20" y="30" width="200" height="160" rx="4" fill="rgba(19,30,42,0.6)" stroke="rgba(230,237,243,0.12)" />
      <rect x="20" y="30" width="200" height="20" fill="rgba(31,162,169,0.06)" stroke="rgba(230,237,243,0.08)" />
      <circle cx="32" cy="40" r="2.5" fill="rgba(31,162,169,0.4)" />
      <circle cx="42" cy="40" r="2.5" fill="rgba(230,237,243,0.15)" />
      <circle cx="52" cy="40" r="2.5" fill="rgba(230,237,243,0.15)" />
      <rect x="34" y="68" width="140" height="14" rx="2" fill="rgba(31,162,169,0.35)" />
      <rect x="34" y="90" width="180" height="3" rx="1" fill="rgba(230,237,243,0.1)" />
      <rect x="34" y="99" width="140" height="3" rx="1" fill="rgba(230,237,243,0.08)" />
      <rect x="34" y="108" width="160" height="3" rx="1" fill="rgba(230,237,243,0.08)" />
      <rect x="34" y="135" width="60" height="20" rx="3" fill="rgba(230,237,243,0.95)" />
      <rect x="100" y="135" width="60" height="20" rx="3" fill="none" stroke="rgba(230,237,243,0.25)" />
    </svg>
  )
}

function DashboardGlyph() {
  const bars = [40, 60, 48, 72, 55, 80, 62, 50]
  return (
    <svg viewBox="0 0 240 220" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect x="20" y="20" width="200" height="180" rx="4" fill="rgba(19,30,42,0.55)" stroke="rgba(230,237,243,0.1)" />
      <rect x="32" y="36" width="60" height="8" rx="2" fill="rgba(31,162,169,0.5)" />
      <rect x="32" y="54" width="40" height="4" rx="1" fill="rgba(230,237,243,0.12)" />
      {bars.map((h, i) => (
        <rect key={i} x={34 + i * 22} y={180 - h} width="12" height={h} fill="rgba(31,162,169,0.3)" opacity={0.4 + i * 0.07} />
      ))}
      <path d="M32 140 Q60 128 94 120 T170 100 T210 90" stroke="rgba(31,162,169,0.7)" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function WorkflowGlyph() {
  return (
    <svg viewBox="0 0 240 220" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <circle cx="50" cy="60" r="14" fill="rgba(19,30,42,0.8)" stroke="rgba(31,162,169,0.5)" />
      <circle cx="190" cy="60" r="14" fill="rgba(19,30,42,0.8)" stroke="rgba(230,237,243,0.2)" />
      <circle cx="120" cy="130" r="18" fill="rgba(31,162,169,0.15)" stroke="rgba(31,162,169,0.7)" strokeWidth="1.5" />
      <circle cx="60" cy="180" r="12" fill="rgba(19,30,42,0.8)" stroke="rgba(230,237,243,0.2)" />
      <circle cx="180" cy="180" r="12" fill="rgba(19,30,42,0.8)" stroke="rgba(230,237,243,0.2)" />
      <path d="M60 70 L110 120" stroke="rgba(230,237,243,0.15)" />
      <path d="M180 70 L130 120" stroke="rgba(230,237,243,0.15)" />
      <path d="M112 140 L68 170" stroke="rgba(31,162,169,0.5)" />
      <path d="M128 140 L172 170" stroke="rgba(31,162,169,0.5)" />
      <circle cx="120" cy="130" r="3" fill="rgba(31,162,169,0.9)" />
    </svg>
  )
}

const glyphs: Record<string, () => React.ReactElement> = {
  website: WebsiteGlyph,
  dashboard: DashboardGlyph,
  workflow: WorkflowGlyph,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" id="services">
      <div className="container">
        <div className="section-head">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <span className="eyebrow eyebrow-teal">{'// 02 / What We Build'}</span>
            <h2>Custom software that ships<br />into real operations.</h2>
          </motion.div>
          <motion.div
            className="sub"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Websites, SaaS platforms, and workflow systems scoped in 48 business hours and built with ownership from day one.
          </motion.div>
        </div>
        <div className="cards-3">
          {cards.map((c, i) => {
            const Glyph = glyphs[c.glyph]
            return (
              <motion.article
                key={c.num}
                className="service-card"
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <div className="card-visual">
                  <Glyph />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <span>{c.title}</span>
                    <span className="num">{c.num}</span>
                  </div>
                  <p className="card-copy">{c.copy}</p>
                  <div className="card-meta">
                    <span>Timeline <span className="timeline">{c.timeline}</span></span>
                    <span className="arrow"><NightOpsIcon name="arrow-right" size={12} /></span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
