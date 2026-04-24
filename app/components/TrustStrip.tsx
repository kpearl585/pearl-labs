const trustItems = [
  'Defense & Intelligence',
  'Legal / Law Enforcement',
  'SaaS Platforms',
  'Construction Tech',
  'Veteran Owned',
  'Florida Based',
  'SCORE Service Partner',
  'Builder-Led',
  'Full System Ownership',
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Pearl Labs trust signals">
      <div className="container trust-strip__inner">
        <div className="trust-strip__label mono">Credibility Signals</div>
        <div className="trust-strip__chips">
          {trustItems.map((item) => (
            <span key={item} className="trust-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
