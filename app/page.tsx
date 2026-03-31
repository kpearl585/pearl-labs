import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Advisory from './components/Advisory'
import Proof from './components/Proof'
import Commitments from './components/Commitments'
import Founder from './components/Founder'
import CTA from './components/CTA'
import Footer from './components/Footer'
import IntakeModal from './components/IntakeModal'

function Divider() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[clamp(1.5rem,5vw,6rem)]">
      <div className="section-divider" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Divider />
      <Services />
      <Divider />
      <Advisory />
      <Divider />
      <Proof />
      <Divider />
      <Commitments />
      <Divider />
      <Founder />
      <Divider />
      <CTA />
      <Footer />
      <IntakeModal />
    </div>
  )
}
