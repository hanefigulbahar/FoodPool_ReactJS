import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OrderDetail } from "../types/order";
import { Food } from "../types/products";
import { User } from "../types/user";

const localBasket: Food[] = JSON.parse(localStorage.getItem("basket") || "[]");

const initialState: OrderDetail = {
  orderCustomer: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addresses: {
      buildingName: "",
      flat: "",
      floor: "",
      doorNumber: "",
      noteOrRider: "",
    },
  },
  orderDetails: localBasket,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderCustomer: (state, action: PayloadAction<User>) => {
      state.orderCustomer = action.payload;
    },
  },
});

export default orderSlice.reducer;
export const { addOrderCustomer } = orderSlice.actions;
