'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 55%)' }} />
      </div>

      {/* Content — pushed to bottom-left for asymmetry */}
      <div className="relative z-10 w-full px-8 md:px-12 lg:px-20 xl:px-32 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left — dominant */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease }}
              className="text-[13px] font-mono uppercase tracking-[0.2em] text-white/25 mb-8">
              Custom Development Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="font-display font-bold tracking-[-0.05em] leading-[0.9] mb-10"
              style={{ fontSize: 'clamp(3.5rem, 7.5vw, 8rem)' }}>
              We build the
              <br />
              software that
              <br />
              <span className="gradient-text">runs your business.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="flex items-center gap-8">
              <a href="/estimate"
                className="group inline-flex items-center gap-3 bg-white text-[#050508] font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.12)] hover:scale-[1.02]">
                Get an Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#featured" className="text-sm font-medium text-white/20 hover:text-white/45 transition-colors duration-300">
                See our work
              </a>
            </motion.div>
          </div>

          {/* Right — supporting info, bottom-aligned */}
          <motion.div
            className="lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}>
            <p className="text-base lg:text-lg text-white/25 leading-relaxed mb-8">
              SaaS platforms, contractor tools, AI systems, and business software — engineered from scratch.
            </p>
            <div className="flex items-center gap-5 text-[12px] font-mono text-white/16">
              <span>Veteran Owned</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Ocala, FL</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)' }} />
    </section>
  )
}
