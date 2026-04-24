import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import NightOpsIcon from '@/app/components/NightOpsIcon'

export const metadata: Metadata = {
  title: 'ContractorDocs — Pearl Labs',
  description:
    'An HOA packet builder for fence contractors. Elevation, setback, COI, license, cover letter — merged into one professional PDF, auto-filled from your business, sent to your homeowner in under two minutes.',
}

const stats = [
  { k: 'Domain', v: 'Construction Ops' },
  { k: 'Status', v: 'Live SaaS · Shipped' },
  { k: 'Timeline', v: '8 weeks' },
  { k: 'Stack', v: 'Next.js · Stripe · jsPDF' },
]

const features = [
  'HOA packet builder — elevation, setback, COI, license, cover letter merged to one PDF',
  '13-template library: service agreements, change orders, invoices, conditional lien waivers, scope of work',
  'Saved company profile auto-fills every document — enter your info once',
  'Stripe subscription with 14-day free trial, no credit card required',
  'Instant PDF + DOCX output generated server-side',
  'Works standalone or connected to FenceEstimatePro job records',
]

const stack = ['Next.js 14', 'TypeScript', 'Tailwind', 'Stripe (subscriptions + webhooks)', 'jsPDF (server-side)', 'Vercel', 'PostgreSQL']

export default function ContractorDocumentsPage() {
  return (
    <div className="case-page">
      <Navbar />

      <section className="case-hero">
        <div className="container">
          <Link href="/#proof" className="case-back">← Back to Work</Link>
          <div className="case-hero-cat">HOA Packet SaaS · Pearl Ventures Product</div>
          <h1>ContractorDocs</h1>
          <p className="case-hero-tag">Stop losing fence jobs to HOA rejections.</p>
          <p className="case-hero-lead">
            The HOA packet builder for fence contractors. Elevation, setback, COI, license, cover letter — merged into one professional PDF, auto-filled from your business, sent to your homeowner in under two minutes.
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
            <a href="https://contractordocuments.com" target="_blank" rel="noopener noreferrer" className="case-btn case-btn-primary">
              View Live SaaS <NightOpsIcon name="arrow-right" size={14} />
            </a>
            <Link href="/#proof" className="case-btn case-btn-ghost">All Work</Link>
          </div>

          <div className="case-screenshot">
            <Image
              src="/contractordocs-hero.jpg"
              alt="ContractorDocs — HOA packet builder for fence contractors"
              width={1400}
              height={788}
              priority
            />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="case-body-grid">
          <h3>// Problem</h3>
          <div className="block">
            <p>
              In a real estate market full of HOAs, a fence contractor who can&apos;t turn around a board-ready packet in under a day watches the customer hire someone who can. The packet is always the same documents — elevation drawing, setback diagram, COI, license, cover letter — but assembling it manually takes hours per job, and half the time the board rejects it for missing a stamp or using last year&apos;s form.
            </p>
            <p>
              Packets take hours per job. HOA boards reject for format. Your competitor sent it yesterday. Meanwhile you&apos;re still redrawing the setback diagram from scratch.
            </p>
          </div>

          <h3>// System Built</h3>
          <div className="block">
            <p>
              ContractorDocs is a commerce platform for contractor paperwork. Enter your company profile once. Every future document autofills your name, address, license number, and contact data automatically. Buy documents individually or subscribe for the full packet builder. Generated server-side the moment you click build.
            </p>
            <ul>
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p style={{ marginTop: 24 }}>
              Every template is legally drafted. Every autofill path runs through an automated verification harness on every deploy — a broken PDF is an unshippable PDF.
            </p>
          </div>

          <h3>// Outcome</h3>
          <div className="block">
            <p>
              Shipped April 2026. 13 documents in the library. Solo plan with 14-day free trial, no credit card required. In active contractor use — ships weekly.
            </p>
          </div>

          <h3>// Stack</h3>
          <div className="block">
            <div className="case-stack-row">
              {stack.map((s) => <span key={s} className="case-stack-tag">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <section className="case-end-cta">
        <div className="container">
          <h2>Have a niche SaaS you want built?</h2>
          <p>Commerce platforms, document automation, and workflow SaaS from scratch. Scoped in 48 hours.</p>
          <Link href="/#proof" className="case-btn case-btn-primary">
            Request a Brief <NightOpsIcon name="arrow-right" size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
