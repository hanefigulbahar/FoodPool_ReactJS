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
}
export interface Session {
  sessionUser: UserSession;
  createSuccess: null | boolean;
  count: number;
  showPassword: boolean;
  isNewAccount: boolean;
}
export interface UserSession {
  filter?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  rePassword?: string;
}
