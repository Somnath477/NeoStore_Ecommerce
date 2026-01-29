import { motion } from "framer-motion"

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Purple glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px]
                   bg-purple-300/40 rounded-full blur-[120px]"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blue glow */}
      <motion.div
        className="absolute top-1/3 -right-40 w-[700px] h-[700px]
                   bg-blue-300/40 rounded-full blur-[120px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Yellow glow */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px]
                   bg-yellow-200/40 rounded-full blur-[120px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
