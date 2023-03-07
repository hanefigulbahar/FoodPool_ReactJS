import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import basketSlice from "../features/basketSlice";
import cousinesSlice from "../features/cousinesSlice";
import loadingSlice from "../features/loadingSlice";
import modalSlice from "../features/modalSlice";
import orderSlice from "../features/orderSlice";
import productsSlice from "../features/productsSlice";
import restaurantsSlice from "../features/restaurantsSlice";
import userSlice from "../features/userSlice";
import validationSlice from "../features/validationSlice";

const store = configureStore({
  reducer: {
    basket: basketSlice,
    order: orderSlice,
    user: userSlice,
    products: productsSlice,
    cousines: cousinesSlice,
    restaurants: restaurantsSlice,
    modals: modalSlice,
    loadings: loadingSlice,
    validation: validationSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
