const commitments = [
  {
    title: '48-Hour Scoped Plan',
    desc: 'Describe what you need. Within two business days you\u2019ll have a detailed architecture plan, timeline, and cost estimate. No discovery phase.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l2.5 2.5" />
      </svg>
    ),
  },
  {
    title: 'Weekly Production Deployments',
    desc: 'Working code deployed to a staging environment every week. You see real progress — not slide updates, not mockups, not status meetings.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16l3-3m0 0l3-3m-3 3L4 10m3 3l3 3" />
        <rect x="11" y="4" width="5" height="12" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Direct Builder Access',
    desc: 'You talk directly to the engineer writing the code. No project managers, no account reps, no telephone game. One point of contact from start to finish.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
        <path d="M10 7v3h3" />
      </svg>
    ),
  },
  {
    title: 'Full System Ownership',
    desc: 'Every line of code, every deployment configuration, every database — transferred to you on delivery. No vendor lock-in. No proprietary frameworks. It\u2019s yours.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 11l-5 5-5-5" />
        <path d="M10 16V4" />
      </svg>
    ),
  },
]

export default function Commitments() {
  return (
    <section className="py-24 lg:py-32 relative" id="process">
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)] relative z-[1]">
        <div className="text-center mb-16">
          <p className="text-[0.8125rem] font-semibold text-accent tracking-[0.12em] uppercase mb-3">How We Work</p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.025em] leading-[1.2]">Four commitments, every engagement</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((c) => (
            <div key={c.title} className="flex gap-6 p-8 bg-surface border border-border rounded-2xl transition-all duration-300 hover:border-border-hover">
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent-dim border border-[rgba(46,107,255,0.15)] flex items-center justify-center text-accent">
                {c.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-text-2 leading-[1.6]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
