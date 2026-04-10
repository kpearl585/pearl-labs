'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: 'Real-Time', label: 'Multi-source modeling' },
  { value: '4 INT Sources', label: 'Fused intelligence feeds' },
  { value: 'Operational', label: 'Simulation and planning' },
]

const details = [
  { label: 'Intelligence', value: 'Real-time satellite, signals intelligence, HUMINT, open-source. Fused into a single operational picture.' },
  { label: 'Stack', value: 'Next.js, Supabase, Mapbox GL, AI/ML pipelines, real-time data processing' },
  { label: 'Status', value: 'In production, active development' },
]

const secondary = [
  {
    name: 'FenceEstimatePro',
    type: 'Revenue System, SaaS',
    desc: 'Job lifecycle management for fencing contractors. Estimates, scheduling, crew management, invoicing. Replaced spreadsheet workflows with a production system.',
    url: 'https://fenceestimatepro.com',
    label: 'View Live System →'
  },
  {
    name: 'ContractorDocuments',
    type: 'Document Commerce Platform',
    desc: 'Commerce platform for contractor compliance documents. Purchase, delivery, and management of operational paperwork.',
    url: null,
    label: null
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function Proof() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="proof" ref={ref}>
      <div className="container">
        <motion.div
          style={{ marginBottom: 'var(--space-16)' }}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Proof</p>
          <h2 className="section-title">Systems in production</h2>
        </motion.div>

        <div className="proof__flagship">
          <motion.div
            className="proof__visual"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image src="/argus-hero.png" alt="ARGUS Defense Intelligence Platform — command center interface" width={1400} height={788} priority />
          </motion.div>

          <motion.div
            className="proof__stats"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {stats.map((s) => (
              <motion.div key={s.label} className="proof__stat" variants={fadeInUp}>
                <p className="proof__stat-value">{s.value}</p>
                <p className="proof__stat-label">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="proof__content">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <h3 className="proof__name">ARGUS</h3>
              <p className="proof__type">Defense Intelligence Platform</p>
              <p className="proof__desc">Intelligence platform fusing satellite imagery, signals intelligence, HUMINT, and open source data into a single operational picture. Built for defense and national security operators.</p>
              <p className="proof__outcome">Replaces fragmented intelligence workflows with a unified command interface. Operational with geospatial visualization and AI analysis pipelines.</p>
            </motion.div>
            <motion.div
              className="proof__details"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {details.map((d) => (
                <motion.div key={d.label} className="proof__detail" variants={fadeInUp}>
                  <p className="proof__detail-label">{d.label}</p>
                  <p className="proof__detail-value">{d.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="proof__visual"
            style={{ marginTop: 'var(--space-8)' }}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image src="/argus-hero1.png" alt="ARGUS — 3D terrain visualization and intelligence overlay" width={1400} height={788} loading="lazy" />
          </motion.div>
        </div>

        <motion.div
          style={{ marginTop: 'var(--space-16)' }}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="proof__additional-label">Additional Systems</p>
          <motion.div
            className="proof__secondary"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {secondary.map((s) => {
              const cardContent = (
                <>
                  <h4 className="proof__sec-name">{s.name}</h4>
                  <p className="proof__sec-type">{s.type}</p>
                  <p className="proof__sec-desc">{s.desc}</p>
                  {s.url && s.label && (
                    <div className="proof__sec-cta">
                      <span className="proof__sec-link">
                        {s.label}
                      </span>
                    </div>
                  )}
                </>
              )

              if (s.url) {
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof__sec-card proof__sec-card--link"
                    variants={fadeInUp}
                    whileHover={{
                      y: -6,
                      boxShadow: '0 16px 48px rgba(46, 107, 255, 0.15)',
                      borderColor: 'rgba(46, 107, 255, 0.3)',
                      transition: { duration: 0.3 },
                    }}
                  >
                    {cardContent}
                  </motion.a>
                )
              }

              return (
                <motion.div
                  key={s.name}
                  className="proof__sec-card"
                  variants={fadeInUp}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 40px rgba(46, 107, 255, 0.12)',
                    borderColor: 'rgba(46, 107, 255, 0.25)',
                    transition: { duration: 0.3 },
                  }}
                >
                  {cardContent}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
