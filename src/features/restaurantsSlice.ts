import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant, RestaurantByID } from "../types/products";

const initialState: RestaurantByID = {
    id: "",
    city: "",
    restaurant: {
        id: "",
        name: "",
        phone_number: 0,
        address: {
            city: "",
            country: "",
        },
        category: "",
    }
}

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        selectedRestaurantsByID: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        },
        selectedRestaurantsByIDData: (state, action: PayloadAction<Restaurant>) => {
            state.restaurant = action.payload
        },
        searchRestaurantByCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload
        }
    }
})


export default restaurantsSlice.reducer;
export const { selectedRestaurantsByID, selectedRestaurantsByIDData, searchRestaurantByCity } = restaurantsSlice.actions