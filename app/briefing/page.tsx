'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const capabilities = [
  {
    title: 'Intelligence fusion platforms',
    desc: 'Architectures that ingest multi-source data and produce a single operational picture for analysts and decision-makers.',
  },
  {
    title: 'Decision-support systems',
    desc: 'Software that helps operators evaluate options under uncertainty, with explicit provenance and calibrated confidence intervals.',
  },
  {
    title: 'Audit-grade custom software',
    desc: 'Applications built under the same discipline we apply to defense work — specifications, traceable decisions, regression testing, production audits.',
  },
]

const principles = [
  'Provenance over precision. Every output traceable to its source.',
  'Uncertainty over false confidence. Probability bands, not point estimates.',
  'Workflow over features. Guided operator paths, not feature dumps.',
  'Ownership over dependency. Clients own the code and the infrastructure.',
]

export default function BriefingPage() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    const referral = String(data.get('referral') || '').trim()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          service: 'Briefing Request',
          message: [
            `Organization: ${data.get('organization') || 'Not provided'}`,
            `Role: ${data.get('role') || 'Not provided'}`,
            `Sector: ${data.get('sector') || 'Not provided'}`,
            `Timeline: ${data.get('timeline') || 'Not specified'}`,
            referral && `Referral: ${referral}`,
            '',
            'Context:',
            data.get('context'),
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

  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="brief-hero">
          <div className="container">
            <div className="brief-hero__inner">
              <Link href="/" className="brief-hero__back">&larr; Back to Pearl Labs</Link>
              <p className="section-label">Defense & Enterprise</p>
              <h1 className="brief-hero__headline">Briefing request.</h1>
              <p className="brief-hero__sub">
                Pearl Labs briefs prospects evaluating our decision-support, intelligence-platform, and audit-grade custom software work. Briefings cover capabilities, architecture, and engagement model. Sensitive details — program specifics, current client relationships, non-public architecture — are discussed over a secured channel after an initial non-disclosure exchange.
              </p>
              <div className="brief-hero__trust">
                <span className="hero__metric-item">
                  <span className="hero__metric-dot" />
                  Veteran Owned
                </span>
                <span className="hero__metric-item">
                  <span className="hero__metric-dot" />
                  Florida Based
                </span>
                <span className="hero__metric-item">
                  <span className="hero__metric-dot" />
                  Two-day Response
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* What we brief on */}
        <section className="brief-capabilities">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-12)' }}>
              <p className="section-label">What We Brief On</p>
              <h2 className="section-title">Capability areas.</h2>
            </div>
            <div className="brief-capabilities__grid">
              {capabilities.map((c, i) => (
                <div key={c.title} className="brief-capability">
                  <span className="brief-capability__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="brief-capability__title">{c.title}</h3>
                    <p className="brief-capability__desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Principles */}
        <section className="brief-principles">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-12)' }}>
              <p className="section-label">Engineering Principles</p>
              <h2 className="section-title">How we build for high-stakes work.</h2>
            </div>
            <ul className="brief-principles__list">
              {principles.map((p, i) => (
                <li key={i} className="brief-principles__item">
                  <span className="brief-principles__marker" />
                  <p>{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="divider" />

        {/* Who we brief */}
        <section className="brief-qualification">
          <div className="container">
            <div className="brief-qualification__inner">
              <p className="section-label">Qualification</p>
              <h2 className="section-title">Who we brief.</h2>
              <div className="brief-qualification__body">
                <p>
                  Briefings are scheduled for organizations with a stated program need, budget authority, and a decision-maker on the call. We prioritize defense and defense-adjacent prospects, enterprise operators with high-stakes decision-support needs, and government customers working through a contracting vehicle.
                </p>
                <p>
                  We do not brief for general curiosity, competitive research, or unpaid consulting. If you&apos;re evaluating Pearl Labs for smaller commercial work, the 48-hour brief at $1,500 is the right entry point — tell us on the form.
                </p>
                <p>
                  We respond to every serious request within two business days with either a scheduled briefing slot or a direct decline. We do not ghost. We do not route you to a junior rep.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Form */}
        <section id="form" className="brief-form">
          <div className="container">
            <div className="brief-form__inner">
              <div style={{ marginBottom: 'var(--space-12)' }}>
                <p className="section-label">Request</p>
                <h2 className="section-title">Submit a briefing request.</h2>
                <p className="section-subtitle">
                  Two business day response. Your information is held in confidence and used only to evaluate the request.
                </p>
              </div>

              {state === 'success' ? (
                <div className="brief-form__success">
                  <p className="section-label" style={{ color: 'var(--accent)' }}>Received</p>
                  <h3 className="brief-form__success-title">Request submitted.</h3>
                  <p className="brief-form__success-desc">
                    We will review and respond within two business days. If your request involves sensitive material, we will propose a secured channel before further discussion.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="brief-form__form">
                  <div className="brief-form__row">
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="brief-name">Name</label>
                      <input className="modal__input" type="text" id="brief-name" name="name" placeholder="Full name" required />
                    </div>
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="brief-role">Role</label>
                      <input className="modal__input" type="text" id="brief-role" name="role" placeholder="Your title or function" required />
                    </div>
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="brief-organization">Organization</label>
                    <input className="modal__input" type="text" id="brief-organization" name="organization" placeholder="Unit, agency, program, or company" required />
                  </div>
                  <div className="brief-form__row">
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="brief-email">Email</label>
                      <input className="modal__input" type="email" id="brief-email" name="email" placeholder="organization email preferred" required />
                    </div>
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="brief-phone">Phone</label>
                      <input className="modal__input" type="tel" id="brief-phone" name="phone" placeholder="Optional" />
                    </div>
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="brief-sector">Sector</label>
                    <select className="modal__input" id="brief-sector" name="sector" defaultValue="">
                      <option value="">Select your sector</option>
                      <option>Department of Defense</option>
                      <option>Defense Contractor (Prime)</option>
                      <option>Defense Contractor (Sub)</option>
                      <option>Federal Civilian Agency</option>
                      <option>State or Local Government</option>
                      <option>Enterprise (Commercial)</option>
                      <option>Research / Academic</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="brief-timeline">Timeline</label>
                    <select className="modal__input" id="brief-timeline" name="timeline" defaultValue="">
                      <option value="">When do you need to decide?</option>
                      <option>Immediate (within 30 days)</option>
                      <option>This quarter</option>
                      <option>Next quarter</option>
                      <option>Next fiscal year</option>
                      <option>Exploratory — no fixed timeline</option>
                    </select>
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="brief-context">Context</label>
                    <textarea
                      className="modal__input modal__textarea"
                      id="brief-context"
                      name="context"
                      placeholder="What are you trying to do? What problem are you solving? What have you evaluated already? Keep it at the capability level — save specifics for the briefing."
                      required
                      rows={6}
                    />
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="brief-referral">Referral (optional)</label>
                    <input
                      className="modal__input"
                      type="text"
                      id="brief-referral"
                      name="referral"
                      placeholder="Who pointed you to Pearl Labs?"
                    />
                  </div>
                  {state === 'error' && (
                    <p style={{ color: '#ff6b6b', fontSize: 'var(--text-small)', marginBottom: 'var(--space-3)' }}>
                      {errorMsg}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {state === 'submitting' ? 'SUBMITTING...' : 'SUBMIT BRIEFING REQUEST'}
                  </button>
                  <p className="brief-form__disclaimer">
                    Held in confidence. Used only to evaluate the request. No marketing sequences. No data sharing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
