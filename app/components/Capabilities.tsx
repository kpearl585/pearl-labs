'use client'
import { motion, useReducedMotion } from 'framer-motion'

const capabilities = [
  { label: 'Frontend', items: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend', items: ['Node.js', 'PostgreSQL', 'Supabase', 'REST / GraphQL'] },
  { label: 'Infrastructure', items: ['Vercel', 'AWS / Cloudflare', 'CI/CD Pipelines', 'Edge Functions'] },
  { label: 'Intelligence', items: ['Claude / GPT-4', 'RAG Pipelines', 'Agent Systems', 'Custom Models'] },
]

export default function Capabilities() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — editorial */}
          <motion.div className="lg:col-span-5"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Capabilities</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Full-stack engineering from
              infrastructure to interface.
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/34 mb-6">
              We own the entire stack. No handoffs to third parties, no gaps
              in execution. Every layer is built, tested, and deployed by our team.
            </p>
            <div className="flex items-center gap-3 text-[12px] text-white/20 font-mono">
              <span>TypeScript-first</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Edge-deployed</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>AI-native</span>
            </div>
          </motion.div>

          {/* Right — grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              {capabilities.map((cap, i) => (
                <motion.div key={cap.label}
                  initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease }}
                  className="p-6 lg:p-7"
                  style={{ background: 'rgba(255,255,255,0.015)' }}
                >
                  <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/22 mb-4">
                    {cap.label}
                  </div>
                  <ul className="space-y-2">
                    {cap.items.map(item => (
                      <li key={item} className="text-[14px] text-white/44 flex items-center gap-2.5">
                        <span className="w-[3px] h-[3px] rounded-full bg-white/12 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
