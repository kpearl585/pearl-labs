'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[10%] w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />
        <div className="absolute bottom-[-20%] right-[5%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 60%)' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

      <div className="relative z-10 w-full px-8 md:px-12 lg:px-20 xl:px-32 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="flex flex-col items-center text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-10">
            <span className="inline-flex items-center gap-3 text-[13px] font-mono font-medium uppercase tracking-[0.15em] text-white/30">
              <span className="w-8 h-px bg-white/20" />
              Custom Development Studio
              <span className="w-8 h-px bg-white/20" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
            className="font-display font-bold tracking-[-0.045em] leading-[0.95] mb-10"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 9rem)' }}>
            <span className="text-white">We build</span>
            <br />
            <span className="gradient-text">software.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="text-lg md:text-xl lg:text-2xl text-white/35 mb-14 max-w-2xl leading-relaxed">
            Websites, SaaS platforms, and custom systems —
            <br className="hidden md:block" />
            engineered from scratch for founders who need real products.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease }}
            className="flex flex-col sm:flex-row items-center gap-6">
            <a href="/estimate"
              className="group inline-flex items-center gap-3 bg-white text-[#050508] font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.12)] hover:scale-[1.02]">
              Get an Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#work" className="text-base font-medium text-white/25 hover:text-white/50 transition-colors duration-300">
              See our work
            </a>
          </motion.div>

          {/* Bottom badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 lg:mt-32 flex items-center gap-5 text-[12px] font-mono text-white/16">
            <span>Veteran Owned</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Ocala, FL</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Est. 2024</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
