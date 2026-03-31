const badges = [
  'Defense & Intelligence',
  'SaaS Platforms',
  'Construction Tech',
  'Revenue Systems',
  'Veteran Owned',
]

export default function TrustBar() {
  return (
    <section className="py-12">
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)]">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 px-5 py-2 border border-border rounded-full text-[0.8125rem] font-medium text-text-3 whitespace-nowrap transition-all duration-300 hover:border-border-hover hover:text-text-2"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-accent opacity-70" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
