import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ocala Elite Breed — Pearl Labs',
  description: 'Professional web presence for an elite youth basketball program — built in days, not weeks.',
}

const BLUE  = '#4A9EFF'
const BLACK = '#030507'
const GOLD  = '#C9A84C'

export default function OcalaEliteBreed() {
  return (
    <main style={{ background: BLACK, minHeight: '100vh', fontFamily: 'var(--font-inter), sans-serif', color: '#fff' }}>

      {/* Nav */}
      <div style={{ borderBottom: '1px solid rgba(74,158,255,0.12)', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
            Pearl<span style={{ color: BLUE }}>Labs</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/#work" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Work</Link>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Blog</Link>
            <Link href="/#contact" style={{ background: BLUE, color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, padding: '0.5rem 1.25rem', borderRadius: '6px' }}>Get a Quote</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <Link href="/#work" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
          ← Back to Work
        </Link>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ background: `${GOLD}22`, color: GOLD, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '4px', border: `1px solid ${GOLD}44` }}>
            Sports Organization
          </span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 800, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 1.1, margin: '0 0 1rem' }}>
          Ocala Elite Breed
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.2rem', maxWidth: '640px', lineHeight: 1.6, margin: '0 0 2.5rem' }}>
          Professional web presence for an elite youth basketball program — built in days, not weeks.
        </p>

        {/* Meta row */}
        <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap', background: '#0c1220', border: '1px solid rgba(74,158,255,0.1)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {[
            { label: 'Client', value: 'Ocala Elite Breed' },
            { label: 'Industry', value: 'Youth Sports' },
            { label: 'Stack', value: 'Next.js · Tailwind · Vercel' },
            { label: 'Status', value: 'Live' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '1.25rem 2rem', borderRight: i < 3 ? '1px solid rgba(74,158,255,0.08)' : 'none', flex: '1 1 150px' }}>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{item.label}</div>
              <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://oeb-website.vercel.app" target="_blank" rel="noopener noreferrer" style={{ background: GOLD, color: '#0a0f1e', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            View Live Site →
          </a>
          <Link href="/#work" style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            ← Back to Work
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(74,158,255,0.2), transparent)' }} />
      </div>

      {/* The Challenge */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ color: GOLD, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>The Challenge</p>
            <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1.75rem', color: '#fff', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
              A serious program without a serious web presence.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem' }}>
              The program was running on an expired Squarespace trial. They needed a real website — not another template — to attract sponsors, recruit players, and give the organization the credibility it deserved. Budget was tight. Timeline was tighter.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '⚠️', text: 'Expired Squarespace trial with no real alternative' },
              { icon: '💸', text: 'No sponsor acquisition tools or tiered sponsor system' },
              { icon: '📋', text: 'No centralized place for schedules, tryouts, and program info' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0c1220', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '10px', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{item.icon}</span>
                <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Build */}
      <div style={{ background: '#080d14', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ color: BLUE, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>The Build</p>
          <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1.75rem', color: '#fff', margin: '0 0 2.5rem' }}>
            Seven pages. One week. Zero compromises.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: '7-Page Site', desc: 'Home, About, Programs, Schedule, Tryouts, Sponsors, Contact. Complete web presence from a single project.' },
              { title: 'Brand Identity', desc: 'Deep navy (#0a0f1e) + gold (#C9A84C) color system. Oswald + Inter typography. "Built Different. Bred Elite." brand voice.' },
              { title: 'Sponsor Tiers', desc: 'Community Partner $250, Silver $500, Gold $1,000, Elite Partner $2,500/season. Built-in acquisition system.' },
              { title: 'Tryout Registration', desc: 'Dedicated tryout page with session details, requirements, and contact flow.' },
              { title: 'Mobile First', desc: 'Every page designed for parents checking on their phones at practice.' },
              { title: 'Zero Recurring Costs', desc: 'Deployed on Vercel. No monthly Squarespace fees. Full code ownership.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0c1220', border: '1px solid rgba(74,158,255,0.1)', borderRadius: '12px', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1rem', color: BLUE, margin: '0 0 0.625rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.65, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Bar */}
      <div style={{ background: GOLD, padding: '0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { value: '7 pages', label: 'delivered' },
              { value: '< 1 week', label: 'turnaround' },
              { value: '$0/month', label: 'hosting' },
              { value: '4 tiers', label: 'sponsor system built in' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '2rem', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(10,15,30,0.15)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#0a0f1e', lineHeight: 1 }}>{item.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(10,15,30,0.65)', marginTop: '0.25rem', fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: BLUE, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Tech Stack</p>
            <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#fff', margin: '0 0 1.25rem' }}>Built on tools that last.</h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Next.js 14', 'Tailwind CSS', 'Vercel'].map(tech => (
                <span key={tech} style={{ background: 'rgba(74,158,255,0.1)', color: BLUE, border: '1px solid rgba(74,158,255,0.2)', borderRadius: '6px', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 600 }}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ background: '#0c1220', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ color: GOLD, fontSize: '2rem', lineHeight: 1, marginBottom: '1rem' }}>&ldquo;</div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontSize: '0.975rem', margin: '0 0 1.25rem', fontStyle: 'italic' }}>
              We went from a dead Squarespace page to a professional website that we&apos;re actually proud to send to sponsors and parents. They built it fast, got our brand right, and handed us something we own completely.
            </p>
            <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '1rem' }}>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>Program Director</div>
              <div style={{ color: GOLD, fontSize: '0.8rem' }}>Ocala Elite Breed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ background: '#080d14', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '2rem', color: '#fff', margin: '0 0 1rem' }}>
            Have a project like this?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', lineHeight: 1.7 }}>
            We build fast, clean websites for organizations that need something that actually works — and actually represents them.
          </p>
          <a href="https://pearllab.io/#contact" style={{ display: 'inline-block', background: BLUE, color: '#fff', fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1rem', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none' }}>
            Let&apos;s Talk →
          </a>
        </div>
      </div>

    </main>
  )
}
