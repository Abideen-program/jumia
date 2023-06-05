import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";
import cartItemsReducer from "../Features/CartItemSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cartItems: cartItemsReducer,
  },
});

export default store;
