'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    img: '/photo-command-center.png',
    icon: '/icon-shield.png',
    kicker: 'Defense & Intelligence',
    title: 'Mission-critical systems.',
    copy: 'Decision-support platforms, briefing workflows, geospatial interfaces, and data pipelines for teams where every call counts.',
  },
  {
    img: '/photo-laptop-code.png',
    icon: '/icon-code.png',
    kicker: 'Engineered for impact',
    title: 'Custom software & SaaS.',
    copy: 'Clean code, smart architecture, no bloat. Replace spreadsheets and duct tape with systems built around how your team actually works.',
  },
  {
    img: '/photo-network-mesh.png',
    icon: '/icon-layers.png',
    kicker: 'Built for complexity',
    title: 'Automation & pipelines.',
    copy: 'Integrations, workflow automation, document pipelines, and AI-assisted reviews that remove the repetitive handoffs between tools.',
  },
  {
    img: '/photo-earth-nightlights.png',
    icon: '/icon-network.png',
    kicker: 'Mission-ready technology',
    title: 'Field-tested delivery.',
    copy: 'Weekly production deployments. Direct builder access. Full system ownership transferred to you on delivery. No vendor lock-in.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section cap" id="capabilities">
      <div className="container">
        <div className="cap-head">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <span className="eyebrow">// 01 / What We Build</span>
            <h2 className="cap-title">
              Systems built for teams<br />
              that can&apos;t afford to fail.
            </h2>
          </motion.div>
          <motion.div
            className="cap-sub"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Every engagement starts with a scoped plan and ends with working code, deployment configs, and full ownership transferred to you.
          </motion.div>
        </div>

        <div className="cap-grid">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              className="cap-card"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="cap-card-img">
                <Image src={c.img} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="cap-card-overlay" />
              <div className="cap-card-body">
                <div className="cap-card-icon">
                  <Image src={c.icon} alt="" width={20} height={20} />
                </div>
                <div className="cap-card-kicker mono">// {c.kicker}</div>
                <h3 className="cap-card-title">{c.title}</h3>
                <p className="cap-card-copy">{c.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
