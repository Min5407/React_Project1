import { CartActionTypes } from "./cart.types";
import { AddItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.Toggle_Cart_Hidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.Add_Item:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
        // cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
