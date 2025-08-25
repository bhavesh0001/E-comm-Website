import React, { useEffect, useState } from "react";
fetch("/api/products")

const Products = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("/api/products")   // proxy will redirect to http://localhost:4000/api/products
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    })
    .then((data) => setProducts(data))
    .catch((err) => console.error("Error fetching products:", err));
}, []);

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <div key={p._id} className="bg-white p-4 rounded shadow-md">
          <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-bold mt-2">{p.name}</h3>
          <p className="text-gray-500">{p.category}</p>
          <p className="text-blue-700 font-bold">₹{p.price}</p>
          <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
