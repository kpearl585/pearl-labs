'use client'

import { useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  { num: '01', title: 'System Design Review', desc: 'We evaluate your product, architecture, or model and identify gaps, risks, and opportunities before they get expensive.' },
  { num: '02', title: 'Positioning & Narrative', desc: 'We refine how your system is presented so it lands with decision makers, not just builders.' },
  { num: '03', title: 'Execution Strategy', desc: 'We define what to build next, what to ignore, and how to move forward.' },
]

const smallBizCards = [
  { title: 'Clearer workflows', desc: 'Map manual processes into structured systems.' },
  { title: 'Practical priorities', desc: 'Turn bottlenecks into next steps.' },
  { title: 'Roadmap first', desc: 'Define what to build before committing capital.' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

export default function Advisory() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <section id="advisory" ref={ref}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Strategic Advisory</p>
          <h2 className="section-title">Strategic advisory for high-stakes systems</h2>
          <p className="section-subtitle" style={{ marginInline: 'auto' }}>For defense and SaaS companies where wrong decisions cost months.</p>
        </motion.div>

        <motion.div
          className="advisory__grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {cards.map((c) => (
            <motion.div
              key={c.num}
              className="adv-card"
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: '0 16px 48px rgba(46, 107, 255, 0.12)',
                borderColor: 'rgba(46, 107, 255, 0.25)',
                transition: { duration: 0.3 },
              }}
            >
              <p className="adv-card__num">{c.num}</p>
              <h3 className="adv-card__title">{c.title}</h3>
              <p className="adv-card__desc">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="advisory__footer"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4 }}
        >
          <p>Applied to real systems, not theory. Used to refine defense modeling platforms and technical documentation.</p>
          <p className="closing">Available for projects where clarity and execution matter.</p>
          <div className="advisory__cta">
            <motion.button
              onClick={openModal}
              className="btn-text"
              aria-label="Inquire about advisory services - Opens contact form"
              aria-haspopup="dialog"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              INQUIRE ABOUT ADVISORY
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Business Systems & Clarity Advisory - Redesigned */}
        <motion.div
          className="advisory__divider"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
        />

        <motion.div
          className="advisory__alt"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
        >
          <div className="advisory__alt-header">
            <p className="section-label">For Small Businesses</p>
            <h3 className="advisory__alt-title">Business Systems Advisory</h3>
            <p className="advisory__alt-desc">
              Running on spreadsheets and manual processes? We map operational complexity into a clear roadmap.
            </p>
          </div>

          <motion.div
            className="advisory__alt-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.7 }}
          >
            {smallBizCards.map((card) => (
              <motion.div
                key={card.title}
                className="advisory__alt-card"
                variants={fadeInUp}
              >
                <h4 className="advisory__alt-card-title">{card.title}</h4>
                <p className="advisory__alt-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="advisory__alt-note"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.9 }}
          >
            SCORE partners and small business referrals welcome.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
