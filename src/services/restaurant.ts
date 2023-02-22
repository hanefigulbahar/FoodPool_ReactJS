
import { Couisines, Restaurant } from "../types/products"
import { get } from "./request"

export const getAllData = () => get<Restaurant>("restaurants")
export const getCousines = () => get<Couisines>("cousines")
export const getRestaurantsByID = (id: string) => get<Restaurant>(`restaurants/${id}`)

