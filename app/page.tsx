import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-[#050508] min-h-screen">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
