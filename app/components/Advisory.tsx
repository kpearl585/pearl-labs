'use client'

import { useCallback } from 'react'

const cards = [
  { num: '01', title: 'System Design Review', desc: 'We evaluate your product, architecture, or model and identify gaps, risks, and opportunities before they become expensive.' },
  { num: '02', title: 'Positioning & Narrative', desc: 'We refine how your system is presented so it lands with decision-makers, not just builders.' },
  { num: '03', title: 'Execution Strategy', desc: 'We help define what to build next, what to ignore, and how to move forward with clarity.' },
]

export default function Advisory() {
  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <section className="py-24 lg:py-32 relative" id="advisory">
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)] relative z-[1]">
        <div className="text-center mb-16">
          <p className="text-[0.8125rem] font-semibold text-accent tracking-[0.12em] uppercase mb-3">Strategic Advisory</p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.025em] leading-[1.2]">Strategic advisory for high-stakes systems</h2>
          <p className="text-[1.1875rem] text-text-2 leading-[1.6] mt-4 max-w-[560px] mx-auto">Engaged by defense and SaaS companies where the cost of a wrong decision is measured in months, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((c) => (
            <div key={c.num} className="card p-8">
              <p className="text-[0.8125rem] font-bold text-accent mb-4 tracking-[0.08em]">{c.num}</p>
              <h3 className="text-[clamp(1.25rem,2vw,1.625rem)] font-semibold tracking-[-0.01em] mb-3">{c.title}</h3>
              <p className="text-base text-text-2 leading-[1.65]">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-[640px] mx-auto text-center">
          <p className="text-base text-text-2 leading-[1.7]">Applied to real systems, not theory. Used to refine defense-grade modeling platforms and high-level technical documentation.</p>
          <p className="text-text-3 italic mt-6">Available selectively for projects where clarity and execution matter.</p>
          <div className="mt-8">
            <button onClick={openModal} className="inline-flex items-center gap-1.5 bg-transparent border-none text-accent text-sm font-medium cursor-pointer hover:text-accent-hover transition-colors tracking-[0.02em] p-0">
              INQUIRE ABOUT ADVISORY
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
