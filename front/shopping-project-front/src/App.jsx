// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './context/CartContext';

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
        <nav>
          <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div>
              {products.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
