'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-28 lg:py-36 px-6 relative overflow-hidden" id="contact">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(0,212,255,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <motion.div className="lg:col-span-7"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Start a Project</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
              Ready to build something<br className="hidden sm:block" />
              <span className="text-white/35">worth investing in?</span>
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/34 mb-8 max-w-[460px]">
              Every project starts with a conversation. Tell us what you&apos;re building
              and we&apos;ll respond with a scope assessment and estimate within 48 hours.
            </p>

            <div className="flex items-center gap-5 mb-10">
              <a href="https://calendly.com/pearllabs" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-[#050508] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                Book a Discovery Call
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a href="mailto:hello@pearllab.io?subject=Project%20Inquiry"
                className="text-[14px] font-medium text-white/35 hover:text-white/55 transition-colors duration-200">
                Send a brief
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Veteran Owned & Operated', 'Custom estimates in 48h', 'No retainers required'].map(item => (
                <span key={item} className="flex items-center gap-2 text-[12px] text-white/18">
                  <span className="w-[3px] h-[3px] rounded-full bg-white/10" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — what to expect */}
          <motion.div className="lg:col-span-5"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1, ease }}>
            <div className="rounded-xl p-7 lg:p-8"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/22 mb-6">
                What to expect
              </div>

              <div className="space-y-5">
                {[
                  { step: '1', title: 'Discovery call', desc: '30-minute conversation about your project, goals, and timeline.' },
                  { step: '2', title: 'Scope & estimate', desc: 'Architecture approach, deliverables, and transparent pricing.' },
                  { step: '3', title: 'Kickoff', desc: 'We begin within 48 hours of approval. No procurement delays.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-3.5">
                    <span className="text-[11px] font-mono font-medium text-white/16 pt-0.5 shrink-0">{item.step}</span>
                    <div>
                      <div className="text-[14px] font-medium text-white/55 mb-0.5">{item.title}</div>
                      <div className="text-[13px] leading-[1.6] text-white/24">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <a href="mailto:hello@pearllab.io" className="text-[13px] text-white/25 hover:text-white/45 transition-colors duration-200 font-mono">
                  hello@pearllab.io
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
