import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pearl Labs — Custom Development Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#050508',
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
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Cyan glow */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '30%',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flex: 1, padding: '72px 80px', position: 'relative', zIndex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(0,212,255,0.4)' }} />
            <span style={{ color: 'rgba(0,212,255,0.6)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
              Custom Development Studio
            </span>
          </div>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '7px',
              background: 'linear-gradient(135deg, #00D4FF, #0090B0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '14px', fontWeight: 700,
            }}>P</div>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '18px', letterSpacing: '-0.02em' }}>
              Pearl Labs
            </span>
          </div>

          {/* Headline */}
          <div style={{ color: '#fff', fontWeight: 600, fontSize: '52px', lineHeight: 1.1, letterSpacing: '-0.035em', marginBottom: '20px', maxWidth: '700px' }}>
            We engineer the software that drives your business forward.
          </div>

          {/* Sub */}
          <div style={{ color: 'rgba(255,255,255,0.36)', fontSize: '20px', lineHeight: 1.6, maxWidth: '520px' }}>
            High-performance websites, SaaS platforms, and intelligent systems. Veteran owned.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '16px 80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: 'rgba(0,212,255,0.4)', fontSize: '14px', fontFamily: 'monospace', letterSpacing: '0.05em' }}>pearllab.io</span>
          <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '13px' }}>Veteran Owned &middot; Ocala, FL</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
