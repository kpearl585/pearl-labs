'use client'
import { motion, useReducedMotion } from 'framer-motion'

const testimonials = [
  {
    quote: "Pearl Labs built our entire SaaS in weeks, not months. They understand business outcomes — not just code. Revenue positive in the first month.",
    author: 'Fence Contractor',
    role: 'FenceEstimatePro — SaaS customer',
    stars: 5,
  },
  {
    quote: "Most agencies give you a template and charge you like it's custom. Pearl Labs actually builds. Our site converts visitors into inquiries daily.",
    author: 'Youth Sports Director',
    role: 'Local business — web client',
    stars: 5,
  },
  {
    quote: "Clean code, delivered fast, zero excuses. This is what working with a senior engineer feels like. I own the code. I understand the system.",
    author: 'SaaS Founder',
    role: 'Platform development client',
    stars: 5,
  },
]

export default function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section className="py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-20"
          initial={{ opacity: 1, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(255,255,255,0.25)' }}>Client results</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            They don&apos;t just like us.<br />
            <span className="gradient-text">They trust us.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.author}
              initial={{ opacity: 1, y: reduce ? 0 : 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl p-8 flex flex-col gap-6"
              style={{ background: '#060608', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }} />

              {/* Large quote mark */}
              <span className="font-display text-5xl leading-none select-none"
                style={{ color: 'rgba(0,212,255,0.2)' }}>&ldquo;</span>

              <p className="text-base leading-relaxed flex-1 -mt-2"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                {t.quote}
              </p>

              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, si) => (
                  <span key={si} style={{ color: '#f59e0b', fontSize: '0.85rem' }}>&#9733;</span>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                <div className="text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
