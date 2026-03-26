'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-40 lg:py-56 px-8 lg:px-16 relative overflow-hidden" id="contact">
      <div className="absolute top-0 inset-x-0 h-px overflow-hidden accent-line-animated" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 65%)' }} />

      <div className="max-w-[1440px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease }}>

          <h2 className="font-display font-semibold text-white tracking-[-0.04em] leading-[0.98] mb-8"
            style={{ fontSize: 'clamp(2.75rem, 5vw, 5rem)' }}>
            Let&apos;s build.
          </h2>

          <p className="text-lg lg:text-xl text-white/30 mb-14 max-w-lg mx-auto">
            Tell us what you need. Estimate within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/estimate"
              className="btn-glow group inline-flex items-center gap-2.5 bg-white text-[#050508] font-semibold px-8 py-4 rounded-lg text-[16px] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
              Get an Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="mailto:hello@pearllab.io?subject=Project%20Inquiry"
              className="text-[15px] font-medium text-white/25 hover:text-white/45 transition-colors duration-300">
              hello@pearllab.io
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6 text-[12px] font-mono text-white/14">
            <span>Veteran owned</span>
            <span className="w-1 h-1 rounded-full bg-white/8" />
            <span>Estimates in 48h</span>
            <span className="w-1 h-1 rounded-full bg-white/8" />
            <span>No retainers</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
