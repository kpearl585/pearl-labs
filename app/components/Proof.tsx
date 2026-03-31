import Image from 'next/image'

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
  { name: 'FenceEstimatePro', type: 'Revenue System · SaaS', desc: 'Full job lifecycle management for fencing contractors — estimates, scheduling, crew management, invoicing. Replaced spreadsheet workflows with a production system.' },
  { name: 'ContractorDocuments', type: 'Document Commerce Platform', desc: 'E-commerce for contractor compliance documents. Purchase, delivery, and management of operational paperwork — digitized and instant.' },
]

export default function Proof() {
  return (
    <section className="py-24 lg:py-32 relative" id="proof">
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)] relative z-[1]">
        <div className="mb-16">
          <p className="text-[0.8125rem] font-semibold text-accent tracking-[0.12em] uppercase mb-3">Proof</p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.025em] leading-[1.2]">Systems in production</h2>
        </div>

        {/* Flagship */}
        <div className="mb-16">
          {/* Hero image */}
          <div className="bg-surface border border-border rounded-2xl overflow-hidden mb-8 relative group transition-colors duration-400 hover:border-border-hover">
            <Image src="/argus-hero.png" alt="ARGUS Defense Intelligence Platform — command center interface" width={1400} height={788} className="w-full h-auto block" priority />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg px-8 py-6">
                <p className="text-[clamp(1.25rem,2vw,1.625rem)] font-semibold tracking-[-0.01em] mb-0.5">{s.value}</p>
                <p className="text-[0.8125rem] text-text-3 font-medium uppercase tracking-[0.06em]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] mb-2">ARGUS</h3>
              <p className="text-[0.8125rem] font-semibold text-accent uppercase tracking-[0.08em] mb-4">Defense Intelligence Platform</p>
              <p className="text-base text-text-2 leading-[1.7]">Full-spectrum intelligence platform fusing satellite imagery, signals intelligence, HUMINT, and open-source data into a single operational picture. Built for defense and national security operators who need real-time situational awareness.</p>
              <p className="mt-6 pt-4 border-t border-border text-sm text-text-3 leading-[1.6]">Designed to replace fragmented intelligence workflows with a unified command interface. Currently operational with multi-layer geospatial visualization and AI-assisted analysis pipelines.</p>
            </div>
            <div className="flex flex-col gap-6">
              {details.map((d) => (
                <div key={d.label} className="border-l-2 border-border pl-6 transition-colors hover:border-l-accent">
                  <p className="text-[0.8125rem] font-semibold text-text-3 uppercase tracking-[0.06em] mb-0.5">{d.label}</p>
                  <p className="text-base text-text leading-[1.6]">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second image */}
          <div className="bg-surface border border-border rounded-2xl overflow-hidden mt-8 relative group transition-colors duration-400 hover:border-border-hover">
            <Image src="/argus-hero1.png" alt="ARGUS — 3D terrain visualization and intelligence overlay" width={1400} height={788} className="w-full h-auto block" loading="lazy" />
          </div>
        </div>

        {/* Additional Systems */}
        <div className="mt-16">
          <p className="text-[0.8125rem] font-semibold text-text-3 uppercase tracking-[0.1em] mb-4">Additional Systems</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondary.map((s) => (
              <div key={s.name} className="bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:border-border-hover">
                <h4 className="text-xl font-semibold mb-0.5">{s.name}</h4>
                <p className="text-[0.8125rem] text-accent font-medium uppercase tracking-[0.06em] mb-3">{s.type}</p>
                <p className="text-sm text-text-2 leading-[1.6]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
