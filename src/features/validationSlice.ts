import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { OrderValidation } from "../types/validation";
const initialState: OrderValidation = {
  orderValidation: {
    email: false,
    firstName: false,
    lastName: false,
    phone: false,
    addresses: {
      buildingName: false,
      doorNumber: false,
      flat: false,
      floor: false,
    },
  },
};
const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    isOrderValidation: (state, action: PayloadAction<User>) => {
      action.payload.email?.length === 0
        ? (state.orderValidation.email = true)
        : (state.orderValidation.email = false);
      action.payload.firstName?.length === 0
        ? (state.orderValidation.firstName = true)
        : (state.orderValidation.firstName = false);
      action.payload.lastName?.length === 0
        ? (state.orderValidation.lastName = true)
        : (state.orderValidation.lastName = false);
      action.payload.phone?.length === 0
        ? (state.orderValidation.phone = true)
        : (state.orderValidation.phone = false);
      action.payload.addresses?.buildingName?.length === 0
        ? (state.orderValidation.addresses.buildingName = true)
        : (state.orderValidation.addresses.buildingName = false);
      action.payload.addresses?.doorNumber?.length === 0
        ? (state.orderValidation.addresses.doorNumber = true)
        : (state.orderValidation.addresses.doorNumber = false);
      action.payload.addresses?.flat?.length === 0
        ? (state.orderValidation.addresses.flat = true)
        : (state.orderValidation.addresses.flat = false);
      action.payload.addresses?.floor?.length === 0
        ? (state.orderValidation.addresses.floor = true)
        : (state.orderValidation.addresses.floor = false);
    },
  },
});

export default validationSlice.reducer;
export const { isOrderValidation } = validationSlice.actions;
