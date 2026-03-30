'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-24 lg:py-32" id="about">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — capabilities + founder */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}>
            <h2 className="font-display font-bold text-white tracking-[-0.03em] mb-10"
              style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}>
              What We Build
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-14">
              {[
                'Custom Websites',
                'SaaS Platforms',
                'AI & LLM Systems',
                'Business Automation',
                'Internal Tools',
                'Contractor Software',
              ].map(cap => (
                <div key={cap} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                  <span className="text-sm text-white/40">{cap}</span>
                </div>
              ))}
            </div>

            {/* Founder */}
            <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-4 mb-4">
                <Image src="/founder.png" alt="Keegan Pearl" width={48} height={48}
                  className="rounded-lg object-cover" style={{ width: 48, height: 48 }} />
                <div>
                  <div className="text-[15px] font-semibold text-white/70">Keegan Pearl</div>
                  <div className="text-[13px] text-white/25">Founder &amp; Engineer</div>
                </div>
              </div>
              <p className="text-sm text-white/25 leading-relaxed">
                Every project is personally architected, built, and shipped. You work directly with the engineer — no layers, no handoffs.
              </p>
            </div>
          </motion.div>

          {/* Right — CTA */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease }}>
            <div className="rounded-xl p-10 lg:p-12"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h2 className="font-display font-bold text-white tracking-[-0.03em] leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}>
                Let&apos;s build something.
              </h2>
              <p className="text-base text-white/30 leading-relaxed mb-8">
                Tell us what you need. We&apos;ll scope it, price it, and send an estimate within 48 hours. No retainers, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <a href="/estimate"
                  className="group inline-flex items-center gap-2.5 bg-white text-[#050508] font-semibold px-7 py-3.5 rounded-lg text-[15px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  Get an Estimate
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </a>
                <a href="mailto:hello@pearllab.io?subject=Project%20Inquiry"
                  className="text-sm font-medium text-white/20 hover:text-white/40 transition-colors duration-300 py-3.5">
                  hello@pearllab.io
                </a>
              </div>
              <div className="mt-8 flex items-center gap-5 text-[11px] font-mono text-white/14">
                <span>Veteran owned</span>
                <span className="w-1 h-1 rounded-full bg-white/8" />
                <span>Estimates in 48h</span>
                <span className="w-1 h-1 rounded-full bg-white/8" />
                <span>No retainers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
