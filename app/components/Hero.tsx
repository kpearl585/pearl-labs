'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
      {/* Pulsing grid background */}
      <div className="absolute inset-0 grid-bg opacity-[0.04]" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)' }} />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 1, y: reduce ? 0 : 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 mb-12 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.25em]"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          Veteran-Owned Technology Studio
        </motion.div>

        {/* Main headline — editorial scale */}
        <motion.h1
          initial={{ opacity: 1, y: reduce ? 0 : 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold leading-[0.92] mb-8"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', letterSpacing: '-0.04em' }}
        >
          <span className="text-white block">We build systems</span>
          <span className="block gradient-text">that win.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 1, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Elite websites, AI platforms, and SaaS products — engineered for
          revenue, not vanity metrics.
        </motion.p>

        {/* Credibility line */}
        <motion.p
          initial={{ opacity: 1, y: reduce ? 0 : 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm mb-14 max-w-xl mx-auto font-medium"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          Built ARGUS — geospatial intelligence for NATO.
          FenceEstimatePro — $1.2K MRR in 30 days.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 1, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://calendly.com/pearllabs" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]">
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/5"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
            See Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-white/20 mx-auto" />
      </motion.div>
    </section>
  )
}
