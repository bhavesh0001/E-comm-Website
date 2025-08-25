// src/utils/productsData.js
import ledtv from "../assets/ledtv.jpg";
import luxurydiningtable from "../assets/luxarydiningtable.jpg";
import mixergrinder from "../assets/mixergrinder.jpg";
import pheadphone from "../assets/headphone.jpg";
import kettle from "../assets/stainlesssteelkettle.jpg";
import formalshoes from "../assets/formalshoes.jpg";
import runningshoes from "../assets/runningshoes.jpg";
import sofa from "../assets/sofa.jpg";

const products = [
  { id: 1, name: "Smart LED TV", price: 28999, image: ledtv, category: "Electronics" },
  { id: 2, name: "Luxury Dining Table", price: 9999, image: luxurydiningtable, category: "Kitchen" },
  { id: 3, name: "Mixer Grinder", price: 3499, image: mixergrinder, category: "Kitchen" },
  { id: 4, name: "Running Shoes", price: 2299, image: runningshoes, category: "Footwear" },
  { id: 5, name: "Designer Sofa", price: 25999, image: sofa, category: "Sofa" },
  { id: 6, name: "Premium Headphones", price: 5999, image: pheadphone, category: "Electronics" },
  { id: 7, name: "Stainless Steel Kettle", price: 1799, image: kettle, category: "Kitchen" },
  { id: 8, name: "Men’s Formal Shoes", price: 3499, image: formalshoes, category: "Footwear" },
];

export default products;
