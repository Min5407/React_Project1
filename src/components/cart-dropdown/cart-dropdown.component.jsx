import React from "react";
import "./cart-dropdown.style.scss";
import { Button } from "../button/button.component";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button> Check Out</Button>
  </div>
);

export default CartDropDown;
