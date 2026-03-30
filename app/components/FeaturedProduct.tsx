'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedProduct() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative" id="featured">
      {/* FenceEstimatePro — Hero-level spotlight */}
      <div className="px-8 md:px-12 lg:px-20 xl:px-32 py-32 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left — product identity, massive */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
              <span className="text-[13px] font-mono text-white/30">Live in Production</span>
            </div>

            <h2 className="font-display font-bold text-white tracking-[-0.04em] leading-[0.92] mb-6"
              style={{ fontSize: 'clamp(2.75rem, 5vw, 5rem)' }}>
              Fence
              <br />
              Estimate
              <br />
              <span className="text-accent/70">Pro</span>
            </h2>

            <p className="text-lg lg:text-xl text-white/30 leading-relaxed mb-10 max-w-md">
              The complete contractor management platform. Built from zero to production.
            </p>

            <Link href="/work/fenceestimatepro"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/70 transition-colors duration-300">
              View case study
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right — feature breakdown, offset grid */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              {[
                { label: 'Estimates & Proposals', detail: 'Generate, send, and track estimates with digital signatures and PDF export.' },
                { label: 'Job Tracking', detail: 'Full project lifecycle from lead to completion with status workflows.' },
                { label: 'Customer Portals', detail: 'Branded client access for approvals, documents, and communication.' },
                { label: 'Payments & Billing', detail: 'Stripe-powered invoicing, deposits, and automated payment collection.' },
              ].map((f, i) => (
                <div key={f.label} className="p-8 lg:p-10"
                  style={{ background: '#08080D' }}>
                  <div className="text-[12px] font-mono text-accent/40 mb-4">0{i + 1}</div>
                  <h3 className="font-display font-semibold text-white/70 text-base lg:text-lg tracking-tight mb-3">
                    {f.label}
                  </h3>
                  <p className="text-[14px] text-white/22 leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {['Next.js', 'Supabase', 'Stripe', 'Vercel'].map(t => (
                <span key={t} className="text-[11px] font-mono text-white/14 px-3 py-1.5 rounded-full"
                  style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
