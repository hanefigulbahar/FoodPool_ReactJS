import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IOrder } from "../types/order";


const initialState: IOrder = {
    orderCustomer: {
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
    }, orderDetails: {
        itemName: "",
        itemPiece: 0,
        itemAmount: 0
    }
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<IOrder>) => {

        }
    }
})

export default orderSlice.reducer;
export const { addOrder } = orderSlice.actions;