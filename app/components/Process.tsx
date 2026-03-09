'use client'
import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Strategy', desc: 'We audit your business goals, audience, and competitive landscape. No templates — every engagement starts with understanding what success looks like for you.' },
  { num: '02', title: 'Architecture', desc: 'System design before a single line of code. Database schema, API contracts, component hierarchy, deployment topology — documented and reviewed.' },
  { num: '03', title: 'Design', desc: 'High-fidelity Figma prototypes. You see exactly what gets built before we build it. Pixel-perfect, interactive, signed off.' },
  { num: '04', title: 'Development', desc: 'Clean TypeScript, tested components, documented APIs. We build what we design — no shortcuts, no technical debt handed to you.' },
  { num: '05', title: 'Deployment', desc: 'Zero-downtime deploy to Vercel, Cloudflare, or your infrastructure. CI/CD pipelines, monitoring, and rollback procedures in place from day one.' },
  { num: '06', title: 'Growth', desc: "Analytics wired up. A/B testing infrastructure ready. We're not done when we ship — we're done when you're winning." },
]

export default function Process() {
  const reduce = useReducedMotion()
  return (
    <section className="py-40 px-6" id="process"
      style={{ background: 'linear-gradient(180deg, #000 0%, #060610 50%, #000 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-20"
          initial={{ opacity: 1, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>The methodology</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            How we work.<br />
            <span className="gradient-text">Why it works.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.5rem', overflow: 'hidden' }}>
          {steps.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 1, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-10 transition-all duration-300 relative"
              style={{ background: '#0A0A0F' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 30%, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <span className="font-display font-bold text-5xl block mb-4"
                  style={{ color: 'rgba(0,212,255,0.25)', lineHeight: 1 }}>
                  {s.num}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
