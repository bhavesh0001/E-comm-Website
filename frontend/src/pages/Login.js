// src/pages/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md border border-gray-200 animate-fadein">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-3">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to continue your Luxe & Current journey</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-gray-800">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-blue-200 rounded-md px-4 py-2 bg-blue-50"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-2 relative">
            <label className="block font-semibold mb-1 text-gray-800">Password</label>
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-blue-200 rounded-md px-4 py-2 bg-blue-50"
              placeholder="Enter your password"
              required
            />
            <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPass(!showPass)}>
              {showPass ? "🙈" : "👁"}
            </span>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-5 bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold rounded-md"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center text-gray-500 mt-4 text-sm">
          New to Luxe & Current?{" "}
          <Link to="/register" className="text-blue-700 font-bold hover:underline ml-1">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
