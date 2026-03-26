'use client'
import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Discovery', desc: 'We audit your goals, audience, and competitive landscape to define what success looks like.' },
  { num: '02', title: 'Architecture', desc: 'System design before code. Schema, API contracts, component hierarchy — documented and reviewed.' },
  { num: '03', title: 'Design', desc: 'Interactive prototypes you approve before a single line of production code is written.' },
  { num: '04', title: 'Engineering', desc: 'Clean TypeScript, tested components, documented APIs. No shortcuts. No inherited tech debt.' },
  { num: '05', title: 'Launch', desc: 'Zero-downtime deployment with CI/CD, monitoring, and rollback procedures from day one.' },
  { num: '06', title: 'Scale', desc: 'Analytics, optimization, and ongoing iteration. Done when the metrics say so.' },
]

export default function Process() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6" id="process">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — sticky header */}
          <motion.div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Process</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Disciplined methodology.
              Predictable outcomes.
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/32">
              Every engagement follows the same proven framework.
              No surprises, no scope creep.
            </p>
          </motion.div>

          {/* Right — steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity: 0, x: reduce ? 0 : 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease }}
                  className="group flex gap-5 lg:gap-6 py-6 lg:py-7 transition-colors duration-300"
                  style={i < steps.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.04)' } : {}}
                >
                  <span className="text-[12px] font-mono font-medium text-white/16 pt-0.5 shrink-0 w-6 text-right tabular-nums">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white/70 mb-1.5 tracking-tight group-hover:text-white/90 transition-colors duration-300">{s.title}</h3>
                    <p className="text-[14px] leading-[1.65] text-white/28 max-w-md group-hover:text-white/36 transition-colors duration-300">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
