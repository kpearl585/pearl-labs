'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProductPair() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="px-8 md:px-12 lg:px-20 xl:px-32 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        {/* ARGUS — dominant, 7 columns */}
        <motion.a
          href="https://argusplatform.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group lg:col-span-7 relative rounded-2xl lg:rounded-3xl overflow-hidden"
          style={{ background: 'rgba(139,92,246,0.03)', border: '1px solid rgba(139,92,246,0.08)' }}
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}>
          <div className="p-10 lg:p-14 min-h-[360px] lg:min-h-[440px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-400/50" />
                  <span className="text-[13px] font-mono text-white/25">Live</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="font-display font-bold text-white/90 tracking-[-0.03em] leading-[0.95] mb-4 group-hover:text-white transition-colors duration-300"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
                ARGUS
              </h3>
              <p className="text-lg text-white/25 max-w-md">
                4D geospatial intelligence platform with real-time data feeds, combat modeling, and AI copilot.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12">
              {['CesiumJS', 'PostGIS', 'Claude AI', 'Real-time'].map(t => (
                <span key={t} className="text-[11px] font-mono text-violet-300/20 px-3 py-1.5 rounded-full"
                  style={{ border: '1px solid rgba(139,92,246,0.1)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 60%)' }} />
        </motion.a>

        {/* ContractorDocuments — supporting, 5 columns */}
        <motion.a
          href="https://contractordocuments.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group lg:col-span-5 relative rounded-2xl lg:rounded-3xl overflow-hidden"
          style={{ background: 'rgba(52,211,153,0.02)', border: '1px solid rgba(52,211,153,0.06)' }}
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease }}>
          <div className="p-10 lg:p-14 min-h-[360px] lg:min-h-[440px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
                  <span className="text-[13px] font-mono text-white/25">Live</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="font-display font-bold text-white/90 tracking-[-0.03em] leading-[0.95] mb-4 group-hover:text-white transition-colors duration-300"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}>
                Contractor
                <br />
                Documents
              </h3>
              <p className="text-base text-white/25 max-w-sm">
                Document delivery platform. Stripe checkout, instant PDF access, automated fulfillment.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12">
              {['Next.js', 'Stripe', 'Vercel'].map(t => (
                <span key={t} className="text-[11px] font-mono text-emerald-300/20 px-3 py-1.5 rounded-full"
                  style={{ border: '1px solid rgba(52,211,153,0.08)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Ambient glow */}
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(circle at 20% 80%, rgba(52,211,153,0.05) 0%, transparent 60%)' }} />
        </motion.a>
      </div>
    </section>
  )
}
