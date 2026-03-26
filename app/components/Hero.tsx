'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 60% -10%, rgba(0,212,255,0.08) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-0 inset-x-0 h-px overflow-hidden accent-line-animated" />

      <motion.div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 55%)', top: '-20%', right: '-5%' }}
        animate={reduce ? {} : { x: [0, -20, 0], y: [0, 15, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-16 pt-32 lg:pt-40 pb-24 lg:pb-32">
        {/* Full-width two-column hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-0">

          {/* Left — message */}
          <div>
            <motion.div initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-10">
              <motion.span className="h-px bg-white/30"
                initial={{ width: 0 }} animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2, ease }} />
              <span className="text-[12px] font-mono font-medium uppercase tracking-[0.14em] text-white/45">
                Custom Development Studio
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: reduce ? 0 : 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="font-display font-semibold tracking-[-0.04em] leading-[0.98] mb-8"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}>
              <span className="text-white">Websites, SaaS,</span><br />
              <span className="text-white">and custom</span><br />
              <span className="gradient-text">software.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease }}
              className="text-lg lg:text-xl leading-[1.6] mb-12 max-w-[480px] text-white/40">
              For founders who need real software — not templates.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="flex items-center gap-8">
              <a href="/estimate"
                className="btn-glow group inline-flex items-center gap-2.5 bg-white text-[#050508] font-semibold px-7 py-3.5 rounded-lg text-[15px] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.12)]">
                Get an Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#work" className="text-[15px] font-medium text-white/28 hover:text-white/55 transition-colors duration-300">
                See our work
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 flex items-center gap-4 text-[12px] font-mono text-white/20">
              <span>Veteran owned</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Ocala, FL</span>
            </motion.div>
          </div>

          {/* Right — hero visual, properly sized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="hidden lg:block">
            <div className="group rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,212,255,0.06)]"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <Image src="/generated/hero-abstract.jpg" alt="" width={960} height={640}
                className="w-full h-auto opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                priority aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
