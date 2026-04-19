'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const work = [
  {
    name: 'Ocala Elite Breed',
    type: 'Youth Sports Organization',
    desc: 'From expired Squarespace to a site they own — built in seven days. Seven pages, sponsor tiers, zero recurring fees.',
    href: '/work/ocala-elite-breed',
    internal: true,
    image: '/oeb-hero.png',
    label: 'Read case study →',
  },
  {
    name: 'FenceEstimatePro',
    type: 'Contractor SaaS Platform',
    desc: 'Full SaaS platform for fence contractors. Estimates, job tracking, customer portals, digital signatures, Stripe billing. Built from scratch.',
    href: '/work/fenceestimatepro',
    internal: true,
    image: null,
    label: 'Read case study →',
  },
  {
    name: 'ContractorDocuments',
    type: 'Document Commerce Platform',
    desc: 'A commerce platform for contractor paperwork. Buy the document. Autofill with your company data. Download a legally drafted PDF in under a minute.',
    href: '/work/contractordocuments',
    internal: true,
    image: null,
    label: 'Read case study →',
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
          style={{ marginBottom: 'var(--space-10)' }}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Proof</p>
          <h2 className="section-title">Systems in production.</h2>
        </motion.div>

        <motion.div
          className="proof__intro"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          <p>
            Pearl Labs is the engineering arm of Pearl Ventures. We build production systems for clients, and for our own portfolio of software products. Every one of these is live, shipping, and owned by the operator running it.
          </p>
        </motion.div>

        <motion.div
          className="proof__work-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {work.map((w) => (
            <motion.div key={w.name} variants={fadeInUp}>
              <Link
                href={w.href}
                className="proof__work-card"
              >
                <div className="proof__work-card__visual">
                  {w.image ? (
                    <Image
                      src={w.image}
                      alt={`${w.name} — live product`}
                      width={800}
                      height={500}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="proof__work-card__placeholder">
                      <span className="proof__work-card__placeholder-label">{w.type}</span>
                      <span className="proof__work-card__placeholder-name">{w.name}</span>
                    </div>
                  )}
                </div>
                <div className="proof__work-card__body">
                  <p className="proof__work-card__type">{w.type}</p>
                  <h3 className="proof__work-card__name">{w.name}</h3>
                  <p className="proof__work-card__desc">{w.desc}</p>
                  <span className="proof__work-card__link">{w.label}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="proof__credential"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
        >
          <div className="proof__credential-inner">
            <p className="proof__credential-label">Defense & Intelligence</p>
            <p className="proof__credential-text">
              Pearl Labs also builds defense decision-support platforms. Details under briefing.
            </p>
          </div>
          <a
            href="mailto:keegan@pearllab.io?subject=ARGUS%20Briefing%20Request"
            className="proof__credential-link"
          >
            Request briefing access →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
