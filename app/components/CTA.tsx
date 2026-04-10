'use client'

import { useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <section className="cta-section" ref={ref}>
      <motion.div
        className="container"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h2 className="cta__headline">Let&apos;s scope your system.</h2>
        <p className="cta__sub">One call. A detailed architecture plan and estimate within 48 hours. No sales process. No discovery phase. Just the plan.</p>
        <div className="cta__actions">
          <motion.button
            onClick={openModal}
            className="btn-primary"
            aria-label="Book a scope call - Opens contact form"
            aria-haspopup="dialog"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(46, 107, 255, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            BOOK A SCOPE CALL
          </motion.button>
          <motion.a
            href="#proof"
            className="btn-secondary"
            aria-label="View our work and production systems"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            VIEW OUR WORK
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
