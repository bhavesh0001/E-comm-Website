import React from "react";
import { FaCreditCard, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();
    // Future: Add payment API logic here
    navigate("/order-confirmed"); // Redirect to order confirmation
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-transparent">
      <div className="bg-white/90 rounded-2xl shadow-2xl border border-gray-200 px-10 py-8 w-full max-w-2xl relative">
        {/* Luxury Header */}
        <div className="flex items-center gap-3 mb-7">
          <span className="bg-blue-100 p-3 rounded-xl shadow text-blue-600">
            <FaCreditCard size={26} />
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Checkout
          </h2>
        </div>
        {/* Address Input */}
        <form onSubmit={handleOrder}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt /> Shipping Address
            </label>
            <input
              type="text"
              placeholder="Enter your full address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none bg-white text-base shadow transition"
              required
            />
          </div>
          {/* Card Input */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none bg-white text-base shadow transition"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none bg-white text-base shadow transition"
                required
              />
            </div>
          </div>
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Card Holder Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none bg-white text-base shadow transition"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">CVV</label>
              <input
                type="password"
                placeholder="***"
                maxLength={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none bg-white text-base shadow transition"
                required
              />
            </div>
          </div>
          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 hover:from-blue-700 hover:to-blue-500 text-white text-lg font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all duration-200"
          >
            <FaLock /> Place Order Securely
          </button>
        </form>
        {/* Bottom Subtitle */}
        <div className="mt-5 text-center text-sm text-gray-400">
          <span>Payments are 100% secure & encrypted 🔒</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
