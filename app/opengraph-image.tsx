import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pearl Labs — We Build Digital Products That Work.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#030507',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(74,158,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            width: '700px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(74,158,255,0.1) 0%, transparent 70%)',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', flex: 1, padding: '60px 72px', position: 'relative', zIndex: 1 }}>
          {/* Left side */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', paddingRight: '60px' }}>
            {/* Logo mark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
              <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
                <circle cx="24" cy="24" r="22" stroke="#4A9EFF" stroke-width="1.5" opacity="0.4"/>
                <circle cx="24" cy="24" r="13" fill="#4A9EFF" opacity="0.15"/>
                <circle cx="24" cy="24" r="6.5" fill="#4A9EFF" opacity="0.8"/>
                <circle cx="24" cy="24" r="2.5" fill="#ffffff"/>
              </svg>
              <div style={{ display: 'flex', color: '#ffffff', fontWeight: 700, fontSize: '28px', letterSpacing: '-0.02em' }}>
                Pearl<span style={{ color: '#4A9EFF' }}>Labs</span>
              </div>
            </div>

            <div style={{ color: '#fff', fontWeight: 700, fontSize: '54px', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '20px' }}>
              We Build Digital
              <br />
              <span style={{ color: '#4A9EFF' }}>Products That Work.</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '20px', lineHeight: 1.6 }}>
              Custom websites, SaaS platforms &amp; landing pages.<br />
              No templates. No bloat. Just results.
            </div>
          </div>

          {/* Right side — stat boxes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', minWidth: '300px' }}>
            {[
              { val: '5+', label: 'Projects Shipped' },
              { val: '< 7 Days', label: 'Avg. Delivery' },
              { val: '100%', label: 'Client Retention' },
            ].map(s => (
              <div
                key={s.val}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(74,158,255,0.25)',
                  borderRadius: '12px',
                  padding: '22px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ color: '#4A9EFF', fontWeight: 700, fontSize: '34px', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(74,158,255,0.15)',
            padding: '18px 72px',
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(74,158,255,0.04)',
          }}
        >
          <span style={{ color: 'rgba(74,158,255,0.6)', fontSize: '16px', letterSpacing: '0.05em' }}>pearllab.io</span>
          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '14px', marginLeft: 'auto' }}>Pearl Ventures Company · Ocala, Florida</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
