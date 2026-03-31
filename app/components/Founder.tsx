export default function Founder() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)] relative z-[1]">
        <div className="text-center mb-12">
          <p className="text-[0.8125rem] font-semibold text-accent tracking-[0.12em] uppercase mb-3">Who Builds This</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-[680px] mx-auto p-8 bg-surface border border-border rounded-2xl">
          <div className="flex-shrink-0 w-[88px] h-[88px] rounded-full border-2 border-border overflow-hidden flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--color-elevated), var(--color-surface))' }}
          >
            <div
              className="w-full h-full flex items-center justify-center text-[28px] font-bold text-accent"
              style={{ background: 'radial-gradient(circle at 40% 35%, rgba(46,107,255,0.15), var(--color-elevated))' }}
            >
              KP
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-[clamp(1.25rem,2vw,1.625rem)] font-semibold mb-0.5">Keegan Pearl</h3>
            <p className="text-sm text-text-2 leading-[1.5] mb-3">Founder — Built systems across defense intelligence, SaaS platforms, and revenue infrastructure. Every Pearl Labs project is architected and shipped by one senior engineer.</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {['Veteran Owned', 'Full-Stack Systems', 'Ocala, FL'].map((badge) => (
                <span key={badge} className="text-[0.8125rem] text-text-3 px-3 py-1 border border-border rounded-full">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
