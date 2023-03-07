export interface OrderValidation {
  orderValidation: userValidation;
}

export interface userValidation {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  addresses: {
    buildingName: boolean;
    doorNumber: boolean;
    flat: boolean;
    floor: boolean;
  };
}
