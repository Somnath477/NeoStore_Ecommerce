import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        glass p-5 rounded-2xl flex flex-col
        border border-yellow-400/70
        shadow-[0_0_25px_rgba(250,204,21,0.25)]
      "
    >
      <div className="relative group aspect-square mb-4 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
        />
      </div>

      <h3 className="font-semibold line-clamp-2">{product.title}</h3>
      <p className="text-muted mt-1 mb-4">${product.price}</p>

      <button
        onClick={() => {
          addToCart(product)
          toast.success('Added to cart')
        }}
        className="mt-auto bg-yellow-400 text-black py-2 rounded-xl font-semibold"
      >
        Add to cart
      </button>
    </motion.div>
  )
}
