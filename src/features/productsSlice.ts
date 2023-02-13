import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../types/products";

const initialState: Products = {
    id: "",
    name: "",
    address: {
        city: "",
        country: "",
    },
    cuisines: [],
    description: "",
    food_photos: [],
    logo_photos: [],
    phone_number: 0,
    type: "",
    menu: {
        burgers: [],
        desserts: [],
        drinks: [],
        friedChickens: [],
        souces: [],
    }
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<Products>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.address = action.payload.address;
            state.cuisines = action.payload.cuisines;
        }
    }

})


export default productsSlice.reducer;