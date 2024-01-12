import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Cartbutton.css";
import AppContext from "../../context/AppContext";

function Cartbutton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button type="button" className="cart-button" onClick={ () => setIsCartVisible(!isCartVisible) }>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default Cartbutton;
