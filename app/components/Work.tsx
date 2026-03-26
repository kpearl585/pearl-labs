'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    name: 'FenceEstimatePro',
    desc: 'Full contractor management platform — estimates, job tracking, customer portals, digital signatures.',
    tags: ['Next.js', 'Supabase', 'Stripe'],
    href: '/work/fenceestimatepro',
    icon: '/fenceos-icon.svg',
    status: 'Live',
  },
  {
    name: 'ARGUS AI Platform',
    desc: '4D geospatial intelligence with live data feeds, combat modeling, and AI copilot.',
    tags: ['CesiumJS', 'PostGIS', 'Claude AI'],
    href: 'https://argusplatform.ai',
    icon: null,
    status: 'Live',
  },
  {
    name: 'ContractorDocuments.com',
    desc: 'Document delivery platform — Stripe checkout, instant PDF access, automated fulfillment.',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    href: 'https://contractordocuments.com',
    icon: null,
    status: 'Live',
  },
]

export default function Work() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-32 lg:py-44 px-8 lg:px-16" id="work">
      <div className="max-w-[1440px] mx-auto">

        <motion.div className="mb-16 lg:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-white/20" />
            <span className="text-[12px] font-mono font-medium uppercase tracking-[0.12em] text-white/35">Selected Work</span>
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.035em] leading-[1.0]"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}>
            Real products. Live in production.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => {
            const isInternal = p.href.startsWith('/')
            const Tag = isInternal ? Link : 'a'
            const linkProps = isInternal ? { href: p.href } : { href: p.href, target: '_blank' as const, rel: 'noopener noreferrer' }

            return (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}>
                <Tag {...linkProps}
                  className="group block rounded-2xl p-10 lg:p-12 h-full card-hover"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>

                  {/* Status */}
                  <div className="flex items-center gap-2 mb-10">
                    {p.icon && <Image src={p.icon} alt="" width={18} height={18} className="rounded opacity-50" />}
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                    <span className="text-[11px] font-mono text-white/30">{p.status}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-white/90 text-xl lg:text-2xl tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] leading-[1.65] text-white/30 mb-8">{p.desc}</p>

                  {/* Footer */}
                  <div className="flex items-end justify-between mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="text-[11px] font-mono text-white/16">{t}</span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/16 group-hover:text-white/40 transition-colors duration-300" />
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
