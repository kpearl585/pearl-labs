import Link from 'next/link'
import { PearlLogo } from './Navbar'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              <PearlLogo height={28} />
            </Link>
            <p className="footer-lede">
              Serious software for serious operators. Veteran-owned, Florida-based. Direct builder access, full ownership, no vendor lock-in.
            </p>
          </div>
          <div>
            <h4>Capabilities</h4>
            <ul>
              <li><Link href="/#services">Custom Websites</Link></li>
              <li><Link href="/#services">Business Software</Link></li>
              <li><Link href="/#services">Workflow Automation</Link></li>
              <li><Link href="/#advisory">Strategic Advisory</Link></li>
            </ul>
          </div>
          <div>
            <h4>Verticals</h4>
            <ul>
              <li><Link href="/briefing">Defense & Intelligence</Link></li>
              <li><Link href="/for-small-business">Small Business / SCORE</Link></li>
              <li><Link href="/work/fenceestimatepro">Construction Tech</Link></li>
              <li><Link href="/work/contractordocuments">Document Workflow</Link></li>
            </ul>
          </div>
          <div>
            <h4>Pearl Labs</h4>
            <ul>
              <li><Link href="/#proof">Work</Link></li>
              <li><Link href="/blog">Notes</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pearl Labs // Ocala, Florida</span>
          <span>Veteran Owned · SCORE Service Partner</span>
          <span><a href="https://www.linkedin.com/in/keegan-pearl-280492248/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="mailto:keegan@pearllab.io">Email</a></span>
        </div>
      </div>
    </footer>
  )
}
