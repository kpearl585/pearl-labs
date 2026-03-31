'use client'

import { useCallback } from 'react'

export default function CTA() {
  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-intake-modal'))
  }, [])

  return (
    <section className="py-32 text-center relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(ellipse, rgba(46,107,255,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)] relative z-[1]">
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] mb-4">Let&apos;s scope your system.</h2>
        <p className="text-[1.1875rem] text-text-2 max-w-[520px] mx-auto mb-10 leading-[1.6]">One call. A detailed architecture plan and estimate within 48 hours. No sales process. No discovery phase. Just the plan.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={openModal} className="btn-primary">BOOK A SCOPE CALL</button>
          <a href="#proof" className="btn-secondary">VIEW OUR WORK</a>
        </div>
      </div>
    </section>
  )
}
