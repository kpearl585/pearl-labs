'use client'
import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Discovery' },
  { num: '02', title: 'Architecture' },
  { num: '03', title: 'Design' },
  { num: '04', title: 'Engineering' },
  { num: '05', title: 'Launch' },
  { num: '06', title: 'Scale' },
]

export default function Process() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-32 lg:py-44 px-8 lg:px-16" id="process">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* Left — header */}
          <motion.div className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[12px] font-mono font-medium uppercase tracking-[0.12em] text-white/35">Process</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.035em] leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}>
              How we work.
            </h2>
            <p className="text-lg text-white/30 max-w-sm">
              Same proven framework, every project. No surprises.
            </p>
          </motion.div>

          {/* Right — steps as large type */}
          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, x: reduce ? 0 : 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                className="group flex items-baseline gap-6 lg:gap-8 py-6 lg:py-8 cursor-default"
                style={i < steps.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.04)' } : {}}>
                <span className="text-[14px] font-mono text-white/12 tabular-nums shrink-0">{s.num}</span>
                <h3 className="font-display font-semibold text-white/40 tracking-tight group-hover:text-white/80 transition-colors duration-400"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
                  {s.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
