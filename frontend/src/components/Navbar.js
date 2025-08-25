import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaThList, FaShoppingCart, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 shadow border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-2">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="font-serif font-black text-2xl tracking-wider text-blue-800 select-none drop-shadow-sm">
            LUXE <span className="text-blue-400">&</span> CURRENT
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-6">
          <Link
            to="/"
            className={`flex items-center gap-1 px-3 py-1 rounded-lg font-medium hover:bg-blue-50 transition 
            ${location.pathname === "/" ? "text-blue-800 font-bold bg-blue-100" : "text-gray-700"}
            `}
          >
            <FaHome className="text-lg" /> Home
          </Link>
          <Link
            to="/products"
            className={`flex items-center gap-1 px-3 py-1 rounded-lg font-medium hover:bg-blue-50 transition 
            ${location.pathname.startsWith("/products") ? "text-blue-800 font-bold bg-blue-100" : "text-gray-700"}
            `}
          >
            <FaThList className="text-lg" /> Products
          </Link>
          <Link
            to="/cart"
            className={`flex items-center gap-1 px-3 py-1 rounded-lg font-medium hover:bg-blue-50 transition 
            ${location.pathname === "/cart" ? "text-blue-800 font-bold bg-blue-100" : "text-gray-700"}
            `}
          >
            <FaShoppingCart className="text-lg" /> Cart
          </Link>
        </div>
        {/* Login Button */}
        <div className="ml-2">
          <Link
            to="/login"
            className="flex items-center gap-2 px-5 py-1.5 border border-blue-200 text-blue-700 font-bold rounded-lg shadow hover:bg-blue-100/70 hover:text-blue-900 transition-all duration-150"
          >
            <FaSignInAlt /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
