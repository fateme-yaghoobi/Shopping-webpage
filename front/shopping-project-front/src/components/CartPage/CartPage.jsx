import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, removePermanently } = useContext(CartContext);
  const items = Object.values(cart);
  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <>
      <div className="products_container">
        {items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          items.map((product) => (
            <div className="_card" key={product.id || product.name}>
              <button className="bin-button" onClick={()=>removePermanently(product.id)}>
                <svg
                  className="bin-top"
                  viewBox="0 0 39 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="5"
                    x2="39"
                    y2="5"
                    stroke="white"
                    strokeWidth="4"
                  ></line>
                  <line
                    x1="12"
                    y1="1.5"
                    x2="26.0357"
                    y2="1.5"
                    stroke="white"
                    strokeWidth="3"
                  ></line>
                </svg>
                <svg
                  className="bin-bottom"
                  viewBox="0 0 33 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_8_19" fill="white">
                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                  </mask>
                  <path
                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    fill="white"
                    mask="url(#path-1-inside-1_8_19)"
                  ></path>
                  <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                  <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                </svg>
              </button>
              <div className="card_img">
                <img src={product.img_url} alt={product.name} />
              </div>
              <div className="card_info">
                <Link className="text-title product-name" to={`/${product.id}`}>
                  {product.name}
                </Link>
              </div>
              <div className="card_footer">
                <span className="text-title">{product.price} تومان</span>
                <span className="add-to-cart">
                  <div className="card__counter">
                    <button
                      className="incr-btn"
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>
                    <div className="product-counter">
                      {cart[product.id]?.quantity || 0}
                    </div>
                    <button
                      className="decr-btn"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      {items.length === 0 ? (
        <div></div>
      ) : (
        <h3 id="total-price">قیمت کل: {getTotalPrice()} تومان</h3>
      )}
    </>
  );
};

export default CartPage;
