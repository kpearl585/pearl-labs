'use client'

import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Scope',
    desc: 'Tell us what you need. We define requirements, architecture, and a fixed-price estimate within 48 hours.',
  },
  {
    number: '02',
    title: 'Build',
    desc: 'One engineer builds your product end-to-end. Direct communication, weekly updates, no surprises.',
  },
  {
    number: '03',
    title: 'Ship',
    desc: 'Deployed, tested, and handed off with full code ownership. You own the repo, the infrastructure, everything.',
  },
]

export default function Process() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const
  const blur = reduce ? 'blur(0px)' : 'blur(12px)'

  return (
    <section className="w-full py-28 lg:py-36 relative">
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04), transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-8 lg:px-16">
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: reduce ? 0 : 14, filter: blur }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/40 mb-4">
            How It Works
          </p>
          <h2 className="font-display font-bold text-white tracking-[-0.03em] text-3xl lg:text-5xl">
            Scope. Build. Ship.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[2.25rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: reduce ? 0 : 16, filter: blur }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative p-8 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-400">
                {/* Step number with accent dot */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent/30" />
                  <span className="text-xs font-mono text-accent/40 tracking-wider">{s.number}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
