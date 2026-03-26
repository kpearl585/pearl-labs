'use client'
import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Discovery', desc: 'Goals, audience, competitive landscape.' },
  { num: '02', title: 'Architecture', desc: 'Schema, APIs, component hierarchy.' },
  { num: '03', title: 'Design', desc: 'Interactive prototypes you approve first.' },
  { num: '04', title: 'Engineering', desc: 'Clean TypeScript. Tested. Documented.' },
  { num: '05', title: 'Launch', desc: 'Zero-downtime deploy with CI/CD.' },
  { num: '06', title: 'Scale', desc: 'Analytics, optimization, iteration.' },
]

export default function Process() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6" id="process">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <motion.div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Process</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              How we work.
            </h2>
          </motion.div>

          <div className="lg:col-span-8">
            {steps.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, x: reduce ? 0 : 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05, ease }}
                className="group flex gap-5 lg:gap-6 py-5 lg:py-6 transition-colors duration-300"
                style={i < steps.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.04)' } : {}}>
                <span className="text-[12px] font-mono font-medium text-white/14 pt-0.5 shrink-0 w-6 text-right tabular-nums">
                  {s.num}
                </span>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-[15px] font-semibold text-white/65 tracking-tight group-hover:text-white/85 transition-colors duration-300">{s.title}</h3>
                  <p className="text-[13px] text-white/24">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
