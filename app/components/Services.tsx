'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Custom Websites',
    desc: 'Next.js sites built for speed, SEO, and conversion. No WordPress, no Squarespace, no templates. You own the code. You own the infrastructure.',
    meta: '3 to 6 weeks',
    viz: 'website',
  },
  {
    title: 'Business Software',
    desc: 'Replace the spreadsheets, the duct tape, and the three tools your team keeps forgetting to update. One system, built for how you actually work.',
    meta: '6 to 12 weeks',
    viz: 'dashboard',
  },
  {
    title: 'Workflow Automation',
    desc: 'Estimating engines, pricing systems, document generators, internal automations. Stop copy-pasting between tools. Let the software do it.',
    meta: '4 to 8 weeks',
    viz: 'system',
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

function WebsiteViz() {
  return (
    <div className="viz-web">
      <div className="viz-web__frame">
        <div className="viz-web__dots">
          <span /><span /><span />
        </div>
        <motion.div
          className="viz-web__bar viz-web__bar--wide"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="viz-web__bar"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="viz-web__bar viz-web__bar--short"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

const vizMap: Record<string, () => React.ReactElement> = {
  dashboard: DashboardViz,
  system: SystemViz,
  website: WebsiteViz,
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
