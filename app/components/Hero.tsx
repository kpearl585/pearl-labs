'use client'

import { useRef, useCallback, useEffect, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useABTest } from '../lib/ab-testing'
import dynamic from 'next/dynamic'

const Sphere3D = dynamic(() => import('./Sphere3D'), { ssr: false })

// Animation variants
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

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // A/B test for hero headline
  const headlineVariant = useABTest('hero-headline-2026-04', ['control', 'variant-a'])

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

  // Mouse glow effect
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
              {headlineVariant === 'control' ? (
                <>BUILD SYSTEMS THAT <span className="gradient-text">GENERATE REVENUE</span></>
              ) : (
                <>SHIP PRODUCTION SOFTWARE IN <span className="gradient-text">WEEKS, NOT MONTHS</span></>
              )}
            </motion.h1>
            <motion.p className="hero__sub" variants={itemVariants}>
              Ship production systems in weeks. Full code ownership. One senior engineer. No agencies, no committees, no delays.
            </motion.p>
            <motion.div className="hero__metric" variants={itemVariants}>
              <span className="hero__metric-item">
                <span className="hero__metric-dot" />
                3 systems in production
              </span>
              <span className="hero__metric-item">
                <span className="hero__metric-dot" />
                Defense &middot; SaaS &middot; Revenue
              </span>
            </motion.div>
            <motion.div className="hero__actions" variants={itemVariants}>
              <button
                onClick={openModal}
                className="btn-primary btn-with-subtext"
                aria-label="Get your system scoped - Free 48-hour plan"
                aria-haspopup="dialog"
              >
                <span className="btn-main">GET YOUR SYSTEM SCOPED</span>
                <span className="btn-sub">Free 48-hour plan</span>
              </button>
              <a
                href="#proof"
                className="btn-secondary"
                aria-label="View our production systems and case studies"
              >
                VIEW SYSTEMS →
              </a>
            </motion.div>
            <motion.div className="hero__urgency" variants={itemVariants}>
              <span className="urgency-dot">⚡</span>
              <span className="urgency-text">Limited availability — 2 project slots for Q2 2026</span>
            </motion.div>
            <motion.div className="hero__trust" variants={itemVariants}>
              <p className="hero__trust-text">
                Trusted by defense contractors and high-growth SaaS companies
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            style={{ y }}
          >
            <Suspense fallback={<div className="sphere-wrap" style={{ background: 'radial-gradient(circle, rgba(46,107,255,0.1) 0%, transparent 60%)' }} />}>
              <Sphere3D />
            </Suspense>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
