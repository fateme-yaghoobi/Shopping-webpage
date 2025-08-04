import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: { ...product, quantity: (prev[product.id]?.quantity || 0) + 1 }
    }));
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[productId]) {
        if (updated[productId].quantity > 1) {
          updated[productId].quantity -= 1;
        } else {
          delete updated[productId];
        }
      }
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
