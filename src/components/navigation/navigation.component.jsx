import React from "react";
import { Link } from "react-router-dom";
import "./navigation.style.scss";
import CartIcon from "../cartIcon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
// In order to import svg file need to use syntax ReactComponent below
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Navigation = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="/sign">
          Sign In
        </Link>
      )}

      <CartIcon />
    </div>

    <CartDropDown />
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Navigation);
