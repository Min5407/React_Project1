import React from "react";
import { Link } from "react-router-dom";
import "./navigation.style.scss";
import CartIcon from "../cartIcon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
// In order to import svg file need to use syntax ReactComponent below
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Navigation = ({ currentUser, hidden }) => (
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
    {!hidden ? <CartDropDown /> : null}
  </div>
);
//mapStateToProps is used to get state from global state which is from rootReducer
//the function below wil get state.user.currentUser and state.cart.hidden
//where state is global state from rootReducer

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Navigation);
