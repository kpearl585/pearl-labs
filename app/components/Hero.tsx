'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Animated accent line at top */}
      <div className="absolute top-0 inset-x-0 h-px overflow-hidden accent-line-animated" />

      {/* Breathing ambient orb */}
      <motion.div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 60%)', top: '-15%', left: '-5%' }}
        animate={reduce ? {} : { x: [0, 20, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} />

      {/* Second orb — violet, very subtle */}
      <motion.div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.025) 0%, transparent 60%)', bottom: '5%', right: '-5%' }}
        animate={reduce ? {} : { x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 8 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pt-28 lg:pt-36 pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: reduce ? 0 : 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-8">
              <motion.span className="h-px bg-white/25"
                initial={{ width: 0 }} animate={{ width: 24 }}
                transition={{ duration: 0.6, delay: 0.2, ease }} />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.15em] text-white/40">
                Custom Development Studio
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease }}
              className="font-display font-semibold tracking-[-0.035em] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}>
              <span className="text-white">Websites, SaaS, and </span>
              <span className="gradient-text">custom software. Built from scratch.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
              className="text-[16px] leading-[1.7] mb-12 max-w-[440px] text-white/45">
              For founders and teams who need real software — not templates.
              Veteran-owned studio in Florida.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="flex items-center gap-6">
              <a href="/estimate"
                className="btn-glow group inline-flex items-center gap-2 bg-white text-[#050508] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]">
                Get an Estimate
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#work" className="text-[14px] font-medium text-white/30 hover:text-white/55 transition-colors duration-300">
                See our work
              </a>
            </motion.div>
          </div>

          {/* Hero visual — subtle hover zoom */}
          <motion.div className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 20, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}>
            <div className="group rounded-xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,212,255,0.06)]"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <Image src="/generated/hero-abstract.jpg" alt="" width={768} height={512}
                className="w-full h-auto opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
                priority aria-hidden="true" />
            </div>
          </motion.div>
        </div>

        {/* Tech strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { value: 'Next.js', label: 'Framework' },
            { value: 'TypeScript', label: 'Language' },
            { value: 'Supabase', label: 'Backend' },
            { value: 'Vercel', label: 'Deploy' },
          ].map((s, i) => (
            <motion.div key={s.label} className="py-8 pr-8"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.06, ease }}
              style={i < 3 ? { borderRight: '1px solid rgba(255,255,255,0.04)' } : {}}>
              <div className="font-display font-semibold text-white/80 text-xl lg:text-2xl tracking-tight">{s.value}</div>
              <div className="text-[11px] mt-1 text-white/20 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
