import { PearlLogo } from './Navbar'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <PearlLogo height={24} id="fPG" />
            <span className="text-[0.8125rem] text-text-3">&copy; 2026 Pearl Labs. Ocala, FL.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/keegan-pearl-280492248/" className="text-sm text-text-3 hover:text-text transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:keegan@pearllab.io" className="text-sm text-text-3 hover:text-text transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
