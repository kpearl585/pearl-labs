'use client'

import { motion, useReducedMotion } from 'framer-motion'

const capabilities = [
  {
    title: 'Custom Websites',
    desc: 'Next.js, Tailwind, and Vercel. Built for speed, SEO, and conversion.',
  },
  {
    title: 'SaaS Platforms',
    desc: 'Auth, billing, dashboards, and APIs. Full products from zero to launch.',
  },
  {
    title: 'Tools & Automation',
    desc: 'Internal tools, AI integrations, and business automation built to your process.',
  },
]

export default function Capabilities() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {capabilities.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}>
              <h3 className="font-display font-semibold text-white text-lg tracking-tight mb-3">
                {c.title}
              </h3>
              <p className="text-[15px] text-white/35 leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
