import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import {
  ClipboardList,
  Link2,
  Kanban,
  Package,
  ShieldCheck,
  FileText,
  Clock,
  Users,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'FenceEstimatePro — Pearl Labs',
  description:
    'How Pearl Labs built a full SaaS contractor management platform — estimates, job tracking, digital signatures, and PDF contracts — from zero to production.',
}

const features = [
  { icon: ClipboardList, title: 'Estimate Builder', desc: 'Line-item estimates with automatic margin calculation. Contractors see their profit before sending the quote.' },
  { icon: Link2, title: 'Customer Portal', desc: 'Branded estimate links sent to customers. Digital signature capture. Legally binding acceptance flow.' },
  { icon: Kanban, title: 'Job Management', desc: 'Kanban board. Status tracking (Scheduled, Active, Complete). Foreman assignment with mobile access.' },
  { icon: Package, title: 'Materials Tracking', desc: 'Full materials catalog with CSV import. Cost tracking. Auto-populated from estimate line items.' },
  { icon: ShieldCheck, title: 'Role-Based Access', desc: 'Owner, Sales, and Foreman roles. Financial data gated to owner only. Foreman sees only what they need on-site.' },
  { icon: FileText, title: 'PDF Generation', desc: 'Professional branded estimate PDFs generated on demand. Signed contract PDFs stored automatically on acceptance.' },
]

const stack = [
  'Next.js 14 App Router', 'TypeScript', 'Tailwind CSS',
  'Supabase (Auth + DB + Storage)', 'Vercel (hosting + CI/CD)',
  'jsPDF (contract generation)', '@dnd-kit (drag-and-drop)', 'Resend (email)',
]

export default function FenceEstimateProPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/#work" className="text-[13px] text-white/25 hover:text-white/45 transition-colors duration-200 inline-flex items-center gap-1.5 mb-10">
            &larr; Back to Work
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#00D4FF]/40" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#00D4FF]/60">SaaS Platform</span>
          </div>

          <h1 className="font-display font-semibold tracking-[-0.035em] text-white leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            FenceEstimatePro
          </h1>
          <p className="text-[16px] leading-[1.7] text-white/40 max-w-[560px] mb-8">
            A full contractor management platform — built from zero to production in weeks.
            Estimates, job tracking, customer portals, and digital signatures in one system.
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden mb-8"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { label: 'Client', value: 'Pearl Ventures' },
              { label: 'Industry', value: 'Fence Contracting' },
              { label: 'Stack', value: 'Next.js / Supabase / Vercel' },
              { label: 'Status', value: 'Live in Production' },
            ].map(item => (
              <div key={item.label} className="p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/20 mb-1.5">{item.label}</div>
                <div className="text-[14px] font-medium text-white/65">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="https://fenceestimatepro.com" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-[#050508] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              View Live Site
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link href="/#work" className="text-[14px] font-medium text-white/30 hover:text-white/55 transition-colors duration-200">
              Back to Work
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Challenge */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">The Challenge</span>
          </div>
          <h2 className="font-display font-semibold tracking-[-0.03em] text-white mb-4 max-w-[700px]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Fence contractors were running their businesses on spreadsheets and paper estimates.
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 max-w-[560px] mb-10">
            No margin visibility, no job tracking, no professional customer-facing documents. Every quote was a guess. Every job was managed in someone&apos;s head.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { icon: Clock, title: 'Manual estimates taking hours', desc: 'Building quotes in Excel — copying and pasting line items, manually calculating margins, emailing PDFs made from scratch every time.' },
              { icon: Users, title: 'No visibility into job profitability', desc: 'Contractors had no real-time view of material costs vs. quoted price. Jobs were won or lost without knowing the actual margin.' },
              { icon: FileText, title: 'No digital paper trail', desc: 'Everything was verbal or paper-based. No formal acceptance, no signed contracts, no record of what was agreed to before work started.' },
            ].map(p => {
              const Icon = p.icon
              return (
                <div key={p.title} className="rounded-xl p-6"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <Icon className="w-[18px] h-[18px] text-white/25 mb-5" strokeWidth={1.5} />
                  <h3 className="text-[14px] font-semibold text-white/65 mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/28">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Solution */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">What We Built</span>
          </div>
          <h2 className="font-display font-semibold tracking-[-0.03em] text-white mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            The Solution
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-xl p-6 lg:p-7"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Icon className="w-[18px] h-[18px] text-white/25 mb-5" strokeWidth={1.5} />
                  <h3 className="text-[14px] font-semibold text-white/65 mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/28">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Results */}
      <section className="py-0">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { val: 'Weeks', label: 'Built in weeks, not months' },
            { val: '3', label: 'User roles, zero data leaks' },
            { val: '< 5 min', label: 'To build an estimate' },
            { val: '100%', label: 'Digital signatures' },
          ].map(r => (
            <div key={r.label} className="py-10 px-6 lg:px-8 text-center" style={{ background: 'rgba(255,255,255,0.01)' }}>
              <div className="font-display font-semibold text-white/80 text-xl lg:text-2xl tracking-tight">{r.val}</div>
              <div className="text-[11px] mt-1.5 text-white/22 font-medium">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Tech Stack */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Tech Stack</span>
          </div>
          <h3 className="font-display font-semibold text-white/85 text-xl tracking-tight mb-6">Under the hood.</h3>
          <div className="flex flex-wrap gap-2">
            {stack.map(s => (
              <span key={s} className="text-[12px] font-mono px-3 py-1.5 rounded-lg text-white/30"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Have a similar project?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 mb-8">
            We build SaaS platforms, contractor tools, and custom web apps. Let&apos;s talk about what you need.
          </p>
          <a href="/estimate"
            className="group inline-flex items-center gap-2 bg-white text-[#050508] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            Start a Conversation
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
