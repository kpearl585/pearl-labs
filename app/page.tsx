import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Work from './components/Work'
import Founder from './components/Founder'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0A0A0F] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Founder />
      <Process />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
