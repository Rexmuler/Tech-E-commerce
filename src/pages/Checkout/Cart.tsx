import { useCart } from "../../Context/CartContext"; // Make sure the path is correct
import { Link } from "react-router-dom"; // Optional, if you have routing

export function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate the total price for all cart items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart is Empty</h1>
        <Link to="/shop" className="text-blue-600 mt-4 inline-block">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
      <div className="mt-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center">
                  <span className="mr-2">Quantity: {item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              ${ (item.price * item.quantity).toFixed(2) }
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700"
        >
          Clear Cart
        </button>
        <div className="text-2xl font-semibold text-gray-900">
          Total: ${calculateTotal().toFixed(2)}
        </div>
        <Link to="/Checkout" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
           Checkout
        </Link>
      </div>
    </div>
  );
}
