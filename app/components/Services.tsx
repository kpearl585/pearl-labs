'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    <motion.div className="viz-dash">
      <div className="viz-dash__sidebar">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="viz-dash__sidebar-item"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
      <div className="viz-dash__main">
        <motion.div
          className="viz-dash__header"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        />
        <div className="viz-dash__bar-row">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="viz-dash__bar"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'bottom' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SystemViz() {
  const nodes = ['a', 'b', 'c', 'd']
  const lines = ['1', '2', '3']

  return (
    <div className="viz-system">
      {nodes.map((node, i) => (
        <motion.div
          key={node}
          className={`viz-node viz-node--${node}`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.4, type: 'spring', stiffness: 200 }}
          viewport={{ once: true }}
        />
      ))}
      {lines.map((line, i) => (
        <motion.div
          key={line}
          className={`viz-line viz-line--${line}`}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />
      ))}
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section-label">What We Build</p>
          <h2 className="section-title">Three ways we build</h2>
        </motion.div>
        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((s) => {
            const Viz = vizMap[s.viz]
            return (
              <motion.div
                key={s.title}
                className="svc-card"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 60px rgba(46, 107, 255, 0.15)',
                  borderColor: 'rgba(46, 107, 255, 0.3)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="svc-card__visual">
                  <Viz />
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <p className="svc-card__meta">{s.meta}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
