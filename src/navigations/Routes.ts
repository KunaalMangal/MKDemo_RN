const Screens = {
  AUTH: 'AUTH',
  APP: 'APP',

  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  RESET_PASSWORD: 'RESET_PASSWORD',

  HOME: 'HOME',
  MYACCOUNT: 'MYACCOUNT',
} as const;

const ROUTES: typeof Screens = Screens;

export default ROUTES;
