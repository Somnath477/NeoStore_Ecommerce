import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { token, logout } = useAuth()
  const user = JSON.parse(localStorage.getItem('currentUser'))

  if (!token) return null

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
        glass
        sticky top-0 z-50
        w-full
        px-6 py-4
        flex items-center gap-6
      "
    >
      <h1 className="font-bold text-xl">NeoStore</h1>

      <Link className="glass-hover px-3 py-1 rounded-lg" to="/products">
        Products
      </Link>

      <Link className="glass-hover px-3 py-1 rounded-lg" to="/cart">
        Cart
      </Link>

      <div className="ml-auto flex items-center gap-4">
        <span className="text-sm opacity-80">{user?.email}</span>
        <button onClick={logout} className="text-red-400">
          Logout
        </button>
      </div>
    </motion.nav>
  )
}
