import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    specs: [String], // Example: ["Ultra HD", "55 inch", "Smart TV"]
    offer: {
      type: String,
      default: "", // Example: "₹2000 OFF | 2yr warranty"
    },
    description: {
      type: String,
      default: "",
    },
    countInStock: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
