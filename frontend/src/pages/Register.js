// src/pages/Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md border border-gray-200 animate-fadein">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-3">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 mb-3 rounded-md"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded-md"
            placeholder="Enter your email"
            required
          />
          <input
            type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-3 rounded-md"
            placeholder="Create a password"
            required
          />
          <span className="text-gray-500 cursor-pointer" onClick={() => setShowPass(!showPass)}>
            {showPass ? "🙈 Hide" : "👁 Show"}
          </span>
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button type="submit" className="w-full py-2 mt-3 bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded-md">
            Register
          </button>
        </form>

        <div className="text-center text-gray-500 mt-4 text-sm">
          Already have an account?
          <Link to="/login" className="text-blue-700 font-bold hover:underline ml-1">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
