// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  // Fetch cart on mount
  useEffect(() => {
    fetch('http://localhost:3000/api/cart')
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error('Error fetching cart:', err));
  }, []);

  const addToCart = (product) => {
    fetch('http://localhost:3000/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error('Add to cart error:', err));
  };

  const removeFromCart = (productId) => {
    fetch('http://localhost:3000/api/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: productId }),
    })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error('Remove from cart error:', err));
  };

  const removePermanently = (productId) => {
    fetch('http://localhost:3000/api/cart/remove-all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: productId }),
    })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error('Permanent removal error:', err));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removePermanently }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
