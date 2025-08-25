// server.js (Backend main entry)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Load environment variables from .env
dotenv.config({ path: './.env' });

// Console for debugging
console.log('ENV PORT:', process.env.PORT);
console.log('ENV MONGO_URI exists?', !!process.env.MONGO_URI);

// Initialize app
const app = express();

// Global Middlewares
app.use(cors({
  origin: '*', // Allow all origins for now
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Product routes
app.use('/api/products', productRoutes);

// Health route (quick sanity check)
app.get('/', (_req, res) => res.send('Server is running...'));

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
(async () => {
  try {
    if (!MONGO_URI) {
      console.warn('MONGO_URI missing in .env');
    } else {
      await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('MongoDB Connected');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Don't crash server, still allow / and /api/products/ping etc
  }
})();

// Error Handler (last middleware)
app.use((err, _req, res, _next) => {
  console.error('Uncaught error:', err);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Server error' });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
