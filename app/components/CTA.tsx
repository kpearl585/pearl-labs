'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-40 lg:py-64 px-8 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden" id="contact">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}>
          <h2 className="font-display font-bold text-white tracking-[-0.045em] leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
            Let&apos;s build.
          </h2>

          <p className="text-lg lg:text-2xl text-white/28 mb-16 max-w-xl mx-auto leading-relaxed">
            Tell us what you need. Estimate within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/estimate"
              className="group inline-flex items-center gap-3 bg-white text-[#050508] font-semibold px-10 py-5 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
              Get an Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="mailto:hello@pearllab.io?subject=Project%20Inquiry"
              className="text-base font-medium text-white/20 hover:text-white/40 transition-colors duration-300">
              hello@pearllab.io
            </a>
          </div>

          <div className="mt-20 flex items-center justify-center gap-6 text-[12px] font-mono text-white/14">
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
