import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext"; // Adjust the import path
import { Slide, toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems = [] } = useContext(CartContext) || { cart: [] };
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    postalCode: "",
    cardNumber: "",
    exp: "",
    cvv: "",
  });

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!paymentMethod) {
      toast.info("Please select a payment method.");
      return;
    }
    if (
      !cardDetails.name ||
      !cardDetails.postalCode ||
      !cardDetails.cardNumber ||
      !cardDetails.exp ||
      !cardDetails.cvv
    ) {
      toast.error("Please fill in all the fields.");
      return;
    }
    toast.success("Payment Successful!");
  };

  return (
    <div className="font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4">
      <div className="bg-purple-100 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Checkout
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-800">
              Choose your payment method
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="card"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label
                  htmlFor="card"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <img
                    src="https://readymadeui.com/images/visa.webp"
                    className="w-12"
                    alt="card1"
                  />
                  <img
                    src="https://readymadeui.com/images/american-express.webp"
                    className="w-12"
                    alt="card2"
                  />
                  <img
                    src="https://readymadeui.com/images/master.webp"
                    className="w-12"
                    alt="card3"
                  />
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="paypal"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label
                  htmlFor="paypal"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <img
                    src="https://readymadeui.com/images/paypal.webp"
                    className="w-20"
                    alt="paypalCard"
                  />
                </label>
              </div>
            </div>

            <form className="mt-8">
              <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name of card holder"
                    value={cardDetails.name}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="postalCode"
                    placeholder="Postal code"
                    value={cardDetails.postalCode}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="cardNumber"
                    placeholder="Card number"
                    value={cardDetails.cardNumber}
                    onChange={handleInputChange}
                    className="col-span-full px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="exp"
                    placeholder="EXP."
                    value={cardDetails.exp}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="cvv"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/shop">
                  <button
                    type="button"
                    className="px-7 py-3.5 text-sm tracking-wide bg-white hover:bg-gray-50 text-gray-800 rounded-md"
                  >
                    Pay later
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-md max-lg:-order-1">
            <h3 className="text-lg font-bold text-gray-800">Summary</h3>
            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-sm">
                Total{" "}
                <span className="ml-auto font-bold">
                  ${calculateCartTotal().toFixed(2)}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={500}
        transition={Slide}
        closeOnClick
        hideProgressBar
        limit={1}
        stacked
        className="top-3 max-w-[337px] w-[10px] left-[50%] -translate-x-[50%]"
      />
    </div>
  );
};

export default Checkout;
