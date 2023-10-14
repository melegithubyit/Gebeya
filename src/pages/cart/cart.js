import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import CartItem from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const navigate = useNavigate()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  let totalVal = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
      </div>

      {totalVal > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalVal}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button> checkout</button>
        </div>
      ) : (
        <h3>You didn't purchase anything</h3>
      )}
    </div>
  );
}

export default Cart
