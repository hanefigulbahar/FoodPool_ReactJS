import { Food } from "./products";
import { User } from "./user";

export interface OrderDetail {
  orderCustomer: User;
  orderDetails: Food[];
}
