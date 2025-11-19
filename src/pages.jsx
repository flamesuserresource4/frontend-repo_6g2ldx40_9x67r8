import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { FeaturedGrid, CategoryGrid, ArtisanSpotlight, Footer } from './components/Sections'
import ProductCard from './components/ProductCard'

const allProducts = [
  { id: 1, name: 'Block-Printed Dupatta', location: 'Jaipur, Rajasthan', price: 1599, image: 'https://images.unsplash.com/photo-1685976045770-0562879cff98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbG9jay1QcmludGVkJTIwRHVwYXR0YXxlbnwwfDB8fHwxNzYzNTU5NTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Terracotta Vase', location: 'Kutch, Gujarat', price: 1299, image: 'https://images.unsplash.com/photo-1685976045770-0562879cff98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbG9jay1QcmludGVkJTIwRHVwYXR0YXxlbnwwfDB8fHwxNzYzNTU5NTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Bamboo Basket', location: 'Assam', price: 899, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Warli Art Canvas', location: 'Maharashtra', price: 2199, image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Blue Pottery Bowl', location: 'Jaipur, Rajasthan', price: 749, image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Phulkari Shawl', location: 'Punjab', price: 1899, image: 'https://images.unsplash.com/photo-1685976045770-0562879cff98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbG9jay1QcmludGVkJTIwRHVwYXR0YXxlbnwwfDB8fHwxNzYzNTU5NTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#FFF8F0]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <FeaturedGrid />
      <CategoryGrid />
      <ArtisanSpotlight />
    </Layout>
  )
}

export function AboutPage() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-extrabold">About Crafty</h1>
        <p className="mt-4 text-[#1A1A1A]/70 dark:text-[#FFF8F0]/80">
          Crafty is a marketplace that celebrates India’s handmade culture. We partner with local artisans, cooperatives, and workshops to bring authentic crafts to a global audience.
        </p>
      </section>
    </Layout>
  )
}

export function HelpCenterPage() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-extrabold">Help Center</h1>
        <div className="mt-6 space-y-4">
          <details className="rounded-xl bg-white dark:bg-[#111] p-4 ring-1 ring-black/5 dark:ring-white/10">
            <summary className="font-semibold">How do I place an order?</summary>
            <p className="mt-2 text-sm opacity-80">Browse products, add to cart, and proceed to checkout. You can sign up during checkout.</p>
          </details>
          <details className="rounded-xl bg-white dark:bg-[#111] p-4 ring-1 ring-black/5 dark:ring-white/10">
            <summary className="font-semibold">What payment methods are accepted?</summary>
            <p className="mt-2 text-sm opacity-80">We accept major cards and UPI.</p>
          </details>
        </div>
      </section>
    </Layout>
  )
}

export function ShippingInfoPage() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-extrabold">Shipping Information</h1>
        <p className="mt-4 opacity-80">Orders are shipped within 3-5 business days. Delivery times vary by location.</p>
      </section>
    </Layout>
  )
}

export function ProductsPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-extrabold mb-6">All Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allProducts.map((p) => (
            <a key={p.id} href={`/products/${p.id}`} className="block">
              <ProductCard product={p} />
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export function ProductDetailPage({ id }) {
  const product = useMemo(() => allProducts.find((p) => String(p.id) === String(id)) || allProducts[0], [id])
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl overflow-hidden shadow ring-1 ring-black/5 dark:ring-white/10">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold">{product.name}</h1>
          <p className="mt-2 opacity-80">{product.location}</p>
          <div className="mt-6 text-[#7A2E2E] dark:text-[#D4A017] text-3xl font-bold">₹{product.price}</div>
          <button className="mt-6 px-6 py-3 rounded-xl bg-[#7A2E2E] text-white hover:brightness-95">Add to Cart</button>
          <div className="mt-8 prose prose-neutral dark:prose-invert">
            <p>Handcrafted with care by local artisans using traditional methods.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function AuthPage({ mode }) {
  const isLogin = mode === 'login'
  return (
    <Layout>
      <section className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-3xl font-extrabold mb-6">{isLogin ? 'Login' : 'Create your account'}</h1>
        <form className="space-y-4">
          <input className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10" placeholder="Email" />
          <input className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10" placeholder="Password" type="password" />
          {!isLogin && (
            <input className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10" placeholder="Full name" />
          )}
          <button className="w-full px-4 py-3 rounded-xl bg-[#7A2E2E] text-white">{isLogin ? 'Login' : 'Sign up'}</button>
        </form>
        <p className="mt-4 text-sm opacity-80">
          {isLogin ? 'New to Crafty?' : 'Already have an account?'}{' '}
          <a className="text-[#7A2E2E] dark:text-[#D4A017]" href={isLogin ? '/signup' : '/login'}>
            {isLogin ? 'Create one' : 'Login'}
          </a>
        </p>
      </section>
    </Layout>
  )
}

export function SellerDashboardPage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-extrabold mb-6">Seller Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-2xl p-5 bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10">
            <p className="text-sm opacity-80">Total Products</p>
            <p className="text-3xl font-extrabold mt-2">12</p>
          </div>
          <div className="rounded-2xl p-5 bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10">
            <p className="text-sm opacity-80">Orders</p>
            <p className="text-3xl font-extrabold mt-2">48</p>
          </div>
          <div className="rounded-2xl p-5 bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10">
            <p className="text-sm opacity-80">Earnings</p>
            <p className="text-3xl font-extrabold mt-2">₹42,300</p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl p-5 bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10">
          <h2 className="font-semibold mb-4">Quick Add Product</h2>
          <form className="grid md:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10" placeholder="Name" />
            <input className="px-4 py-3 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10" placeholder="Price" />
            <input className="px-4 py-3 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10 md:col-span-2" placeholder="Image URL" />
            <button className="px-4 py-3 rounded-xl bg-[#D4A017] text-[#1A1A1A] font-semibold md:col-span-2">Add Product</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
