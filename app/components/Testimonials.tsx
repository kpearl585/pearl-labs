'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function Testimonials() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — positioning */}
          <motion.div className="lg:col-span-5"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">About</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Founder-led.<br />
              <span className="text-white/35">Engineer-built.</span>
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/34 mb-6">
              Pearl Labs is a solo custom development studio run by a veteran software engineer.
              Every project is personally architected, built, and shipped — no handoffs to
              junior developers, no outsourced teams, no layers between you and the person
              writing the code.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {['Veteran owned', 'Ocala, FL', 'Solo engineer'].map(item => (
                <span key={item} className="flex items-center gap-2 text-[12px] text-white/20">
                  <span className="w-[3px] h-[3px] rounded-full bg-white/12" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — what you get */}
          <motion.div className="lg:col-span-7"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Direct communication', desc: 'You talk to the engineer who builds your product. No account managers, no telephone game.' },
                { title: 'Full code ownership', desc: 'You own everything — the repo, the deployment, the infrastructure. No vendor lock-in.' },
                { title: 'Production-grade quality', desc: 'Clean TypeScript, tested components, documented systems. Code you can hand to any developer.' },
                { title: 'Fast execution', desc: 'Weeks, not months. No bureaucracy, no sprint planning theater. Just focused building.' },
              ].map(item => (
                <div key={item.title} className="rounded-xl p-6"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <h3 className="text-[14px] font-semibold text-white/60 mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/28">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
