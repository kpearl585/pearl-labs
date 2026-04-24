'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import NightOpsIcon from '@/app/components/NightOpsIcon'

const PROJECT_TYPES = [
  'Custom Website',
  'SaaS Platform',
  'Internal Tool',
  'AI / Automation',
  'Landing Page',
  'Other',
]

const TIMELINES = [
  'ASAP',
  '1–2 months',
  '3–6 months',
  'Flexible',
]

const BUDGETS = [
  'Under $5K',
  '$5K – $15K',
  '$15K – $50K',
  '$50K+',
  'Not sure yet',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function generateRef(): string {
  return 'PL-' + Date.now().toString(36).toUpperCase().slice(-6)
}

export default function EstimatePage() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [refCode, setRefCode] = useState('')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    timeline: '',
    budget: '',
    brief: '',
  })

  const set = (key: string, val: string) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.projectType,
          budget: form.budget,
          message: [
            form.company && `Company: ${form.company}`,
            `Project type: ${form.projectType}`,
            `Timeline: ${form.timeline || 'Not specified'}`,
            `Budget: ${form.budget || 'Not specified'}`,
            '',
            form.brief,
          ].filter(Boolean).join('\n'),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong.')
      }

      setRefCode(generateRef())
      setState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please email keegan@pearllab.io directly.')
      setState('error')
    }
  }, [form])

  const disabled = state === 'submitting' || !form.name || !form.email || !form.projectType || !form.brief

  return (
    <div className="case-page">
      <Navbar />

      <section className="case-hero">
        <div className="container">
          <Link href="/" className="case-back">← Back to Pearl Labs</Link>
          <div className="case-hero-cat">Project Inquiry · 48-Hour Brief</div>
          <h1>Get an estimate.</h1>
          <p className="case-hero-lead" style={{ maxWidth: 620 }}>
            Tell us about your project. We&apos;ll respond within two business days with a scoped plan and fixed-fee estimate. No sales sequences, no ghosting.
          </p>
        </div>
      </section>

      <section id="form" className="section-narrow">
        <div className="container">
          <div className="smb-form-wrap">
            {state === 'success' ? (
              <div className="smb-form-success">
                <span className="eyebrow-teal">// Received</span>
                <h3 style={{ marginTop: 12 }}>Inquiry received.</h3>
                <p>We&apos;ll review your project and respond within two business days with a scoped plan.</p>
                <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--steel-2)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Ref // {refCode}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="smb-form">
                <div className="brief-form-header">
                  <span>// Intake Form · Estimate</span>
                  <span className="brief-form-channel">
                    <span className="brief-form-channel-dot" />
                    48-Hour Response
                  </span>
                </div>

                <div className="smb-form-row">
                  <div className="smb-field">
                    <label>Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="smb-field">
                    <label>Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => set('company', e.target.value)}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div className="smb-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="smb-field">
                  <label>Project type *</label>
                  <div className="chip-row">
                    {PROJECT_TYPES.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => set('projectType', t)}
                        className={`chip${form.projectType === t ? ' chip--active' : ''}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="smb-field">
                  <label>Timeline</label>
                  <div className="chip-row">
                    {TIMELINES.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => set('timeline', t)}
                        className={`chip${form.timeline === t ? ' chip--active' : ''}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="smb-field">
                  <label>Budget range</label>
                  <div className="chip-row">
                    {BUDGETS.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => set('budget', b)}
                        className={`chip${form.budget === b ? ' chip--active' : ''}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="smb-field">
                  <label>Project brief *</label>
                  <textarea
                    value={form.brief}
                    onChange={e => set('brief', e.target.value)}
                    placeholder="What are you building? What problem does it solve? Any specific requirements?"
                    rows={6}
                    required
                  />
                </div>

                {state === 'error' && <p className="smb-form-error">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={disabled}
                  className="case-btn case-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {state === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  {state !== 'submitting' && <NightOpsIcon name="arrow-right" size={14} />}
                </button>
                <p className="smb-form-disclaimer">
                  Two-business-day response. No spam, no sales sequences.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
