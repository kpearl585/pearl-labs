'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Globe, Brain, Layers } from 'lucide-react'

const services = [
  { icon: Globe, name: 'Custom Websites', desc: 'Next.js. Tailwind. Vercel. Sub-second loads, fully custom.', accent: '#00D4FF' },
  { icon: Layers, name: 'SaaS Platforms', desc: 'Auth, billing, dashboards, APIs. Full products from zero.', accent: '#8B5CF6' },
  { icon: Brain, name: 'AI Systems', desc: 'LLM integrations, copilots, agent workflows.', accent: '#34D399' },
]

export default function Services() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-32 lg:py-44 px-8 lg:px-16" id="services">
      <div className="max-w-[1440px] mx-auto">

        <motion.div className="mb-16 lg:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-white/20" />
            <span className="text-[12px] font-mono font-medium uppercase tracking-[0.12em] text-white/35">Services</span>
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.035em] leading-[1.0]"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}>
            What we build.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.name}
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group rounded-2xl p-10 lg:p-12 card-hover cursor-default"
                style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Icon className="w-6 h-6 mb-10" style={{ color: `${s.accent}55` }} strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-white/90 text-xl lg:text-2xl tracking-tight mb-4">{s.name}</h3>
                <p className="text-[15px] leading-[1.65] text-white/32">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
