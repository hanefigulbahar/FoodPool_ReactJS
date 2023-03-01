import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { WritableDraft } from "immer/dist/internal";
import { Couisines, Products, Restaurant } from "../types/products";

const initialState: Products = {
  restaurants: [],
  cousines: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addRestaurantData: (state, action: PayloadAction<Restaurant>) => {
      action.payload.map((value: WritableDraft<Restaurant>) =>
        state.restaurants?.push(value)
      );
    },
    addCousineData: (state, action: PayloadAction<Couisines>) => {
      action.payload.map((value: WritableDraft<Couisines>) =>
        state.cousines?.push(value)
      );
    },
  },
});

export default productsSlice.reducer;
export const { addRestaurantData, addCousineData } = productsSlice.actions;
