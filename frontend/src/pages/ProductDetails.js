import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {  FaRegHeart, FaShareAlt, FaStar } from "react-icons/fa";

// Example product data (you can import the real one)
import runningshoes from "../assets/runningshoes.jpg";
import ledtv from "../assets/ledtv.jpg";
import luxurydiningtable from "../assets/luxarydiningtable.jpg";
import mixergrinder from "../assets/mixergrinder.jpg";
import pheadphone from "../assets/headphone.jpg";
import kettle from "../assets/stainlesssteelkettle.jpg";
import formalshoes from "../assets/formalshoes.jpg";
import sofa from "../assets/sofa.jpg";

// Sample product array (match with id param)
const products = [
  {
    id: 1, name: "Smart LED TV", price: 28999, image: ledtv, category: "Electronics",
    rating: 4.7, specs: ["4K Display", "Smart Features", "HDR10+"],
    offers: ["Flat ₹2000 OFF", "1 Year Warranty"],
  },
  {
    id: 2, name: "Luxury Dining Table", price: 9999, image: luxurydiningtable, category: "Kitchen",
    rating: 4.5, specs: ["Marble Top", "6 Seater", "Premium Wood"],
    offers: ["Free Chairs", "Flat ₹1500 OFF"],
  },
  {
    id: 3, name: "Mixer Grinder", price: 3499, image: mixergrinder, category: "Kitchen",
    rating: 4.3, specs: ["750W Motor", "3 Jars", "Overload Protection"],
    offers: ["Extra Jar Free", "Flat ₹500 OFF"],
  },
  {
    id: 4, name: "Running Shoes", price: 2299, image: runningshoes, category: "Footwear",
    rating: 4.6, specs: ["Memory Foam", "Lightweight", "Water Resistant"],
    offers: ["Free Socks", "Flat ₹200 OFF"],
  },
  {
    id: 5, name: "Designer Sofa", price: 25999, image: sofa, category: "Sofa",
    rating: 4.8, specs: ["Luxury Fabric", "L-shape", "5 Seater"],
    offers: ["Cushions Free", "Flat ₹4000 OFF"],
  },
  {
    id: 6, name: "Premium Headphones", price: 5999, image: pheadphone, category: "Electronics",
    rating: 4.4, specs: ["Noise Cancelling", "Bluetooth 5.2", "20h Battery"],
    offers: ["Free Case", "Flat ₹800 OFF"],
  },
  {
    id: 7, name: "Stainless Steel Kettle", price: 1799, image: kettle, category: "Kitchen",
    rating: 4.2, specs: ["Auto Cut-off", "1.8L", "360° Swivel Base"],
    offers: ["Flat ₹200 OFF"],
  },
  {
    id: 8, name: "Men’s Formal Shoes", price: 3499, image: formalshoes, category: "Footwear",
    rating: 4.5, specs: ["Genuine Leather", "Cushioned Insole", "Anti-slip"],
    offers: ["Shoe Cream Free", "Flat ₹300 OFF"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.7 } },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-96">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-gray-700">Product not found!</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={fadeUp}
      className="min-h-[80vh] flex justify-center items-center px-4 py-12"
      style={{
        background: "linear-gradient(120deg, #f8fafc 60%, #e6eaff 100%)",
      }}
    >
      <motion.div
        className="w-full max-w-4xl flex flex-col md:flex-row bg-white/70 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        {/* Image */}
        <motion.div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#f9fafb] via-[#f6f8fb] to-[#e5e7ef]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-xl border border-gray-200 max-w-[260px] max-h-[220px] object-contain mb-6"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          />
          {/* Wishlist & Share Buttons */}
          <div className="flex gap-4">
            <motion.button whileTap={{ scale: 0.85 }} className="rounded-full bg-white/90 border shadow p-3 text-xl text-gray-400 hover:text-red-400 hover:border-red-200 transition-all duration-200">
              <FaRegHeart />
            </motion.button>
            <motion.button whileTap={{ scale: 0.85 }} className="rounded-full bg-white/90 border shadow p-3 text-xl text-gray-400 hover:text-blue-500 hover:border-blue-200 transition-all duration-200">
              <FaShareAlt />
            </motion.button>
          </div>
        </motion.div>
        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-center p-8 space-y-4">
          <div className="uppercase tracking-wide text-xs text-blue-600 font-bold">{product.category}</div>
          <motion.h2 className="text-3xl font-black text-neutral-900 mb-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            {product.name}
          </motion.h2>
          <div className="flex items-center gap-2 mb-1">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, idx) =>
                <FaStar key={idx} className={idx < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
              )}
            </div>
            <span className="text-gray-500 font-semibold text-sm">{product.rating} / 5</span>
          </div>
          <div className="flex items-center gap-4 mb-1">
            <span className="text-2xl font-extrabold text-blue-800">₹{product.price}</span>
            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-md text-xs shadow-sm border border-blue-200">Best Price Today</span>
          </div>
          {/* Offers */}
          <div>
            <span className="font-semibold text-neutral-700">Available Offers:</span>
            <ul className="list-disc ml-5 text-blue-700 text-sm mt-1">
              {product.offers.map((offer, idx) => (
                <li key={idx}>{offer}</li>
              ))}
            </ul>
          </div>
          {/* Specs */}
          <div>
            <span className="font-semibold text-neutral-700">Specifications:</span>
            <ul className="list-disc ml-5 text-gray-600 text-sm mt-1">
              {product.specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>
          {/* CTA Buttons */}
          <motion.div className="flex gap-4 mt-2">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px 0 #b7c7ff44" }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-900 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none transition-all duration-200"
            >
              Buy Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 2px 16px 0 #bccbe2" }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-100 text-blue-900 font-bold px-6 py-2 rounded-lg shadow border hover:bg-gray-200 focus:outline-none transition-all duration-200"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      {/* Bottom Floating Suggestion */}
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 bottom-8 z-30"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, type: "spring" }}
      >
        <div className="bg-white/90 px-5 py-3 rounded-full shadow border flex items-center gap-2 font-medium text-blue-900 backdrop-blur-md text-sm">
          Want more product info, specs, ratings, offers, wishlist or share?
          <button className="font-bold underline text-blue-800 hover:text-blue-600 ml-2">Tell me!</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetails;
