import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cartSlice";



const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const handleDecrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  const handleIncrementCartItem = () => {
      dispatch(cartActions.addToCart({
        id,
        price,
        name
      }))
  };

  
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={handleDecrementCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={handleIncrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
