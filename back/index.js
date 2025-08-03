// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy products list
const products = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Shoes", price: 50 },
  { id: 3, name: "Hat", price: 15 }
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
