import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // check if the item is already in the cart
      const existingItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      // if the item is in the cart
      if (existingItem) {
        const newState = state.cartItems.map((item) => {
          //check if the item in the cart is the same as the incoming item
          //if yes increase the quantity
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : //if no, leave the item alone
              item;
        });

        state.cartItems = newState;
      } else {
        //if there is no exisitng item
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    reduceItemQuantity: (state, action) => {
      // check if the item is already in the cart
      const exisitingItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      // if the quantity of the item in the cart is one
      if (exisitingItem.quantity === 1) {
        //leave the cart as is it
        const newCartItems = state.cartItems;
        state.cartItems = newCartItems;
      } else {
        //if the quantity of the item in the cart is more than one
        const newCartItems = state.cartItems.map((item) => {
          //check for the corresponding item in the cart
          return item.id === action.payload.id
            ? //if item is the same with incoming item, reduce the quantity
              { ...item, quantity: item.quantity - 1 }
            : //if not leave the item alone
              item;
        });

        state.cartItems = newCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export default cartItemSlice.reducer;

export const { addItemToCart, reduceItemQuantity } = cartItemSlice.actions;
