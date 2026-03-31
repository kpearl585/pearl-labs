const services = [
  {
    title: 'Full-Stack SaaS Build',
    desc: 'We design, build, and deploy production SaaS systems. Auth, billing, admin dashboard, customer-facing UI, infrastructure. You own 100% of the code.',
    meta: 'Typical engagement: 8–16 weeks',
    viz: 'dashboard',
  },
  {
    title: 'Custom Operations System',
    desc: 'Replace manual workflows and spreadsheets with purpose-built internal software. Designed around how your team actually works — not a template\u2019s assumptions.',
    meta: 'Typical engagement: 4–8 weeks',
    viz: 'system',
  },
  {
    title: 'Revenue Infrastructure',
    desc: 'Software that directly generates or accelerates revenue. Estimating engines, pricing systems, marketplace platforms, and automated sales infrastructure.',
    meta: 'Typical engagement: 6–12 weeks',
    viz: 'revenue',
  },
]

function DashboardViz() {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-2 p-3 h-full">
      <div className="bg-[rgba(46,107,255,0.06)] rounded flex flex-col gap-1.5 p-2">
        <div className="h-1.5 rounded-full bg-[rgba(46,107,255,0.35)]" />
        <div className="h-1.5 rounded-full bg-[rgba(46,107,255,0.15)]" />
        <div className="h-1.5 rounded-full bg-[rgba(46,107,255,0.15)]" />
        <div className="h-1.5 rounded-full bg-[rgba(46,107,255,0.15)]" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-2 rounded bg-[rgba(46,107,255,0.08)]" />
        <div className="flex gap-1 items-end h-full pt-2">
          {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 3 ? 'rgba(46,107,255,0.4)' : 'rgba(46,107,255,0.2)' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SystemViz() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {[
        { cls: 'top-[20%] left-[20%]', opacity: 0.35 },
        { cls: 'top-[18%] right-[25%]', opacity: 0.5 },
        { cls: 'bottom-[20%] left-[35%]', opacity: 0.35 },
        { cls: 'bottom-[25%] right-[20%]', opacity: 0.25 },
      ].map((node, i) => (
        <div key={i} className={`absolute w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center ${node.cls}`} style={{ borderColor: `rgba(46,107,255,${node.opacity})` }}>
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: `rgba(46,107,255,${node.opacity * 0.6})` }} />
        </div>
      ))}
      <div className="absolute top-[36%] left-[26%] w-[120px] h-px bg-[rgba(46,107,255,0.12)]" style={{ transform: 'rotate(-5deg)' }} />
      <div className="absolute top-[50%] left-[28%] w-[80px] h-px bg-[rgba(46,107,255,0.12)]" style={{ transform: 'rotate(35deg)' }} />
      <div className="absolute bottom-[38%] left-[50%] w-[90px] h-px bg-[rgba(46,107,255,0.12)]" style={{ transform: 'rotate(-20deg)' }} />
    </div>
  )
}

function RevenueViz() {
  return (
    <div className="flex flex-col justify-end p-4 h-full">
      <p className="text-[10px] text-text-3 font-medium tracking-[0.05em] uppercase mb-1">Revenue</p>
      <p className="text-lg font-semibold text-text tabular-nums">+127%</p>
      <div className="relative w-full h-[60px]">
        <svg viewBox="0 0 200 60" fill="none" className="w-full h-full">
          <path d="M0 55 Q30 50 50 42 T100 28 T150 12 T200 4" stroke="rgba(46,107,255,0.4)" strokeWidth="2" fill="none" />
          <path d="M0 55 Q30 50 50 42 T100 28 T150 12 T200 4 V60 H0 Z" fill="rgba(46,107,255,0.06)" />
        </svg>
      </div>
    </div>
  )
}

const vizMap: Record<string, () => React.ReactElement> = {
  dashboard: DashboardViz,
  system: SystemViz,
  revenue: RevenueViz,
}

export default function Services() {
  return (
    <section className="py-24 lg:py-32 relative" id="services">
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)] relative z-[1]">
        <div className="text-center mb-16">
          <p className="text-[0.8125rem] font-semibold text-accent tracking-[0.12em] uppercase mb-3">What We Build</p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.025em] leading-[1.2]">Three ways we build</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Viz = vizMap[s.viz]
            return (
              <div key={s.title} className="card flex flex-col">
                <div className="w-full h-[120px] rounded-lg mb-6 overflow-hidden relative bg-bg border border-border">
                  <Viz />
                </div>
                <div className="px-8 pb-8 flex flex-col flex-1">
                  <h3 className="text-[clamp(1.25rem,2vw,1.625rem)] font-semibold tracking-[-0.01em] mb-3">{s.title}</h3>
                  <p className="text-base text-text-2 leading-[1.65] flex-1">{s.desc}</p>
                  <p className="mt-6 pt-4 border-t border-border text-[0.8125rem] text-text-3 font-medium tracking-[0.04em] uppercase">{s.meta}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
