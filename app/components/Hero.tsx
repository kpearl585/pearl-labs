'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import { motion } from 'framer-motion'

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
      {/* Cinematic full-bleed photo */}
      <div className="cine-hero-photo">
        <Image
          src="/photo-chinook.png"
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

      {/* HUD frame corners + tactical readouts */}
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
          <div className="mono">REF // PRL-001</div>
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
          <span className="mono">PEARL LABS // EST. 2024</span>
        </motion.div>

        <motion.h1
          className="cine-h1"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Real software.<br />
          <span className="cine-accent">Real missions.</span>
        </motion.h1>

        <motion.p
          className="cine-lead"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Built for teams who operate when it matters most. Defense, intelligence, and mission-driven organizations trust Pearl Labs to deliver software that works in the field and in the war room.
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
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <a href="#proof" className="cine-btn-ghost">
            <span>See Our Work</span>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Trust badges row — SCORE, Veteran, Florida (no GSA, per direction) */}
        <motion.div
          className="cine-badges"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Image src="/badge-score.png" alt="SCORE Service Partner" width={196} height={165} />
          <Image src="/badge-veteran.png" alt="U.S. Veteran Owned Business" width={287} height={105} />
          <Image src="/badge-florida.png" alt="Florida Based Company" width={258} height={113} />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="cine-scroll" aria-hidden="true">
        <span className="mono">SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  )
}
