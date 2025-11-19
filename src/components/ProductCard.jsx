import { motion } from 'framer-motion'
import { useCart } from './CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const handleAdd = (e) => {
    e.preventDefault()
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, 1)
  }
  return (
    <motion.div whileHover={{ y: -4 }} className="group rounded-2xl bg-white dark:bg-[#111] ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-md transition-all overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FFF8F0]">{product.name}</h3>
        {product.location && (
          <p className="text-sm text-[#1A1A1A]/60 dark:text-[#FFF8F0]/70">{product.location}</p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-[#7A2E2E] dark:text-[#D4A017]">₹{product.price}</span>
          <button onClick={handleAdd} className="px-3 py-1.5 rounded-lg bg-[#7A2E2E] text-white text-sm hover:bg-[#682626]">Add</button>
        </div>
      </div>
    </motion.div>
  )
}
