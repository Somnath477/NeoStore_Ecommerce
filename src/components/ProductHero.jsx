import { motion } from "framer-motion"

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Designed to elevate everyday shopping.
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Discover thoughtfully curated products with premium quality and seamless checkout.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Product showcase"
              className="w-full max-h-[360px] object-contain"
            />

            {/* Soft glow behind image */}
            <div className="absolute inset-0 -z-10 bg-purple-200/30 blur-3xl rounded-full" />
          </motion.div>

        </div>
      </div>

      {/* Bottom fade (Apple-style transition) */}
      <div className="pointer-events-none h-24 bg-gradient-to-b from-transparent to-[#f5f5f7]" />
    </section>
  )
}
