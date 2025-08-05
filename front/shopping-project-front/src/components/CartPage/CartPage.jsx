import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "../products/products.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const items = Object.values(cart);

  return (
    <div className="products-container">
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map(product => (
          <div className="card" key={product.id || product.name}>
            <div className="card-img">
              <img src={product.img_url} alt={product.name} />
            </div>
            <div className="card-info">
              <Link className="text-title product-name" to={`/${product.id}`}>
                {product.name}
              </Link>
            </div>
            <div className="card-footer">
              <span className="text-title">{product.price} تومان</span>
              <span className="add-to-cart">
                <div className="card__counter">
                  <button className="incr-btn" onClick={() => removeFromCart(product.id)}>-</button>
                  <div className="product-counter">
                    {cart[product.id]?.quantity || 0}
                  </div>
                  <button className="decr-btn" onClick={() => addToCart(product)}>+</button>
                </div>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
