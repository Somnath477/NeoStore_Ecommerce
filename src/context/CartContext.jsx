import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { token } = useAuth()
  const user = JSON.parse(localStorage.getItem('currentUser'))

  const cartKey = user ? `cart_${user.email}` : null

  const [cart, setCart] = useState([])

  /* --------------------------------
     Load cart for logged-in user
  -------------------------------- */
  useEffect(() => {
    if (cartKey) {
      const savedCart = JSON.parse(localStorage.getItem(cartKey)) || []
      setCart(savedCart)
    } else {
      setCart([])
    }
  }, [cartKey, token])

  /* --------------------------------
     Persist cart per user
  -------------------------------- */
  useEffect(() => {
    if (cartKey) {
      localStorage.setItem(cartKey, JSON.stringify(cart))
    }
  }, [cart, cartKey])

  /* --------------------------------
     Cart actions
  -------------------------------- */
  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      return existing
        ? prev.map(i =>
            i.id === product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...prev, { ...product, quantity: 1 }]
    })
  }

  const increaseQty = id =>
    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    )

  const decreaseQty = id =>
    setCart(prev =>
      prev
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    )

  const clearCart = () => {
    if (cartKey) {
      localStorage.removeItem(cartKey)
    }
    setCart([])
  }

  const totalAmount = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
