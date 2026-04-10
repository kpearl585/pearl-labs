'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

export default function IntakeModal() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handler = () => {
      // Store currently focused element to return focus later
      previousActiveElement.current = document.activeElement as HTMLElement
      setOpen(true)
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('open-intake-modal', handler)
    return () => window.removeEventListener('open-intake-modal', handler)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
    // Return focus to element that opened the modal
    if (previousActiveElement.current) {
      previousActiveElement.current.focus()
    }
  }, [])

  // Focus trap implementation
  useEffect(() => {
    if (!open || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Focus first input on open
    if (nameRef.current) {
      nameRef.current.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes modal
      if (e.key === 'Escape') {
        close()
        return
      }

      // Tab key focus trap
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift+Tab: if on first element, go to last
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab: if on last element, go to first
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
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
        <h2 id="modal-title" className="modal__title">Book a scope call</h2>
        <p id="modal-description" className="modal__subtitle">
          Tell us what you&apos;re building. You&apos;ll have a plan within 48 hours.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="modal__field">
            <label className="modal__label" htmlFor="intake-name">Name</label>
            <input ref={nameRef} className="modal__input" type="text" id="intake-name" name="name" placeholder="Your name" required />
          </div>
          <div className="modal__field">
            <label className="modal__label" htmlFor="intake-company">Company</label>
            <input className="modal__input" type="text" id="intake-company" name="company" placeholder="Company name" />
          </div>
          <div className="modal__field">
            <label className="modal__label" htmlFor="intake-build">What are you trying to build?</label>
            <textarea className="modal__input modal__textarea" id="intake-build" name="message" placeholder="Brief description of your project or need..." required />
          </div>
          <button type="submit" className="btn-primary modal__submit">REQUEST A BUILD PLAN</button>
        </form>
      </div>
    </div>
  )
}
