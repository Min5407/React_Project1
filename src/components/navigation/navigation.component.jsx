import React from "react";
import { Link } from "react-router-dom";
import "./navigation.style.scss";
// In order to import svg file need to use syntax ReactComponent below
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Navigation = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
    </div>
  </div>
);
