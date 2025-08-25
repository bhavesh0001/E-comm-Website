import React from "react";

function randomTrackingId() {
  return "LC" + Math.floor(Math.random() * 100000000);
}

const OrderPlaced = () => {
  const trackingId = randomTrackingId();
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <span className="inline-block mb-4 text-5xl">✅</span>
        <h2 className="text-3xl font-bold mb-2 text-blue-900">Order Confirmed!</h2>
        <p className="text-lg mb-4">Thank you for your purchase, Bhavesh!</p>
        <div className="mb-3 text-left">
          <span className="font-semibold">Tracking ID: </span>
          <span className="text-blue-700 font-bold">{trackingId}</span>
        </div>
        <div className="mb-3 text-left">
          <span className="font-semibold">Estimated Delivery: </span>
          <span>3-5 days</span>
        </div>
        <div className="mb-6 text-left">
          <span className="font-semibold">Order Status: </span>
          <span className="text-green-600 font-bold">Confirmed</span>
        </div>
        <button
          onClick={() => window.location.href = "/"}
          className="bg-gradient-to-r from-blue-900 to-blue-400 text-white px-8 py-3 font-bold rounded-xl shadow hover:from-blue-800 hover:to-blue-500 transition-all duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
