import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Restaurant, RestaurantByID } from "../types/products";

const initialState: RestaurantByID = {
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
  },
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    selectedRestaurantsByIDData: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    },
    searchRestaurantByCity: (state, action: PayloadAction<string>) => {
      const city = action.payload.trim();
      const checkedCityValue =
        city.charAt(0).toLocaleUpperCase() + city.slice(1).toLocaleLowerCase();
      state.city = checkedCityValue;
    },
  },
});

export default restaurantsSlice.reducer;
export const { selectedRestaurantsByIDData, searchRestaurantByCity } =
  restaurantsSlice.actions;
