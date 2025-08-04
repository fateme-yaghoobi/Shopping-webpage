//src/components/ProductDetails/ProductDetails.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProduct(data.find(p => p.id === parseInt(id))));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const quantity = cart[product.id]?.quantity || 0;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>In Cart: {quantity}</p>
      <button onClick={() => addToCart(product)}>Add</button>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default ProductDetails;
