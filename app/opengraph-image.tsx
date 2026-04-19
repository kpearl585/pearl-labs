import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pearl Labs — Real Software for Real Businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0F1E',
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
            backgroundImage: 'radial-gradient(circle, rgba(46,107,255,0.04) 1px, transparent 1px)',
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
            background: 'radial-gradient(ellipse, rgba(46,107,255,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flex: 1, padding: '72px 80px', position: 'relative', zIndex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(46,107,255,0.5)' }} />
            <span style={{ color: 'rgba(46,107,255,0.85)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
              Pearl Labs
            </span>
          </div>

          {/* Headline */}
          <div style={{ color: '#F1F5F9', fontWeight: 700, fontSize: '64px', lineHeight: 1.05, letterSpacing: '-0.035em', marginBottom: '24px', maxWidth: '900px', textTransform: 'uppercase' }}>
            Real software for real businesses.
          </div>

          {/* Sub */}
          <div style={{ color: 'rgba(241,245,249,0.6)', fontSize: '22px', lineHeight: 1.5, maxWidth: '720px' }}>
            Custom websites, business software, and automation. Veteran-owned. Full code ownership.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(46,107,255,0.1)',
            padding: '18px 80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: 'rgba(46,107,255,0.6)', fontSize: '14px', fontFamily: 'monospace', letterSpacing: '0.05em' }}>pearllab.io</span>
          <span style={{ color: 'rgba(241,245,249,0.25)', fontSize: '13px' }}>Veteran Owned · Ocala, FL</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
