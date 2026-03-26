'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Globe, Brain, Layers, Server, BarChart3, Zap } from 'lucide-react'

const primary = [
  {
    icon: Globe,
    name: 'Custom Websites',
    desc: 'Next.js, Tailwind, Vercel. Sub-second loads, 99+ Lighthouse, fully custom architecture. No templates.',
    accent: '#00D4FF',
  },
  {
    icon: Layers,
    name: 'SaaS Platforms',
    desc: 'Auth, billing, dashboards, APIs. Complete products built from zero with the architecture to scale.',
    accent: '#8B5CF6',
  },
  {
    icon: Brain,
    name: 'AI-Powered Systems',
    desc: 'LLM integrations, custom copilots, agent workflows. Intelligence embedded into your product.',
    accent: '#34D399',
  },
]

const secondary = [
  { icon: Server, name: 'Internal Tools', desc: 'Admin dashboards, data pipelines, CRM integrations built for your operations.' },
  { icon: BarChart3, name: 'Landing Pages', desc: 'Conversion-optimized pages engineered to turn traffic into pipeline.' },
  { icon: Zap, name: 'Automation', desc: 'Webhook pipelines, API orchestration, and intelligent data flows.' },
]

export default function Services() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6" id="services">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div className="mb-14 lg:mb-16"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Services</span>
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
            What we build.<br className="hidden sm:block" />
            <span className="text-white/35">From scratch, every time.</span>
          </h2>
        </motion.div>

        {/* Primary services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px rounded-xl overflow-hidden mb-3"
          style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
          {primary.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.name}
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="group relative p-8 lg:p-9 cursor-default"
                style={{ background: 'rgba(255,255,255,0.015)' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 70% at 30% 0%, ${s.accent}05 0%, transparent 70%)` }} />

                <div className="relative z-10">
                  <Icon className="w-[18px] h-[18px] mb-7" style={{ color: `${s.accent}66` }} strokeWidth={1.5} />
                  <h3 className="text-[16px] font-semibold text-white/85 mb-2.5 tracking-tight">{s.name}</h3>
                  <p className="text-[14px] leading-[1.7] text-white/32">{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Secondary services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.04)' }}>
          {secondary.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                className="group p-6 lg:p-7 cursor-default"
                style={{ background: 'rgba(255,255,255,0.01)' }}
              >
                <div className="flex items-start gap-3.5">
                  <Icon className="w-4 h-4 mt-0.5 text-white/18 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[14px] font-medium text-white/60 mb-1">{s.name}</h4>
                    <p className="text-[13px] leading-[1.6] text-white/24">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
