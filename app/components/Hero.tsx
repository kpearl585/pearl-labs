'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* Terminal-style code panel — signals technical credibility without screenshots */
function CodePanel() {
  return (
    <div className="rounded-xl overflow-hidden w-full max-w-[420px]"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <span className="w-2 h-2 rounded-full bg-white/8" />
        <span className="w-2 h-2 rounded-full bg-white/8" />
        <span className="w-2 h-2 rounded-full bg-white/8" />
        <span className="ml-3 text-[10px] font-mono text-white/15">build.ts</span>
      </div>
      {/* Code lines */}
      <div className="px-4 py-4 font-mono text-[12px] leading-[1.8] select-none">
        <div><span className="text-white/15">1</span>  <span className="text-[#00D4FF]/50">import</span> <span className="text-white/30">{'{ deploy }'}</span> <span className="text-[#00D4FF]/50">from</span> <span className="text-[#34D399]/40">&apos;@pearl/infra&apos;</span></div>
        <div><span className="text-white/15">2</span>  <span className="text-[#00D4FF]/50">import</span> <span className="text-white/30">{'{ schema }'}</span> <span className="text-[#00D4FF]/50">from</span> <span className="text-[#34D399]/40">&apos;./db&apos;</span></div>
        <div className="text-white/8">3</div>
        <div><span className="text-white/15">4</span>  <span className="text-[#C084FC]/40">const</span> <span className="text-white/35">app</span> <span className="text-white/15">=</span> <span className="text-[#00D4FF]/40">build</span><span className="text-white/20">{'({'}</span></div>
        <div><span className="text-white/15">5</span>    <span className="text-white/25">stack</span><span className="text-white/12">:</span> <span className="text-[#34D399]/40">&apos;next.js&apos;</span><span className="text-white/12">,</span></div>
        <div><span className="text-white/15">6</span>    <span className="text-white/25">auth</span><span className="text-white/12">:</span> <span className="text-[#34D399]/40">&apos;supabase&apos;</span><span className="text-white/12">,</span></div>
        <div><span className="text-white/15">7</span>    <span className="text-white/25">ai</span><span className="text-white/12">:</span> <span className="text-[#34D399]/40">&apos;claude&apos;</span><span className="text-white/12">,</span></div>
        <div><span className="text-white/15">8</span>    <span className="text-white/25">deploy</span><span className="text-white/12">:</span> <span className="text-[#34D399]/40">&apos;vercel&apos;</span></div>
        <div><span className="text-white/15">9</span>  <span className="text-white/20">{'})'}</span></div>
        <div className="text-white/8">10</div>
        <div><span className="text-white/15">11</span> <span className="text-[#00D4FF]/40">deploy</span><span className="text-white/20">(</span><span className="text-white/30">app</span><span className="text-white/20">)</span> <span className="text-white/12">// production in 48h</span></div>
      </div>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 60%)', top: '-15%', left: '-5%' }}
        animate={reduce ? {} : { x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pt-28 lg:pt-32 pb-16 lg:pb-20">

        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.15em] text-white/30">
                Custom Development Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease }}
              className="font-display font-semibold tracking-[-0.035em] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
            >
              <span className="text-white">We engineer the software </span>
              <span className="gradient-text">that drives your business forward.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
              className="text-[16px] leading-[1.75] mb-10 max-w-[500px] text-white/40"
            >
              Pearl Labs builds high-performance websites, SaaS platforms, and
              intelligent systems for companies that need software to work as
              hard as they do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="flex items-center gap-6"
            >
              <a href="#contact"
                className="group inline-flex items-center gap-2 bg-white text-[#050508] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                Request a Build Plan
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a href="#work"
                className="text-[14px] font-medium text-white/35 hover:text-white/60 transition-colors duration-200">
                View case studies
              </a>
            </motion.div>
          </div>

          {/* Right — code panel visual */}
          <motion.div className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}>
            <CodePanel />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {[
            { value: 'Next.js', label: 'Full-stack framework' },
            { value: 'TypeScript', label: 'End-to-end type safety' },
            { value: 'Supabase', label: 'Auth, DB, storage' },
            { value: 'Vercel', label: 'Edge deployment' },
          ].map((s, i) => (
            <div key={s.label} className="py-8 pr-8"
              style={i < 3 ? { borderRight: '1px solid rgba(255,255,255,0.04)' } : {}}>
              <div className="font-display font-semibold text-white/80 text-xl lg:text-2xl tracking-tight">{s.value}</div>
              <div className="text-[11px] mt-1 text-white/22 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
