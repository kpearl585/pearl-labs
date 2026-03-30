'use client'

import { motion, useReducedMotion } from 'framer-motion'

const metrics = [
  { value: '3', label: 'Products in Production' },
  { value: 'Full', label: 'Code Ownership' },
  { value: 'Veteran', label: 'Owned & Operated' },
]

export default function Metrics() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const
  const blur = reduce ? 'blur(0px)' : 'blur(10px)'

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="w-full max-w-[1080px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-3 gap-8 lg:gap-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center relative"
              initial={{ opacity: 0, y: reduce ? 0 : 10, filter: blur }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}>
              <p className="font-display font-bold text-white text-2xl lg:text-4xl tracking-tight mb-2">
                {m.value}
              </p>
              <p className="text-[11px] lg:text-xs font-mono uppercase tracking-[0.15em] text-white/25">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
