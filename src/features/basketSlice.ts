import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBasketSlice {

    basketStatus: boolean
    basket: {
        id: number
        name: string
        price: string
        count: number
    }
}
const initialState: IBasketSlice = {
    basketStatus: false,
    basket: {
        id: 0,
        name: "",
        price: "",
        count: 0
    }

}
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        basketOpen: (state, action: PayloadAction<boolean>) => {
            state.basketStatus = action.payload;
        }
    }

})


export default basketSlice.reducer;
export const { basketOpen } = basketSlice.actions;