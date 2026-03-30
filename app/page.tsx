import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Products from './components/Products'
import Founder from './components/Founder'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

function Divider() {
  return (
    <div className="w-full max-w-[1080px] mx-auto px-8 lg:px-16">
      <div className="section-divider" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Divider />
      <Products />
      <Divider />
      <Founder />
      <Divider />
      <Process />
      <Divider />
      <CTA />
      <Footer />
    </div>
  )
}
