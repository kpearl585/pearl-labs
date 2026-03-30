'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Close() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative px-8 md:px-12 lg:px-20 xl:px-32 pt-32 lg:pt-48 pb-24 lg:pb-32" id="about">
      {/* Top edge */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)' }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8">

        {/* Left column — capabilities (compact, not a full section) */}
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}>
          <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/20 mb-10 block">
            Capabilities
          </span>

          <div className="space-y-6">
            {[
              'Custom Websites',
              'SaaS Platforms',
              'AI & LLM Systems',
              'Business Automation',
              'Internal Tools',
            ].map((cap, i) => (
              <div key={cap} className="group flex items-center gap-4 py-1 cursor-default">
                <span className="w-4 h-px bg-white/8 group-hover:bg-accent/30 group-hover:w-8 transition-all duration-400" />
                <span className="text-base lg:text-lg text-white/30 group-hover:text-white/60 transition-colors duration-300 font-display tracking-tight">
                  {cap}
                </span>
              </div>
            ))}
          </div>

          {/* Founder — tucked under capabilities */}
          <div className="mt-16 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="flex items-center gap-4">
              <Image src="/founder.png" alt="Keegan Pearl" width={56} height={56}
                className="rounded-xl object-cover" style={{ width: 56, height: 56 }} />
              <div>
                <div className="text-base font-semibold text-white/60">Keegan Pearl</div>
                <div className="text-[13px] text-white/20">Founder &amp; Engineer</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/20 leading-relaxed max-w-xs">
              Every project is personally architected, built, and shipped.
              You work directly with the engineer.
            </p>
          </div>
        </motion.div>

        {/* Right column — CTA, dominant */}
        <motion.div
          className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}>

          {/* Ambient glow behind CTA */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 60%)' }} />

            <div className="relative">
              <h2 className="font-display font-bold text-white tracking-[-0.045em] leading-[0.92] mb-8"
                style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}>
                Let&apos;s build
                <br />
                <span className="text-white/25">something.</span>
              </h2>

              <p className="text-lg lg:text-xl text-white/28 mb-12 max-w-lg leading-relaxed">
                Tell us what you need. We&apos;ll scope it, price it, and send you an estimate within 48 hours. No retainers, no surprises.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <a href="/estimate"
                  className="group inline-flex items-center gap-3 bg-white text-[#050508] font-semibold px-10 py-5 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                  Get an Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a href="mailto:hello@pearllab.io?subject=Project%20Inquiry"
                  className="text-base font-medium text-white/18 hover:text-white/40 transition-colors duration-300 py-5">
                  hello@pearllab.io
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
