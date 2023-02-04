import { User } from "./user";

interface OrderDetail {
    itemName: string;
    itemPiece: number;
    itemAmount: number
}

export interface IOrder {
    orderCustomer: User;
    orderDetails: OrderDetail
}