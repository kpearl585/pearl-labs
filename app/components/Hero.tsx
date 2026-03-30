'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const
  const { scrollY } = useScroll()
  const glowY = useTransform(scrollY, [0, 600], [0, 120])
  const glowOpacity = useTransform(scrollY, [0, 500], [1, 0])

  const blur = reduce ? 'blur(0px)' : 'blur(12px)'

  return (
    <section className="w-full pt-36 lg:pt-52 pb-28 lg:pb-44 relative overflow-hidden">
      {/* Grid line background with radial mask */}
      <div
        className="absolute inset-0 bg-grid-lines"
        aria-hidden="true"
      />

      {/* Primary glow orb -- cyan, top center */}
      <motion.div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.12), rgba(0,212,255,0.04) 40%, transparent 70%)',
          y: reduce ? 0 : glowY,
          opacity: reduce ? 0.6 : glowOpacity,
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      {/* Secondary glow orb -- violet, offset right */}
      <motion.div
        className="absolute top-[5%] left-[60%] w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.10), transparent 65%)',
          y: reduce ? 0 : glowY,
          opacity: reduce ? 0.4 : glowOpacity,
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />

      {/* Tertiary glow -- warm accent, offset left */}
      <motion.div
        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06), transparent 60%)',
          y: reduce ? 0 : glowY,
          opacity: reduce ? 0.3 : glowOpacity,
          filter: 'blur(120px)',
        }}
        aria-hidden="true"
      />

      {/* Bottom radiant dome */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.05), rgba(139,92,246,0.03) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-8 lg:px-16 text-center">
        {/* Badge / eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: blur }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-accent/50">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse" />
            One engineer. Full stack. Full ownership.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 24, filter: blur }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.05, ease }}
          className="font-display font-bold tracking-[-0.04em] leading-[1.02] text-white mb-7"
          style={{ fontSize: 'clamp(2.75rem, 6vw, 5.25rem)' }}>
          Your entire product.{' '}
          <br className="hidden lg:block" />
          <span className="gradient-text">One engineer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, filter: blur }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="text-lg lg:text-xl text-white/50 leading-relaxed mb-14 max-w-2xl mx-auto">
          Pearl Labs is a solo engineering studio. Every project is personally architected,
          built, and shipped by one senior engineer. No teams. No handoffs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12, filter: blur }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/estimate" className="btn-primary group">
            Get an Estimate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
          <a href="#products" className="btn-secondary">
            See our work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
