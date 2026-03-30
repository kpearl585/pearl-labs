'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="w-full pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease }}
              className="text-[13px] font-mono uppercase tracking-[0.15em] text-white/30 mb-5">
              Custom Development Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.04, ease }}
              className="font-display font-bold tracking-[-0.035em] leading-[1.05] text-white mb-6"
              style={{ fontSize: 'clamp(2.75rem, 4.5vw, 4.25rem)' }}>
              We build the software that runs your business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="text-lg text-white/40 leading-relaxed mb-10 max-w-lg">
              Websites, SaaS platforms, and custom tools — engineered from scratch for founders who need real products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12, ease }}
              className="flex items-center gap-6">
              <a href="/estimate"
                className="group inline-flex items-center gap-2.5 bg-white text-[#050508] font-semibold px-7 py-3.5 rounded-lg text-[15px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                Get an Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a href="#products" className="text-[15px] font-medium text-white/30 hover:text-white/60 transition-colors duration-300">
                See our work
              </a>
            </motion.div>
          </div>

          {/* Right column — visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.06) 50%, rgba(52,211,153,0.04) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
              <div className="w-full h-full flex flex-col justify-end p-10">
                <div className="space-y-3">
                  <div className="h-2.5 w-3/4 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  <div className="h-2.5 w-1/2 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }} />
                  <div className="h-2.5 w-2/3 rounded-full" style={{ background: 'rgba(255,255,255,0.03)' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
