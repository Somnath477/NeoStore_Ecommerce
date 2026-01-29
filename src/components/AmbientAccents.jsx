import { motion } from "framer-motion"

export default function AmbientAccents() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* =====================
          RINGS
      ===================== */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full
                   border border-purple-300/40"
        animate={{ rotate: 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-40 w-[420px] h-[420px] rounded-full
                   border border-blue-300/40"
        animate={{ rotate: -360 }}
        transition={{
          duration: 160,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =====================
          CAPSULES
      ===================== */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-3 rounded-full
                   bg-gradient-to-r from-purple-300/50 to-blue-300/50"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-20 h-3 rounded-full
                   bg-gradient-to-r from-yellow-200/50 to-purple-300/50"
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================
          SPARKLES (DOTS)
      ===================== */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full
                     bg-gray-400/60"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================
          SOFT GRADIENT BLOBS
      ===================== */}
      <motion.div
        className="absolute -bottom-40 left-1/4 w-[520px] h-[520px]
                   bg-purple-200/30 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -top-48 right-1/4 w-[520px] h-[520px]
                   bg-blue-200/30 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
