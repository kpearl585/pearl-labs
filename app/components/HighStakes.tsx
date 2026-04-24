'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    title: 'Defense & Intelligence',
    cat: 'Mission-Critical',
    copy: 'Decision-support systems, briefing workflows, geospatial interfaces, data pipelines, and secure operational tools.',
    visual: 'defense',
  },
  {
    title: 'Legal / Law Enforcement',
    cat: 'Glass-Box AI',
    copy: 'Glass-box AI and RAG systems for reviewing reports, checking discrepancies, citing verified sources, and producing defensible outputs.',
    visual: 'legal',
  },
  {
    title: 'Construction Tech',
    cat: 'Field-Ready',
    copy: 'Estimators, proposal tools, material workflows, closeout learning loops, and job paperwork systems for contractors.',
    visual: 'construction',
  },
  {
    title: 'Business Automation',
    cat: 'SCORE Service Partner',
    copy: 'Custom software for owners who are tired of spreadsheets, manual handoffs, and disconnected tools.',
    visual: 'smb',
  },
]

function VerticalVisual({ kind }: { kind: string }) {
  const common = { width: '100%', height: '100%', fill: 'none' } as const
  if (kind === 'defense') {
    return (
      <svg viewBox="0 0 300 200" {...common} aria-hidden="true">
        <rect width="300" height="200" fill="#0B1117" />
        <pattern id="hs-grid-d" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0v24" stroke="rgba(31,162,169,0.08)" /></pattern>
        <rect width="300" height="200" fill="url(#hs-grid-d)" />
        <circle cx="150" cy="100" r="50" fill="none" stroke="rgba(31,162,169,0.3)" />
        <circle cx="150" cy="100" r="30" fill="none" stroke="rgba(31,162,169,0.5)" />
        <circle cx="150" cy="100" r="4" fill="#5CC9D0" />
        <path d="M150 50v-14M150 164v-14M86 100h14M214 100h-14" stroke="rgba(31,162,169,0.7)" strokeWidth="1" />
      </svg>
    )
  }
  if (kind === 'legal') {
    return (
      <svg viewBox="0 0 300 200" {...common} aria-hidden="true">
        <rect width="300" height="200" fill="#0B1117" />
        <g stroke="rgba(230,237,243,0.15)" strokeWidth="1">
          <path d="M150 30v150M70 180h160M90 70h120" />
          <path d="M90 70l-20 60a15 15 0 0040 0L90 70z" fill="rgba(31,162,169,0.08)" />
          <path d="M210 70l-20 60a15 15 0 0040 0L210 70z" fill="rgba(31,162,169,0.08)" />
        </g>
        <circle cx="150" cy="30" r="5" fill="#5CC9D0" />
      </svg>
    )
  }
  if (kind === 'construction') {
    const bars = [40, 55, 48, 70, 62, 78, 58]
    return (
      <svg viewBox="0 0 300 200" {...common} aria-hidden="true">
        <rect width="300" height="200" fill="#0B1117" />
        <g>
          {bars.map((h, i) => (
            <rect key={i} x={50 + i * 32} y={170 - h} width="20" height={h} fill="rgba(31,162,169,0.35)" opacity={0.5 + i * 0.07} />
          ))}
        </g>
        <path d="M40 110 Q110 92 170 84 T260 62" stroke="rgba(31,162,169,0.8)" strokeWidth="1.5" fill="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 300 200" {...common} aria-hidden="true">
      <rect width="300" height="200" fill="#0B1117" />
      <rect x="40" y="40" width="80" height="50" rx="3" fill="rgba(19,30,42,0.8)" stroke="rgba(230,237,243,0.18)" />
      <rect x="130" y="40" width="80" height="50" rx="3" fill="rgba(19,30,42,0.8)" stroke="rgba(230,237,243,0.18)" />
      <rect x="220" y="40" width="42" height="50" rx="3" fill="rgba(31,162,169,0.15)" stroke="rgba(31,162,169,0.5)" />
      <rect x="40" y="100" width="222" height="14" rx="2" fill="rgba(31,162,169,0.18)" />
      <rect x="40" y="124" width="180" height="6" rx="1" fill="rgba(230,237,243,0.12)" />
      <rect x="40" y="140" width="140" height="6" rx="1" fill="rgba(230,237,243,0.12)" />
      <rect x="40" y="156" width="160" height="6" rx="1" fill="rgba(230,237,243,0.12)" />
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function HighStakes() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" id="verticals">
      <div className="container">
        <div className="section-head">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <span className="eyebrow eyebrow-teal">{'// 06 / High-Stakes Systems'}</span>
            <h2>Built for teams<br />where trust matters.</h2>
          </motion.div>
          <motion.div
            className="sub"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Four domains where Pearl Labs applies the same operating standard: clear workflows, defensible outputs, and software clients can own.
          </motion.div>
        </div>
        <div className="cards-4">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              className="stakes-card"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="visual"><VerticalVisual kind={c.visual} /></div>
              <div className="body">
                <div className="cat">{`// ${c.cat}`}</div>
                <h3><span className="dot" />{c.title}</h3>
                <p>{c.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
