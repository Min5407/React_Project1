import ShopData from "./shop.data";
const initial_state = {
  collections: ShopData,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
