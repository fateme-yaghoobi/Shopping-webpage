//src/components/ProductDetails/ProductDetails.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./ProductDetails.css"

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => setProduct(data.find(p => p.id === parseInt(id))));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const quantity = cart[product.id]?.quantity || 0;

  return (
    <div className='page'>
      <div className='right-side'>
        <img className='product-image' src={product.img_url} alt={product.name} />

      </div>

      <div className='product-info'>
        <h2>{product.name}</h2>
        <hr />
        <p className='product-dicription'>{product.description}</p>

      </div>
    </div>
  );
};

export default ProductDetails;
