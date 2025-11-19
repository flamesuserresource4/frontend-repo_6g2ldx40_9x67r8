import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { FeaturedGrid, CategoryGrid, ArtisanSpotlight, Footer } from './components/Sections'
import ProductCard from './components/ProductCard'
import { useCart } from './components/CartContext'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [products, setProducts] = useState([])
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    const ctrl = new AbortController()
    async function fetchProducts() {
      setLoading(true)
      setError('')
      try {
        const params = new URLSearchParams()
        if (q) params.set('q', q)
        if (category) params.set('category', category)
        const res = await fetch(`${API_BASE}/api/products?${params.toString()}`, { signal: ctrl.signal })
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        const mapped = data.map((d) => ({ id: d.id, name: d.name, location: d.location, price: d.price, image: d.image }))
        setProducts(mapped)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
    return () => ctrl.abort()
  }, [q, category])

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold">All Products</h1>
          <div className="flex gap-2">
            <input value={q} onChange={(e) => setQ(e.target.value)} className="px-4 py-2 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10" placeholder="Search" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 rounded-xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10">
              <option value="">All</option>
              <option>Textiles</option>
              <option>Ceramics</option>
              <option>Home</option>
              <option>Art</option>
            </select>
          </div>
        </div>
        {loading && <p className="opacity-70">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <a key={p.id} href={`/products/${p.id}`} className="block">
                <ProductCard product={p} />
              </a>
            ))}
          </div>
        )}
      </section>
    </Layout>
  )
}

export function ProductDetailPage({ id }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addItem } = useCart()

  useEffect(() => {
    const ctrl = new AbortController()
    async function fetchProduct() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`${API_BASE}/api/products/${id}`, { signal: ctrl.signal })
        if (!res.ok) throw new Error('Not found')
        const d = await res.json()
        setProduct({ id: d.id, name: d.name, price: d.price, image: d.image, location: d.location })
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
    return () => ctrl.abort()
  }, [id])

  if (loading) return <Layout><div className="max-w-5xl mx-auto px-4 py-12">Loading...</div></Layout>
  if (error || !product) return <Layout><div className="max-w-5xl mx-auto px-4 py-12">Product not found.</div></Layout>

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl overflow-hidden shadow ring-1 ring-black/5 dark:ring-white/10">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold">{product.name}</h1>
          {product.location && <p className="mt-2 opacity-80">{product.location}</p>}
          <div className="mt-6 text-[#7A2E2E] dark:text-[#D4A017] text-3xl font-bold">₹{product.price}</div>
          <button onClick={() => addItem(product, 1)} className="mt-6 px-6 py-3 rounded-xl bg-[#7A2E2E] text-white hover:brightness-95">Add to Cart</button>
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

export function CartPage() {
  const { items, updateQty, removeItem, subtotal, clear } = useCart()
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-extrabold mb-6">Your Cart</h1>
        {items.length === 0 ? (
          <p className="opacity-70">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center rounded-2xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10 p-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm opacity-70">₹{item.price}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">-</button>
                      <input value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value) || 1)} className="w-12 text-center rounded bg-black/5 dark:bg-white/10" />
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2 py-1 rounded bg-black/5 dark:bg:white/10">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-sm text-red-600">Remove</button>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10 p-4 h-fit">
              <h2 className="font-semibold text-lg">Order Summary</h2>
              <div className="mt-4 flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm opacity-70 mt-2">Shipping and taxes calculated at checkout.</p>
              <button className="mt-4 w-full px-4 py-3 rounded-xl bg-[#7A2E2E] text-white">Checkout</button>
              <button onClick={clear} className="mt-2 w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10">Clear Cart</button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}
