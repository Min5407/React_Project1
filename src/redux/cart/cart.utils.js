export const AddItemToCart = (cartItems, cartItemToAdd) => {
  const findExistingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //findexistingItem = true if can find from the previous cart items list
  if (findExistingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
