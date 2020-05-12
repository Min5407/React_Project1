import React from "react";
import "./button.style.scss";

export const Button = ({
  children,
  googleButton,
  addToCart,
  ...otherProps
}) => (
  <button
    className={`${googleButton ? "googleBtn" : ""} ${
      addToCart ? "addToCart" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
