import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const res = login(email, password)
    if (res.success) navigate('/products')
    else setError(res.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.form
        onSubmit={handleLogin}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass max-w-md w-full rounded-3xl p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

        {error && <p className="text-red-400 mb-3">{error}</p>}

        <input
          className="w-full mb-4 p-3 rounded-xl bg-black/40 focus:outline-none"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-3 rounded-xl bg-black/40 focus:outline-none"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] transition">
          Login
        </button>

        <p className="text-sm mt-4 text-center opacity-70">
          No account? <Link className="underline" to="/signup">Sign up</Link>
        </p>
      </motion.form>
    </div>
  )
}
