import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";
import cartItemsReducer from "../Features/CartItemSlice";
import productsReducer from "../Features/ProductSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cartItems: cartItemsReducer,
    products: productsReducer,
  },
});

export default store;
