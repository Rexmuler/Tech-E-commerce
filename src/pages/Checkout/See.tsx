import React, { useState, useContext } from 'react';
import { ProductContext } from "../../Context/Contex";  // Make sure the path is correct
import { useCart } from "../../Context/CartContext";  // Import CartContext

export const See: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { selectedProduct } = useContext(ProductContext)!;
  const { addToCart } = useCart();  // Use the addToCart function from CartContext

  if (!selectedProduct) return <p>No selectedProduct selected</p>;

  const calculateSubtotal = (price: number, quantity: number) => price * quantity;


  const subtotal = calculateSubtotal(selectedProduct.price, quantity);


  const handleAddToCart = () => {
    if (quantity > 5) {
      alert("You cannot add more than 5 items of this product to the cart.");
      return;
    }
    addToCart(selectedProduct, quantity); // Add product to cart with quantity
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 5) {
      setQuantity(value);
    } else if (value > 5) {
      alert("Maximum quantity allowed is 5.");
    }
  };
  

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? '★' : '☆');
    }
    return stars.join('');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-80 h-80 object-cover mb-6 md:mb-0"
        />
        <div className="md:max-w-md text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h1>
          <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
          <div className="flex items-center mt-4">
            <div className="text-lg font-semibold text-gray-900">${selectedProduct.price.toFixed(2)}</div>
            <div className="flex ml-4 text-yellow-500">
              <span>{renderStars(selectedProduct.rating)}</span>
            </div>
            <div className="ml-2 text-gray-600">{selectedProduct.rating} / 5</div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <label htmlFor="quantity" className="text-gray-700 mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Total Price */}
          <div className="mt-4 text-lg font-semibold text-gray-900">
            Total: ${subtotal.toFixed(2)}
          </div>
          


          {/* Add to Cart button */}
          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 w-full md:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
