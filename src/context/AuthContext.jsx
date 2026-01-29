import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const signup = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('users')) || []

    if (users.find(u => u.email === email)) {
      return { success: false, message: 'User already exists' }
    }

    users.push({ email, password })
    localStorage.setItem('users', JSON.stringify(users))
    return { success: true }
  }

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(u => u.email === email && u.password === password)

    if (!user) return { success: false, message: 'Invalid credentials' }

    const fakeJWT = 'fake-jwt-' + Date.now()
    localStorage.setItem('token', fakeJWT)
    localStorage.setItem('currentUser', JSON.stringify({ email }))
    setToken(fakeJWT)
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
