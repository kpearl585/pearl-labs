'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import NightOpsIcon from './NightOpsIcon'

const cases = [
  {
    id: 'defense',
    cat: 'Defense Decision-Support',
    proof: 'Under Briefing',
    name: 'Mission Intelligence Platform',
    copy: 'Decision-support concept combining geospatial visualization, transparent forecasting logic, operational workflows, and briefing-ready outputs. Details shared on secured channels after NDA exchange.',
    href: '/briefing',
    external: false,
    image: null as string | null,
    visualTint: 'defense',
  },
  {
    id: 'fenceestimatepro',
    cat: 'Construction Tech SaaS',
    proof: 'Shipped · Live',
    name: 'FenceEstimatePro',
    copy: 'Run-based fence estimating SaaS. FenceGraph engine auto-derives posts, panels, and concrete from fence geometry. 47+ active contractors.',
    href: '/work/fenceestimatepro',
    external: false,
    image: '/fenceestimatepro-hero.jpg',
    visualTint: null,
  },
  {
    id: 'contractordocs',
    cat: 'HOA Packet SaaS',
    proof: 'Shipped · Live',
    name: 'ContractorDocs',
    copy: 'HOA packet builder for fence contractors. Elevation, setback, COI, license, cover letter — one professional PDF in under two minutes.',
    href: '/work/contractordocuments',
    external: false,
    image: '/contractordocs-hero.jpg',
    visualTint: null,
  },
  {
    id: 'oeb',
    cat: 'Youth Sports Organization',
    proof: 'Shipped · Live',
    name: 'Ocala Elite Breed',
    copy: 'From expired Squarespace to a site they own. Seven pages, sponsor tiers, zero recurring fees. Recently relaunched.',
    href: '/work/ocala-elite-breed',
    external: false,
    image: '/oeb-hero.jpg',
    visualTint: null,
  },
]

function DefenseVisual() {
  return (
    <svg viewBox="0 0 640 320" fill="none" style={{ width: '100%', height: '100%', objectFit: 'cover' }} aria-hidden="true">
      <defs>
        <radialGradient id="def-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1FA2A9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1FA2A9" stopOpacity="0" />
        </radialGradient>
        <pattern id="def-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" stroke="rgba(31,162,169,0.1)" fill="none" />
        </pattern>
      </defs>
      <rect width="640" height="320" fill="#0B1117" />
      <rect width="640" height="320" fill="url(#def-grid)" />
      <circle cx="320" cy="160" r="140" fill="url(#def-glow)" />
      {/* Stylized map paths */}
      <path d="M80 140q80-40 160 0t160-20 160 10" stroke="rgba(31,162,169,0.55)" strokeWidth="1.2" fill="none" />
      <path d="M60 200q100-30 200 10t220-30 100 20" stroke="rgba(31,162,169,0.35)" strokeWidth="1" fill="none" />
      {/* Target markers */}
      <g>
        {[[220, 140], [320, 160], [420, 130], [500, 180], [160, 180]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="none" stroke="rgba(92,201,208,0.9)" strokeWidth="1" />
            <circle cx={x} cy={y} r="1.5" fill="#5CC9D0" />
          </g>
        ))}
      </g>
      {/* Data readouts */}
      <text x="32" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.55)" letterSpacing="1.5">STATUS // ACTIVE</text>
      <text x="608" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.55)" letterSpacing="1.5" textAnchor="end">REF // DSP-01</text>
      <text x="32" y="296" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.4)" letterSpacing="1.5">LAYERS // 4 INT</text>
      <text x="608" y="296" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.4)" letterSpacing="1.5" textAnchor="end">NDA REQUIRED</text>
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Proof() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" id="proof">
      <div className="container">
        <div className="section-head">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <span className="eyebrow eyebrow-teal">// 04 / Built Work</span>
            <h2>Systems in service.</h2>
          </motion.div>
          <motion.div
            className="sub"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Decision-support concepts, construction tech SaaS, contractor document workflows, and custom websites — built and shipped by the same hands.
          </motion.div>
        </div>

        <div className="case-grid">
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              className="case-card"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Link href={c.href} className="case-card-link">
                <div className="case-card-visual">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      style={{ objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }}
                    />
                  ) : (
                    <DefenseVisual />
                  )}
                </div>
                <div className="case-card-body">
                  <div className="case-card-meta">
                    <span>{c.cat}</span>
                    <span className="status">● {c.proof}</span>
                  </div>
                  <h3 className="case-card-title">{c.name}</h3>
                  <p className="case-card-copy">{c.copy}</p>
                  <div className="case-card-cta">
                    <span>{c.id === 'defense' ? 'Request briefing' : 'View case study'}</span>
                    <span className="arrow"><NightOpsIcon name="arrow-right" size={14} /></span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
