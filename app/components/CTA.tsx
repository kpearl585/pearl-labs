'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="w-full py-28 lg:py-40">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}>
          <h2 className="font-display font-bold text-white tracking-[-0.03em] text-3xl lg:text-4xl mb-5">
            Ready to build something?
          </h2>
          <p className="text-lg text-white/35 leading-relaxed mb-10">
            Tell us what you need. We&apos;ll send an estimate within 48 hours.
          </p>
          <a href="/estimate"
            className="group inline-flex items-center gap-2.5 bg-white text-[#050508] font-semibold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            Get an Estimate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
