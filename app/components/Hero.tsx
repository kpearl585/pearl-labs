'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import { motion } from 'framer-motion'
import NightOpsIcon from './NightOpsIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Hero() {
  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <section className="cine-hero" id="hero">
      <div className="cine-hero-photo">
        <Image
          src="/photo-ops-command.jpg"
          alt=""
          fill
          priority
          className="cine-hero-img"
          sizes="100vw"
        />
        <div className="cine-hero-vignette" />
        <div className="cine-hero-gradient" />
        <div className="cine-hero-scan" />
      </div>

      <div className="cine-hero-hud" aria-hidden="true">
        <span className="cine-corner cine-corner--tl" />
        <span className="cine-corner cine-corner--tr" />
        <span className="cine-corner cine-corner--bl" />
        <span className="cine-corner cine-corner--br" />
        <div className="cine-hud-tick cine-hud-tick--l">
          <div className="mono">LAT 30.3322° N</div>
          <div className="mono">LON -81.6557° W</div>
        </div>
        <div className="cine-hud-tick cine-hud-tick--r">
          <div className="mono">{'REF // PRL-001'}</div>
          <div className="mono">STATUS ACTIVE</div>
        </div>
      </div>

      <div className="container cine-hero-inner">
        <motion.div
          className="cine-kicker"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/logo-eclipse-icon.png"
            alt=""
            width={20}
            height={20}
            className="cine-kicker-mark"
          />
          <span className="mono">{'PEARL LABS // BUILDER-LED SYSTEMS'}</span>
        </motion.div>

        <motion.h1
          className="cine-h1"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Serious software for serious operators.
        </motion.h1>

        <motion.p
          className="cine-lead"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Pearl Labs builds custom websites, SaaS platforms, workflow automation, and advisory systems for defense, legal, construction, and mission-driven teams.
        </motion.p>

        <motion.div
          className="cine-ctas"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <button type="button" onClick={openModal} className="cine-btn-primary" aria-haspopup="dialog">
            <span className="l1">Request a Brief</span>
            <span className="l2">
              Scoped plan in 48 business hours
              <NightOpsIcon name="arrow-right" size={12} />
            </span>
          </button>
          <a href="#proof" className="cine-btn-ghost">
            <span>See Our Work</span>
            <NightOpsIcon name="arrow-right" size={12} />
          </a>
        </motion.div>

        {/* Credential badges — SCORE, U.S. Veteran, Florida. Restrained,
            not a billboard. Real credentials earned, displayed quietly. */}
        <motion.div
          className="cine-badges"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          aria-label="Pearl Labs credentials"
        >
          <Image
            src="/badge-score.png"
            alt="SCORE Service Partner"
            width={1307}
            height={300}
            className="cine-badge cine-badge--score"
          />
          <Image
            src="/badge-veteran.png"
            alt="U.S. Veteran Owned Business"
            width={1800}
            height={300}
            className="cine-badge cine-badge--veteran"
          />
          <Image
            src="/badge-florida.png"
            alt="Florida Based Company"
            width={955}
            height={300}
            className="cine-badge cine-badge--florida"
          />
        </motion.div>
      </div>

      <div className="cine-scroll" aria-hidden="true">
        <span className="mono">SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  )
}
