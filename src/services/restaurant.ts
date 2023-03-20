import { OrderDetail } from "../types/order";
import { Couisines, Restaurant } from "../types/products";
import { UserSession } from "../types/user";
import { get, post } from "./request";

export const getAllData = () => get<Restaurant[]>("restaurants", "GET");
export const getCousines = () => get<Couisines>("cousines", "GET");
export const getAllUser = () => get<UserSession>(`user`, "GET");
export const getRestaurantsByID = (id: string) =>
  get<Restaurant>(`restaurants/${id}`, "GET");

export const postData = (data: OrderDetail) =>
  post<OrderDetail>("order", "POST", data);
export const postUser = (data: UserSession) =>
  post<UserSession>("user", "POST", data);
