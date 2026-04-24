'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const points = [
  'Direct builder access',
  'Practical execution',
  'Security-first thinking',
  'Clear documentation',
  'Full handoff',
  'No vendor lock-in',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Founder() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" id="founder">
      <div className="container founder-grid">
        <motion.div
          className="founder-visual panel-corners"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="founder-photo">
            <Image
              src="/founder.png"
              alt="Keegan Pearl, founder of Pearl Labs"
              width={480}
              height={600}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="founder-plate">
            <span className="mono">KEEGAN PEARL</span>
            <span className="mono">// FOUNDER</span>
          </div>
        </motion.div>

        <motion.div
          className="founder-content"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="eyebrow eyebrow-teal">// 07 / Who builds this</span>
          <h2 style={{ marginTop: 18 }}>Builder-led.<br />Veteran-owned.<br />No agency maze.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--arctic-soft)', maxWidth: 540 }}>
            Pearl Labs is built for clients who want direct access to the person designing and shipping the system. You get clear plans, working software, and ownership of the result.
          </p>
          <ul className="founder-points">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
