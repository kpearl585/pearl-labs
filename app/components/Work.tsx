'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    category: 'SaaS Platform',
    name: 'FenceEstimatePro',
    desc: 'Full contractor management platform with estimate building, job tracking, customer portals, digital signatures, and PDF contract generation.',
    status: 'Live',
    url: 'fenceestimatepro.com',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
    href: '/work/fenceestimatepro',
    icon: '/fenceos-icon.svg',
  },
  {
    category: 'Geospatial Intelligence',
    name: 'ARGUS AI Platform',
    desc: '4D geospatial intelligence platform with live ADS-B and AIS data feeds, Dupuy combat modeling engine, and AI copilot for analysis.',
    status: 'Live',
    url: 'argusplatform.ai',
    tags: ['CesiumJS', 'PostGIS', 'Claude AI', 'Next.js'],
    href: 'https://argusplatform.ai',
    icon: null,
  },
  {
    category: 'Digital Product',
    name: 'ContractorDocuments.com',
    desc: 'Document delivery platform for contractors — Stripe checkout, instant PDF access, and automated fulfillment for legal template packages.',
    status: 'Live',
    url: 'contractordocuments.com',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    href: 'https://contractordocuments.com',
    icon: null,
  },
]

export default function Work() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6" id="work">
      <div className="max-w-[1200px] mx-auto">

        <motion.div className="mb-14 lg:mb-16"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Selected Work</span>
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
            Real products.<br className="hidden sm:block" />
            <span className="text-white/35">Live in production.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
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
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
              >
                <Tag {...linkProps}
                  className="group relative rounded-xl overflow-hidden block card-hover"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="relative z-10 p-8 lg:p-10">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-5 gap-4">
                      <div className="flex items-center gap-3">
                        {p.icon && (
                          <Image src={p.icon} alt="" width={20} height={20} className="rounded opacity-60" />
                        )}
                        <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/25">{p.category}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                          <span className="text-[12px] font-mono font-medium text-white/40">{p.status}</span>
                        </div>
                        <div className="text-[11px] mt-1 text-white/18 font-mono">{p.url}</div>
                      </div>
                    </div>

                    {/* Title + description */}
                    <h3 className="font-display font-semibold text-white/90 text-xl lg:text-2xl tracking-tight mb-3">{p.name}</h3>
                    <p className="text-[14px] leading-[1.7] text-white/32 max-w-[560px] mb-5">{p.desc}</p>

                    {/* Tags + arrow */}
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map(t => (
                          <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded text-white/20"
                            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/[0.04]"
                        style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-white/50 transition-colors duration-300" />
                      </div>
                    </div>
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
