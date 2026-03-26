'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

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

export default function EstimatePage() {
  const reduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
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

  async function handleSubmit(e: React.FormEvent) {
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
            `Timeline: ${form.timeline}`,
            `Budget: ${form.budget}`,
            '',
            form.brief,
          ].filter(Boolean).join('\n'),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong.')
      }

      setState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please email hello@pearllab.io directly.')
      setState('error')
    }
  }

  return (
    <div className="bg-[#050508] min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-28 lg:pt-32 pb-28 lg:pb-36 px-6">
        <div className="max-w-[720px] mx-auto">

          {/* Header */}
          <motion.div className="mb-12"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}>
            <Link href="/" className="text-[13px] text-white/25 hover:text-white/45 transition-colors duration-200 inline-flex items-center gap-1.5 mb-10">
              &larr; Back
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/25" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.15em] text-white/40">
                Project Inquiry
              </span>
            </div>
            <h1 className="font-display font-semibold text-white tracking-[-0.035em] leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              Get an estimate.
            </h1>
            <p className="text-[15px] leading-[1.7] text-white/38 max-w-[480px]">
              Tell us about your project. We&apos;ll respond within 48 hours with a scope assessment and estimate.
            </p>
          </motion.div>

          {/* Success state */}
          {state === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="rounded-xl p-10 text-center"
              style={{ background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="font-display font-semibold text-white text-xl tracking-tight mb-2">Inquiry sent.</h2>
              <p className="text-[14px] text-white/40 mb-6">
                We&apos;ll review your project and respond within 48 hours.
              </p>
              <Link href="/" className="text-[13px] font-medium text-white/30 hover:text-white/55 transition-colors">
                &larr; Back to Pearl Labs
              </Link>
            </motion.div>
          ) : (
            /* Form */
            <motion.form onSubmit={handleSubmit}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-6">

              {/* Name + Company — side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" required>
                  <input type="text" required value={form.name} onChange={e => set('name', e.target.value)}
                    placeholder="Your name" className="input-field" />
                </Field>
                <Field label="Company">
                  <input type="text" value={form.company} onChange={e => set('company', e.target.value)}
                    placeholder="Optional" className="input-field" />
                </Field>
              </div>

              {/* Email */}
              <Field label="Email" required>
                <input type="email" required value={form.email} onChange={e => set('email', e.target.value)}
                  placeholder="you@company.com" className="input-field" />
              </Field>

              {/* Project type — chip select */}
              <Field label="Project type" required>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map(t => (
                    <button key={t} type="button" onClick={() => set('projectType', t)}
                      className={`text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                        form.projectType === t
                          ? 'bg-white text-[#050508]'
                          : 'text-white/40 hover:text-white/60 hover:bg-white/[0.04]'
                      }`}
                      style={form.projectType !== t ? { border: '1px solid rgba(255,255,255,0.06)' } : { border: '1px solid transparent' }}>
                      {t}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Timeline — chip select */}
              <Field label="Timeline">
                <div className="flex flex-wrap gap-2">
                  {TIMELINES.map(t => (
                    <button key={t} type="button" onClick={() => set('timeline', t)}
                      className={`text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                        form.timeline === t
                          ? 'bg-white text-[#050508]'
                          : 'text-white/40 hover:text-white/60 hover:bg-white/[0.04]'
                      }`}
                      style={form.timeline !== t ? { border: '1px solid rgba(255,255,255,0.06)' } : { border: '1px solid transparent' }}>
                      {t}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Budget — chip select */}
              <Field label="Budget range">
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map(b => (
                    <button key={b} type="button" onClick={() => set('budget', b)}
                      className={`text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                        form.budget === b
                          ? 'bg-white text-[#050508]'
                          : 'text-white/40 hover:text-white/60 hover:bg-white/[0.04]'
                      }`}
                      style={form.budget !== b ? { border: '1px solid rgba(255,255,255,0.06)' } : { border: '1px solid transparent' }}>
                      {b}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Brief */}
              <Field label="Project brief" required>
                <textarea required value={form.brief} onChange={e => set('brief', e.target.value)}
                  placeholder="What are you building? What problem does it solve? Any specific requirements?"
                  rows={4} className="input-field resize-none" />
              </Field>

              {/* Error */}
              {state === 'error' && (
                <div className="text-[13px] text-red-400/80 p-3 rounded-lg"
                  style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.12)' }}>
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button type="submit" disabled={state === 'submitting' || !form.name || !form.email || !form.projectType || !form.brief}
                  className="btn-glow group inline-flex items-center gap-2 bg-white text-[#050508] font-semibold px-6 py-3 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none">
                  {state === 'submitting' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-white/16 pt-2">
                We respond to every inquiry within 48 hours. No spam, no sales sequences.
              </p>
            </motion.form>
          )}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .input-field {
          width: 100%;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 0.5rem;
          padding: 0.625rem 0.875rem;
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input-field::placeholder {
          color: rgba(255,255,255,0.18);
        }
        .input-field:focus {
          border-color: rgba(0,212,255,0.3);
          box-shadow: 0 0 0 3px rgba(0,212,255,0.06);
        }
      `}</style>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[12px] font-medium text-white/35 mb-2">
        {label}{required && <span className="text-white/20 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
