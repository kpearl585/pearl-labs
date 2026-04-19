'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const services = [
  {
    title: 'Custom Websites',
    price: '$4,500 – $22,000',
    timeline: '3 to 6 weeks',
    desc: 'Next.js sites that load in under a second. Replace Squarespace forever. You own the code and the infrastructure.',
  },
  {
    title: 'Business Software',
    price: '$12,000 – $35,000',
    timeline: '6 to 12 weeks',
    desc: 'Internal tools that replace the spreadsheets, the duct tape, and the three SaaS subscriptions your team forgets to update.',
  },
  {
    title: 'Workflow Automation',
    price: '$8,000 – $25,000',
    timeline: '4 to 8 weeks',
    desc: 'Estimators, pricing engines, document generators. Stop copy-pasting between tools. Let the software do it.',
  },
  {
    title: 'Strategic Advisory',
    price: '$500 audit · $1,500 brief',
    timeline: '2 to 3 days',
    desc: 'Before you spend real money on software, we tell you what you actually need. Audit an existing stack or scope a new build.',
  },
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
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="smb-hero">
          <div className="container">
            <div className="smb-hero__inner">
              <p className="hero__overline">
                <span className="hero__overline-dot" />
                For Small Businesses
              </p>
              <h1 className="smb-hero__headline">
                Small business software, <span className="gradient-text">done right.</span>
              </h1>
              <p className="smb-hero__sub">
                We&apos;re Pearl Labs. Veteran-owned. Based in Ocala, FL. We build custom websites, business software, and automation for small businesses tired of Squarespace, tired of spreadsheets, and tired of agencies that ghost.
              </p>
              <div className="smb-hero__trust">
                <span className="hero__metric-item">
                  <span className="hero__metric-dot" />
                  Veteran Owned
                </span>
                <span className="hero__metric-item">
                  <span className="hero__metric-dot" />
                  SCORE Service Partner
                </span>
                <span className="hero__metric-item">
                  <span className="hero__metric-dot" />
                  Ocala, FL
                </span>
                <span className="hero__metric-item">
                  <span className="hero__metric-dot" />
                  Full Code Ownership
                </span>
              </div>
              <div className="hero__actions">
                <a href="#form" className="btn-primary btn-with-subtext">
                  <span className="btn-main">REQUEST A BRIEF</span>
                  <span className="btn-sub">Scoped plan in 48 hours</span>
                </a>
                <a href="#pricing" className="btn-secondary">
                  SEE PRICING →
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Pain strip */}
        <section className="smb-pain">
          <div className="container">
            <div className="smb-pain__grid">
              <div className="smb-pain__card">
                <p className="smb-pain__title">Your Squarespace just expired.</p>
                <p className="smb-pain__desc">You can&apos;t get into it. The site is down. There&apos;s no backup.</p>
              </div>
              <div className="smb-pain__card">
                <p className="smb-pain__title">Four spreadsheets. Three Chrome tabs.</p>
                <p className="smb-pain__desc">You&apos;re running a real business on tools that don&apos;t talk to each other.</p>
              </div>
              <div className="smb-pain__card">
                <p className="smb-pain__title">The last agency ghosted.</p>
                <p className="smb-pain__desc">You paid real money for a project that never shipped. No one returns your calls.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Services */}
        <section className="smb-services">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <p className="section-label">What We Build</p>
              <h2 className="section-title">Made for operators who need it to work.</h2>
            </div>
            <div className="smb-services__grid">
              {services.map((s) => (
                <div key={s.title} className="smb-svc-card">
                  <h3 className="smb-svc-card__title">{s.title}</h3>
                  <p className="smb-svc-card__price">{s.price}</p>
                  <p className="smb-svc-card__desc">{s.desc}</p>
                  <p className="smb-svc-card__meta">{s.timeline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Proof */}
        <section className="smb-proof">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-16)' }}>
              <p className="section-label">Small Business Proof</p>
              <h2 className="section-title">Real work. Real operators.</h2>
            </div>
            <div className="smb-proof__grid">
              <Link href="/work/ocala-elite-breed" className="smb-proof-card">
                <div className="smb-proof-card__visual">
                  <Image
                    src="/oeb-hero.png"
                    alt="Ocala Elite Breed website"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="smb-proof-card__body">
                  <p className="smb-proof-card__type">Youth Sports Organization</p>
                  <h3 className="smb-proof-card__title">Ocala Elite Breed</h3>
                  <p className="smb-proof-card__desc">
                    From expired Squarespace to a site they own — built in seven days. Seven pages, sponsor tiers, zero recurring fees.
                  </p>
                  <span className="smb-proof-card__link">Read case study →</span>
                </div>
              </Link>
              <Link href="/work/fenceestimatepro" className="smb-proof-card">
                <div className="smb-proof-card__placeholder">
                  <span className="smb-proof-card__placeholder-label">SaaS Platform</span>
                  <span className="smb-proof-card__placeholder-name">FenceEstimatePro</span>
                </div>
                <div className="smb-proof-card__body">
                  <p className="smb-proof-card__type">Contractor SaaS Platform</p>
                  <h3 className="smb-proof-card__title">FenceEstimatePro</h3>
                  <p className="smb-proof-card__desc">
                    Full SaaS platform for fence contractors. Estimates, job tracking, customer portals, digital signatures, Stripe billing. Built from scratch.
                  </p>
                  <span className="smb-proof-card__link">Read case study →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Why us */}
        <section className="smb-why">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <p className="section-label">What&apos;s Different</p>
              <h2 className="section-title">Why small businesses hire us.</h2>
            </div>
            <ul className="smb-why__list">
              {whyUs.map((item, i) => (
                <li key={i} className="smb-why__item">
                  <span className="smb-why__num">{String(i + 1).padStart(2, '0')}</span>
                  <p className="smb-why__text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="divider" />

        {/* Pricing */}
        <section id="pricing" className="smb-pricing">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <p className="section-label">Pricing</p>
              <h2 className="section-title">Honest ranges. Visible upfront.</h2>
              <p className="section-subtitle" style={{ marginInline: 'auto' }}>
                Most projects are fixed-price after the brief. No hourly games. No surprise invoices.
              </p>
            </div>
            <div className="smb-ladder">
              <div className="smb-ladder__header">
                <span>Tier</span>
                <span>Price</span>
                <span>Timeline</span>
                <span>What you get</span>
              </div>
              {ladder.map((row) => (
                <div key={row.tier} className="smb-ladder__row">
                  <span className="smb-ladder__tier">{row.tier}</span>
                  <span className="smb-ladder__price">{row.price}</span>
                  <span className="smb-ladder__timeline">{row.timeline}</span>
                  <span className="smb-ladder__desc">{row.desc}</span>
                </div>
              ))}
            </div>
            <p className="smb-ladder__note">
              Pearl Labs is a SCORE Service Partner. If a SCORE mentor referred you, your 48-hour brief is free — just mention their name on the form below.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* Founder */}
        <section className="smb-founder-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <p className="section-label">Who Builds This</p>
            </div>
            <div className="founder__card">
              <div className="founder__photo">
                <Image
                  src="/founder.png"
                  alt="Keegan Pearl, founder of Pearl Labs"
                  width={88}
                  height={88}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="founder__info">
                <h3 className="founder__name">Keegan Pearl</h3>
                <p className="founder__role">
                  Founder. Veteran. Engineer. Every Pearl Labs project is architected, built, and shipped by one person — not a team of contractors you&apos;ll never meet.
                </p>
                <div className="founder__badges">
                  <span className="founder__badge">Veteran Owned</span>
                  <span className="founder__badge">SCORE Service Partner</span>
                  <span className="founder__badge">Ocala, FL</span>
                  <span className="founder__badge">Available for 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Form */}
        <section id="form" className="smb-form">
          <div className="container">
            <div className="smb-form__inner">
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                <p className="section-label">Get a Brief</p>
                <h2 className="section-title">Tell us what you&apos;re building.</h2>
                <p className="section-subtitle" style={{ marginInline: 'auto' }}>
                  We respond within two business days. No sales calls, no upsell sequences. Just a scoped plan and a fixed-price estimate.
                </p>
              </div>

              {state === 'success' ? (
                <div className="smb-form__success">
                  <h3 className="smb-form__success-title">Got it.</h3>
                  <p className="smb-form__success-desc">
                    We&apos;ll be in touch within two business days with a scoped plan and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="smb-form__form">
                  <div className="smb-form__row">
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="smb-name">Name</label>
                      <input className="modal__input" type="text" id="smb-name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="smb-company">Company</label>
                      <input className="modal__input" type="text" id="smb-company" name="company" placeholder="Optional" />
                    </div>
                  </div>
                  <div className="smb-form__row">
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="smb-email">Email</label>
                      <input className="modal__input" type="email" id="smb-email" name="email" placeholder="you@company.com" required />
                    </div>
                    <div className="modal__field">
                      <label className="modal__label" htmlFor="smb-phone">Phone</label>
                      <input className="modal__input" type="tel" id="smb-phone" name="phone" placeholder="Optional" />
                    </div>
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="smb-industry">Industry</label>
                    <input className="modal__input" type="text" id="smb-industry" name="industry" placeholder="e.g. fence contractor, landscaping, retail, services" />
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="smb-budget">Budget range (optional)</label>
                    <select className="modal__input" id="smb-budget" name="budget" defaultValue="">
                      <option value="">Select a range</option>
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $35,000</option>
                      <option>$35,000 – $75,000</option>
                      <option>Over $75,000</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="smb-message">What are you trying to build?</label>
                    <textarea
                      className="modal__input modal__textarea"
                      id="smb-message"
                      name="message"
                      placeholder="A website? A tool to replace spreadsheets? An estimator? Tell us the problem, not the solution."
                      required
                      rows={5}
                    />
                  </div>
                  <div className="modal__field">
                    <label className="modal__label" htmlFor="smb-mentor">SCORE mentor (if referred)</label>
                    <input
                      className="modal__input"
                      type="text"
                      id="smb-mentor"
                      name="mentor"
                      placeholder="Optional — include your mentor for a free 48-hour brief"
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
                    {state === 'submitting' ? 'SENDING...' : 'REQUEST A BRIEF'}
                  </button>
                  <p className="smb-form__disclaimer">
                    We respond within two business days. No spam. No sales sequences.
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
