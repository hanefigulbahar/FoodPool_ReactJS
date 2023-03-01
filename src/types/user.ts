export interface UserDeliveryAddress {
  buildingName?: string;
  flat?: string;
  floor?: string;
  doorNumber?: string;
  noteOrRider?: string;
}
export interface User {
  map?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  addresses?: UserDeliveryAddress;
  password?: string;
}
