'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const reduce = useReducedMotion()

  return (
    <section className="w-full relative overflow-hidden py-40 lg:py-56">
      {/* Animated moving grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: reduce ? 'none' : 'gridMove 25s linear infinite',
        }}
      />

      {/* Radial mask to fade grid edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 20%, #050508 70%)',
        }}
      />

      {/* Horizontal light sweep lines */}
      {!reduce && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[15, 40, 65, 85].map((top, i) => (
            <div key={i} className="absolute w-full h-px" style={{ top: `${top}%` }}>
              <div
                className="absolute top-0 w-full h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.15) 20%, rgba(255,255,255,0.08) 50%, rgba(139,92,246,0.12) 80%, transparent 100%)',
                  animation: `lineMove ${5 + i * 1.5}s linear infinite ${i % 2 !== 0 ? 'reverse' : ''}`,
                  animationDelay: `${i * 1.2}s`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-[35%] left-[55%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.07), transparent 60%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[720px] mx-auto px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#00D4FF]/40 mb-6">
            Start Building
          </p>
          <h2
            className="font-display font-bold tracking-[-0.03em] leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
          >
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              One conversation away
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00D4FF] via-white/90 to-[#8B5CF6] bg-clip-text text-transparent">
              from production.
            </span>
          </h2>
          <p className="text-lg text-white/35 leading-relaxed mb-14 max-w-lg mx-auto">
            Tell us what you need built. You&apos;ll talk to the person who builds it.
            Scoped, priced, and ready to start within 48 hours.
          </p>
          <a
            href="/estimate"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#050508] shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            Get an Estimate
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
