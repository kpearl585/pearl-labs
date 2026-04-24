'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import NightOpsIcon from './NightOpsIcon'

const cases = [
  {
    id: 'argus',
    cat: 'Defense Decision-Support',
    proof: 'Prototype · Under Briefing',
    name: 'ARGUS',
    copy: 'Decision-support prototype for geospatial workflows, transparent forecasting logic, provenance, and briefing-ready outputs. Sensitive details shared after NDA exchange.',
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
    copy: 'Run-based estimating SaaS for fence contractors. FenceGraph derives posts, panels, and concrete from run geometry before quote approval.',
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
    copy: 'HOA packet and document workflow for fence contractors. Templates, autofill, licensing docs, and client-ready PDFs in one flow.',
    href: '/work/contractordocuments',
    external: false,
    image: '/contractordocs-hero.jpg',
    visualTint: null,
  },
  {
    id: 'advisory',
    cat: 'Strategic Advisory',
    proof: 'Briefs · Synthesis',
    name: 'Report Work',
    copy: 'White-paper condensation, executive synthesis, architecture reviews, and decision-ready briefs for teams evaluating complex systems.',
    href: '/#advisory',
    external: false,
    image: null as string | null,
    visualTint: 'advisory',
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
      <text x="32" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.55)" letterSpacing="1.5">{'STATUS // ACTIVE'}</text>
      <text x="608" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.55)" letterSpacing="1.5" textAnchor="end">{'REF // DSP-01'}</text>
      <text x="32" y="296" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.4)" letterSpacing="1.5">LAYERS / PROVENANCE</text>
      <text x="608" y="296" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.4)" letterSpacing="1.5" textAnchor="end">BRIEFING REQUIRED</text>
    </svg>
  )
}

function AdvisoryVisual() {
  return (
    <svg viewBox="0 0 640 320" fill="none" style={{ width: '100%', height: '100%', objectFit: 'cover' }} aria-hidden="true">
      <rect width="640" height="320" fill="#0B1117" />
      <rect width="640" height="320" fill="url(#advisory-grid)" />
      <defs>
        <pattern id="advisory-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" stroke="rgba(96,165,250,0.08)" fill="none" />
        </pattern>
        <linearGradient id="advisory-page" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(31,162,169,0.24)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.08)" />
        </linearGradient>
      </defs>
      <rect x="120" y="48" width="280" height="224" rx="5" fill="rgba(14,24,34,0.84)" stroke="rgba(230,237,243,0.14)" />
      <rect x="144" y="74" width="112" height="10" rx="2" fill="rgba(31,162,169,0.78)" />
      {[108, 132, 156, 194, 218].map((y, i) => (
        <rect key={y} x="144" y={y} width={192 - i * 18} height="4" rx="2" fill="rgba(230,237,243,0.12)" />
      ))}
      <rect x="144" y="244" width="172" height="14" rx="2" fill="url(#advisory-page)" stroke="rgba(31,162,169,0.36)" />
      <rect x="344" y="88" width="176" height="144" rx="5" fill="rgba(6,11,18,0.74)" stroke="rgba(96,165,250,0.18)" />
      <path d="M376 162h44l22-34 26 62 18-28h28" stroke="rgba(92,201,208,0.86)" strokeWidth="2" fill="none" />
      <circle cx="442" cy="128" r="4" fill="#5CC9D0" />
      <text x="144" y="298" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.44)" letterSpacing="1.5">EXECUTIVE SYNTHESIS</text>
      <text x="520" y="298" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(230,237,243,0.44)" letterSpacing="1.5" textAnchor="end">BUILD PATH</text>
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
            <span className="eyebrow eyebrow-teal">{'// 04 / Built Work'}</span>
            <h2>Built work without inflated proof.</h2>
          </motion.div>
          <motion.div
            className="sub"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Decision-support prototypes, construction tech SaaS, contractor document workflows, and advisory briefs built by the same hands.
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
                  ) : c.visualTint === 'advisory' ? (
                    <AdvisoryVisual />
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
                    <span>{c.id === 'argus' ? 'Request briefing' : c.id === 'advisory' ? 'Request advisory brief' : 'View case study'}</span>
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
