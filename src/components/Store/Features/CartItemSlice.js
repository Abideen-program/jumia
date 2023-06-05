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
      const existingItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (existingItem) {
        const newState = state.cartItems.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });

        state.cartItems = newState;
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
  },
});

export default cartItemSlice.reducer;

export const { addItemToCart } = cartItemSlice.actions;
