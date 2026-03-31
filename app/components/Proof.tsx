'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 'Real-Time', label: 'Multi-source modeling' },
  { value: '4 INT Sources', label: 'Fused intelligence feeds' },
  { value: 'Operational', label: 'Simulation & planning' },
]

const details = [
  { label: 'Intelligence', value: 'Real-time satellite, signals intelligence, HUMINT, open source — fused into a single operational picture' },
  { label: 'Stack', value: 'Next.js, Supabase, Mapbox GL, AI/ML pipelines, real-time data processing' },
  { label: 'Status', value: 'In production — active development' },
]

const secondary = [
  { name: 'FenceEstimatePro', type: 'Revenue System \u00b7 SaaS', desc: 'Full job lifecycle management for fencing contractors — estimates, scheduling, crew management, invoicing. Replaced spreadsheet workflows with a production system.' },
  { name: 'ContractorDocuments', type: 'Document Commerce Platform', desc: 'E-commerce for contractor compliance documents. Purchase, delivery, and management of operational paperwork — digitized and instant.' },
]

export default function Proof() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="proof" ref={ref}>
      <div className="container">
        <div style={{ marginBottom: 'var(--space-16)' }} className="reveal">
          <p className="section-label">Proof</p>
          <h2 className="section-title">Systems in production</h2>
        </div>

        <div className="proof__flagship">
          {/* Hero image 1 */}
          <div className="proof__visual reveal">
            <Image src="/argus-hero.png" alt="ARGUS Defense Intelligence Platform — command center interface" width={1400} height={788} priority />
          </div>

          {/* Stat bar */}
          <div className="proof__stats reveal">
            {stats.map((s) => (
              <div key={s.label} className="proof__stat">
                <p className="proof__stat-value">{s.value}</p>
                <p className="proof__stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="proof__content">
            <div className="reveal">
              <h3 className="proof__name">ARGUS</h3>
              <p className="proof__type">Defense Intelligence Platform</p>
              <p className="proof__desc">Full-spectrum intelligence platform fusing satellite imagery, signals intelligence, HUMINT, and open-source data into a single operational picture. Built for defense and national security operators who need real-time situational awareness.</p>
              <p className="proof__outcome">Designed to replace fragmented intelligence workflows with a unified command interface. Currently operational with multi-layer geospatial visualization and AI-assisted analysis pipelines.</p>
            </div>
            <div className="proof__details">
              {details.map((d, i) => (
                <div key={d.label} className={`proof__detail reveal${i === 1 ? ' reveal-d1' : i === 2 ? ' reveal-d2' : ''}`}>
                  <p className="proof__detail-label">{d.label}</p>
                  <p className="proof__detail-value">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image 2 */}
          <div className="proof__visual reveal" style={{ marginTop: 'var(--space-8)' }}>
            <Image src="/argus-hero1.png" alt="ARGUS — 3D terrain visualization and intelligence overlay" width={1400} height={788} loading="lazy" />
          </div>
        </div>

        {/* Additional Systems */}
        <div className="reveal" style={{ marginTop: 'var(--space-16)' }}>
          <p className="proof__additional-label">Additional Systems</p>
          <div className="proof__secondary">
            {secondary.map((s) => (
              <div key={s.name} className="proof__sec-card">
                <h4 className="proof__sec-name">{s.name}</h4>
                <p className="proof__sec-type">{s.type}</p>
                <p className="proof__sec-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
