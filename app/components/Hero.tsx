'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
      {/* Deep space background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 100% 70% at 50% -5%, rgba(0,212,255,0.15) 0%, #0A0A0F 60%)' }} />
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      {/* Floating orbs */}
      <motion.div className="absolute w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', top: '-20%', left: '-20%' }}
        animate={reduce ? {} : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', bottom: '-10%', right: '-10%' }}
        animate={reduce ? {} : { x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 1, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: '#00D4FF' }}
        >
          <Zap className="w-3 h-3" />
          Elite Technology Studio — Veteran Owned
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 1, y: reduce ? 0 : 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold tracking-tight leading-[1.0] mb-8"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          <span className="text-white block">Elite Websites &amp;</span>
          <span className="text-white block">AI Systems Built for</span>
          <span className="block gradient-text">Businesses That Win.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 1, y: reduce ? 0 : 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          We don&apos;t build websites. We build systems that generate revenue.
          Next.js, AI, and infrastructure engineered to convert.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 1, y: reduce ? 0 : 20 }} animate={{ opacity: 1, y: 0 }}
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
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>
            See Our Work
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 1, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 flex items-center justify-center gap-8 flex-wrap"
        >
          {['Next.js', 'Supabase', 'Vercel', 'Claude AI', 'Stripe'].map(tech => (
            <span key={tech} className="text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ color: 'rgba(255,255,255,0.2)' }}
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20 mx-auto" />
      </motion.div>
    </section>
  )
}
