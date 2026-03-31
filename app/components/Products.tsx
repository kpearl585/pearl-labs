'use client'

import { useCallback, useRef } from 'react'
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
  },
  {
    name: 'FenceEstimatePro',
    category: 'SaaS Platform',
    desc: 'Full contractor management platform with estimates, job tracking, customer portals, and Stripe billing.',
    href: '/work/fenceestimatepro',
    internal: true,
    featured: false,
  },
  {
    name: 'ContractorDocuments',
    category: 'E-Commerce',
    desc: 'Document delivery platform with Stripe checkout, instant PDF access, and automated fulfillment.',
    href: 'https://contractordocuments.com',
    internal: false,
    featured: false,
  },
]

/* ── Mouse-tracking glow card ── */
function GlowCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--mouse-x', `${x}px`)
    el.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group/card relative rounded-2xl p-px cursor-pointer ${className}`}
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties
      }
    >
      {/* Glow border that follows cursor */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0,212,255,0.15), rgba(139,92,246,0.08) 40%, transparent 70%)`,
        }}
      />
      {/* Static border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover/card:border-white/[0.1] transition-colors duration-500 pointer-events-none" />
      {/* Card interior */}
      <div className="relative rounded-2xl bg-[#08080D] group-hover/card:bg-[#0A0A12] transition-colors duration-500 overflow-hidden">
        {/* Inner glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(0,212,255,0.04), transparent 60%)`,
          }}
        />
        {children}
      </div>
    </div>
  )
}

export default function Products() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="w-full py-32 lg:py-40 relative" id="products">
      {/* Section ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.03), transparent 65%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: reduce ? 0 : 16, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#00D4FF]/40 mb-4">
            Featured Products
          </p>
          <h2 className="font-display font-bold text-white tracking-[-0.03em] text-3xl lg:text-5xl">
            What we&apos;ve built
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p, i) => {
            const Tag = p.internal ? Link : 'a'
            const linkProps = p.internal
              ? { href: p.href }
              : { href: p.href, target: '_blank' as const, rel: 'noopener noreferrer' }

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: reduce ? 0 : 24, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
              >
                <GlowCard>
                  <Tag {...linkProps} className="flex flex-col justify-between h-full p-8 lg:p-10 relative z-10">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00D4FF]/35">
                          {p.category}
                        </span>
                        {p.featured && (
                          <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#8B5CF6]/60 border border-[#8B5CF6]/20 rounded-full px-2.5 py-0.5">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-semibold text-white text-xl lg:text-2xl tracking-tight mb-4 group-hover/card:text-[#00D4FF]/90 transition-colors duration-300">
                        {p.name}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/15 group-hover/card:text-[#00D4FF]/50 transition-colors duration-300">
                      <span>View project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </Tag>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
