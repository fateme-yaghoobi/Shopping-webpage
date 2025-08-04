//src/components/CartPage/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const items = Object.values(cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> :
        items.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>-</button>
          </div>
        ))
      }
    </div>
  );
};

export default CartPage;
