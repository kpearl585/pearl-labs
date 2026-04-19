'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function IntakeModal() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<SubmitState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handler = () => {
      previousActiveElement.current = document.activeElement as HTMLElement
      setOpen(true)
      setState('idle')
      setErrorMsg('')
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('open-intake-modal', handler)
    return () => window.removeEventListener('open-intake-modal', handler)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
    if (previousActiveElement.current) {
      previousActiveElement.current.focus()
    }
  }, [])

  useEffect(() => {
    if (!open || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    if (nameRef.current) nameRef.current.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); return }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) { e.preventDefault(); lastElement?.focus() }
        } else {
          if (document.activeElement === lastElement) { e.preventDefault(); firstElement?.focus() }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, close])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const company = String(data.get('company') || '')
    const message = String(data.get('message') || '')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          service: 'Brief Request',
          message: [
            company && `Company: ${company}`,
            '',
            'What they are building:',
            message,
          ].filter(Boolean).join('\n'),
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong.')
      }

      setState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send.')
      setState('error')
    }
  }, [])

  if (!open) return null

  return (
    <div
      className={`modal-overlay${open ? ' active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      style={{ display: 'flex' }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <button
          onClick={close}
          className="modal__close"
          aria-label="Close dialog"
          type="button"
        >
          &times;
        </button>

        {state === 'success' ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
            <h2 id="modal-title" className="modal__title">Got it.</h2>
            <p id="modal-description" className="modal__subtitle" style={{ marginBottom: 0 }}>
              We&apos;ll be in touch within two business days.
            </p>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="modal__title">Request a brief</h2>
            <p id="modal-description" className="modal__subtitle">
              Tell us what you&apos;re building. Scoped plan back within 48 hours.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="modal__field">
                <label className="modal__label" htmlFor="intake-name">Name</label>
                <input ref={nameRef} className="modal__input" type="text" id="intake-name" name="name" placeholder="Your name" required />
              </div>
              <div className="modal__field">
                <label className="modal__label" htmlFor="intake-email">Email</label>
                <input className="modal__input" type="email" id="intake-email" name="email" placeholder="you@company.com" required />
              </div>
              <div className="modal__field">
                <label className="modal__label" htmlFor="intake-company">Company</label>
                <input className="modal__input" type="text" id="intake-company" name="company" placeholder="Optional" />
              </div>
              <div className="modal__field">
                <label className="modal__label" htmlFor="intake-build">What are you trying to build?</label>
                <textarea className="modal__input modal__textarea" id="intake-build" name="message" placeholder="Brief description of your project or need..." required />
              </div>
              {state === 'error' && (
                <p style={{ color: '#ff6b6b', fontSize: 'var(--text-small)', marginBottom: 'var(--space-3)' }}>
                  {errorMsg}
                </p>
              )}
              <button type="submit" disabled={state === 'submitting'} className="btn-primary modal__submit">
                {state === 'submitting' ? 'SENDING...' : 'REQUEST A BRIEF'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
