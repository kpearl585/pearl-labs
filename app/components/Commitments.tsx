'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import NightOpsIcon from './NightOpsIcon'

const items: { icon: 'clock' | 'deploy' | 'code' | 'package'; num: string; title: string; copy: string }[] = [
  { icon: 'clock', num: '01', title: '48-Hour Scoped Plan', copy: 'Describe what you need. Within two business days, you get an architecture plan, timeline, cost estimate, and recommended next steps. No endless discovery phase.' },
  { icon: 'deploy', num: '02', title: 'Weekly Production Deployments', copy: 'Working code deployed to staging every week. Real progress, not slide updates, mockups, or status meetings.' },
  { icon: 'code', num: '03', title: 'Direct Builder Access', copy: 'You talk to the person writing the code. No project managers, no account reps, no telephone game.' },
  { icon: 'package', num: '04', title: 'Full System Ownership', copy: 'Every line of code, every deployment config, every database, and every document transferred to you on delivery. No vendor lock-in.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Commitments() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" id="process">
      <div className="container">
        <div className="section-head">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <span className="eyebrow eyebrow-teal">{'// 05 / How We Work'}</span>
            <h2>Clear architecture.<br />Weekly progress. Full handoff.</h2>
          </motion.div>
          <motion.div
            className="sub"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            No discovery theater, no account-manager handoff, no vendor lock-in. Clear terms of engagement, scoped in the first 48 business hours.
          </motion.div>
        </div>
        <div className="cards-4">
          {items.map((c, i) => (
            <motion.div
              key={c.num}
              className="commit-card"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <span className="num">{c.num}</span>
              <div className="icon-wrap"><NightOpsIcon name={c.icon} size={22} /></div>
              <h3>{c.title}</h3>
              <p>{c.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
