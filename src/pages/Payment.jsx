import RazorpayButton from '../components/RazorpayButton'
import PayPalButton from '../components/PayPalButton'
import { useCart } from '../context/CartContext'

export default function Payment() {
  const { totalAmount } = useCart()

  if (totalAmount === 0) {
    return <h1 className="p-30 text-center text-4xl text-bold border m-40 "> Cart Is Empty</h1>
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border p-6 rounded space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Pay ${totalAmount.toFixed(2)}
        </h1>

        {/* Razorpay */}
        <RazorpayButton />

        <div className="text-center text-gray-400">OR</div>

        {/* PayPal */}
        <PayPalButton />
      </div>
    </div>
  )
}
