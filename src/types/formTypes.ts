export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type SignupFormData = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  address: {
    address: string;
    latitude: number;
    longitude: number;
  };
  password: string;
  confirm_password: string;
  accept_terms: boolean;
};
