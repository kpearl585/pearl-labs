'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-32 lg:py-44 px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Left — founder */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[12px] font-mono font-medium uppercase tracking-[0.12em] text-white/35">About</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.035em] leading-[1.0] mb-8"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}>
              Founder-led.<br />
              <span className="text-white/30">Engineer-built.</span>
            </h2>

            <p className="text-lg leading-[1.65] text-white/32 mb-10 max-w-lg">
              Every project is personally architected, built, and shipped.
              You work directly with the engineer. No layers.
            </p>

            {/* Founder */}
            <div className="flex items-center gap-5">
              <Image src="/founder.png" alt="Keegan Pearl" width={64} height={64}
                className="rounded-xl object-cover" style={{ width: 64, height: 64 }} />
              <div>
                <div className="text-[16px] font-semibold text-white/70">Keegan Pearl</div>
                <div className="text-[13px] text-white/25">Founder &amp; Engineer</div>
              </div>
            </div>
          </motion.div>

          {/* Right — value props as large text */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }}>
            <div className="space-y-8">
              {[
                { title: 'Direct communication', desc: 'Talk to the person writing the code.' },
                { title: 'Full code ownership', desc: 'You own the repo, deployment, and infrastructure.' },
                { title: 'Production-grade', desc: 'Clean TypeScript. Tested. Documented.' },
                { title: 'Fast execution', desc: 'Weeks, not months.' },
              ].map(item => (
                <div key={item.title}>
                  <h3 className="font-display font-semibold text-white/60 text-lg tracking-tight mb-1.5">{item.title}</h3>
                  <p className="text-[15px] text-white/24">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
