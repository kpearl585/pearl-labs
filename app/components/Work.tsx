'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    name: 'FenceEstimatePro',
    desc: 'Full contractor management platform — estimates, job tracking, customer portals, digital signatures, Stripe billing.',
    tags: ['Next.js', 'Supabase', 'Stripe'],
    href: '/work/fenceestimatepro',
    status: 'Live',
  },
  {
    name: 'ARGUS',
    desc: '4D geospatial intelligence platform with real-time data feeds, combat modeling, and AI copilot.',
    tags: ['CesiumJS', 'PostGIS', 'Claude AI'],
    href: 'https://argusplatform.ai',
    status: 'Live',
  },
  {
    name: 'ContractorDocuments',
    desc: 'Document delivery platform — Stripe checkout, instant PDF access, automated fulfillment.',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    href: 'https://contractordocuments.com',
    status: 'Live',
  },
]

export default function Work() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-24 lg:py-32" id="work">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}>
          <h2 className="font-display font-bold text-white tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}>
            Selected Work
          </h2>
        </motion.div>

        {/* Project cards — consistent grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const isInternal = p.href.startsWith('/')
            const Tag = isInternal ? Link : 'a'
            const linkProps = isInternal
              ? { href: p.href }
              : { href: p.href, target: '_blank' as const, rel: 'noopener noreferrer' }

            return (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}>
                <Tag {...linkProps}
                  className="group block h-full rounded-xl p-8 lg:p-9 transition-all duration-300 hover:translate-y-[-1px]"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                  {/* Status */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                      <span className="text-[12px] font-mono text-white/25">{p.status}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white/35 transition-colors duration-300" />
                  </div>

                  {/* Name */}
                  <h3 className="font-display font-semibold text-white/85 text-xl tracking-tight mb-3 group-hover:text-white transition-colors duration-300">
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/28 leading-relaxed mb-8">{p.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.tags.map(t => (
                      <span key={t} className="text-[11px] font-mono text-white/16 px-2.5 py-1 rounded-md"
                        style={{ background: 'rgba(255,255,255,0.03)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </Tag>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
