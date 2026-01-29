import { useCart } from '../context/CartContext'

export default function RazorpayButton() {
  const { totalAmount, clearCart } = useCart()

  const handlePayment = () => {
    const options = {
      key: "rzp_test_YOUR_KEY_HERE",
      amount: Math.round(totalAmount * 100), // paise
      currency: "INR",
      name: "Demo Store",
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment Successful\n" + response.razorpay_payment_id)
        clearCart()
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#000000"
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-[#0C2451] text-white py-3 rounded mt-3"
    >
      Pay with Razorpay
    </button>
  )
}
