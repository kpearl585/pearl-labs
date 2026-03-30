'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="pt-36 lg:pt-44 pb-24 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — headline + CTA */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease }}
              className="text-[13px] font-mono uppercase tracking-[0.15em] text-white/25 mb-6">
              Custom Development Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.04, ease }}
              className="font-display font-bold tracking-[-0.035em] leading-[1.0] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              We build the software
              <br />
              that <span className="gradient-text">runs your business.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="flex items-center gap-6 mt-10">
              <a href="/estimate"
                className="group inline-flex items-center gap-2.5 bg-white text-[#050508] font-semibold px-7 py-3.5 rounded-lg text-[15px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Get an Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a href="#work" className="text-sm font-medium text-white/25 hover:text-white/50 transition-colors duration-300">
                See our work
              </a>
            </motion.div>
          </div>

          {/* Right — description + credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}>
            <p className="text-lg text-white/35 leading-relaxed mb-8">
              Websites, SaaS platforms, AI systems, and custom business tools — engineered from scratch for founders who need real products, not templates.
            </p>
            <div className="flex items-center gap-5 text-[12px] font-mono text-white/18">
              <span>Veteran Owned</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Ocala, FL</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Est. 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
