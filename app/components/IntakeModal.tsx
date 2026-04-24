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
    const projectType = String(data.get('projectType') || '')
    const timeline = String(data.get('timeline') || '')
    const budget = String(data.get('budget') || '')
    const existing = String(data.get('existing') || '')
    const reference = String(data.get('reference') || '')
    const message = String(data.get('message') || '')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          service: projectType ? `Brief Request - ${projectType}` : 'Brief Request',
          message: [
            company && `Company: ${company}`,
            projectType && `Project type: ${projectType}`,
            timeline && `Timeline: ${timeline}`,
            budget && `Budget range: ${budget}`,
            reference && `Reference link: ${reference}`,
            existing && `Anything already built: ${existing}`,
            '',
            'What they need built:',
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
              Pearl Labs will review the details and reply within 48 business hours.
            </p>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="modal__title">Request a brief</h2>
            <p id="modal-description" className="modal__subtitle">
              Tell Pearl Labs what you need built. Within 48 business hours, you&apos;ll receive a scoped plan with architecture, timeline, estimated cost, and recommended next steps.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="modal__row">
                <div className="modal__field">
                  <label className="modal__label" htmlFor="intake-name">Name</label>
                  <input ref={nameRef} className="modal__input" type="text" id="intake-name" name="name" placeholder="Your name" required />
                </div>
                <div className="modal__field">
                  <label className="modal__label" htmlFor="intake-email">Email</label>
                  <input className="modal__input" type="email" id="intake-email" name="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div className="modal__field">
                <label className="modal__label" htmlFor="intake-company">Company</label>
                <input className="modal__input" type="text" id="intake-company" name="company" placeholder="Company or organization" />
              </div>
              <div className="modal__row">
                <div className="modal__field">
                  <label className="modal__label" htmlFor="intake-project-type">Project type</label>
                  <select className="modal__input" id="intake-project-type" name="projectType" defaultValue="" required>
                    <option value="" disabled>Select one</option>
                    <option>Website</option>
                    <option>Business Software</option>
                    <option>Workflow Automation</option>
                    <option>Strategic Advisory</option>
                    <option>Defense / Intelligence</option>
                    <option>Legal / Law Enforcement</option>
                    <option>Construction Tech</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="modal__field">
                  <label className="modal__label" htmlFor="intake-timeline">Timeline</label>
                  <select className="modal__input" id="intake-timeline" name="timeline" defaultValue="">
                    <option value="">Not sure yet</option>
                    <option>ASAP</option>
                    <option>2-4 weeks</option>
                    <option>1-3 months</option>
                    <option>3+ months</option>
                  </select>
                </div>
              </div>
              <div className="modal__row">
                <div className="modal__field">
                  <label className="modal__label" htmlFor="intake-budget">Budget range</label>
                  <select className="modal__input" id="intake-budget" name="budget" defaultValue="">
                    <option value="">Prefer to discuss</option>
                    <option>Under $5k</option>
                    <option>$5k-$15k</option>
                    <option>$15k-$40k</option>
                    <option>$40k+</option>
                  </select>
                </div>
                <div className="modal__field">
                  <label className="modal__label" htmlFor="intake-reference">Optional link</label>
                  <input className="modal__input" type="url" id="intake-reference" name="reference" placeholder="Existing site, doc, or reference" />
                </div>
              </div>
              <div className="modal__field">
                <label className="modal__label" htmlFor="intake-build">What do you need built?</label>
                <textarea className="modal__input modal__textarea" id="intake-build" name="message" placeholder="Describe the workflow, system, website, advisory need, or operational problem." required />
              </div>
              <div className="modal__field">
                <label className="modal__label" htmlFor="intake-existing">Anything already built?</label>
                <textarea className="modal__input modal__textarea modal__textarea--short" id="intake-existing" name="existing" placeholder="Current stack, docs, prototype, spreadsheet, or team process." />
              </div>
              <p className="modal__note">No fake discovery maze. The goal is a clear scoped plan, not a sales call loop.</p>
              {state === 'error' && (
                <p style={{ color: '#ff6b6b', fontSize: 'var(--text-small)', marginBottom: 'var(--space-3)' }}>
                  {errorMsg}
                </p>
              )}
              <button type="submit" disabled={state === 'submitting'} className="modal__submit-btn">
                {state === 'submitting' ? 'SENDING...' : 'REQUEST A BRIEF'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
