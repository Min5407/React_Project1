import React from "react";
import "./cart-dropdown.style.scss";
import { Button } from "../button/button.component";
import CartItem from "../cart-item/cartItem.component";

import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button> Check Out</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
