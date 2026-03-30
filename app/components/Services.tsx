'use client'

import { motion, useReducedMotion } from 'framer-motion'

const services = [
  {
    title: 'Custom Websites',
    desc: 'Next.js, Tailwind, Vercel. Built for speed and conversion — not from templates.',
    num: '01',
  },
  {
    title: 'SaaS Platforms',
    desc: 'Auth, billing, dashboards, APIs. Full products engineered from zero.',
    num: '02',
  },
  {
    title: 'AI & Intelligent Systems',
    desc: 'LLM integrations, copilots, agent workflows. Applied AI that ships.',
    num: '03',
  },
  {
    title: 'Business Systems',
    desc: 'Internal tools, automation, document workflows. Built to your exact process.',
    num: '04',
  },
]

export default function Services() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-32 lg:py-48 px-8 md:px-12 lg:px-20 xl:px-32" id="services">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left — header */}
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}>
          <span className="text-[13px] font-mono font-medium uppercase tracking-[0.15em] text-white/25 mb-6 block">
            Services
          </span>
          <h2 className="font-display font-bold text-white tracking-[-0.04em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
            What we<br />build.
          </h2>
          <p className="text-lg text-white/28 leading-relaxed">
            Every project is custom-engineered. No templates, no page builders, no shortcuts.
          </p>
        </motion.div>

        {/* Right — service list */}
        <div className="lg:col-span-8">
          {services.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, x: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className="group flex items-start gap-8 lg:gap-12 py-10 lg:py-14 cursor-default"
              style={i < services.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.04)' } : {}}>
              <span className="text-[14px] font-mono text-white/10 tabular-nums pt-1 shrink-0">{s.num}</span>
              <div>
                <h3 className="font-display font-semibold text-white/60 tracking-tight mb-3 group-hover:text-white/90 transition-colors duration-400"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>
                  {s.title}
                </h3>
                <p className="text-[15px] lg:text-base text-white/22 leading-relaxed max-w-lg">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
