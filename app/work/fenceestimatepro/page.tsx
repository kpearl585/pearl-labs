'use client'
import Link from 'next/link'

const BLUE  = '#4A9EFF'
const BLACK = '#030507'
const DARK  = '#080d14'
const CARD  = '#0c1220'

export default function FenceEstimateProPage() {
  const features = [
    { icon: '📋', title: 'Estimate Builder', desc: 'Line-item estimates with automatic margin calculation. Contractors see their profit before sending the quote.' },
    { icon: '🔗', title: 'Customer Portal', desc: 'Branded estimate links sent to customers. Digital signature capture. Legally binding acceptance flow.' },
    { icon: '📌', title: 'Job Management', desc: 'Kanban board. Status tracking (Scheduled → Active → Complete). Foreman assignment with mobile access.' },
    { icon: '📦', title: 'Materials Tracking', desc: 'Full materials catalog with CSV import. Cost tracking. Auto-populated from estimate line items.' },
    { icon: '🔐', title: 'Role-Based Access', desc: 'Owner, Sales, and Foreman roles. Financial data gated to owner only. Foreman sees only what they need on-site.' },
    { icon: '📄', title: 'PDF Generation', desc: 'Professional branded estimate PDFs generated on demand. Signed contract PDFs stored automatically on acceptance.' },
  ]

  const stack = [
    'Next.js 14 App Router', 'TypeScript', 'Tailwind CSS',
    'Supabase (Auth + DB + Storage)', 'Vercel (hosting + CI/CD)',
    'jsPDF (contract generation)', '@dnd-kit (drag-and-drop kanban)', 'Resend (transactional email)',
  ]

  return (
    <div style={{ background: BLACK, minHeight: '100vh', color: '#fff' }}>

      {/* ── Minimal Header ── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 99, background: 'rgba(3,5,7,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(74,158,255,0.1)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <svg viewBox="0 0 40 40" fill="none" width="30" height="30">
              <circle cx="20" cy="20" r="18" stroke={BLUE} strokeWidth="1.5" opacity="0.4"/>
              <circle cx="20" cy="20" r="10" fill={BLUE} opacity="0.15"/>
              <circle cx="20" cy="20" r="5"  fill={BLUE} opacity="0.8"/>
              <circle cx="20" cy="20" r="2"  fill="#fff"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>
              Pearl<span style={{ color: BLUE }}>Labs</span>
            </span>
          </Link>
          <Link href="/#work" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}>
            ← Back to Work
          </Link>
        </div>
      </header>

      {/* ── 1. HERO ── */}
      <section style={{ position: 'relative', padding: 'clamp(5rem,10vw,8rem) 2rem clamp(4rem,8vw,6rem)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(74,158,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse, rgba(74,158,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(74,158,255,0.1)', border: '1px solid rgba(74,158,255,0.25)', borderRadius: '100px', padding: '0.35rem 1rem', marginBottom: '1.75rem' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: BLUE, letterSpacing: '0.1em', fontWeight: 500 }}>SAAS PLATFORM</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: 'clamp(3rem,7vw,6rem)', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            FenceEstimatePro
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem,1.5vw,1.25rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2.5rem' }}>
            A full contractor management platform — built from zero to production in weeks.
          </p>

          {/* Meta row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              ['Client', 'Pearl Ventures'],
              ['Industry', 'Fence Contracting'],
              ['Stack', 'Next.js · Supabase · Vercel'],
              ['Status', '✅ Live in Production'],
            ].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>{val}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://fenceestimatepro.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.95rem', background: BLUE, color: '#fff', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 0 30px rgba(74,158,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              View Live Site →
            </a>
            <Link href="/#work" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              ← Back to Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. THE PROBLEM ── */}
      <section style={{ background: DARK, padding: 'clamp(4rem,8vw,7rem) 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: BLUE, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>THE CHALLENGE</div>
          <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#fff', letterSpacing: '-0.02em', marginBottom: '1.5rem', maxWidth: '800px' }}>
            Fence contractors were running their businesses on spreadsheets and paper estimates.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '3rem' }}>
            No margin visibility, no job tracking, no professional customer-facing documents. Every quote was a guess. Every job was managed in someone&apos;s head.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '⏱️', title: 'Manual estimates taking hours', desc: 'Building quotes in Excel — copying and pasting line items, manually calculating margins, emailing PDFs made from scratch every time.' },
              { icon: '📉', title: 'No visibility into job profitability', desc: "Contractors had no real-time view of material costs vs. quoted price. Jobs were won or lost without knowing the actual margin." },
              { icon: '📁', title: 'No digital paper trail for customers', desc: "Everything was verbal or paper-based. No formal acceptance, no signed contracts, no record of what was agreed to before work started." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '2rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.625rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE SOLUTION ── */}
      <section style={{ background: BLACK, padding: 'clamp(4rem,8vw,7rem) 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: BLUE, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>WHAT WE BUILT</div>
          <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#fff', letterSpacing: '-0.02em', marginBottom: '3.5rem' }}>The Solution</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: CARD, padding: '2.25rem', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0f1928')}
                onMouseLeave={e => (e.currentTarget.style.background = CARD)}>
                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE RESULTS ── */}
      <section style={{ background: 'linear-gradient(135deg, #051020 0%, #030d1a 100%)', padding: 'clamp(4rem,8vw,7rem) 2rem', borderTop: '1px solid rgba(74,158,255,0.15)', borderBottom: '1px solid rgba(74,158,255,0.15)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: BLUE, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>OUTCOMES</div>
            <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#fff', letterSpacing: '-0.02em' }}>The Results</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { val: 'Weeks', label: 'Built in weeks, not months' },
              { val: '3', label: 'User roles, zero data leaks' },
              { val: '< 5 min', label: 'To build a professional estimate' },
              { val: '100%', label: 'Digital signature + PDF on every acceptance' },
            ].map(r => (
              <div key={r.label} style={{ background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.2)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: BLUE, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.625rem' }}>{r.val}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TECH STACK ── */}
      <section style={{ background: DARK, padding: 'clamp(4rem,8vw,7rem) 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: BLUE, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>UNDER THE HOOD</div>
          <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#fff', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
            {stack.map(s => (
              <span key={s} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', background: 'rgba(74,158,255,0.08)', border: '1px solid rgba(74,158,255,0.2)', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIAL ── */}
      <section style={{ background: BLACK, padding: 'clamp(4rem,8vw,7rem) 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#F59E0B', fontSize: '1.25rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>★★★★★</div>
          <blockquote style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem,1.5vw,1.2rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem' }}>
            &ldquo;We went from building estimates in Excel to having a full platform — job board, foreman access, customer signatures, P&amp;L tracking. Our guys use it on-site from their phones. It&apos;s exactly what we needed.&rdquo;
          </blockquote>
          <div style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.25rem' }}>Keegan Pearl</div>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>Founder, Pearl Ventures</div>
        </div>
      </section>

      {/* ── 7. BOTTOM CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #051020 0%, #030d1a 100%)', padding: 'clamp(4rem,8vw,6rem) 2rem', borderTop: '1px solid rgba(74,158,255,0.15)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: BLUE, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>READY TO BUILD?</div>
          <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>Have a project like this?</h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            We build SaaS platforms, contractor tools, and custom web apps. Let&apos;s talk about what you need.
          </p>
          <a href="/#contact" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '1rem', background: BLUE, color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 0 40px rgba(74,158,255,0.3)' }}>
            Start a Conversation →
          </a>
        </div>
      </section>

      {/* ── Simple footer ── */}
      <footer style={{ background: '#020406', borderTop: '1px solid rgba(74,158,255,0.1)', padding: '1.5rem 2rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
          © 2026 Pearl Labs. All Rights Reserved. ·{' '}
          <Link href="/" style={{ color: 'rgba(74,158,255,0.5)', textDecoration: 'none' }}>pearllab.io</Link>
        </p>
      </footer>
    </div>
  )
}
