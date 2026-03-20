'use client'
import { motion, useReducedMotion } from 'framer-motion'

const services = [
  {
    num: '01',
    name: 'Custom Websites',
    desc: 'Next.js, Tailwind, Vercel. Sub-second load times, 99 Lighthouse scores, fully custom code. No templates. No WordPress. No compromise.',
  },
  {
    num: '02',
    name: 'AI Systems & Agents',
    desc: 'Claude, GPT-4, and custom models wired into real products. Copilots, document processors, prediction engines — AI that ships, not AI that demos.',
  },
  {
    num: '03',
    name: 'SaaS Development',
    desc: 'Full-stack platforms with auth, billing, dashboards, and APIs. From MVP to scale. We build products that generate MRR, not projects that collect dust.',
  },
  {
    num: '04',
    name: 'Defense & Gov AI',
    desc: 'Geospatial intelligence, real-time feeds, combat modeling. Built ARGUS for NATO-grade analysis. We understand the mission because we lived it.',
  },
]

export default function Services() {
  const reduce = useReducedMotion()

  return (
    <section className="py-40 px-6" id="services">
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-20"
          initial={{ opacity: 1, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(255,255,255,0.25)' }}>What we build</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            We don&apos;t sell hours.<br />
            <span className="gradient-text">We build systems that compound.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 1, y: reduce ? 0 : 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 md:gap-8 py-12 items-start"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="font-display font-bold text-2xl"
                style={{ color: 'rgba(0,212,255,0.3)' }}>
                {s.num}
              </span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#00D4FF] transition-colors duration-300">
                  {s.name}
                </h3>
                <p className="text-base leading-relaxed max-w-2xl"
                  style={{ color: 'rgba(255,255,255,0.4)' }}>
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
