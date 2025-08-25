import React from "react";
//import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import CategoryProducts from "./pages/CategoryProducts";
import OrderPlaced from "./pages/OrderPlaced";
import OrderConfirmed from "./pages/OrderConfirmed";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#f6f7fa]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:name" element={<CategoryProducts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order-confirmed" element={<OrderPlaced />} />
            <Route path="/order-confirmed" element={<OrderConfirmed />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
