import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import {
  FileText,
  CreditCard,
  Download,
  Library,
  Zap,
  Package,
  ShieldCheck,
  Clock,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'ContractorDocs — Pearl Labs',
  description:
    'An HOA packet builder for fence contractors. Elevation, setback, COI, license, cover letter — merged into one professional PDF, auto-filled from your business, sent to your homeowner in under two minutes.',
}

const features = [
  { icon: Package, title: 'HOA Packet Builder', desc: 'Generate the full packet the HOA review board needs — elevation drawing, setback diagram, certificate of insurance, license, cover letter — merged into one professional PDF.' },
  { icon: Library, title: '13-Template Library', desc: 'Service agreements, change orders, contractor invoices, conditional lien waivers (progress and final), scope of work, and more. Every template legally drafted.' },
  { icon: Zap, title: 'Auto-Fill From Profile', desc: 'Enter your company details once. Every future packet and document fills in your name, address, license number, and contact data automatically.' },
  { icon: CreditCard, title: 'Stripe Subscription', desc: 'Solo plan with a 14-day free trial. No credit card to start. Cancel anytime. Built for fence contractors, priced for fence contractors.' },
  { icon: Download, title: 'Instant PDF + DOCX', desc: 'Packet generated server-side the moment you click build. PDF for the board. DOCX for edits. Delivered within seconds.' },
  { icon: ShieldCheck, title: 'Works With FenceEstimatePro', desc: 'Standalone tool, or connected to FenceEstimatePro job records for one-click packet generation from an active estimate.' },
]

const stack = [
  'Next.js 14 App Router',
  'TypeScript',
  'Tailwind CSS',
  'Stripe (checkout + subscriptions + webhooks)',
  'jsPDF (server-side generation)',
  'Vercel (hosting + CI/CD)',
  'PostgreSQL (profiles + job records)',
]

export default function ContractorDocumentsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/#work" className="text-[13px] text-white/25 hover:text-white/45 transition-colors duration-200 inline-flex items-center gap-1.5 mb-10">
            &larr; Back to Work
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#2E6BFF]/40" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#2E6BFF]/70">HOA Packet SaaS · Pearl Ventures Product</span>
          </div>

          <h1 className="font-display font-semibold tracking-[-0.035em] text-white leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            ContractorDocs
          </h1>
          <p className="text-[18px] leading-[1.6] text-white/55 max-w-[640px] mb-4 font-medium">
            Stop losing fence jobs to HOA rejections.
          </p>
          <p className="text-[15px] leading-[1.7] text-white/40 max-w-[640px] mb-8">
            The HOA packet builder for fence contractors. Elevation, setback, COI, license, cover letter — merged into one professional PDF, auto-filled from your business, sent to your homeowner in under two minutes.
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden mb-8"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { label: 'Client', value: 'Pearl Ventures' },
              { label: 'Industry', value: 'Fence Contracting' },
              { label: 'Stack', value: 'Next.js / Stripe / jsPDF' },
              { label: 'Status', value: 'Live SaaS · contractordocuments.com' },
            ].map(item => (
              <div key={item.label} className="p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/20 mb-1.5">{item.label}</div>
                <div className="text-[14px] font-medium text-white/65">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <a href="https://contractordocuments.com" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-[#0A0F1E] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              View Live SaaS
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link href="/#work" className="text-[14px] font-medium text-white/30 hover:text-white/55 transition-colors duration-200">
              Back to Work
            </Link>
          </div>

          {/* Screenshot */}
          <div className="mt-12 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <Image
              src="/contractordocs-hero.jpg"
              alt="ContractorDocs — HOA packet builder for fence contractors"
              width={1400}
              height={788}
              priority
              className="w-full h-auto"
            />
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
          <h2 className="font-display font-semibold tracking-[-0.03em] text-white mb-4 max-w-[760px]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Fence contractors lose jobs when the HOA packet isn&apos;t right.
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 max-w-[640px] mb-10">
            In a real estate market full of HOAs, a fence contractor who can&apos;t turn around a board-ready packet in under a day watches the customer hire someone who can. The packet is always the same documents — elevation drawing, setback diagram, COI, license, cover letter — but assembling it manually takes hours per job, and half the time the board rejects it for missing a stamp or using last year&apos;s form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { icon: Clock, title: 'Packets take hours per job', desc: 'Copy-pasting between Word, Adobe, and a scanner. Hunt for last-year\'s COI. Redraw the elevation. Bill hours you can\'t pass on.' },
              { icon: FileText, title: 'HOA boards reject for format', desc: 'Wrong cover letter template, missing signature block, expired insurance cert, unclear setback diagram. The rejection doesn\'t say what to fix.' },
              { icon: Zap, title: 'Your competitor sent it yesterday', desc: 'The contractor who submitted a clean packet yesterday already got the approval call. You\'re still drawing the setback diagram.' },
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
            The paperwork layer for jobs that need HOA approval to happen.
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
            { val: '13 docs', label: 'Templates in the library' },
            { val: 'Under 2 min', label: 'Submit-ready HOA packet' },
            { val: '14 days', label: 'Free trial, no credit card' },
            { val: 'Solo plan', label: 'Shipped April 2026' },
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
            Have a niche SaaS you want built?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 mb-8">
            We build commerce platforms, document automation, and workflow SaaS from scratch. Let&apos;s scope yours in 48 hours.
          </p>
          <a href="/estimate"
            className="group inline-flex items-center gap-2 bg-white text-[#0A0F1E] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            Start a Conversation
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
