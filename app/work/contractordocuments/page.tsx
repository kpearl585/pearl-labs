import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import {
  FileText,
  CreditCard,
  Download,
  Library,
  PenLine,
  ShieldCheck,
  Zap,
  Package,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'ContractorDocuments — Pearl Labs',
  description:
    'A document commerce platform for contractors. Buy legally compliant forms — invoices, lien waivers, releases — autofilled with your company info and delivered as PDFs in seconds.',
}

const features = [
  { icon: Library, title: 'Document Library', desc: 'Eleven contractor documents — invoices, lien waivers, releases, subcontractor agreements. Each legally drafted and state-aware where applicable.' },
  { icon: PenLine, title: 'Saved Company Profile', desc: 'Enter your company info once. Every future document autofills your name, address, license number, and contact details.' },
  { icon: CreditCard, title: 'Stripe Checkout', desc: 'Buy documents one-off or bundled. Stripe handles the transaction. No account required to purchase a single doc.' },
  { icon: Download, title: 'Instant PDF Delivery', desc: 'Document generated server-side the moment payment clears. Available for download within seconds of checkout.' },
  { icon: ShieldCheck, title: 'Regression Tested', desc: 'Every autofill path runs through an automated verification harness on every deploy. A broken PDF is an unshippable PDF.' },
  { icon: Package, title: 'Document Bundles', desc: 'Job-based entitlements — buy the full package once, generate unlimited docs for that job. Integrated with FenceEstimatePro job records.' },
]

const stack = [
  'Next.js 14 App Router',
  'TypeScript',
  'Tailwind CSS',
  'Stripe (checkout + webhooks)',
  'jsPDF (server-side generation)',
  'Vercel (hosting + CI/CD)',
  'PostgreSQL (order + entitlement store)',
]

export default function ContractorDocumentsPage() {
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
            <span className="w-6 h-px bg-[#2E6BFF]/40" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#2E6BFF]/70">Document Commerce Platform</span>
          </div>

          <h1 className="font-display font-semibold tracking-[-0.035em] text-white leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            ContractorDocuments
          </h1>
          <p className="text-[16px] leading-[1.7] text-white/40 max-w-[600px] mb-8">
            A commerce platform for contractor paperwork. Buy the document. Autofill it with your company data. Download a legally drafted PDF in under a minute.
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden mb-8"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { label: 'Client', value: 'Pearl Ventures' },
              { label: 'Industry', value: 'Construction' },
              { label: 'Stack', value: 'Next.js / Stripe / jsPDF' },
              { label: 'Status', value: 'Live, active development' },
            ].map(item => (
              <div key={item.label} className="p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/20 mb-1.5">{item.label}</div>
                <div className="text-[14px] font-medium text-white/65">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="https://contractordocuments.com" target="_blank" rel="noopener noreferrer"
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
            Contractors need real documents. Not outdated templates.
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 max-w-[620px] mb-10">
            Every contractor in the country needs lien waivers, invoices, and subcontractor agreements. Most either pay a lawyer $500 per document, copy a free template off a forum, or fight with Microsoft Word every time a new job starts. There was no middle tier — fast, legal, affordable, and auto-populated with their company details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { icon: FileText, title: 'Every job needs paperwork', desc: 'Invoices, lien waivers (conditional and unconditional, partial and final), releases, subcontractor agreements. Miss one and you lose payment rights.' },
              { icon: Zap, title: 'Legal docs are slow and expensive', desc: 'A single lien waiver from a lawyer runs $150–$500. Contractors end up using free templates that expose them legally.' },
              { icon: PenLine, title: 'Autofill is missing', desc: 'Every document needs the same 12 fields — company name, address, license, customer info. Contractors retype it every time.' },
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
            { val: '11 docs', label: 'Live in the library' },
            { val: 'Under 60s', label: 'Purchase to downloadable PDF' },
            { val: '100%', label: 'Autofill regression coverage' },
            { val: 'Weekly', label: 'Ship cadence, still in active dev' },
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
            Have a product like this?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 mb-8">
            We build commerce platforms, document automation, and business software from scratch. Let&apos;s scope yours in 48 hours.
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
