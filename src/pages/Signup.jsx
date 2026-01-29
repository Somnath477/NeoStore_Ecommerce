import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    const result = signup({ email, password })

    if (!result.success) {
      setError(result.message)
      return
    }

    alert('Signup successful! Please login.')
    navigate('/')
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-96 p-6 shadow-lg rounded-xl" onSubmit={handleSignup}>
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white p-2 rounded">
          Sign Up
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{' '}
          <Link to="/" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
