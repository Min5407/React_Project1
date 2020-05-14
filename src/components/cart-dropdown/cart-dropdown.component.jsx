import React from "react";
import "./cart-dropdown.style.scss";
import { Button } from "../button/button.component";
import CartItem from "../cart-item/cartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
