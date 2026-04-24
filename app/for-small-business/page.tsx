'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NightOpsIcon from '../components/NightOpsIcon'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const services = [
  { title: 'Custom Websites', price: '$4,500 – $22,000', timeline: '3 to 6 weeks', desc: 'Next.js sites that load in under a second. Replace Squarespace forever. You own the code and the infrastructure.' },
  { title: 'Business Software', price: '$12,000 – $35,000', timeline: '6 to 12 weeks', desc: 'Internal tools that replace the spreadsheets, the duct tape, and the three SaaS subscriptions your team forgets to update.' },
  { title: 'Workflow Automation', price: '$8,000 – $25,000', timeline: '4 to 8 weeks', desc: 'Estimators, pricing engines, document generators. Stop copy-pasting between tools. Let the software do it.' },
  { title: 'Strategic Advisory', price: '$500 audit · $1,500 brief', timeline: '2 to 3 days', desc: 'Before you spend real money on software, we tell you what you actually need. Audit an existing stack or scope a new build.' },
]

const whyUs = [
  "We don't do Squarespace, Wix, or WordPress. Real code, real ownership, real speed.",
  'You talk to the engineer writing the code. No account managers, no ticket systems.',
  'Your site loads in under a second. Most business sites load in four.',
  'You own 100% of the code on GitHub. Move hosts in an afternoon.',
  'Weekly staging deploys. Working code every Friday, not slide decks.',
  '48 hours from first call to scoped plan. Not six weeks of discovery.',
]

const ladder = [
  { tier: 'Website Audit', price: '$500', timeline: '3 days', desc: 'Honest review of your current site with a specific plan for what to fix.' },
  { tier: '48-Hour Brief', price: '$1,500', timeline: '2 days', desc: 'Scope, architecture, and fixed-price estimate for your project.' },
  { tier: 'Starter Site', price: '$4,500 – $7,500', timeline: '2–3 weeks', desc: 'Four to six page custom Next.js site. Fast. Yours to own.' },
  { tier: 'Full Website', price: '$10,000 – $22,000', timeline: '3–6 weeks', desc: 'Ten plus pages, CMS, custom design system, integrations.' },
  { tier: 'Business System', price: '$12,000 – $35,000', timeline: '6–12 weeks', desc: 'Internal tool or operations platform. Auth, database, admin.' },
  { tier: 'Advisory Retainer', price: '$2,500 / month', timeline: 'Monthly', desc: 'Ongoing strategic access for decisions that cannot wait.' },
]

