import { Github, Linkedin, Mail } from 'lucide-react'

const links = {
  services: [
    { label: 'Custom Websites', href: '#services' },
    { label: 'SaaS Platforms', href: '#services' },
    { label: 'AI Systems', href: '#services' },
    { label: 'Internal Tools', href: '#services' },
  ],
  company: [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/estimate' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-14 lg:py-16 grid grid-cols-2 md:grid-cols-12 gap-8">

        <div className="col-span-2 md:col-span-5">
          <div className="font-display font-semibold text-white/80 text-[14px] mb-3 tracking-tight">
            Pearl Labs
          </div>
          <p className="text-[13px] leading-[1.65] text-white/22 max-w-xs mb-5">
            Custom development studio. Websites, SaaS, and business systems — built from scratch.
          </p>
          <div className="flex gap-2">
            {[
              { icon: Github, href: 'https://github.com/kpearl585', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/company/pearllabs', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:hello@pearllab.io', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-7 h-7 rounded flex items-center justify-center text-white/18 hover:text-white/35 transition-colors duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.04)' }}>
                <Icon className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 md:col-start-8">
          <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/18 mb-4">Services</div>
          <ul className="space-y-2">
            {links.services.map(l => (
              <li key={l.label}>
                <a href={l.href} className="text-[13px] text-white/24 hover:text-white/45 transition-colors duration-200">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/18 mb-4">Company</div>
          <ul className="space-y-2">
            {links.company.map(l => (
              <li key={l.label}>
                <a href={l.href} className="text-[13px] text-white/24 hover:text-white/45 transition-colors duration-200">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap"
        style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <span className="text-[11px] text-white/14">&copy; {new Date().getFullYear()} Pearl Labs LLC</span>
        <span className="text-[11px] text-white/10">Veteran Owned &middot; Ocala, FL</span>
      </div>
    </footer>
  )
}
