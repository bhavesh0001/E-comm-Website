import React from "react";
import { FaCheckCircle, FaMapMarkedAlt } from "react-icons/fa";

const OrderConfirmed = () => {
  // You can generate a fake tracking ID for UI
  const fakeTrackingId = "LUXE" + Math.floor(Math.random() * 1000000);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <div className="bg-white/90 rounded-2xl shadow-2xl border border-gray-200 px-10 py-8 w-full max-w-xl flex flex-col items-center">
        <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        <h1 className="text-3xl font-extrabold text-blue-900 mb-2 text-center">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Thank you for shopping with <span className="font-bold">Luxe & Current</span>.<br />
          Your order has been placed and is being processed.
        </p>
        <div className="bg-gray-100 rounded-xl px-5 py-3 mb-4 flex flex-col items-center shadow">
          <div className="text-sm font-semibold text-gray-500 mb-1">Tracking ID</div>
          <div className="text-blue-900 font-mono font-bold text-lg">{fakeTrackingId}</div>
        </div>
        <div className="flex items-center gap-2 text-gray-700 mb-3">
          <FaMapMarkedAlt className="text-blue-500" />
          <span>Track your order on the map (feature coming soon)</span>
        </div>
        <a
          href="/"
          className="mt-2 px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default OrderConfirmed;
