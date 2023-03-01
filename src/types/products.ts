export interface Products {
  restaurants: Restaurant[];
  cousines?: Couisines[];
}

export interface Restaurant {
  filter?: any;
  map?: any;
  id: string;
  name: string;
  phone_number: number;
  address: Address;
  category: string;
  description?: string;
  cousines?: string[];
  food_photos?: string;
  logo_photos?: string;
  menu?: Menu;
}
export interface RestaurantByID {
  restaurant?: Restaurant;
  city?: string;
}
export interface Couisines {
  map?: any;
  id: string;
  name: string;
  img: string;
}

interface Address {
  city: string;
  country: string;
}

export interface Menu {
  map?: any;
  id: string;
  name: string;
  image: string;
  details?: string;
  fee: number;
  category: string;
}

export interface Food {
  map?: any;
  id: string;
  name: string;
  image?: string;
  details?: string;
  fee: number;
  category?: string;
  amount: number;
}
