import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Design System — Pearl Labs',
  description: 'Internal reference: Night Ops design tokens, typography, components.',
  robots: { index: false, follow: false },
}

const colors = [
  { name: '--graphite', value: '#0B1117', note: 'Page background' },
  { name: '--graphite-deep', value: '#050a12', note: 'Full-bleed photo base, eclipse sections' },
  { name: '--graphite-2', value: '#0F1620', note: 'Card / panel surfaces' },
  { name: '--arctic', value: '#E6EDF3', note: 'Primary text, headlines' },
  { name: '--arctic-soft', value: 'rgba(230,237,243,0.82)', note: 'Body copy' },
  { name: '--arctic-dim', value: 'rgba(230,237,243,0.58)', note: 'Secondary text, labels' },
  { name: '--steel-2', value: '#8A97A8', note: 'Meta, mono labels, timestamps' },
  { name: '--teal', value: '#1FA2A9', note: 'Accent — eyebrows, borders, links, icons' },
  { name: '--line-strong', value: 'rgba(230,237,243,0.16)', note: 'Primary divider / border' },
]

const typography = [
  { label: 'Display — Space Grotesk', sample: 'Real software. Real missions.', note: 'font-display · 600 · -0.02em' },
  { label: 'H1', sample: 'Briefing request.', note: '38–56px · display · 600' },
  { label: 'H2', sample: 'Capability areas.', note: '28–36px · display · 600' },
  { label: 'Body', sample: 'Built by veterans. Held to operational standards.', note: '15–16px · display · 1.6 leading' },
  { label: 'Eyebrow — JetBrains Mono', sample: '// FIELD NOTES', note: 'font-mono · 11px · 0.14em tracking · teal' },
  { label: 'Meta mono', sample: 'REF // PL-4K2X81', note: 'font-mono · 12px · 0.14em tracking · steel-2' },
]

const principles = [
  { title: 'Operator, not marketer.', note: 'Every section earns its place. No decorative fluff.' },
  { title: 'Provenance over polish.', note: 'Source tags, refs, and channels are part of the aesthetic.' },
  { title: 'One accent, one palette.', note: 'Teal for signal. Arctic for information. Graphite for base.' },
  { title: 'Mono for meta.', note: 'Uppercase + 0.12–0.14em tracking for eyebrows, refs, timestamps.' },
]

export default function DesignSystemPage() {
  return (
    <div className="case-page">
      <Navbar />

      <section className="case-hero">
        <div className="container">
          <Link href="/" className="case-back">← Back to Pearl Labs</Link>
          <div className="case-hero-cat">Internal Reference · Night Ops v1</div>
          <h1>Design system.</h1>
          <p className="case-hero-lead" style={{ maxWidth: 620 }}>
            Source tokens, typography, and operating principles for pearllab.io. Not linked publicly. Not indexed. For maintainers.
          </p>
        </div>
      </section>

      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">// Palette</span>
            <h2>Graphite, arctic, teal.</h2>
          </div>
          <div className="ds-tokens">
            {colors.map(c => (
              <div key={c.name} className="ds-token">
                <div className="ds-token-swatch" style={{ background: c.value }} />
                <div className="ds-token-meta">
                  <span className="ds-token-name">{c.name}</span>
                  <span className="ds-token-value">{c.value}</span>
                  <span className="ds-token-note">{c.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">// Typography</span>
            <h2>Display + mono.</h2>
          </div>
          <div className="ds-type-stack">
            {typography.map(t => (
              <div key={t.label} className="ds-type-row">
                <div className="ds-type-sample">{t.sample}</div>
                <div className="ds-type-meta">
                  <span>{t.label}</span>
                  <span className="dim">{t.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-narrow">
        <div className="container">
          <div className="section-head-light">
            <span className="eyebrow-teal">// Principles</span>
            <h2>Operating doctrine.</h2>
          </div>
          <ul className="brief-principles">
            {principles.map(p => (
              <li key={p.title} className="brief-principle">
                <p><strong style={{ color: 'var(--arctic)' }}>{p.title}</strong> {p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}
