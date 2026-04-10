'use client'

import { useEffect, useState, useCallback, useRef } from 'react'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const triggered = useRef(false)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if user has already seen this (localStorage)
    const hasSeenExit = localStorage.getItem('pearl-labs-exit-seen')
    if (hasSeenExit) return

    function handleMouseLeave(e: MouseEvent) {
      // Only trigger if mouse is leaving at the top (going to close/back button)
      if (e.clientY <= 0 && !triggered.current) {
        triggered.current = true
        setShow(true)
        localStorage.setItem('pearl-labs-exit-seen', 'true')
      }
    }

    // Add delay before enabling (don't trigger immediately on page load)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClose = useCallback(() => {
    setShow(false)
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    // Here you would normally send to your email service
    // For now, just open mailto
    window.location.href = `mailto:keegan@pearllab.io?subject=Guide Request&body=Please send me the guide to: ${email}`

    setSubmitted(true)

    // Close after 2 seconds
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [])

  // Escape key to close
  useEffect(() => {
    if (!show) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [show, handleClose])

  if (!show) return null

  return (
    <div
      className="exit-popup-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
      role="presentation"
    >
      <div
        ref={popupRef}
        className="exit-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
      >
        <button
          onClick={handleClose}
          className="exit-popup__close"
          aria-label="Close popup"
          type="button"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h3 id="exit-popup-title" className="exit-popup__title">
              Wait! Before you go...
            </h3>
            <p className="exit-popup__desc">
              Get our free guide: <strong>"5 Questions to Ask Before Building Custom Software"</strong>
            </p>
            <form onSubmit={handleSubmit} className="exit-popup__form">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="exit-popup__input"
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary exit-popup__submit">
                Send Me the Guide
              </button>
            </form>
            <p className="exit-popup__privacy">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="exit-popup__success">
            <div className="exit-popup__check">✓</div>
            <h3>Check your email!</h3>
            <p>We've sent you the guide.</p>
          </div>
        )}
      </div>
    </div>
  )
}
