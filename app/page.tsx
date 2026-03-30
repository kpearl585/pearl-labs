import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProduct from './components/FeaturedProduct'
import ProductPair from './components/ProductPair'
import Close from './components/Close'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-[#050508] min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProduct />
      <ProductPair />
      <Close />
      <Footer />
    </div>
  )
}
