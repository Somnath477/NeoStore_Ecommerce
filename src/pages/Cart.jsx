import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cart, increaseQty, decreaseQty, totalAmount } = useCart()
  const navigate = useNavigate()

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map(item => (
        <motion.div
          layout
          key={item.id}
          className="glass rounded-xl p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="opacity-70">${item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
        </motion.div>
      ))}

      <div className="flex justify-between text-xl font-bold mt-6">
        <span>Total</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

      <button
        onClick={() => navigate('/payment')}
        className="mt-6 w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Checkout
      </button>
    </div>
  )
}
