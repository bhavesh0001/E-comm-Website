
import ledtv from "../assets/ledtv.jpg";
import luxurydiningtable from "../assets/luxarydiningtable.jpg";
import mixergrinder from "../assets/mixergrinder.jpg";
import pheadphone from "../assets/headphone.jpg";
import kettle from "../assets/stainlesssteelkettle.jpg";
import formalshoes from "../assets/formalshoes.jpg";
import runningshoes from "../assets/runningshoes.jpg";
import sofa from "../assets/sofa.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
fetch("/api/products")
// Product data
const products = [
  {
    id: 1,
    name: "Smart LED TV",
    price: 28999,
    image: ledtv,
    category: "Electronics",
    specs: ["Ultra HD", "55 inch", "Smart TV", "Dolby Audio"],
    offer: "₹2000 OFF | 2yr warranty",
  },
  {
    id: 2,
    name: "Luxury Dining Table",
    price: 9999,
    image: luxurydiningtable,
    category: "Kitchen",
    specs: ["6 Seater", "Solid Wood", "Glass Top"],
    offer: "No Cost EMI | Free Chairs",
  },
  {
    id: 3,
    name: "Mixer Grinder",
    price: 3499,
    image: mixergrinder,
    category: "Kitchen",
    specs: ["750W", "3 Jars", "Overload Protection"],
    offer: "Flat 10% OFF",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 2299,
    image: runningshoes,
    category: "Footwear",
    specs: ["Lightweight", "Breathable", "Anti-skid"],
    offer: "Buy 1 Get 1 @₹999",
  },
  {
    id: 5,
    name: "Designer Sofa",
    price: 25999,
    image: sofa,
    category: "Sofa",
    specs: ["L Shape", "Premium Fabric", "5 Seater"],
    offer: "₹5000 OFF | Free Cushions",
  },
  {
    id: 6,
    name: "Premium Headphones",
    price: 5999,
    image: pheadphone,
    category: "Electronics",
    specs: ["ANC", "40H Battery", "Bluetooth 5.2"],
    offer: "Extra 5% OFF | Free Pouch",
  },
  {
    id: 7,
    name: "Stainless Steel Kettle",
    price: 1799,
    image: kettle,
    category: "Kitchen",
    specs: ["1.8L", "Auto Cutoff", "Cool Touch"],
    offer: "10% OFF | Free Cup Set",
  },
  {
    id: 8,
    name: "Men’s Formal Shoes",
    price: 3499,
    image: formalshoes,
    category: "Footwear",
    specs: ["Genuine Leather", "Soft Sole", "Lightweight"],
    offer: "20% OFF | Free Shoe Horn",
  },
];

const categories = [
  { name: "Kitchen", image: luxurydiningtable },
  { name: "Electronics", image: ledtv },
  { name: "Footwear", image: runningshoes },
  { name: "Sofa", image: sofa },
];

const offers = [
  { title: "Flat 20% OFF", desc: "On all Electronics till 25th August" },
  { title: "Mega Kitchen Sale", desc: "Up to 50% OFF on Kitchen Essentials" },
  { title: "Coupon: LUXE100", desc: "Get ₹100 OFF on orders above ₹999" },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#f6f7fa] min-h-screen pb-16">
      {/* Hero */}
      <div className="max-w-5xl mx-auto mt-10 mb-10 bg-white/95 rounded-2xl shadow-xl border border-gray-100 px-8 py-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-neutral-900 mb-2 tracking-tight">
          Welcome to Luxe & Current!
        </h1>
        <p className="text-lg text-neutral-500 font-medium text-center mb-6">
          Shop curated luxury & trending products at one place.
        </p>
        {/* Sale Banner */}
        <div className="flex items-center justify-center gap-3 text-base font-semibold text-neutral-700 bg-gradient-to-r from-gray-200/80 via-gray-100/80 to-blue-100/80 px-7 py-2 rounded-full shadow border border-gray-200">
          <span role="img" aria-label="sale">✨</span>
          <span>
            <span className="font-bold text-gray-900">Big Sale! Flat 20% OFF</span>
            <span className="mx-1 text-gray-400">—</span>
            <span className="bg-white/60 text-blue-700 px-2 py-1 rounded font-semibold mx-1">LUXE20</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="font-semibold text-gray-600">Free shipping above ₹4999</span>
          </span>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-extrabold mb-4 text-neutral-900 tracking-tight">
          <span className="bg-gray-200/80 rounded px-3 py-1 shadow">Top Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {products.map((prod, idx) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center min-h-[300px] group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ animation: `fadeInUp 0.5s ease ${idx * 0.06 + 0.15}s both` }}
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-28 h-28 object-cover rounded-xl mb-2 shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-bold text-lg text-neutral-800 mt-2 mb-1 text-center">{prod.name}</h3>
              <p className="text-xs font-semibold text-gray-400 mb-2">{prod.category}</p>
              <div className="flex flex-wrap gap-1 justify-center mb-1">
                {prod.specs.map((s, i) => (
                  <span key={i} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{s}</span>
                ))}
              </div>
              <p className="text-blue-800 font-bold mt-1 mb-1 text-xl">₹{prod.price}</p>
              <p className="text-xs text-pink-600 font-semibold mb-2">{prod.offer}</p>
              <button
                className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-5 py-2 mt-auto rounded-lg font-bold shadow-sm transition-all duration-200"
                onClick={() => addToCart(prod)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-neutral-900">Explore Categories</h2>
        <div className="flex gap-7 mb-12 overflow-x-auto pb-2">
          {categories.map((cat, idx) => (
            <Link to={`/category/${cat.name}`} key={idx} className="flex-shrink-0">
              <div className="bg-white/80 rounded-lg shadow p-4 flex flex-col items-center min-w-[180px] border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <img src={cat.image} alt={cat.name} className="w-16 h-16 object-cover mb-2 rounded" />
                <div className="font-semibold text-gray-700">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Offers & Coupons */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-neutral-900">🔥 Offers & Coupons</h2>
        <div className="flex flex-wrap gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-gray-100 border-l-4 border-blue-100 p-4 rounded-lg w-full md:w-1/3 shadow-sm"
            >
              <h3 className="font-bold text-lg mb-1 text-gray-700">{offer.title}</h3>
              <p className="text-gray-500">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FadeInUp keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(36px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default Home;
