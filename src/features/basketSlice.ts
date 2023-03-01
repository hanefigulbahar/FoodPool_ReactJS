import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Basket } from "../types/basket";
import { Food } from "../types/products";

const localBasket: Food[] = JSON.parse(localStorage.getItem("basket") || "[]");

const initialState: Basket = {
  basketStatus: false,
  baskets: localBasket,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketOpen: (state, action: PayloadAction<boolean>) => {
      state.basketStatus = action.payload;
    },
    addBasketData: (state, action: PayloadAction<Food>) => {
      const basketChecked = state.baskets.find(
        (item) => item.id === action.payload.id
      );
      if (!basketChecked) {
        state.baskets.push(action.payload);
      } else {
        basketChecked?.amount !== undefined && basketChecked.amount++;
      }
    },
    deleteBasketData: (state, action: PayloadAction<Food>) => {
      const deleteDataChecked = state.baskets.find(
        (item) => item.id === action.payload.id
      );
      deleteDataChecked?.amount !== undefined && deleteDataChecked.amount--;
      if (deleteDataChecked?.amount === 0) {
        state.baskets = state.baskets.filter((item) => item.amount !== 0);
        localStorage.setItem("basket", JSON.stringify(state.baskets));
      }
    },
  },
});

export default basketSlice.reducer;
export const { basketOpen, addBasketData, deleteBasketData } =
  basketSlice.actions;
