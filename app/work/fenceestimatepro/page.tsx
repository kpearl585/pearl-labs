import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import {
  Zap,
  Activity,
  ShieldCheck,
  Package,
  FileText,
  Users,
  Kanban,
  Link2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'FenceEstimatePro — Pearl Labs',
  description:
    'A run-based fence estimation SaaS for contractors. FenceGraph engine models the fence run by run, auto-derives post types, calculates exact concrete volume, and locks margin before you touch the quote.',
}

const features = [
  { icon: Activity, title: 'FenceGraph Engine', desc: 'Run-based modeling of the fence. The engine walks each run, derives the right post type at every junction, and calculates exact material quantities. No guessing, no spreadsheet math.' },
  { icon: Zap, title: 'Auto-Derived Quantities', desc: 'Posts, concrete bags, panels, pickets, rails — all calculated from the run geometry the moment you draw it. Contractors see numbers in seconds, not half an hour.' },
  { icon: ShieldCheck, title: 'Margin Lock Before Quote', desc: 'Set your target margin. The engine prices materials and labor, then shows your locked margin % before the customer ever sees a number. Stop losing money on jobs you thought were profitable.' },
  { icon: Package, title: 'Materials Catalog + CSV', desc: 'Full material library with supplier pricing. CSV import for bulk updates when your supplier price changes. Auto-populated into every estimate line item.' },
  { icon: Link2, title: 'Branded Customer Portal', desc: 'Send estimates as branded links. Customers review, sign digitally, and accept — legally binding. The contract PDF is stored automatically on acceptance.' },
  { icon: Kanban, title: 'Jobs Pipeline', desc: 'Kanban board from estimate to install. Scheduled / Active / Complete. Foreman assignment, mobile job access, status tracking end-to-end.' },
  { icon: Users, title: 'Role-Based Access', desc: 'Owner, Sales, Foreman. Financial data gated to owner only. Foreman sees job details without seeing profit margins. Sales sees what sales needs to see.' },
  { icon: FileText, title: 'PDF Quotes + Contracts', desc: 'Professional branded estimate PDFs generated on demand. Signed contracts stored automatically. Nothing gets lost, nothing gets forgotten.' },
]

const stack = [
  'Next.js 14 App Router',
  'TypeScript',
  'Tailwind CSS',
  'Supabase (Auth + Postgres + Storage + RLS)',
  'Vercel (hosting + CI/CD)',
  'Stripe (subscription billing)',
  'jsPDF (contract generation)',
  '@dnd-kit (Kanban drag-drop)',
  'Resend (transactional email)',
]

export default function FenceEstimateProPage() {
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
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#2E6BFF]/70">Run-Based Estimation SaaS · Pearl Ventures Product</span>
          </div>

          <h1 className="font-display font-semibold tracking-[-0.035em] text-white leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            FenceEstimatePro
          </h1>
          <p className="text-[18px] leading-[1.6] text-white/55 max-w-[640px] mb-4 font-medium">
            Stop guessing quantities. Start winning jobs.
          </p>
          <p className="text-[15px] leading-[1.7] text-white/40 max-w-[640px] mb-8">
            The only run-based fence estimation engine. FenceGraph models the fence run by run, auto-derives post types, calculates exact concrete volume, and locks your margin before you ever touch the quote. Contractors finish an estimate in five minutes instead of half an hour.
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden mb-8"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { label: 'Client', value: 'Pearl Ventures' },
              { label: 'Industry', value: 'Fence Contracting' },
              { label: 'Stack', value: 'Next.js / Supabase / Vercel' },
              { label: 'Status', value: 'Live SaaS · fenceestimatepro.com' },
            ].map(item => (
              <div key={item.label} className="p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/20 mb-1.5">{item.label}</div>
                <div className="text-[14px] font-medium text-white/65">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <a href="https://fenceestimatepro.com" target="_blank" rel="noopener noreferrer"
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
              src="/fenceestimatepro-hero.jpg"
              alt="FenceEstimatePro — run-based fence estimation SaaS"
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
            Fence contractors were guessing — and losing margin on every job.
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 max-w-[640px] mb-10">
            Most fence contractors price jobs from a spreadsheet, a calculator, and memory. The result: under-ordered concrete, wrong post counts, panels that don&apos;t fit the run, a margin that looked good on paper and vanished at install. They win the bid and lose money — or they pad the quote and lose the bid to someone faster. Either way, the owner eats the cost.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: 'Half an hour per estimate', desc: 'Measure, calculate posts and panels, copy into Excel, multiply by margin, paste into a Word quote, save as PDF, email. That\'s 30 minutes — per bid.' },
              { title: 'Quantity math is brittle', desc: 'A corner adds two posts. A slope changes concrete. A gate doubles the hardware. Get one of those wrong and the job eats your margin on install day.' },
              { title: 'Margin locked in on the bid', desc: 'By the time the owner sees the real cost, the customer has already signed. There\'s no going back. The only lever left is cutting corners, which costs the next job.' },
            ].map(p => (
              <div key={p.title} className="rounded-xl p-6"
                style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <h3 className="text-[14px] font-semibold text-white/65 mb-2 tracking-tight">{p.title}</h3>
                <p className="text-[13px] leading-[1.65] text-white/28">{p.desc}</p>
              </div>
            ))}
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
          <h2 className="font-display font-semibold tracking-[-0.03em] text-white mb-10 max-w-[760px]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            A run-based estimation engine, wrapped in a full contractor SaaS.
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
            { val: '5 min', label: 'Average estimate time' },
            { val: '47+', label: 'Active contractors' },
            { val: '38%', label: 'Average margin locked' },
            { val: '14 days', label: 'Free trial, no credit card' },
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
            Have a vertical SaaS you want built?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 mb-8">
            We build industry-specific SaaS platforms from scratch — auth, billing, dashboards, custom calculation engines. Let&apos;s scope yours in 48 hours.
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
