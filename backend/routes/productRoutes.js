import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add sample products (for demo only)
router.post("/seed", async (req, res) => {
  const sample = [
    { name: "Smart LED TV", category: "Electronics", price: 28999, image: "tv.jpg", stock: 5 },
    { name: "Luxury Dining Table", category: "Kitchen", price: 9999, image: "dining.jpg", stock: 3 },
    { name: "Mixer Grinder", category: "Kitchen", price: 3499, image: "mixer.jpg", stock: 10 },
    { name: "Running Shoes", category: "Footwear", price: 2299, image: "shoes.jpg", stock: 8 }
  ];
  await Product.deleteMany({});
  const created = await Product.insertMany(sample);
  res.json(created);
});

export default router;
