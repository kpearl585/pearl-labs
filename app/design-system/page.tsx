import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const colors = [
  { name: 'bg', value: '#0A0F1E', note: 'Page background, near-black navy' },
  { name: 'bg-surface', value: '#111827', note: 'Cards, modals' },
  { name: 'bg-elevated', value: '#1a2236', note: 'Hover surfaces, photo placeholders' },
  { name: 'text-primary', value: '#F1F5F9', note: 'Headlines, primary body' },
  { name: 'text-secondary', value: '#94A3B8', note: 'Sub-copy, descriptions' },
  { name: 'text-muted', value: '#64748B', note: 'Labels, metadata, footer' },
  { name: 'accent', value: '#2E6BFF', note: 'CTAs, links, borders, eyebrows, icons' },
  { name: 'accent-hover', value: '#5B8FFF', note: '1 shade up for hover' },
  { name: 'border', value: 'rgba(46, 107, 255, 0.10)', note: 'Translucent accent, 10%', swatch: 'rgba(46,107,255,0.1)' },
  { name: 'border-hover', value: 'rgba(46, 107, 255, 0.25)', note: 'Translucent accent, 25%', swatch: 'rgba(46,107,255,0.25)' },
]

const typeScale = [
  { className: 'ds-display', sample: 'Real software for real businesses.', token: '--text-display', note: 'clamp(2.75rem, 5vw, 4.25rem) · 700 · uppercase' },
  { className: 'ds-h1', sample: 'Systems in production.', token: '--text-h1', note: 'clamp(1.75rem, 3vw, 2.5rem) · 600' },
  { className: 'ds-h2', sample: 'Custom Websites', token: '--text-h2', note: 'clamp(1.25rem, 2vw, 1.625rem) · 600' },
  { className: 'ds-h3', sample: 'Starter Site', token: '--text-h3', note: '1.25rem · 600' },
  { className: 'ds-subhead', sample: 'We build custom websites, business software, and automation.', token: '--text-subhead', note: '1.1875rem · text-secondary' },
  { className: 'ds-body', sample: 'Every line of code, every deployment config. Transferred to you on delivery.', token: '--text-body', note: '1rem · 1.65 line-height' },
  { className: 'ds-body-secondary', sample: 'Same content, secondary color for dense sections.', token: '--text-body', note: '1rem · text-secondary' },
  { className: 'ds-small', sample: 'Scoped plan in 48 hours.', token: '--text-small', note: '0.875rem' },
  { className: 'ds-eyebrow', sample: 'WHAT WE BUILD', token: '--text-xs', note: '0.8125rem · 600 · 0.12em tracking · accent' },
  { className: 'ds-meta', sample: '3 TO 6 WEEKS', token: '--text-xs', note: 'JetBrains Mono · tabular-nums · text-muted' },
]

const spacing = [
  { name: 'space-1', px: '4px' },
  { name: 'space-2', px: '8px' },
  { name: 'space-3', px: '12px' },
  { name: 'space-4', px: '16px' },
  { name: 'space-5', px: '20px' },
  { name: 'space-6', px: '24px' },
  { name: 'space-8', px: '32px' },
  { name: 'space-10', px: '40px' },
  { name: 'space-12', px: '48px' },
  { name: 'space-16', px: '64px' },
  { name: 'space-20', px: '80px' },
  { name: 'space-24', px: '96px' },
  { name: 'space-32', px: '128px' },
]

const radii = [
  { name: 'radius-sm', px: '8px', note: 'Buttons, inputs' },
  { name: 'radius-md', px: '12px', note: 'Small cards' },
  { name: 'radius-lg', px: '16px', note: 'Large cards, modals' },
]

