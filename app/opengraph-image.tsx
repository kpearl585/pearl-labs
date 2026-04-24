import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pearl Labs - Serious software for serious operators.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0B1117',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(31,162,169,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '30%',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(31,162,169,0.14) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flex: 1, padding: '72px 80px', position: 'relative', zIndex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(31,162,169,0.6)' }} />
            <span style={{ color: '#1FA2A9', fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
              {'// Pearl Labs'}
            </span>
          </div>

          {/* Headline */}
          <div style={{ color: '#E6EDF3', fontWeight: 600, fontSize: '72px', lineHeight: 1.02, letterSpacing: '-0.035em', marginBottom: '28px', maxWidth: '980px' }}>
            Serious software<br />for serious operators.
          </div>

          {/* Sub */}
          <div style={{ color: 'rgba(230,237,243,0.66)', fontSize: '22px', lineHeight: 1.5, maxWidth: '820px' }}>
            Custom websites, SaaS platforms, workflow automation, and advisory systems. Veteran-owned. Builder-led.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(230,237,243,0.16)',
            padding: '18px 80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: '#1FA2A9', fontSize: '14px', fontFamily: 'monospace', letterSpacing: '0.08em' }}>pearllab.io</span>
          <span style={{ color: 'rgba(230,237,243,0.35)', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{'// Veteran Owned · Ocala, FL'}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
