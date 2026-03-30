'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    name: 'ARGUS',
    category: 'Intelligence Platform',
    desc: '4D geospatial intelligence platform with real-time data feeds, combat modeling, and AI copilot. Defense-grade engineering.',
    href: 'https://argusplatform.ai',
    internal: false,
    featured: true,
    accentColor: 'rgba(0,212,255,0.08)',
  },
  {
    name: 'FenceEstimatePro',
    category: 'SaaS Platform',
    desc: 'Full contractor management platform with estimates, job tracking, customer portals, and Stripe billing.',
    href: '/work/fenceestimatepro',
    internal: true,
    featured: false,
    accentColor: 'rgba(139,92,246,0.06)',
  },
  {
    name: 'ContractorDocuments',
    category: 'E-Commerce',
    desc: 'Document delivery platform with Stripe checkout, instant PDF access, and automated fulfillment.',
    href: 'https://contractordocuments.com',
    internal: false,
    featured: false,
    accentColor: 'rgba(0,212,255,0.05)',
  },
]

export default function Products() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const
  const blur = reduce ? 'blur(0px)' : 'blur(12px)'

  return (
    <section className="w-full py-28 lg:py-36 relative" id="products">
      {/* Subtle ambient glow behind section */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.03), transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: reduce ? 0 : 14, filter: blur }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/40 mb-4">
            Featured Products
          </p>
          <h2 className="font-display font-bold text-white tracking-[-0.03em] text-3xl lg:text-5xl">
            What we&apos;ve built
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => {
            const Tag = p.internal ? Link : 'a'
            const linkProps = p.internal
              ? { href: p.href }
              : { href: p.href, target: '_blank' as const, rel: 'noopener noreferrer' }

            return (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: reduce ? 0 : 20, filter: blur }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative">
                {/* Card ambient glow */}
                {p.featured && (
                  <div
                    className="absolute -inset-4 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at center, ${p.accentColor}, transparent 70%)`,
                      filter: 'blur(40px)',
                    }}
                    aria-hidden="true"
                  />
                )}
                <Tag {...linkProps}
                  className="group card flex flex-col justify-between h-full p-8 lg:p-10 cursor-pointer relative z-10">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-accent/40">
                        {p.category}
                      </span>
                      {p.featured && (
                        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent-2/50 border border-accent-2/20 rounded-full px-2.5 py-0.5">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-white text-xl lg:text-2xl tracking-tight mb-4 group-hover:text-accent/90 transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/20 group-hover:text-accent/60 transition-colors duration-300">
                    <span>View project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
