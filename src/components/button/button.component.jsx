import React from "react";
import "./button.style.scss";

export const Button = ({ children, googleButton, ...otherProps }) => (
  <button
    className={`${googleButton ? "googleBtn" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
