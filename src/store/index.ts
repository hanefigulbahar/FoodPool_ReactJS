import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import basketSlice from '../features/basketSlice';
import orderSlice from '../features/orderSlice';
import userSlice from '../features/userSlice';

const store = configureStore({
    reducer: {
        basket: basketSlice,
        order: orderSlice,
        user: userSlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;