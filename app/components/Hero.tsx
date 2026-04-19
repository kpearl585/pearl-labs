'use client'

import { useRef, useCallback, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

const sphereRingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return
    const r = hero.getBoundingClientRect()
    glow.style.left = (e.clientX - r.left) + 'px'
    glow.style.top = (e.clientY - r.top) + 'px'
    glow.style.opacity = '1'
  }, [])

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  useEffect(() => {
    const glow = glowRef.current
    if (glow) glow.style.opacity = '0'
  }, [])

  return (
    <section ref={heroRef} onMouseMove={onMouseMove} className="hero" id="hero">
      <div ref={glowRef} className="hero__glow" />
      <motion.div className="container" style={{ opacity }}>
        <div className="hero__grid">
          <motion.div
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="hero__overline" variants={itemVariants}>
              <span className="hero__overline-dot" />
              Pearl Labs
            </motion.p>
            <motion.h1 className="hero__headline" variants={itemVariants}>
              Real software for <span className="gradient-text">real businesses.</span>
            </motion.h1>
            <motion.p className="hero__sub" variants={itemVariants}>
              We build custom websites, business software, and automation that actually work. For small companies tired of spreadsheets, Squarespace, and agencies that ghost.
            </motion.p>
            <motion.div className="hero__metric" variants={itemVariants}>
              <span className="hero__metric-item">
                <span className="hero__metric-dot" />
                Veteran Owned
              </span>
              <span className="hero__metric-item">
                <span className="hero__metric-dot" />
                SCORE Service Partner
              </span>
              <span className="hero__metric-item">
                <span className="hero__metric-dot" />
                Florida Based
              </span>
            </motion.div>
            <motion.div className="hero__actions" variants={itemVariants}>
              <motion.button
                onClick={openModal}
                className="btn-primary btn-with-subtext"
                aria-label="Request a brief - 48-hour scoped plan"
                aria-haspopup="dialog"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(46, 107, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="btn-main">REQUEST A BRIEF</span>
                <span className="btn-sub">Scoped plan in 48 hours</span>
              </motion.button>
              <motion.a
                href="#proof"
                className="btn-secondary"
                aria-label="See our work"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                SEE OUR WORK →
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            style={{ y }}
          >
            <div className="sphere-wrap">
              <motion.div
                className="sphere-glow"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="sphere-canvas">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="sphere-ring"
                    custom={i}
                    variants={sphereRingVariants}
                    initial="hidden"
                    animate="visible"
                  />
                ))}
                <motion.div
                  className="sphere-core"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
