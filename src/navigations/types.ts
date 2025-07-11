import ROUTES from './Routes';

export type RootStackParamList = {
  [ROUTES.ONBOARDING]: undefined;
  [ROUTES.AUTH]: undefined;
  [ROUTES.APP]: undefined;
  [ROUTES.BOTTOMTAB]: undefined;

  [ROUTES.LOGIN]: undefined;
  [ROUTES.SIGNUP]: undefined;
  [ROUTES.FORGOT_PASSWORD]: undefined;
  [ROUTES.RESET_PASSWORD]: {token: string};

  [ROUTES.HOME]: undefined;
  [ROUTES.MYACCOUNT]: undefined;
};
