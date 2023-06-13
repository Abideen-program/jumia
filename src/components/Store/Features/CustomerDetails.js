import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerDetails: null,
};

const CustomerDetailsSlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customerDetails = action.payload;
    },
  },
});

export default CustomerDetailsSlice.reducer;

export const { setCustomer } = CustomerDetailsSlice.actions;
