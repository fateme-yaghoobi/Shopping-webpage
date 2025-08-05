// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './context/CartContext';
import Products from './components/products/products'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <CartProvider>
      <Router>
          <nav className="navbar">
            <Link to="/">All Products</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
