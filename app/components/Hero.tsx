'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ── Floating glassmorphism shape ── */
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.06]',
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 12 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.2, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1 } }}
      className={`absolute ${className ?? ''}`}
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.06)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Dot grid background with radial mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 40%, transparent 30%, #050508 70%)',
          }}
        />
      </div>

      {/* Ambient glow orbs with parallax */}
      <motion.div style={{ y: reduce ? '0%' : glowY }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.35) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute top-[25%] left-1/2 -translate-x-[30%] w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 65%)',
            filter: 'blur(120px)',
          }}
        />
      </motion.div>

      {/* Floating geometric shapes */}
      {!reduce && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ElegantShape
            delay={0.3}
            width={500}
            height={120}
            rotate={12}
            gradient="from-[rgba(0,212,255,0.12)]"
            className="left-[-8%] top-[18%]"
          />
          <ElegantShape
            delay={0.5}
            width={400}
            height={100}
            rotate={-15}
            gradient="from-[rgba(139,92,246,0.12)]"
            className="right-[-4%] top-[65%]"
          />
          <ElegantShape
            delay={0.4}
            width={250}
            height={70}
            rotate={-8}
            gradient="from-[rgba(139,92,246,0.10)]"
            className="left-[8%] bottom-[12%]"
          />
          <ElegantShape
            delay={0.6}
            width={180}
            height={50}
            rotate={20}
            gradient="from-[rgba(0,212,255,0.08)]"
            className="right-[18%] top-[12%]"
          />
          <ElegantShape
            delay={0.7}
            width={120}
            height={35}
            rotate={-22}
            gradient="from-[rgba(0,212,255,0.06)]"
            className="left-[22%] top-[8%]"
          />
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-transparent to-[#050508]" />

      {/* Content */}
      <motion.div
        style={{ opacity: reduce ? 1 : contentOpacity }}
        className="relative z-10 w-full max-w-[1080px] mx-auto px-8 lg:px-16 text-center py-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
            One engineer. Full stack. Full ownership.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.04em] leading-[1.02] mb-8"
          style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}
        >
          <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            Your entire product.
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#00D4FF] via-white/90 to-[#8B5CF6] bg-clip-text text-transparent">
            One engineer.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg lg:text-xl text-white/40 leading-relaxed mb-14 max-w-2xl mx-auto"
        >
          Pearl Labs is a solo engineering studio. Every project is personally architected,
          built, and shipped by one senior engineer. No teams. No handoffs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/estimate"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#050508] shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            Get an Estimate
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-transparent px-8 py-4 text-[15px] font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:text-white/90 hover:bg-white/[0.03]"
          >
            See our work
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
