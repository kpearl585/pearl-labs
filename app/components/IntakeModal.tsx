'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

export default function IntakeModal() {
  const [open, setOpen] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = () => {
      setOpen(true)
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('open-intake-modal', handler)
    return () => window.removeEventListener('open-intake-modal', handler)
  }, [])

  useEffect(() => {
    if (open && nameRef.current) {
      nameRef.current.focus()
    }
  }, [open])

  const close = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const company = data.get('company') as string
    const message = data.get('message') as string
    const subject = encodeURIComponent('Scope Call Request — ' + (company || name))
    const body = encodeURIComponent('Name: ' + name + '\nCompany: ' + company + '\n\nProject:\n' + message)
    window.location.href = 'mailto:keegan@pearllab.io?subject=' + subject + '&body=' + body
    close()
  }, [close])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div
        className="bg-surface border border-border rounded-2xl p-10 max-w-[480px] w-[90%] relative"
        style={{ animation: 'modalIn 0.3s ease' }}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border bg-bg flex items-center justify-center cursor-pointer text-text-3 text-lg hover:border-border-hover hover:text-text transition-all"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-[clamp(1.25rem,2vw,1.625rem)] font-semibold mb-2">Book a scope call</h2>
        <p className="text-sm text-text-2 mb-8">Tell us what you&apos;re building. You&apos;ll have a plan within 48 hours.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-[0.8125rem] font-medium text-text-3 mb-2 uppercase tracking-[0.06em]" htmlFor="intake-name">Name</label>
            <input ref={nameRef} className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text text-base font-[inherit] outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-glow)]" type="text" id="intake-name" name="name" placeholder="Your name" required />
          </div>
          <div className="mb-5">
            <label className="block text-[0.8125rem] font-medium text-text-3 mb-2 uppercase tracking-[0.06em]" htmlFor="intake-company">Company</label>
            <input className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text text-base font-[inherit] outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-glow)]" type="text" id="intake-company" name="company" placeholder="Company name" />
          </div>
          <div className="mb-5">
            <label className="block text-[0.8125rem] font-medium text-text-3 mb-2 uppercase tracking-[0.06em]" htmlFor="intake-build">What are you trying to build?</label>
            <textarea className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text text-base font-[inherit] outline-none transition-colors focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-glow)] resize-y min-h-[80px]" id="intake-build" name="message" placeholder="Brief description of your project or need..." required />
          </div>
          <button type="submit" className="btn-primary w-full mt-4 justify-center">REQUEST A BUILD PLAN</button>
        </form>
      </div>

      <style jsx>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
