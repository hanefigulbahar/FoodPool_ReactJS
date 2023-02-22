import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserDeliveryAddress } from "../types/user";

const initialState: User = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addresses: {
        buildingName: "",
        flat: "",
        floor: "",
        doorNumber: "",
        noteOrRider: "",
    }
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.phone = action.payload.phone
        },
        addUserAddreses: (state, action: PayloadAction<UserDeliveryAddress>) => {
            state.addresses = {
                buildingName: action.payload.buildingName,
                doorNumber: action.payload.doorNumber,
                flat: action.payload.flat,
                floor: action.payload.floor,
                noteOrRider: action.payload.noteOrRider
            }
        }
    }
})

export default userSlice.reducer;
export const { addUser, addUserAddreses } = userSlice.actions;