'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    category: 'Defense Intelligence',
    name: 'ARGUS AI Platform',
    problem: 'Defense analysts needed a real-time geospatial intelligence tool with AI-driven forecasting and combat modeling.',
    solution: '4D globe with live ADS-B + AIS feeds, Dupuy combat engine, and Claude AI copilot for NATO-grade analysis.',
    result: 'Live',
    resultSub: 'at argusplatform.ai',
    tags: ['CesiumJS', 'PostGIS', 'Claude AI', 'Next.js', 'Python'],
    href: 'https://argusplatform.ai',
    accentColor: '#3b82f6',
    featured: true,
  },
  {
    category: 'SaaS Platform',
    name: 'FenceEstimatePro',
    problem: 'Fence contractors spending 3+ hours per estimate using spreadsheets and guesswork.',
    solution: 'AI-powered estimation engine with material pricing, labor calc, and instant PDF quotes.',
    result: '$1.2K MRR',
    resultSub: 'in first 30 days',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Claude AI'],
    href: 'https://fenceestimatepro.com',
    accentColor: '#16a34a',
    featured: false,
  },
  {
    category: 'Digital Product',
    name: 'ContractorDocuments.com',
    problem: 'Contractors needed affordable, ready-to-use legal document templates without lawyer fees.',
    solution: 'Automated document delivery platform with Stripe checkout and instant PDF access.',
    result: '500+',
    resultSub: 'customers served',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    href: 'https://contractordocuments.com',
    accentColor: '#7c3aed',
    featured: false,
  },
]

export default function Work() {
  const reduce = useReducedMotion()

  return (
    <section className="py-40 px-6" id="work">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-20"
          initial={{ opacity: 1, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(255,255,255,0.25)' }}>Selected work</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Real products.<br />
            <span className="gradient-text">Real revenue.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <motion.a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 1, y: reduce ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.005] flex"
              style={{ background: '#060608', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Left accent bar */}
              <div className="w-1 shrink-0 rounded-l-2xl transition-all duration-500 group-hover:w-1.5"
                style={{ background: `linear-gradient(180deg, ${p.accentColor}, ${p.accentColor}40)` }} />

              {/* Background gradient */}
              <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 80% at 90% 50%, ${p.accentColor}08 0%, transparent 70%)` }} />

              <div className="relative z-10 flex-1 p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
                {/* Main content */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block"
                    style={{ color: p.accentColor }}>
                    {p.category}
                  </span>
                  <h3 className="font-display font-bold text-white mb-5 tracking-tight"
                    style={{ fontSize: p.featured ? 'clamp(2rem, 4vw, 3rem)' : 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                    {p.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2"
                        style={{ color: 'rgba(255,255,255,0.2)' }}>Problem</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {p.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2"
                        style={{ color: 'rgba(255,255,255,0.2)' }}>Solution</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {p.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-[11px] rounded-full px-3 py-1"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result metric */}
                <div className="flex flex-col items-start md:items-end gap-4">
                  <div className="text-left md:text-right">
                    <div className="font-display font-bold text-white tracking-tight"
                      style={{ fontSize: p.featured ? '3rem' : '2.5rem', lineHeight: 1 }}>
                      {p.result}
                    </div>
                    <div className="text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {p.resultSub}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${p.accentColor}12`, border: `1px solid ${p.accentColor}25` }}>
                    <ArrowUpRight className="w-4 h-4" style={{ color: p.accentColor }} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
