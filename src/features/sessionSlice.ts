import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Session, UserSession } from "../types/user";
const initialState: Session = {
  count: 1,
  createSuccess: null,
  showPassword: false,
  isNewAccount: false,
  sessionUser: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  },
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setShowPassword: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload;
    },
    setIsNewAccount: (state, action: PayloadAction<boolean>) => {
      state.isNewAccount = action.payload;
    },
    addSessionUser: (state, action: PayloadAction<UserSession>) => {
      state.sessionUser.email = action.payload.email;
      state.sessionUser.firstName = action.payload.firstName;
      state.sessionUser.lastName = action.payload.lastName;
      state.sessionUser.phone = action.payload.phone;
      state.sessionUser.password = action.payload.password;
      state.sessionUser.rePassword = action.payload.rePassword;
    },
    setCreateSuccess: (state, action: PayloadAction<boolean | null>) => {
      state.createSuccess = action.payload;
    },
  },
});

export default sessionSlice.reducer;
export const {
  setCount,
  setShowPassword,
  setIsNewAccount,
  addSessionUser,
  setCreateSuccess,
} = sessionSlice.actions;
