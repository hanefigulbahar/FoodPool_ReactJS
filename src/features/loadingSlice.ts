import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
};
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default loadingSlice.reducer;
export const { isLoading } = loadingSlice.actions;
