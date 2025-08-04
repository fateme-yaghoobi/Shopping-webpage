//src/components/ProductCard/ProductCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);
  const quantity = cart[product.id]?.quantity || 0;

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <p>In Cart: {quantity}</p>
      <Link to={`/product/${product.id}`}>Details</Link>
    </div>
  );
};

export default ProductCard;
