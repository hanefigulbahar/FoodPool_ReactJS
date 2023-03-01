import { OrderDetail } from "../types/order";
import { Couisines, Restaurant } from "../types/products";
import { get, post } from "./request";

export const getAllData = () => get<Restaurant>("restaurants", "GET");
export const getCousines = () => get<Couisines>("cousines", "GET");
export const getRestaurantsByID = (id: string) =>
  get<Restaurant>(`restaurants/${id}`, "GET");

export const postData = (data: OrderDetail) =>
  post<OrderDetail>("order", "POST", data);
