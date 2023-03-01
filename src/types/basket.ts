import { Food } from "./products";

export interface Basket {
  map?: any;
  basketStatus?: boolean;
  baskets: Food[];
}
export interface BasketItem {
  id: string;
  name: string;
  image: string;
  fee: number;
  amount: number;
}
