'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function Founder() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="w-full py-20 lg:py-28" id="about">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square max-w-md"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
              <Image
                src="/founder.png"
                alt="Keegan Pearl, Founder of Pearl Labs"
                width={480}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — credibility */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease }}>
            <h2 className="font-display font-semibold text-white tracking-[-0.02em] text-2xl lg:text-3xl mb-5">
              Built by one engineer. Shipped with full ownership.
            </h2>
            <p className="text-base text-white/40 leading-relaxed mb-10 max-w-lg">
              Pearl Labs is founder-led. Every project is personally architected, built, and shipped by Keegan Pearl — no agencies, no handoffs, no layers between you and the person writing the code.
            </p>
            <div className="space-y-5">
              {[
                'Direct communication with the engineer building your product',
                'Full code ownership — you own the repo and infrastructure',
                'Veteran-owned, based in Ocala, FL',
              ].map(point => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
                  <span className="text-[15px] text-white/45 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
