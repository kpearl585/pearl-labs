import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Capabilities from './components/Capabilities'
import Founder from './components/Founder'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-[#050508] min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Capabilities />
      <Founder />
      <CTA />
      <Footer />
    </div>
  )
}
