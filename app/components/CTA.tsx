'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const
  const blur = reduce ? 'blur(0px)' : 'blur(12px)'

  return (
    <section className="w-full py-36 lg:py-52 relative overflow-hidden">
      {/* Grid lines background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Primary glow -- cyan */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08), transparent 65%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      {/* Secondary glow -- violet, offset */}
      <div
        className="absolute top-[30%] left-[55%] w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.07), transparent 65%)',
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[720px] mx-auto px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20, filter: blur }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/40 mb-6">
            Start Building
          </p>
          <h2 className="font-display font-bold text-white tracking-[-0.03em] text-3xl lg:text-5xl xl:text-6xl mb-7 leading-[1.05]">
            One conversation away{' '}
            <br className="hidden lg:block" />
            <span className="gradient-text">from production.</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed mb-14 max-w-lg mx-auto">
            Tell us what you need built. You&apos;ll talk to the person who builds it.
            Scoped, priced, and ready to start within 48 hours.
          </p>
          <a href="/estimate" className="btn-primary group">
            Get an Estimate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
