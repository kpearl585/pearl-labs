'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    name: 'FenceEstimatePro',
    desc: 'Full contractor management platform with estimates, job tracking, customer portals, and Stripe billing.',
    href: '/work/fenceestimatepro',
    internal: true,
  },
  {
    name: 'ARGUS',
    desc: '4D geospatial intelligence platform with real-time data feeds, combat modeling, and AI copilot.',
    href: 'https://argusplatform.ai',
    internal: false,
  },
  {
    name: 'ContractorDocuments',
    desc: 'Document delivery platform with Stripe checkout, instant PDF access, and automated fulfillment.',
    href: 'https://contractordocuments.com',
    internal: false,
  },
]

export default function Products() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="w-full py-20 lg:py-28" id="products">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}>
          <h2 className="font-display font-semibold text-white tracking-[-0.02em] text-2xl lg:text-3xl mb-3">
            Featured Products
          </h2>
          <p className="text-base text-white/35">
            Real products we&apos;ve built, live in production.
          </p>
        </motion.div>

        {/* 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const Tag = p.internal ? Link : 'a'
            const linkProps = p.internal
              ? { href: p.href }
              : { href: p.href, target: '_blank' as const, rel: 'noopener noreferrer' }

            return (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}>
                <Tag {...linkProps}
                  className="group flex flex-col justify-between h-full rounded-xl p-8 lg:p-10 transition-colors duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                  <div>
                    <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-4 group-hover:text-accent/80 transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="text-[15px] text-white/35 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/30 group-hover:text-white/60 transition-colors duration-300">
                    <span>View project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
