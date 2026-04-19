import { PearlLogo } from './Navbar'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <PearlLogo height={24} id="fPG" />
            <span className="footer__copy">&copy; 2026 Pearl Labs. Ocala, FL.</span>
          </div>
          <div className="footer__links">
            <a href="/for-small-business" className="footer__link">Small Business</a>
            <a href="/blog" className="footer__link">Notes</a>
            <a href="/privacy" className="footer__link">Privacy</a>
            <a href="/terms" className="footer__link">Terms</a>
            <a href="https://www.linkedin.com/in/keegan-pearl-280492248/" className="footer__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:keegan@pearllab.io" className="footer__link">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
