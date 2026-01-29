import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass p-10 rounded-3xl text-center"
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">
          ✅
        </motion.div>
        <h1 className="text-3xl font-bold mb-2">Order Placed!</h1>
        <Link to="/products" className="bg-white text-black px-6 py-3 rounded-xl">
          Continue Shopping
        </Link>
      </motion.div>
    </div>
  )
}
