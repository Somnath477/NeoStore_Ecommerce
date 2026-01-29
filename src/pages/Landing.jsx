import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Shopping, beautifully simple.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Discover thoughtfully designed products that elevate everyday life.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-black text-white px-8 py-3 rounded-full
                       text-sm font-medium hover:bg-gray-800 transition"
          >
            Shop now
          </Link>

          <Link
            to="/signup"
            className="px-8 py-3 rounded-full text-sm font-medium
                       border border-gray-300 hover:bg-gray-100 transition"
          >
            Get started
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
