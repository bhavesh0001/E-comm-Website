import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../utils/productData";


const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.7 } },
};

const CategoryProducts = () => {
  const { name } = useParams();
  const filtered = products.filter((prod) => prod.category === name);

  return (
    <motion.div
      className="min-h-[60vh] px-4 py-10"
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-900">
        {name} Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filtered.map((prod) => (
          <motion.div key={prod.id}
            className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition flex flex-col items-center border"
            whileHover={{ scale: 1.04 }}
          >
            <img src={prod.image} alt={prod.name} className="w-24 h-24 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-lg">{prod.name}</h3>
            <p className="text-blue-700 font-bold mt-1">₹{prod.price}</p>
            <button className="mt-4 bg-gradient-to-r from-blue-200 to-blue-500 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:text-white transition-all">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryProducts;
