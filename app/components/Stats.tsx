export default function Stats() {
  const stats = [
    { value: '$2M+',    label: 'Revenue generated for clients' },
    { value: '50+',     label: 'Products shipped' },
    { value: '99',      label: 'Avg Lighthouse score' },
    { value: '< 14d',   label: 'Average delivery time' },
  ]
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label}
            className="py-12 px-8 flex flex-col gap-1"
            style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
            <span className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{s.value}</span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
