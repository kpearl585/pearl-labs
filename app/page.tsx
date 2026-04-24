import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import EclipseQuote from './components/EclipseQuote'
import Services from './components/Services'
import Advisory from './components/Advisory'
import Proof from './components/Proof'
import Commitments from './components/Commitments'
import Founder from './components/Founder'
import CTA from './components/CTA'
import Footer from './components/Footer'
import IntakeModal from './components/IntakeModal'
import ScrollProgress from './components/ScrollProgress'

function Divider() {
  return <div className="divider" />
}

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
      </main>
      <Footer />
      <IntakeModal />
    </>
  )
}
