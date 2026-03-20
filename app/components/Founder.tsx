'use client'
import { motion, useReducedMotion } from 'framer-motion'

const credentials = [
  { label: 'U.S. Navy', detail: '4 Years, 2 Deployments' },
  { label: 'Law Enforcement', detail: '10 Years, SWAT' },
  { label: 'Pearl Labs LLC', detail: 'Ocala, FL' },
  { label: 'ARGUS', detail: 'Geospatial Intel for NATO' },
  { label: 'FenceEstimatePro', detail: '$1.2K MRR/mo' },
]

export default function Founder() {
  const reduce = useReducedMotion()

  return (
    <section className="py-40 px-6" id="founder">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-20"
          initial={{ opacity: 1, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(255,255,255,0.25)' }}>About the founder</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Built different.<br />
            <span className="gradient-text">By design.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 1, y: reduce ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Keegan Pearl spent 4 years in the U.S. Navy across 2 deployments,
              then 10 years in law enforcement — SWAT, drug interdiction, the
              real thing. He was medically retired. Then he built.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Pearl Labs is the product of that discipline. Every system we build
              is engineered to perform under pressure, not just look good in a
              demo. We&apos;ve shipped defense intelligence platforms, SaaS products
              generating real MRR, and AI systems that actually work.
            </p>
            <p className="text-lg leading-relaxed font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Veteran owned. Florida based. No fluff.
            </p>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 1, y: reduce ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="px-6 py-4"
                style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Service Record
                </span>
              </div>
              {credentials.map((c, i) => (
                <div key={c.label}
                  className="px-6 py-5 flex items-center justify-between gap-4"
                  style={{
                    background: '#060608',
                    borderBottom: i < credentials.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <span className="text-sm font-semibold text-white">{c.label}</span>
                  <span className="text-sm text-right" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {c.detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