export default function SmallBusinessPage() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')
    const form = e.currentTarget
    const data = new FormData(form)
    const mentor = String(data.get('mentor') || '').trim()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          service: mentor ? 'SCORE Referral — Small Business' : 'Small Business',
          budget: data.get('budget'),
          message: [
            `Company: ${data.get('company') || 'Not provided'}`,
            `Industry: ${data.get('industry') || 'Not provided'}`,
            mentor && `SCORE Mentor: ${mentor}`,
            `Source: Small Business page`,
            '',
            'What they need:',
            data.get('message'),
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
    <div className="case-page">
      <Navbar />

      {/* Hero */}
      <section className="case-hero">
        <div className="container">
          <Link href="/" className="case-back">← Back to Pearl Labs</Link>
          <div className="case-hero-cat">For Small Businesses · SCORE Service Partner</div>
          <h1>Small business software,<br />done right.</h1>
          <p className="case-hero-tag">Real code. Full ownership. No agency maze.</p>
          <p className="case-hero-lead">
            Veteran-owned. Based in Ocala, FL. We build custom websites, business software, and automation for small businesses tired of Squarespace, tired of spreadsheets, and tired of agencies that ghost.
          </p>
          <div className="case-ctas">
            <a href="#form" className="case-btn case-btn-primary">
              Request a Brief <NightOpsIcon name="arrow-right" size={14} />
            </a>
            <a href="#pricing" className="case-btn case-btn-ghost">See Pricing</a>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="section-narrow">
        <div className="container">
          <div className="smb-pain-grid">
            <div className="smb-pain-card">
              <p className="smb-pain-title">Your Squarespace just expired.</p>
              <p className="smb-pain-desc">You can&apos;t get into it. The site is down. There&apos;s no backup.</p>
            </div>
            <div className="smb-pain-card">
              <p className="smb-pain-title">Four spreadsheets. Three Chrome tabs.</p>
              <p className="smb-pain-desc">You&apos;re running a real business on tools that don&apos;t talk to each other.</p>
            </div>
            <div className="smb-pain-card">
              <p className="smb-pain-title">The last agency ghosted.</p>
              <p className="smb-pain-desc">You paid real money for a project that never shipped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">// What We Build</span>
            <h2>Made for operators<br />who need it to work.</h2>
          </div>
          <div className="smb-services-grid">
            {services.map((s) => (
              <div key={s.title} className="smb-service-card">
                <h3>{s.title}</h3>
                <p className="smb-service-price">{s.price}</p>
                <p className="smb-service-desc">{s.desc}</p>
                <p className="smb-service-meta">{s.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">// Small Business Proof</span>
            <h2>Real work. Real operators.</h2>
          </div>
          <div className="smb-proof-grid">
            <Link href="/work/ocala-elite-breed" className="smb-proof-card">
              <div className="smb-proof-visual">
                <Image src="/oeb-hero.jpg" alt="Ocala Elite Breed" width={800} height={500} />
              </div>
              <div className="smb-proof-body">
                <div className="case-hero-cat" style={{ marginBottom: 12 }}>Youth Sports</div>
                <h3>Ocala Elite Breed</h3>
                <p>From expired Squarespace to a site they own — built in seven days. Recently relaunched.</p>
                <span className="smb-proof-link">Read case study →</span>
              </div>
            </Link>
            <Link href="/work/fenceestimatepro" className="smb-proof-card">
              <div className="smb-proof-visual">
                <Image src="/fenceestimatepro-hero.jpg" alt="FenceEstimatePro" width={800} height={500} />
              </div>
              <div className="smb-proof-body">
                <div className="case-hero-cat" style={{ marginBottom: 12 }}>Contractor SaaS</div>
                <h3>FenceEstimatePro</h3>
                <p>Full SaaS platform for fence contractors. Estimates, job tracking, customer portals, digital signatures.</p>
                <span className="smb-proof-link">Read case study →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">// What&apos;s Different</span>
            <h2>Why small businesses<br />hire us.</h2>
          </div>
          <ul className="smb-why-list">
            {whyUs.map((item, i) => (
              <li key={i} className="smb-why-item">
                <span className="smb-why-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing ladder */}
      <section id="pricing" className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">// Pricing</span>
            <h2>Honest ranges. Visible upfront.</h2>
            <p className="section-sub">Most projects are fixed-price after the brief. No hourly games. No surprise invoices.</p>
          </div>
          <div className="smb-ladder-table">
            <div className="smb-ladder-header">
              <span>Tier</span>
              <span>Price</span>
              <span>Timeline</span>
              <span>What you get</span>
            </div>
            {ladder.map((row) => (
              <div key={row.tier} className="smb-ladder-row">
                <span className="smb-ladder-tier">{row.tier}</span>
                <span className="smb-ladder-price">{row.price}</span>
                <span className="smb-ladder-timeline">{row.timeline}</span>
                <span className="smb-ladder-desc">{row.desc}</span>
              </div>
            ))}
          </div>
          <p className="smb-ladder-note">
            Pearl Labs is a SCORE Service Partner. If a SCORE mentor referred you, your 48-hour brief is free — just mention their name on the form below.
          </p>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="section-narrow">
        <div className="container">
          <div className="smb-form-wrap">
            <div className="section-head-light" style={{ textAlign: 'center' }}>
              <span className="eyebrow-teal">// Get a Brief</span>
              <h2>Tell us what you&apos;re building.</h2>
              <p className="section-sub">We respond within two business days. No sales calls, no upsell sequences.</p>
            </div>

            {state === 'success' ? (
              <div className="smb-form-success">
                <h3>Got it.</h3>
                <p>We&apos;ll be in touch within two business days with a scoped plan and next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="smb-form">
                <div className="smb-form-row">
                  <div className="smb-field">
                    <label>Name</label>
                    <input name="name" placeholder="Your name" required />
                  </div>
                  <div className="smb-field">
                    <label>Company</label>
                    <input name="company" placeholder="Optional" />
                  </div>
                </div>
                <div className="smb-form-row">
                  <div className="smb-field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="you@company.com" required />
                  </div>
                  <div className="smb-field">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="Optional" />
                  </div>
                </div>
                <div className="smb-field">
                  <label>Industry</label>
                  <input name="industry" placeholder="e.g. fence contractor, landscaping, retail" />
                </div>
                <div className="smb-field">
                  <label>Budget range (optional)</label>
                  <select name="budget" defaultValue="">
                    <option value="">Select a range</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $35,000</option>
                    <option>$35,000 – $75,000</option>
                    <option>Over $75,000</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="smb-field">
                  <label>What are you trying to build?</label>
                  <textarea name="message" placeholder="A website? A tool to replace spreadsheets? An estimator? Tell us the problem, not the solution." required rows={5} />
                </div>
                <div className="smb-field">
                  <label>SCORE mentor (if referred)</label>
                  <input name="mentor" placeholder="Optional — include your mentor for a free 48-hour brief" />
                </div>
                {state === 'error' && (
                  <p className="smb-form-error">{errorMsg}</p>
                )}
                <button type="submit" disabled={state === 'submitting'} className="case-btn case-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {state === 'submitting' ? 'Sending...' : 'Request a Brief'}
                  {state !== 'submitting' && <NightOpsIcon name="arrow-right" size={14} />}
                </button>
                <p className="smb-form-disclaimer">We respond within two business days. No spam. No sales sequences.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
