import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import EclipseQuote from './components/EclipseQuote'
import Services from './components/Services'
import Advisory from './components/Advisory'
import Proof from './components/Proof'
import Commitments from './components/Commitments'
import HighStakes from './components/HighStakes'
import Founder from './components/Founder'
import CTA from './components/CTA'
import Footer from './components/Footer'
import IntakeModal from './components/IntakeModal'
import ScrollProgress from './components/ScrollProgress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="homepage-nightops">
        <Hero />
        <Capabilities />
        <EclipseQuote />
        <Services />
        <div className="divider-line" />
        <Advisory />
        <div className="divider-line" />
        <Proof />
        <div className="divider-line" />
        <Commitments />
        <div className="divider-line" />
        <HighStakes />
        <div className="divider-line" />
        <Founder />
        <CTA />
      </main>
      <Footer />
      <IntakeModal />
    </>
  )
}
