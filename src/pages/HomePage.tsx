import { Features } from '../components/home/Features'
import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { Hero } from '../components/home/Hero'
import { ProductGrid } from '../components/home/ProductGrid'

export function HomePage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}
