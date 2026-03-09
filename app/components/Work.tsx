'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    category: 'SaaS Platform',
    name: 'FenceEstimatePro',
    problem: 'Fence contractors were spending 3 hours per estimate using spreadsheets and guesswork.',
    solution: 'AI-powered estimation engine with material pricing, labor calc, and instant PDF quotes.',
    result: '$1.2K MRR',
    resultSub: 'in first 30 days',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Claude AI'],
    href: 'https://fenceestimatepro.com',
    accentColor: '#16a34a',
    bgGradient: 'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(22,163,74,0.08) 0%, transparent 70%)',
  },
  {
    category: 'Defense Intelligence',
    name: 'ARGUS AI Platform',
    problem: 'Defense analysts needed a real-time geospatial intelligence tool with AI forecasting.',
    solution: '4D globe with live ADS-B + AIS feeds, Dupuy combat engine, and Claude AI copilot.',
    result: 'Live',
    resultSub: 'at argusplatform.ai',
    tags: ['CesiumJS', 'PostGIS', 'Claude AI', 'Next.js'],
    href: 'https://argusplatform.ai',
    accentColor: '#3b82f6',
    bgGradient: 'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)',
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
    bgGradient: 'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)',
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Selected work</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Real products.<br />
            <span className="gradient-text">Real revenue.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {projects.map((p, i) => (
            <motion.a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 1, y: reduce ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              style={{ background: '#060606', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500"
                style={{ background: p.bgGradient }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: p.bgGradient.replace('0.08', '0.14') }} />

              <div className="relative z-10 p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/* Left: Problem/Solution */}
                <div className="md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3 block"
                    style={{ color: p.accentColor + '99' }}>{p.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{p.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: 'rgba(255,255,255,0.2)' }}>The problem</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: 'rgba(255,255,255,0.2)' }}>The solution</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.solution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs rounded-full px-3 py-1"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Result */}
                <div className="flex flex-col items-start md:items-end justify-between h-full gap-6">
                  <div className="text-left md:text-right">
                    <div className="font-display font-bold text-white" style={{ fontSize: '2.5rem' }}>{p.result}</div>
                    <div className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.resultSub}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: p.accentColor + '15', border: `1px solid ${p.accentColor}30` }}>
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
