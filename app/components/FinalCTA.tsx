'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const reduce = useReducedMotion()

  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 grid-bg opacity-[0.025]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 1, y: reduce ? 0 : 48 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-8"
            style={{ color: 'rgba(255,255,255,0.25)' }}>
            Ready to build?
          </p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.0] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}>
            Ready to build<br />
            <span className="gradient-text">something elite?</span>
          </h2>
          <p className="text-xl mb-14 max-w-lg mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            Slots are limited. We take on projects we can win — not everything.
            If you&apos;re serious, book a call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/pearllabs" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-black font-bold px-10 py-5 rounded-full text-base transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
              Book a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:hello@pearllab.io"
              className="text-sm font-medium transition-all duration-300 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              hello@pearllab.io
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
