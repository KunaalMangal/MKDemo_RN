import { IUser } from "../types";

export enum AUTH_ACTIONS {
  SET_INTRO = 'SET_INTRO',
  SET_LOGIN = 'SET_LOGIN',
  SET_LOGOUT = 'SET_LOGOUT',
  SET_LOADING = 'SET_LOADING',
}

export interface AuthState {
  appIntro: boolean;
  isLoggedIn: boolean;
  currentUser: IUser | null;
  loading: boolean;
}


export const initialAuthState: AuthState = {
  appIntro: false,
  isLoggedIn: false,
  currentUser: null,
  loading: false,
};

export type AuthAction =
  | { type: AUTH_ACTIONS.SET_INTRO }
  | { type: AUTH_ACTIONS.SET_LOGIN; payload: IUser }
  | { type: AUTH_ACTIONS.SET_LOGOUT }
  | { type: AUTH_ACTIONS.SET_LOADING; payload: boolean };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_INTRO:
      return {
        ...state,
        appIntro: true,
      };

    case AUTH_ACTIONS.SET_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };

    case AUTH_ACTIONS.SET_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };

    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
