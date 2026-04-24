import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import NightOpsIcon from '@/app/components/NightOpsIcon'

export const metadata: Metadata = {
  title: 'Ocala Elite Breed — Pearl Labs',
  description:
    'From expired Squarespace to a site they own — professional web presence for an elite youth basketball program. Seven pages, sponsor tiers, zero recurring fees.',
}

const stats = [
  { k: 'Client', v: 'Ocala Elite Breed' },
  { k: 'Industry', v: 'Youth Sports' },
  { k: 'Timeline', v: '< 1 week' },
  { k: 'Stack', v: 'Next.js · Tailwind · Vercel' },
]

const features = [
  'Seven-page site: Home, About, Programs, Schedule, Tryouts, Sponsors, Contact',
  'Brand identity: deep navy + gold system, Oswald + Inter typography',
  'Sponsor tiers: Community Partner $250, Silver $500, Gold $1,000, Elite $2,500/season',
  'Tryout registration with session details, requirements, and contact flow',
  'Mobile-first — every page designed for parents checking phones at practice',
  'Deployed on Vercel, zero monthly Squarespace fees, full code ownership',
]

const stack = ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel']

export default function OcalaEliteBreed() {
  return (
    <div className="case-page">
      <Navbar />

      <section className="case-hero">
        <div className="container">
          <Link href="/#proof" className="case-back">← Back to Work</Link>
          <div className="case-hero-cat">Youth Sports Organization · Client Work</div>
          <h1>Ocala Elite Breed</h1>
          <p className="case-hero-tag">Elite is bred. Not given.</p>
          <p className="case-hero-lead">
            Professional web presence for an elite youth basketball program — built in days, not weeks. From expired Squarespace to a site they own, recently relaunched with a dramatic brand refresh.
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
            <a href="https://www.ocalaelitebreed.com" target="_blank" rel="noopener noreferrer" className="case-btn case-btn-primary">
              View Live Site <NightOpsIcon name="arrow-right" size={14} />
            </a>
            <Link href="/#proof" className="case-btn case-btn-ghost">All Work</Link>
          </div>

          <div className="case-screenshot">
            <Image
              src="/oeb-hero.jpg"
              alt="Ocala Elite Breed website — live product screenshot"
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
              The program was running on an expired Squarespace trial. They needed a real website to attract sponsors, recruit players, and give the organization the credibility it deserved. Budget was tight. Timeline was tighter. No sponsor acquisition tools or tiered sponsor system. No centralized place for schedules, tryouts, and program info.
            </p>
          </div>

          <h3>// System Built</h3>
          <div className="block">
            <p>
              Seven pages in under a week, zero compromises. Complete web presence from a single project — deep navy and gold brand system, Oswald + Inter typography, &ldquo;Built Different. Bred Elite.&rdquo; brand voice. Recently relaunched with a dramatic refresh featuring the &ldquo;Elite is bred. Not given.&rdquo; tagline.
            </p>
            <ul>
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p style={{ marginTop: 24 }}>
              Deployed on Vercel. No monthly Squarespace fees. Full code ownership — they own the repo, the deployment, and the brand.
            </p>
          </div>

          <h3>// Outcome</h3>
          <div className="block">
            <p>
              Shipped to production in under seven days. Four sponsor tiers generating recurring program income. Recently relaunched with a full brand refresh. In active use.
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
          <h2>Have a project like this?</h2>
          <p>Fast, clean websites for organizations that need something that actually works — and actually represents them. Scoped in 48 hours.</p>
          <Link href="/#proof" className="case-btn case-btn-primary">
            Request a Brief <NightOpsIcon name="arrow-right" size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
