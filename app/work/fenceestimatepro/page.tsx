import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import NightOpsIcon from '@/app/components/NightOpsIcon'

export const metadata: Metadata = {
  title: 'FenceEstimatePro — Pearl Labs',
  description:
    'A run-based fence estimation SaaS. FenceGraph engine models the fence run by run, auto-derives post types, calculates exact concrete volume, and locks your margin before the quote.',
}

const stats = [
  { k: 'Domain', v: 'Construction Tech' },
  { k: 'Status', v: 'Live SaaS · Shipped' },
  { k: 'Timeline', v: '10 weeks' },
  { k: 'Stack', v: 'Next.js · Supabase' },
]

const features = [
  'Run-based fence estimating with linear, corner, and gate segments',
  'FenceGraph engine — auto-derives posts, concrete, panels from run geometry',
  'Margin lock before quote — target % set, engine prices materials and labor',
  'Materials catalog with supplier pricing and CSV import for bulk updates',
  'Branded customer portal with digital signatures and contract PDF storage',
  'Jobs pipeline — Kanban from estimate to install with foreman assignment',
  'Role-based access: Owner / Sales / Foreman — financial data gated to Owner',
  'PDF quotes + contracts generated on demand and stored automatically',
]

const stack = ['Next.js 14', 'TypeScript', 'Tailwind', 'Supabase (Postgres + Auth + RLS)', 'Vercel', 'Stripe', 'jsPDF', '@dnd-kit', 'Resend']

export default function FenceEstimateProPage() {
  return (
    <div className="case-page">
      <Navbar />

      <section className="case-hero">
        <div className="container">
          <Link href="/#proof" className="case-back">← Back to Work</Link>
          <div className="case-hero-cat">Run-Based Estimation SaaS · Pearl Ventures Product</div>
          <h1>FenceEstimatePro</h1>
          <p className="case-hero-tag">Stop guessing quantities. Start winning jobs.</p>
          <p className="case-hero-lead">
            The only run-based fence estimation engine. FenceGraph models the fence run by run, auto-derives post types, calculates exact concrete volume, and locks your margin before you ever touch the quote. Contractors finish an estimate in five minutes instead of half an hour.
          </p>

          <div className="case-stat-row">
            {stats.map((s) => (
              <div key={s.k} className="case-stat">
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="case-ctas">
            <a href="https://fenceestimatepro.com" target="_blank" rel="noopener noreferrer" className="case-btn case-btn-primary">
              View Live SaaS <NightOpsIcon name="arrow-right" size={14} />
            </a>
            <Link href="/#proof" className="case-btn case-btn-ghost">All Work</Link>
          </div>

          <div className="case-screenshot">
            <Image
              src="/fenceestimatepro-hero.jpg"
              alt="FenceEstimatePro — run-based fence estimation SaaS"
              width={1400}
              height={788}
              priority
            />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="case-body-grid">
          <h3>{'// Problem'}</h3>
          <div className="block">
            <p>
              Most fence contractors price jobs from a spreadsheet, a calculator, and memory. The result: under-ordered concrete, wrong post counts, panels that don&apos;t fit the run, and a margin that looked good on paper but vanished at install. They win the bid and lose money — or they pad the quote and lose the bid to someone faster. Either way, the owner eats the cost.
            </p>
            <p>
              Half an hour per estimate. Quantity math is brittle — a corner adds two posts, a slope changes concrete, a gate doubles the hardware. Once the margin is locked into the bid and the customer signs, there&apos;s no going back.
            </p>
          </div>

          <h3>{'// System Built'}</h3>
          <div className="block">
            <p>
              FenceEstimatePro replaces that entire workflow with a run-based estimator. The FenceGraph engine walks each run and derives the right post type at every junction. Posts, concrete bags, panels, pickets, rails — all calculated from the run geometry the moment you draw it. Set your target margin; the engine prices materials and labor, then shows your locked margin percentage before the customer ever sees a number.
            </p>
            <ul>
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p style={{ marginTop: 24 }}>
              Built on Supabase with row-level security, Stripe subscription billing, and Vercel deployments. Every quote generates a branded PDF. Every contract signs digitally and stores automatically.
            </p>
          </div>

          <h3>{'// Outcome'}</h3>
          <div className="block">
            <p>
              Shipped to production as a working construction-tech SaaS. The system turns run geometry into quote-ready material, labor, contract, and payment flows while keeping margin visible before the customer receives the quote.
            </p>
          </div>

          <h3>{'// Stack'}</h3>
          <div className="block">
            <div className="case-stack-row">
              {stack.map((s) => <span key={s} className="case-stack-tag">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <section className="case-end-cta">
        <div className="container">
          <h2>Have a vertical SaaS you want built?</h2>
          <p>Industry-specific SaaS platforms from scratch — auth, billing, dashboards, custom calculation engines. Scoped in 48 hours.</p>
          <Link href="/#proof" className="case-btn case-btn-primary">
            Request a Brief <NightOpsIcon name="arrow-right" size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
