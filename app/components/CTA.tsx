'use client'

import { useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <section ref={ref} className="final-cta">
      <div className="final-cta-grid" aria-hidden="true" />
      <div className="container final-cta-inner">
        <motion.span
          className="eyebrow eyebrow-teal"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {'// Next step'}
        </motion.span>
        <motion.h2
          style={{ marginTop: 18 }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Need a serious<br />system built?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Send the problem, the workflow, or the idea. Pearl Labs will turn it into a scoped plan with architecture, timeline, cost, and next steps.
        </motion.p>
        <motion.button
          type="button"
          onClick={openModal}
          className="btn-stack btn-stack-primary"
          style={{ alignItems: 'center' }}
          aria-haspopup="dialog"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="primary-line">Request a Brief →</span>
          <span className="sub">Scoped plan in 48 business hours</span>
        </motion.button>
      </div>
    </section>
  )
}
