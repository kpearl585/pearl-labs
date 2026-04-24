'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NightOpsIcon from '../components/NightOpsIcon'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function generateRef(): string {
  return 'PL-' + Date.now().toString(36).toUpperCase().slice(-6)
}

const capabilities = [
  { title: 'Intelligence fusion platforms', desc: 'Architectures that ingest multi-source data and produce a single operational picture for analysts and decision-makers.' },
  { title: 'Decision-support systems', desc: 'Software that helps operators evaluate options under uncertainty, with explicit provenance and calibrated confidence intervals.' },
  { title: 'Audit-grade custom software', desc: 'Applications built under the same discipline we apply to defense work — specifications, traceable decisions, regression testing, production audits.' },
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
  const [refCode, setRefCode] = useState('')

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
      setRefCode(generateRef())
      setState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send.')
      setState('error')
    }
  }, [])

  return (
    <div className="case-page">
      <Navbar />

      <section className="case-hero">
        <div className="container">
          <Link href="/" className="case-back">← Back to Pearl Labs</Link>
          <div className="case-hero-cat">Defense & Enterprise · Secured Intake</div>
          <h1>Briefing request.</h1>
          <p className="case-hero-lead" style={{ maxWidth: 760 }}>
            Pearl Labs briefs prospects evaluating our decision-support, intelligence-platform, and audit-grade custom software work. Briefings cover capabilities, architecture, and engagement model. Sensitive details — program specifics, current client relationships, non-public architecture — are discussed over a secured channel after an initial non-disclosure exchange.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">{'// What We Brief On'}</span>
            <h2>Capability areas.</h2>
          </div>
          <div className="brief-caps">
            {capabilities.map((c, i) => (
              <div key={c.title} className="brief-cap">
                <span className="brief-cap-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">{'// Engineering Principles'}</span>
            <h2>How we build<br />for high-stakes work.</h2>
          </div>
          <ul className="brief-principles">
            {principles.map((p, i) => (
              <li key={i} className="brief-principle">
                <p>{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qualification */}
      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">{'// Qualification'}</span>
            <h2>Who we brief.</h2>
          </div>
          <div className="brief-qual">
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
      </section>

      {/* Form */}
      <section id="form" className="section-narrow">
        <div className="container">
          <div className="brief-form-wrap">
            <div className="section-head-light" style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="eyebrow-teal">{'// Request'}</span>
              <h2>Submit a briefing request.</h2>
              <p className="section-sub">Two business day response. Your information is held in confidence and used only to evaluate the request.</p>
            </div>

            {state === 'success' ? (
              <div className="smb-form-success">
                <span className="eyebrow-teal">{'// Received'}</span>
                <h3 style={{ marginTop: 12 }}>Request submitted.</h3>
                <p>We will review and respond within two business days. If your request involves sensitive material, we will propose a secured channel before further discussion.</p>
                <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line-strong)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--steel-2)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Ref // {refCode}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="smb-form" style={{ marginTop: 0 }}>
                <div className="brief-form-header">
                  <span>{'// Intake Form · v3.0'}</span>
                  <span className="brief-form-channel">
                    <span className="brief-form-channel-dot" />
                    Secure Channel
                  </span>
                </div>
                <div className="smb-form-row">
                  <div className="smb-field">
                    <label>Name</label>
                    <input name="name" placeholder="Full name" required />
                  </div>
                  <div className="smb-field">
                    <label>Role</label>
                    <input name="role" placeholder="Your title or function" required />
                  </div>
                </div>
                <div className="smb-field">
                  <label>Organization</label>
                  <input name="organization" placeholder="Unit, agency, program, or company" required />
                </div>
                <div className="smb-form-row">
                  <div className="smb-field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="organization email preferred" required />
                  </div>
                  <div className="smb-field">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="Optional" />
                  </div>
                </div>
                <div className="smb-field">
                  <label>Sector</label>
                  <select name="sector" defaultValue="">
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
                <div className="smb-field">
                  <label>Timeline</label>
                  <select name="timeline" defaultValue="">
                    <option value="">When do you need to decide?</option>
                    <option>Immediate (within 30 days)</option>
                    <option>This quarter</option>
                    <option>Next quarter</option>
                    <option>Next fiscal year</option>
                    <option>Exploratory — no fixed timeline</option>
                  </select>
                </div>
                <div className="smb-field">
                  <label>Context</label>
                  <textarea name="context" placeholder="What are you trying to do? What problem are you solving? What have you evaluated already? Keep it at the capability level — save specifics for the briefing." required rows={6} />
                </div>
                <div className="smb-field">
                  <label>Referral (optional)</label>
                  <input name="referral" placeholder="Who pointed you to Pearl Labs?" />
                </div>
                {state === 'error' && <p className="smb-form-error">{errorMsg}</p>}
                <button type="submit" disabled={state === 'submitting'} className="case-btn case-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {state === 'submitting' ? 'Submitting...' : 'Submit Briefing Request'}
                  {state !== 'submitting' && <NightOpsIcon name="arrow-right" size={14} />}
                </button>
                <p className="smb-form-disclaimer">Held in confidence. Used only to evaluate the request.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
