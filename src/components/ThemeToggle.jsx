import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#FFF8F0]" />
      ) : (
        <Moon className="w-5 h-5 text-[#1A1A1A]" />
      )}
    </button>
  )
}