const motion = [
  { name: 'ease-out-quart', value: 'cubic-bezier(0.25, 0.1, 0.25, 1)', note: 'Default entrance curve' },
  { name: 'ease-in-expo', value: 'cubic-bezier(0.16, 1, 0.3, 1)', note: 'Smooth headline reveal' },
  { name: 'dur-fast', value: '150ms', note: 'Color shifts, link hovers' },
  { name: 'dur-base', value: '200ms', note: 'Buttons, inputs, badge hovers' },
  { name: 'dur-medium', value: '300ms', note: 'Card lifts, nav transitions' },
  { name: 'dur-slow', value: '400ms', note: 'Card border transitions' },
]

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />
      <main id="main" style={{ paddingTop: 'calc(var(--space-32) + 40px)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">

          {/* Header */}
          <section style={{ marginBottom: 'var(--space-20)', maxWidth: '820px' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Internal Reference</p>
            <h1 className="ds-h1" style={{ marginBottom: 'var(--space-5)' }}>Pearl Labs Design System</h1>
            <p className="ds-subhead">
              Tokens, typography, components, and motion principles. This page is not linked from the public site and is excluded from search indexing. It exists as a single reference surface for anyone building or maintaining pearllab.io.
            </p>
            <p className="ds-small" style={{ color: 'var(--text-muted)', marginTop: 'var(--space-5)' }}>
              Source of truth: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>app/globals.css</code> — tokens declared on <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>:root</code>. Derived from the Pearl Labs Design System handoff bundle (2026-04).
            </p>
          </section>

          <div className="divider" />

          {/* Colors */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Colors</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-3)' }}>Single-accent palette.</h2>
            <p className="ds-body-secondary" style={{ marginBottom: 'var(--space-10)', maxWidth: '640px' }}>
              One blue — <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>#2E6BFF</code> — used for every interactive affordance, accent, border, and signal. Near-black background. True-white text. Nothing else.
            </p>
            <div className="ds-grid">
              {colors.map((c) => (
                <div key={c.name} className="ds-color">
                  <div className="ds-color__swatch" style={{ background: c.swatch ?? c.value }} />
                  <div className="ds-color__meta">
                    <span className="ds-meta" style={{ color: 'var(--text-primary)', textTransform: 'none', letterSpacing: '0.02em' }}>--{c.name}</span>
                    <span className="ds-small" style={{ color: 'var(--text-muted)' }}>{c.value}</span>
                    <span className="ds-small" style={{ color: 'var(--text-secondary)' }}>{c.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* Typography */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Typography</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-3)' }}>Inter for UI. JetBrains Mono for meta.</h2>
            <p className="ds-body-secondary" style={{ marginBottom: 'var(--space-10)', maxWidth: '640px' }}>
              One sans for everything. One mono for eyebrows, prices, stats, timestamps. Tabular numerals everywhere numbers matter.
            </p>
            <div className="ds-type-list">
              {typeScale.map((t) => (
                <div key={t.className} className="ds-type-row">
                  <div className="ds-type-row__sample">
                    <span className={t.className}>{t.sample}</span>
                  </div>
                  <div className="ds-type-row__meta">
                    <span className="ds-meta" style={{ color: 'var(--accent)' }}>.{t.className}</span>
                    <span className="ds-small" style={{ color: 'var(--text-muted)' }}>{t.token} · {t.note}</span>
                  </div>
                </div>
              ))}
              <div className="ds-type-row">
                <div className="ds-type-row__sample">
                  <span className="ds-display">
                    Real software for <span className="gradient-text">real businesses.</span>
                  </span>
                </div>
                <div className="ds-type-row__meta">
                  <span className="ds-meta" style={{ color: 'var(--accent)' }}>.gradient-text</span>
                  <span className="ds-small" style={{ color: 'var(--text-muted)' }}>Brand headline accent. Linear white → accent gradient via background-clip.</span>
                </div>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* Spacing */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Spacing</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-3)' }}>4-based rhythm.</h2>
            <p className="ds-body-secondary" style={{ marginBottom: 'var(--space-10)', maxWidth: '640px' }}>
              Thirteen explicit rungs from 4px to 128px. Sections use <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>--space-24</code> (96px) vertical padding.
            </p>
            <div className="ds-spacing-list">
              {spacing.map((s) => (
                <div key={s.name} className="ds-spacing-row">
                  <span className="ds-meta" style={{ width: '100px', color: 'var(--text-primary)', textTransform: 'none', letterSpacing: '0.02em' }}>--{s.name}</span>
                  <span className="ds-small" style={{ width: '60px', color: 'var(--text-muted)' }}>{s.px}</span>
                  <div className="ds-spacing-row__bar" style={{ width: s.px }} />
                </div>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* Radii */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Radii</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-10)' }}>Three rungs.</h2>
            <div className="ds-grid ds-grid--3">
              {radii.map((r) => (
                <div key={r.name} className="svc-card" style={{ padding: 'var(--space-6)' }}>
                  <div style={{ width: '100%', height: '60px', background: 'var(--accent-subtle)', border: '1px solid var(--border)', borderRadius: `var(--${r.name})`, marginBottom: 'var(--space-4)' }} />
                  <span className="ds-meta" style={{ color: 'var(--text-primary)', textTransform: 'none', letterSpacing: '0.02em', display: 'block' }}>--{r.name}</span>
                  <span className="ds-small" style={{ color: 'var(--text-muted)' }}>{r.px} · {r.note}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* Buttons */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Buttons</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-10)' }}>Two variants, one CTA per section.</h2>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
              <button type="button" className="btn-primary">REQUEST A BRIEF</button>
              <button type="button" className="btn-primary btn-with-subtext">
                <span className="btn-main">REQUEST A BRIEF</span>
                <span className="btn-sub">Scoped plan in 48 hours</span>
              </button>
              <button type="button" className="btn-secondary">SEE OUR WORK →</button>
              <button type="button" className="btn-text">
                INQUIRE ABOUT ADVISORY
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>
            <div style={{ marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
              <div><span className="ds-meta">.btn-primary</span><p className="ds-small" style={{ color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>Primary CTA. Uppercase, accent, 0.08em tracking, glow on hover.</p></div>
              <div><span className="ds-meta">.btn-primary.btn-with-subtext</span><p className="ds-small" style={{ color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>Two-line variant. Main label + sub.</p></div>
              <div><span className="ds-meta">.btn-secondary</span><p className="ds-small" style={{ color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>Ghost. Transparent background, border transition on hover.</p></div>
              <div><span className="ds-meta">.btn-text</span><p className="ds-small" style={{ color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>Inline link. Arrow translates on hover.</p></div>
            </div>
          </section>

          <div className="divider" />

          {/* Eyebrows */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Eyebrow Signature</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-3)' }}>Every section begins with an eyebrow.</h2>
            <p className="ds-body-secondary" style={{ marginBottom: 'var(--space-10)', maxWidth: '640px' }}>
              This is the type signature of the brand. Uppercase, accent blue, 0.12em tracking. Without it, the page looks like any other SaaS landing page.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              <div>
                <p className="ds-eyebrow">WHAT WE BUILD</p>
                <h3 className="ds-h1" style={{ marginTop: 'var(--space-3)' }}>Three ways we build.</h3>
              </div>
              <div>
                <p className="ds-eyebrow">DEFENSE &amp; INTELLIGENCE</p>
                <h3 className="ds-h1" style={{ marginTop: 'var(--space-3)' }}>Briefing request.</h3>
              </div>
              <div>
                <p className="ds-eyebrow">PROOF</p>
                <h3 className="ds-h1" style={{ marginTop: 'var(--space-3)' }}>Systems in production.</h3>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* Motion */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Motion</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-3)' }}>Fade-up, no decoration.</h2>
            <p className="ds-body-secondary" style={{ marginBottom: 'var(--space-10)', maxWidth: '640px' }}>
              One entrance per scroll. No parallax on content. No bouncing. No decorative loops. Motion should feel like engineering, not like a showreel.
            </p>
            <div className="ds-grid ds-grid--3">
              {motion.map((m) => (
                <div key={m.name} className="svc-card" style={{ padding: 'var(--space-6)' }}>
                  <span className="ds-meta" style={{ color: 'var(--accent)', textTransform: 'none', letterSpacing: '0.02em' }}>--{m.name}</span>
                  <p className="ds-small" style={{ color: 'var(--text-primary)', marginTop: 'var(--space-2)', fontFamily: 'var(--font-mono)' }}>{m.value}</p>
                  <p className="ds-small" style={{ color: 'var(--text-muted)', marginTop: 'var(--space-3)' }}>{m.note}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* Voice */}
          <section style={{ paddingBlock: 'var(--space-16)' }}>
            <p className="ds-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Voice</p>
            <h2 className="ds-h1" style={{ marginBottom: 'var(--space-10)' }}>Before you write copy, read these.</h2>
            <div className="ds-grid ds-grid--2">
              <div className="svc-card">
                <h3 className="ds-h3" style={{ marginBottom: 'var(--space-4)' }}>Default declarative.</h3>
                <p className="ds-body-secondary">
                  Statements, not questions, not exclamations. Short lines. Short paragraphs. Three-sentence max.
                </p>
              </div>
              <div className="svc-card">
                <h3 className="ds-h3" style={{ marginBottom: 'var(--space-4)' }}>No AI slop.</h3>
                <p className="ds-body-secondary">
                  No em-dashes as decorative pauses. No tricolons. Replace &ldquo;revolutionize&rdquo; with &ldquo;replace,&rdquo; &ldquo;synergy&rdquo; with &ldquo;compounding,&rdquo; &ldquo;scale&rdquo; with &ldquo;hold up under load.&rdquo;
                </p>
              </div>
              <div className="svc-card">
                <h3 className="ds-h3" style={{ marginBottom: 'var(--space-4)' }}>Every claim, a proof-hook.</h3>
                <p className="ds-body-secondary">
                  If you can&apos;t cite a specific artifact, cut the claim. Name specific things: <em>48-hour brief</em>, not <em>rapid response</em>.
                </p>
              </div>
              <div className="svc-card">
                <h3 className="ds-h3" style={{ marginBottom: 'var(--space-4)' }}>No emoji. Never.</h3>
                <p className="ds-body-secondary">
                  Not for urgency, not for status, not for celebration. Unicode glyphs that do real work are fine: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>→</code>, <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>·</code>, <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>&amp;</code>.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
