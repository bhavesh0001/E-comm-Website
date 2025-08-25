import React from "react";
import { motion } from "framer-motion";
import { FaTrashAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext"; 
fetch("/api/products")


const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.7 } },
};

const Cart = () => {
  const { cart, removeFromCart, changeQty } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={fadeUp}
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12"
      style={{
        background: "linear-gradient(120deg, #f8fafc 70%, #e3e7f3 100%)",
      }}
    >
      <motion.div
        className="w-full max-w-3xl bg-white/75 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-200 p-8"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h1 className="text-3xl font-extrabold text-blue-900 mb-6 flex items-center gap-3">
          <FaShoppingBag className="text-blue-500 text-2xl" /> Your Cart
        </h1>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-lg text-gray-600 font-semibold mb-2">Your cart is empty.</p>
            <a
              href="/"
              className="mt-2 px-6 py-2 bg-blue-900 text-white font-bold rounded-lg shadow hover:bg-blue-800 transition"
            >
              Shop Now
            </a>
          </div>
        ) : (
          <div>
            <div className="divide-y divide-gray-200">
              {cart.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="flex items-center gap-5 py-6"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl shadow border border-gray-100 bg-white"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-neutral-800">{item.name}</h3>
                    <ul className="flex gap-3 mt-1 text-xs text-gray-500">
                      {(item.specs || []).map((s, i) => (
                        <li key={i} className="bg-gray-100 rounded-full px-2 py-0.5">{s}</li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-blue-900 font-bold text-xl">₹{item.price}</span>
                      <span className="text-xs text-gray-400 font-medium">
                         {item.qty}
                      </span>
                    </div>
                  </div>
                  {/* Quantity */}
                  <div className="flex flex-col items-center">
                    <input
                      type="number"
                      value={item.qty}
                      min="1"
                      onChange={e => changeQty(item.id, +e.target.value)}
                      className="w-14 rounded bg-gray-100 border-none text-center font-semibold text-blue-800 text-lg py-1 mb-2 shadow"
                    />
                    <motion.button
                      whileTap={{ scale: 0.87 }}
                      className="text-red-500 hover:text-red-700 rounded-full p-2 bg-white/90 hover:bg-red-50 border transition"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrashAlt />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Cart Total & Checkout */}
            <div className="border-t pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="text-xl font-bold text-blue-900 flex items-center gap-2">
                Total: <span className="text-2xl font-extrabold text-blue-700">₹{total}</span>
              </div>
              <Link to="/checkout">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    background:
                      "linear-gradient(90deg,#232e4a 60%,#5f7ff8 100%)",
                    boxShadow: "0 4px 28px 0 #b7c7ff44",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-900 to-blue-400 text-white px-8 py-3 font-bold rounded-xl shadow-lg hover:from-blue-800 hover:to-blue-500 transition-all duration-200 tracking-wide text-lg"
                >
                  Proceed to Checkout
                </motion.button>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
      {/* Floating Help */}
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 bottom-8 z-30"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
      >
        <div className="bg-white/90 px-5 py-3 rounded-full shadow border flex items-center gap-2 font-medium text-blue-900 backdrop-blur-md text-sm">
          Need help with your cart, discounts, or checkout?
          <button className="font-bold underline text-blue-800 hover:text-blue-600 ml-2">Ask Now!</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cart;
