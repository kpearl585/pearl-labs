'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Globe, Brain, Layers, BarChart3, Server, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    name: 'Custom Websites',
    tagline: 'Engineered for performance and conversion',
    desc: 'Next.js, Tailwind, Vercel. Sub-second load times, 99 Lighthouse, fully custom — no templates, no compromise.',
    accent: '#00D4FF',
    span: 'md:col-span-4',
  },
  {
    icon: Brain,
    name: 'AI Systems',
    tagline: 'Intelligent automation built into the product',
    desc: 'Claude, GPT-4, and custom models integrated into your workflow. Copilots, agents, and pipelines that actually ship.',
    accent: '#00D4FF',
    span: 'md:col-span-4',
  },
  {
    icon: Layers,
    name: 'SaaS Development',
    tagline: 'From MVP to scale',
    desc: 'Full-stack platforms with auth, billing, dashboards, and APIs. Built for growth from day one.',
    accent: '#8b5cf6',
    span: 'md:col-span-4',
  },
  {
    icon: BarChart3,
    name: 'Landing Pages',
    tagline: 'Conversion-optimized, not just pretty',
    desc: 'High-intent pages engineered to convert. A/B tested layouts, fast delivery, measurable ROI.',
    accent: '#f59e0b',
    span: 'md:col-span-3',
  },
  {
    icon: Server,
    name: 'Infrastructure',
    tagline: 'System architecture that scales',
    desc: 'Database design, API architecture, deployment pipelines. Built to handle growth without breaking.',
    accent: '#22c55e',
    span: 'md:col-span-3',
  },
  {
    icon: Zap,
    name: 'Automation',
    tagline: 'Eliminate manual work',
    desc: 'CRM integrations, webhook pipelines, data flows. Your team should be doing strategy, not data entry.',
    accent: '#ef4444',
    span: 'md:col-span-6',
  },
]

export default function Services() {
  const reduce = useReducedMotion()
  return (
    <section className="py-40 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-20"
          initial={{ opacity: 1, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>What we build</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Products, not services.<br />
            <span className="gradient-text">Systems, not sites.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.name}
                initial={{ opacity: 1, y: reduce ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`${s.span} group relative rounded-2xl p-8 cursor-default overflow-hidden transition-all duration-500`}
                style={{ background: '#080808', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 70% 70% at 20% 30%, ${s.accent}15 0%, transparent 70%)` }} />
                {/* Accent line top */}
                <div className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.accent}60, transparent)` }} />

                <div className="relative z-10">
                  <div className="mb-6 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}30` }}>
                    <Icon className="w-5 h-5" style={{ color: s.accent }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: `${s.accent}99` }}>{s.tagline}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
