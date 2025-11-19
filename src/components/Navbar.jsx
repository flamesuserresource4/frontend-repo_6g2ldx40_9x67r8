import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, User, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { to: '/products', label: 'Categories' },
  { to: '/about', label: 'About' },
  { to: '/help', label: 'Help Center' },
  { to: '/shipping', label: 'Shipping' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkBase = 'text-[15px] font-medium text-[#1A1A1A] dark:text-[#FFF8F0] hover:text-[#7A2E2E] dark:hover:text-[#D4A017] transition-colors'
  const activeClass = 'text-[#7A2E2E] dark:text-[#D4A017]'

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#FFF8F0]/80 dark:bg-[#1A1A1A]/70 border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7A2E2E] to-[#D4A017] shadow-md ring-1 ring-black/5 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="font-serif text-2xl font-extrabold tracking-tight text-[#1A1A1A] dark:text-[#FFF8F0] group-hover:text-[#7A2E2E] dark:group-hover:text-[#D4A017] transition-colors">Crafty</span>
          </Link>

          {/* Center: Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => [linkBase, isActive ? activeClass : ''].join(' ')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/login" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" aria-label="Account">
              <User className="w-5 h-5 text-[#1A1A1A] dark:text-[#FFF8F0]" />
            </Link>
            <Link to="/cart" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" aria-label="Cart">
              <ShoppingCart className="w-5 h-5 text-[#1A1A1A] dark:text-[#FFF8F0]" />
            </Link>
            <button className="lg:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              <Menu className="w-5 h-5 text-[#1A1A1A] dark:text-[#FFF8F0]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/5 dark:border-white/5 bg-[#FFF8F0] dark:bg-[#1A1A1A]">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => [
                  'block px-3 py-2 rounded-lg',
                  'text-[#1A1A1A] dark:text-[#FFF8F0] hover:bg-black/5 dark:hover:bg-white/5',
                  isActive ? 'bg-black/5 dark:bg-white/10 text-[#7A2E2E] dark:text-[#D4A017]' : '',
                ].join(' ')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
