'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const work = [
  {
    name: 'FenceEstimatePro',
    type: 'SaaS Platform',
    liveDomain: 'fenceestimatepro.com',
    desc: 'Full SaaS platform for fence contractors. Estimates, job tracking, customer portals, digital signatures, Stripe billing. Shipping weekly.',
    href: '/work/fenceestimatepro',
    internal: true,
    image: null,
    isLive: true,
    isSaas: true,
    label: 'Read case study →',
  },
  {
    name: 'ContractorDocs',
    type: 'HOA Packet SaaS',
    liveDomain: 'contractordocuments.com',
    desc: 'Stop losing fence jobs to HOA rejections. Elevation, setback, COI, license, cover letter — merged into one professional PDF, auto-filled from your business, sent in under two minutes.',
    href: '/work/contractordocuments',
    internal: true,
    image: '/contractordocs-hero.jpg',
    isLive: true,
    isSaas: true,
    label: 'Read case study →',
  },
  {
    name: 'Ocala Elite Breed',
    type: 'Youth Sports Organization',
    liveDomain: 'ocalaelitebreed.com',
    desc: 'From expired Squarespace to a site they own — built in days. Seven pages, sponsor tiers, zero recurring fees. Recently relaunched.',
    href: '/work/ocala-elite-breed',
    internal: true,
    image: '/oeb-hero.jpg',
    isLive: true,
    isSaas: false,
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
            Pearl Labs is the engineering arm of Pearl Ventures. We build custom software for clients and ship our own SaaS products. FenceEstimatePro and ContractorDocuments are live SaaS in our portfolio, not case-study concepts. Every system below is in production today.
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
                  {w.isLive && (
                    <span className="proof__live-badge">
                      <span className="proof__live-badge__dot" />
                      Live · {w.liveDomain}
                    </span>
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
          <Link href="/briefing" className="proof__credential-link">
            Request briefing access →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
