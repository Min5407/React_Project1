import React from "react";
import "./button.style.scss";

export const Button = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);
