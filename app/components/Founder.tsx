'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function Founder() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const
  const blur = reduce ? 'blur(0px)' : 'blur(12px)'

  return (
    <section className="w-full py-28 lg:py-36 relative" id="about">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04), transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left -- photo */}
          <motion.div
            initial={{ opacity: 0, filter: blur }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}>
            <div className="overflow-hidden aspect-[4/3] lg:aspect-square max-w-md rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <Image
                src="/founder.png"
                alt="Keegan Pearl, Founder of Pearl Labs"
                width={480}
                height={480}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right -- story */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 14, filter: blur }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease }}>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/40 mb-4">
              The Engineer
            </p>
            <h2 className="font-display font-bold text-white tracking-[-0.03em] text-2xl lg:text-4xl mb-6">
              The architect is the engineer.
            </h2>
            <p className="text-base text-white/45 leading-relaxed mb-10 max-w-lg">
              Pearl Labs is founder-led. Every project is personally architected, built,
              and shipped by Keegan Pearl. No agencies, no handoffs, no layers
              between you and the person writing the code.
            </p>
            <div className="space-y-5">
              {[
                'Direct communication with the engineer building your product',
                'Full code ownership -- you own the repo and infrastructure',
                'Veteran-owned, based in Ocala, FL',
              ].map(point => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 shrink-0" />
                  <span className="text-sm text-white/45 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
