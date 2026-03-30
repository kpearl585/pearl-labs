import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-[#050508] min-h-screen">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Footer />
    </div>
  )
}
