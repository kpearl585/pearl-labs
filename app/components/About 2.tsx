'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-32 lg:py-48 px-8 md:px-12 lg:px-20 xl:px-32" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Left — statement */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}>
          <span className="text-[13px] font-mono font-medium uppercase tracking-[0.15em] text-white/25 mb-6 block">
            About
          </span>
          <h2 className="font-display font-bold text-white tracking-[-0.04em] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)' }}>
            Founder-led.
            <br />
            <span className="text-white/25">Engineer-built.</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/30 leading-relaxed mb-12 max-w-xl">
            Every project is personally architected, built, and shipped by the founder.
            You work directly with the engineer — no layers, no handoffs, no surprises.
          </p>

          {/* Founder */}
          <div className="flex items-center gap-5">
            <Image src="/founder.png" alt="Keegan Pearl" width={72} height={72}
              className="rounded-2xl object-cover" style={{ width: 72, height: 72 }} />
            <div>
              <div className="text-lg font-semibold text-white/70">Keegan Pearl</div>
              <div className="text-sm text-white/25">Founder &amp; Engineer</div>
            </div>
          </div>
        </motion.div>

        {/* Right — value props */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}>
          <div className="space-y-10 lg:space-y-14">
            {[
              { title: 'Direct communication', desc: 'Talk to the person writing the code. No account managers, no ticket systems.' },
              { title: 'Full code ownership', desc: 'You own the repo, the deployment, and the infrastructure. No vendor lock-in.' },
              { title: 'Production-grade engineering', desc: 'Clean TypeScript, tested, documented. Built to maintain, not just to demo.' },
              { title: 'Fast execution', desc: 'Weeks, not months. Small team means no coordination overhead.' },
            ].map((item, i) => (
              <div key={item.title} className="group">
                <div className="flex items-start gap-6">
                  <span className="text-[13px] font-mono text-white/10 tabular-nums pt-1 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-display font-semibold text-white/55 text-lg lg:text-xl tracking-tight mb-2 group-hover:text-white/80 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-white/22 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
