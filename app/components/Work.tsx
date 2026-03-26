'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

/* Structured mock panels — visual proof without real screenshots */
function MockPanel({ type, accent }: { type: 'saas' | 'geo' | 'docs'; accent: string }) {
  if (type === 'saas') {
    return (
      <div className="rounded-lg overflow-hidden w-full" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex items-center gap-1 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white/6" /><span className="w-1.5 h-1.5 rounded-full bg-white/6" /><span className="w-1.5 h-1.5 rounded-full bg-white/6" />
        </div>
        <div className="p-3 space-y-2">
          <div className="flex gap-2">
            <div className="flex-1 h-5 rounded" style={{ background: `${accent}10` }} />
            <div className="w-16 h-5 rounded" style={{ background: `${accent}08` }} />
          </div>
          {[0.7, 0.5, 0.85].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: 'rgba(255,255,255,0.03)' }} />
              <div className="h-3 rounded" style={{ width: `${w * 100}%`, background: 'rgba(255,255,255,0.04)' }} />
              <div className="w-10 h-3 rounded ml-auto" style={{ background: `${accent}12` }} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (type === 'geo') {
    return (
      <div className="rounded-lg overflow-hidden w-full" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="p-3">
          <div className="rounded-md h-20 mb-2 relative" style={{ background: `linear-gradient(135deg, ${accent}06, ${accent}02)` }}>
            {/* Globe-like lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full" style={{ border: `1px solid ${accent}15` }} />
              <div className="absolute w-16 h-8 rounded-full" style={{ border: `1px solid ${accent}10` }} />
            </div>
            {/* Data points */}
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full" style={{ background: `${accent}40` }} />
            <div className="absolute bottom-4 left-6 w-1 h-1 rounded-full" style={{ background: `${accent}30` }} />
            <div className="absolute top-6 left-10 w-1 h-1 rounded-full" style={{ background: `${accent}20` }} />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-3 rounded" style={{ background: 'rgba(255,255,255,0.03)' }} />
            <div className="w-12 h-3 rounded" style={{ background: `${accent}08` }} />
          </div>
        </div>
      </div>
    )
  }
  // docs
  return (
    <div className="rounded-lg overflow-hidden w-full" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="p-3 space-y-2">
        <div className="h-4 rounded w-3/4" style={{ background: `${accent}08` }} />
        <div className="h-3 rounded w-1/2" style={{ background: 'rgba(255,255,255,0.03)' }} />
        <div className="mt-3 p-2 rounded" style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)' }}>
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-2 py-1">
              <div className="w-2.5 h-2.5 rounded" style={{ background: `${accent}15` }} />
              <div className="h-2 rounded flex-1" style={{ background: 'rgba(255,255,255,0.03)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    category: 'SaaS Platform',
    name: 'FenceEstimatePro',
    desc: 'Full contractor management platform with estimate building, job tracking, customer portals, digital signatures, and PDF contract generation.',
    result: 'Live',
    resultSub: 'fenceestimatepro.com',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
    href: '/work/fenceestimatepro',
    accent: '#34D399',
    mockType: 'saas' as const,
  },
  {
    category: 'Geospatial Intelligence',
    name: 'ARGUS AI Platform',
    desc: '4D geospatial intelligence platform with live ADS-B and AIS data feeds, Dupuy combat modeling engine, and AI copilot for analysis.',
    result: 'Live',
    resultSub: 'argusplatform.ai',
    tags: ['CesiumJS', 'PostGIS', 'Claude AI', 'Next.js'],
    href: 'https://argusplatform.ai',
    accent: '#60A5FA',
    mockType: 'geo' as const,
  },
  {
    category: 'Digital Product',
    name: 'ContractorDocuments.com',
    desc: 'Document delivery platform for contractors — Stripe checkout, instant PDF access, and automated fulfillment for legal template packages.',
    result: 'Live',
    resultSub: 'contractordocuments.com',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    href: 'https://contractordocuments.com',
    accent: '#A78BFA',
    mockType: 'docs' as const,
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
                  className="group relative rounded-xl overflow-hidden transition-all duration-500 block"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 40% 50% at 95% 50%, ${p.accent}05 0%, transparent 70%)` }} />

                  <div className="relative z-10 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    {/* Content — left */}
                    <div className="lg:col-span-8">
                      <div className="flex items-start justify-between mb-5 gap-4">
                        <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/25">{p.category}</span>
                        <div className="text-right shrink-0 lg:hidden">
                          <div className="font-display font-semibold text-white/80 text-xl tracking-tight">{p.result}</div>
                          <div className="text-[11px] mt-0.5 text-white/20">{p.resultSub}</div>
                        </div>
                      </div>

                      <h3 className="font-display font-semibold text-white/90 text-xl lg:text-2xl tracking-tight mb-3">{p.name}</h3>
                      <p className="text-[14px] leading-[1.7] text-white/32 max-w-[500px] mb-5">{p.desc}</p>

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

                    {/* Visual — right */}
                    <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-3">
                      <div className="text-right mb-2">
                        <div className="font-display font-semibold text-white/80 text-xl tracking-tight">{p.result}</div>
                        <div className="text-[11px] mt-0.5 text-white/20">{p.resultSub}</div>
                      </div>
                      <MockPanel type={p.mockType} accent={p.accent} />
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
