'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    name: 'FenceEstimatePro',
    tagline: 'Contractor management platform',
    desc: 'Full business system — estimates, job tracking, customer portals, digital signatures, Stripe billing.',
    tags: ['Next.js', 'Supabase', 'Stripe'],
    href: '/work/fenceestimatepro',
    status: 'Live',
    accent: '#00D4FF',
  },
  {
    name: 'ARGUS',
    tagline: '4D geospatial intelligence',
    desc: 'Real-time geospatial platform with live data feeds, combat modeling, and AI copilot integration.',
    tags: ['CesiumJS', 'PostGIS', 'Claude AI'],
    href: 'https://argusplatform.ai',
    status: 'Live',
    accent: '#8B5CF6',
  },
  {
    name: 'ContractorDocuments',
    tagline: 'Document delivery platform',
    desc: 'Stripe checkout, instant PDF access, automated fulfillment. Passive revenue system.',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    href: 'https://contractordocuments.com',
    status: 'Live',
    accent: '#34D399',
  },
]

export default function Work() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-32 lg:py-48 px-8 md:px-12 lg:px-20 xl:px-32" id="work">
      {/* Section header */}
      <motion.div
        className="mb-20 lg:mb-28"
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}>
        <span className="text-[13px] font-mono font-medium uppercase tracking-[0.15em] text-white/25 mb-6 block">
          Selected Work
        </span>
        <h2 className="font-display font-bold text-white tracking-[-0.04em]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          Real products.<br />
          <span className="text-white/30">Live in production.</span>
        </h2>
      </motion.div>

      {/* Project cards — stacked, full width */}
      <div className="space-y-8 lg:space-y-12">
        {projects.map((p, i) => {
          const isInternal = p.href.startsWith('/')
          const Tag = isInternal ? Link : 'a'
          const linkProps = isInternal
            ? { href: p.href }
            : { href: p.href, target: '_blank' as const, rel: 'noopener noreferrer' }

          return (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}>
              <Tag {...linkProps}
                className="group block rounded-2xl lg:rounded-3xl p-10 lg:p-16 transition-all duration-500 hover:translate-y-[-2px]"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-2 h-2 rounded-full" style={{ background: p.accent, opacity: 0.5 }} />
                      <span className="text-[12px] font-mono text-white/25">{p.status}</span>
                    </div>

                    <h3 className="font-display font-bold text-white/90 tracking-tight mb-3 group-hover:text-white transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
                      {p.name}
                    </h3>

                    <p className="text-base lg:text-lg text-white/25 mb-2">{p.tagline}</p>
                  </div>

                  {/* Right */}
                  <div className="lg:max-w-md lg:text-right">
                    <p className="text-[15px] lg:text-base leading-relaxed text-white/30 mb-6">{p.desc}</p>
                    <div className="flex flex-wrap lg:justify-end gap-3">
                      {p.tags.map(t => (
                        <span key={t} className="text-[12px] font-mono text-white/16 px-3 py-1 rounded-full"
                          style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                          {t}
                        </span>
                      ))}
                      <ArrowUpRight className="w-5 h-5 text-white/12 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-2" />
                    </div>
                  </div>
                </div>
              </Tag>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
