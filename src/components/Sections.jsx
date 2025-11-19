import ProductCard from './ProductCard'

const sampleProducts = [
  {
    id: 1,
    name: 'Block-Printed Dupatta',
    location: 'Jaipur, Rajasthan',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1685976045770-0562879cff98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbG9jay1QcmludGVkJTIwRHVwYXR0YXxlbnwwfDB8fHwxNzYzNTU5NTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Terracotta Vase',
    location: 'Kutch, Gujarat',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1685976045770-0562879cff98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbG9jay1QcmludGVkJTIwRHVwYXR0YXxlbnwwfDB8fHwxNzYzNTU5NTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Bamboo Basket',
    location: 'Assam',
    price: 899,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Warli Art Canvas',
    location: 'Maharashtra',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Blue Pottery Bowl',
    location: 'Jaipur, Rajasthan',
    price: 749,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Phulkari Shawl',
    location: 'Punjab',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1685976045770-0562879cff98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbG9jay1QcmludGVkJTIwRHVwYXR0YXxlbnwwfDB8fHwxNzYzNTU5NTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

const categories = [
  { name: 'Textiles', image: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXh0aWxlc3xlbnwwfDB8fHwxNzYzNTU5NTY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Pottery', image: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXh0aWxlc3xlbnwwfDB8fHwxNzYzNTU5NTY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Woodwork', image: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXh0aWxlc3xlbnwwfDB8fHwxNzYzNTU5NTY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Jewellery', image: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXh0aWxlc3xlbnwwfDB8fHwxNzYzNTU5NTY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export function FeaturedGrid() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1A1A1A] dark:text-[#FFF8F0]">Featured Finds</h2>
          <a href="/products" className="text-[#7A2E2E] dark:text-[#D4A017] hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sampleProducts.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function CategoryGrid() {
  return (
    <section className="py-14 bg-[#FFF8F0] dark:bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1A1A1A] dark:text-[#FFF8F0] mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((c) => (
            <a key={c.name} href={`/products?category=${encodeURIComponent(c.name)}`} className="group rounded-2xl overflow-hidden shadow ring-1 ring-black/5 dark:ring-white/10">
              <div className="aspect-video overflow-hidden">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-4 bg-white dark:bg-[#111]">
                <p className="font-semibold text-[#1A1A1A] dark:text-[#FFF8F0]">{c.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ArtisanSpotlight() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfDB8fHwxNzYzNTU5NTY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Artisan portrait" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-[#7A2E2E] dark:text-[#D4A017] font-semibold">Artisan Spotlight</p>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-[#1A1A1A] dark:text-[#FFF8F0] mt-2">Meet Meera — Block Printing Maestro</h3>
          <p className="mt-3 text-[#1A1A1A]/70 dark:text-[#FFF8F0]/80">From the vibrant lanes of Jaipur, Meera has mastered traditional hand block printing techniques passed down for generations. Her work blends heritage with contemporary design.</p>
          <div className="mt-5">
            <a href="/products?artisan=meera" className="inline-flex px-5 py-3 rounded-xl bg-[#D4A017] text-[#1A1A1A] font-semibold hover:brightness-95">Explore Meera's Collection</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/5 bg-[#FFF8F0] dark:bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7A2E2E] to-[#D4A017]" />
            <p className="font-serif text-xl font-extrabold text-[#1A1A1A] dark:text-[#FFF8F0]">Crafty</p>
          </div>
          <p className="mt-3 text-sm text-[#1A1A1A]/60 dark:text-[#FFF8F0]/70">An online marketplace celebrating India's handmade heritage.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#1A1A1A] dark:text-[#FFF8F0] mb-3">About</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="/about">Our Story</a></li>
            <li><a className="hover:underline" href="/shipping">Shipping Info</a></li>
            <li><a className="hover:underline" href="/help">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1A1A1A] dark:text-[#FFF8F0] mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">Returns</a></li>
            <li><a className="hover:underline" href="#">Privacy</a></li>
            <li><a className="hover:underline" href="#">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1A1A1A] dark:text-[#FFF8F0] mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">Twitter</a></li>
            <li><a className="hover:underline" href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-[#1A1A1A]/50 dark:text-[#FFF8F0]/50 pb-8">© {new Date().getFullYear()} Crafty</div>
    </footer>
  )
}
