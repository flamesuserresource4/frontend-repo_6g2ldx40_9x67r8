import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('crafty_cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('crafty_cart', JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return next
      }
      return [...prev, { ...product, qty }]
    })
  }

  const updateQty = (id, qty) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p)))
  }

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id))
  const clear = () => setItems([])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items])

  const value = { items, addItem, updateQty, removeItem, clear, count, subtotal }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
