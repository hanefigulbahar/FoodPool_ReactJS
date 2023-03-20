import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Modal = {
  isOpen: boolean | null;
};
const initialState: Modal = {
  isOpen: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean | null>) => {
      state.isOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setOpen } = modalSlice.actions;
