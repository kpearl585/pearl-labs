'use client'

import { useRef, useEffect } from 'react'

const nodes = [
  { x: 80, y: 120, label: 'brief', caption: '48 hours', active: false },
  { x: 320, y: 120, label: 'plan', caption: 'architecture', active: false },
  { x: 200, y: 200, label: 'code', caption: 'weekly deploys', active: true },
  { x: 120, y: 320, label: 'ship', caption: 'you own it', active: false },
  { x: 280, y: 320, label: 'iterate', caption: 'retainer', active: false },
]

export default function SystemDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const svg = el.querySelector('svg')
    if (!svg) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      svg.style.transform = `translate(${x * 6}px, ${y * 6}px)`
    }
    const onLeave = () => {
      svg.style.transform = ''
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="system-diagram">
      <div className="system-diagram__label">
        <span>system.map</span>
        <span>v1.0.0</span>
      </div>
      <svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="sd-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1FA2A9" stopOpacity="0" />
            <stop offset="50%" stopColor="#1FA2A9" stopOpacity="1" />
            <stop offset="100%" stopColor="#1FA2A9" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="sd-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#1FA2A9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1FA2A9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* connecting lines */}
        <g stroke="rgba(31,162,169,0.15)" strokeWidth="1">
          <path d="M80,120 Q200,120 320,120" />
          <path d="M80,120 Q80,200 200,200" />
          <path d="M320,120 Q320,200 200,200" />
          <path d="M200,200 Q200,280 120,320" />
          <path d="M200,200 Q200,280 280,320" />
        </g>

        {/* animated pulse along the critical path */}
        <path
          d="M80,120 Q200,120 320,120 Q320,200 200,200 Q200,280 280,320"
          fill="none"
          stroke="url(#sd-edge)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="system-diagram__pulse"
        />

        {/* nodes */}
        {nodes.map((n) => (
          <g key={n.label} transform={`translate(${n.x}, ${n.y})`}>
            {n.active && (
              <circle r="24" fill="url(#sd-glow)" className="system-diagram__node-glow" />
            )}
            <rect
              x="-38"
              y="-14"
              width="76"
              height="28"
              rx="6"
              fill="#0B1117"
              stroke={n.active ? '#1FA2A9' : 'rgba(31,162,169,0.25)'}
              strokeWidth="1"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="11"
              fill={n.active ? '#1FA2A9' : '#E6EDF3'}
              letterSpacing="0.04em"
            >
              {n.label}
            </text>
            <text
              x="0"
              y="34"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              fill="#8A97A8"
              letterSpacing="0.06em"
            >
              {n.caption}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
