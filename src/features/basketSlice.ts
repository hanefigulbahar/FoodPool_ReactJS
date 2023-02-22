import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Basket } from "../types/basket";
import { Food } from "../types/products";

const initialState: Basket = {
    basketStatus: false,
    baskets: []
}
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        basketOpen: (state, action: PayloadAction<boolean>) => {
            state.basketStatus = action.payload;
        },
        addBasketData: (state, action: PayloadAction<Food>) => {
            const basketChecked = state.baskets.find(item => item.id === action.payload.id)
            if (!basketChecked) {
                state.baskets.push(action.payload)
            } else {
                basketChecked?.amount !== undefined && basketChecked.amount++
            }
        }

    }
}
)

export default basketSlice.reducer;
export const { basketOpen, addBasketData } = basketSlice.actions;