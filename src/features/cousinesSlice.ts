import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Couisines } from "../types/products";
const initialState: Couisines = {
    id: "",
    name: "",
    img: ""
}
const cousineSlice = createSlice({
    name: "cousine",
    initialState,
    reducers: {
        selectedCousine: (state, action: PayloadAction<Couisines>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.img = action.payload.img;
        }
    }
})


export default cousineSlice.reducer
export const { selectedCousine } = cousineSlice.actions