require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Product Schema
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    Image: { type: String, required: true },
    stock: { type: Number, required: true }
});
const Product = mongoose.model('Product', ProductSchema);

// Routes
app.get('/all-products', async (_req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/add-products', async (req, res) => {
    try {
        const { name, price, description, Image, stock } = req.body;

        const existingProduct = await Product.findOne({ name, price });
        if (existingProduct) {
            return res.status(400).json({ message: 'Product Already Exists' });
        }

        const newProduct = await Product.create({ name, price, description, Image, stock });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
