'use client'
import { motion, useReducedMotion } from 'framer-motion'

const stats = [
  { value: '$2M+', label: 'Revenue generated' },
  { value: '50+', label: 'Products shipped' },
  { value: '99', label: 'Lighthouse score' },
  { value: '<14d', label: 'Avg delivery' },
]

export default function Stats() {
  const reduce = useReducedMotion()

  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 1, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="py-14 px-8 flex flex-col gap-2 relative"
            style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
          >
            <span className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em' }}>
              {s.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.15em]"
              style={{ color: 'rgba(255,255,255,0.3)' }}>
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  )
}
