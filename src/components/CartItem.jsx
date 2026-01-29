import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => removeFromCart(item.id)}
      >
        Delete
      </button>
    </div>
  );
}