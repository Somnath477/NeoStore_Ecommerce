import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar'
import AmbientBackground from './components/AmbientBackground'
import AmbientAccents from './components/AmbientAccents'
import ProtectedRoute from './routes/ProtectedRoute'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import OrderSuccess from './pages/OrderSuccess'

const Page = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35 }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()

  return (
    <>
      <AmbientBackground />
      <AmbientAccents />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Landing /></Page>} />
          <Route path="/login" element={<Page><Login /></Page>} />
          <Route path="/signup" element={<Page><Signup /></Page>} />

          <Route element={<ProtectedRoute />}>
            <Route path="/products" element={<Page><Products /></Page>} />
            <Route path="/cart" element={<Page><Cart /></Page>} />
            <Route path="/payment" element={<Page><Payment /></Page>} />
            <Route path="/order-success" element={<Page><OrderSuccess /></Page>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
