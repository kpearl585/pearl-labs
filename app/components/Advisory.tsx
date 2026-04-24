'use client'

import { useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import NightOpsIcon from './NightOpsIcon'

const points: { icon: 'target' | 'layers' | 'database' | 'shield' | 'doc' | 'seal'; label: string }[] = [
  { icon: 'target', label: 'Technical product strategy' },
  { icon: 'layers', label: 'Architecture reviews' },
  { icon: 'database', label: 'AI / RAG feasibility' },
  { icon: 'shield', label: 'Defense & dual-use planning' },
  { icon: 'doc', label: 'White paper condensation' },
  { icon: 'seal', label: 'Implementation roadmaps' },
]

function AdvisoryGlyph() {
  return (
    <svg viewBox="0 0 320 400" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <linearGradient id="adv-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1FA2A9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1FA2A9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Document stack */}
      <rect x="60" y="60" width="200" height="260" rx="4" fill="rgba(19,30,42,0.6)" stroke="rgba(230,237,243,0.12)" />
      <rect x="68" y="52" width="200" height="260" rx="4" fill="rgba(19,30,42,0.4)" stroke="rgba(230,237,243,0.08)" />
      <rect x="76" y="44" width="200" height="260" rx="4" fill="url(#adv-glow)" stroke="rgba(31,162,169,0.35)" />

      {/* Doc top */}
      <rect x="76" y="44" width="200" height="40" fill="rgba(31,162,169,0.08)" stroke="rgba(31,162,169,0.2)" />
      <rect x="92" y="58" width="80" height="12" rx="2" fill="rgba(31,162,169,0.8)" />

      {/* Lines of content */}
      {[110, 130, 150, 180, 200, 220, 250, 270].map((y, i) => (
        <rect key={i} x="92" y={y} width={160 - (i % 3) * 30} height="3" rx="1" fill="rgba(230,237,243,0.12)" />
      ))}

      {/* Highlighted conclusion */}
      <rect x="92" y="290" width="168" height="20" rx="2" fill="rgba(31,162,169,0.12)" stroke="rgba(31,162,169,0.4)" />

      {/* Seal mark */}
      <circle cx="240" cy="360" r="18" fill="none" stroke="rgba(31,162,169,0.6)" strokeWidth="1" />
      <path d="M232 360l6 6l12-12" stroke="rgba(31,162,169,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Advisory() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <section ref={ref} className="section" id="advisory">
      <div className="container advisory-grid">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="eyebrow eyebrow-teal">// 03 / Advisory</span>
          <h2 style={{ marginTop: 18 }}>Strategic advisory<br />for high-stakes systems.</h2>
          <p>
            For defense, SaaS, and operational teams where wrong decisions cost months. Pearl Labs turns complex ideas, technical risk, and messy requirements into scoped plans, build paths, and decision-ready documents.
          </p>
          <ul className="advisory-points">
            {points.map((p) => (
              <li key={p.label}>
                <NightOpsIcon name={p.icon} size={18} />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <button type="button" onClick={openModal} className="btn btn-primary">
            Request Advisory Brief <NightOpsIcon name="arrow-right" size={14} />
          </button>
        </motion.div>
        <motion.div
          className="advisory-visual panel-corners"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <AdvisoryGlyph />
        </motion.div>
      </div>
    </section>
  )
}
