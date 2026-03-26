'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — founder */}
          <motion.div className="lg:col-span-5"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">About</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Founder-led.<br />
              <span className="text-white/35">Engineer-built.</span>
            </h2>

            <div className="flex items-center gap-4 p-4 rounded-xl mb-6"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Image src="/founder.png" alt="Keegan Pearl" width={48} height={48}
                className="rounded-lg object-cover" style={{ width: 48, height: 48 }} />
              <div>
                <div className="text-[14px] font-semibold text-white/65">Keegan Pearl</div>
                <div className="text-[11px] text-white/22">Founder &middot; Veteran &middot; Ocala, FL</div>
              </div>
            </div>

            <p className="text-[14px] leading-[1.7] text-white/30">
              Every project is personally architected, built, and shipped.
              No outsourced teams. No layers. You work directly with the engineer.
            </p>
          </motion.div>

          {/* Right — value props */}
          <motion.div className="lg:col-span-7"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Direct communication', desc: 'Talk to the person writing the code.' },
                { title: 'Full code ownership', desc: 'You own the repo, deployment, and infrastructure.' },
                { title: 'Production-grade', desc: 'Clean TypeScript. Tested. Documented.' },
                { title: 'Fast execution', desc: 'Weeks, not months. No bureaucracy.' },
              ].map(item => (
                <div key={item.title} className="rounded-xl p-5 lg:p-6 card-hover"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <h3 className="text-[14px] font-semibold text-white/55 mb-1.5 tracking-tight">{item.title}</h3>
                  <p className="text-[12px] leading-[1.6] text-white/24">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
