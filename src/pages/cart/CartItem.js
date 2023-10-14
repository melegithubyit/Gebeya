import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

function CartItem({data}) {
    const { id, productName, productImage, price } = data;

    const {
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      getTotalCartAmount,
    } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="imageDiv">
        <img src={productImage} alt="image" />
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(event) =>
              updateCartItemCount(Number(event.target.value), id)
            }
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem
