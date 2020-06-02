import ShopActionTypes from "./shop.types";
import ShopData from "./shop.data";
const initial_state = {
  collections: ShopData,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ShopActionTypes.Update_Collection:
      console.log(action.payload);

      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
