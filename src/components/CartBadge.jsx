import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

export default function CartBadge() {
  const { count } = useCart()
  return (
    <Link to="/cart" className="relative p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" aria-label="Cart">
      <ShoppingCart className="w-5 h-5 text-[#1A1A1A] dark:text-[#FFF8F0]" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#7A2E2E] text-white text-[10px] flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  )}
