import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFF8F0] via-[#fff3e0] to-[#FFF8F0] dark:from-[#1A1A1A] dark:via-[#241f1c] dark:to-[#1A1A1A]" />
      <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-[#D4A017]/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-[#7A2E2E]/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] dark:text-[#FFF8F0] tracking-tight"
            >
              Celebrate Indian Craft. Empower Local Artisans.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-[#1A1A1A]/70 dark:text-[#FFF8F0]/80"
            >
              Discover handcrafted treasures from across India — from block-printed textiles to terracotta art. Every purchase supports a maker.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center px-5 py-3 rounded-xl bg-[#7A2E2E] text-white shadow hover:shadow-md transition-shadow">
                Shop Handmade
              </Link>
              <Link to="/about" className="inline-flex items-center px-5 py-3 rounded-xl border border-[#7A2E2E]/30 text-[#7A2E2E] hover:bg-[#7A2E2E]/5 dark:border-[#D4A017]/30 dark:text-[#D4A017]">
                Our Mission
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/5">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop"
                alt="Handcrafted pottery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-black/40 backdrop-blur rounded-2xl p-4 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
              <p className="text-sm font-medium text-[#1A1A1A] dark:text-[#FFF8F0]">Featured: Terracotta Pottery • Kutch, Gujarat</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
