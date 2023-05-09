export type UserType = {
  picture: string;
  name: string;
  age: number;
  address: Address;
  email: string;
  cell: string;
};

export type Address = {
  streetName: string;
  streetNumber: number;
  postcode: string;
  city: string;
  country: string;
};
