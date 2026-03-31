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
      className={`modal-overlay${open ? ' active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      style={{ display: 'flex' }}
    >
      <div className="modal">
        <button onClick={close} className="modal__close" aria-label="Close">&times;</button>
        <h2 className="modal__title">Book a scope call</h2>
        <p className="modal__subtitle">Tell us what you&apos;re building. You&apos;ll have a plan within 48 hours.</p>
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
