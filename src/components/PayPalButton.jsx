import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useCart } from "../context/CartContext"

export default function PayPalButton() {
  const { totalAmount, clearCart } = useCart()

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AYmRHHxjf3KmQ8e-FvONle3BPkQ-jtEMYwkLpNMlKaWeGdBqe-PNHO7lQpl3noCYB4D-CaPy56zxXsbS",
        currency: "USD"
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount.toFixed(2)
                }
              }
            ]
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(() => {
            alert("PayPal Payment Successful")
            clearCart()
          })
        }}
      />
    </PayPalScriptProvider>
  )
}
