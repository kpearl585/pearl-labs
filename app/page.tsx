import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import Work from './components/Work'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#050508] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoBar />
      <div className="divider" />
      <Services />
      <div className="divider" />
      <Capabilities />
      <div className="divider" />
      <Work />
      <div className="divider" />
      <Process />
      <div className="divider" />
      <Testimonials />
      <div className="divider" />
      <FinalCTA />
      <Footer />
    </main>
  )
}
