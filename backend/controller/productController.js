import Product from '../models/product.js';

// GET /api/products
// List products with filters & pagination

export const listProducts = async (req, res) => {
  try {
    const { category, subCategory, search, min, max, page = 1, limit = 20 } = req.query;
    const filter = {};

    // Filter by category & subCategory
    if (category) filter.category = category;
    if (subCategory) filter.subCategory = subCategory;

    // Search in name & description (case-insensitive)
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Price range filter
    if (min || max) {
      filter.price = {};
      if (min) filter.price.$gte = Number(min);
      if (max) filter.price.$lte = Number(max);
    }

    const skip = (Number(page) - 1) * Number(limit);

    // Fetch items and total count simultaneously
    const [items, total] = await Promise.all([
      Product.find(filter).skip(skip).limit(Number(limit)).sort({ createdAt: -1 }),
      Product.countDocuments(filter)
    ]);

    return res.json({
      success: true,
      data: items,
      meta: {
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit))
      }
    });

  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/products/:id
// Get single product by ID

export const getProductById = async (req, res) => {
  try {
    const doc = await Product.findById(req.params.id);
    if (!doc) return res.status(404).json({ success: false, message: 'Product not found' });
    return res.json({ success: true, data: doc });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ====================
// POST /api/products
// Create new product
// ====================
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, subCategory, description, image, stock } = req.body;

    // Validation
    if (!name || price == null || !category) {
      return res.status(400).json({ success: false, message: 'name, price, category required' });
    }

    const doc = await Product.create({
      name, price, category, subCategory, description, image, stock
    });

    return res.status(201).json({ success: true, data: doc });

  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

// ====================
// PUT /api/products/:id
// Update existing product
// ====================
export const updateProduct = async (req, res) => {
  try {
    const update = req.body;

    const doc = await Product.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    if (!doc) return res.status(404).json({ success: false, message: 'Product not found' });

    return res.json({ success: true, data: doc });

  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

// ====================
// DELETE /api/products/:id
// Delete product
// ====================
export const deleteProduct = async (req, res) => {
  try {
    const doc = await Product.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ success: false, message: 'Product not found' });
    return res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
