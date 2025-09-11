import React, { createContext, useEffect, ReactNode, useReducer } from 'react';

import { appStorage, STORAGE_KEYS } from '../services';
import { AuthContextType, ILOGIN, IUser } from '../types';
import { AUTH_ACTIONS, authReducer, initialAuthState } from '../reducers';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const { appIntro, isLoggedIn, currentUser, loading } = state;

  console.log('[Auth State]', state);

  const onCompleteIntro = () => {
    appStorage.setItem(STORAGE_KEYS.ONBOARDING_SHOWN, true);
    dispatch({ type: AUTH_ACTIONS.SET_INTRO });
  };

  const onLogin = (data: ILOGIN) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });

    appStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
    appStorage.setItem(STORAGE_KEYS.CURRENT_USER, data.user);

    dispatch({ type: AUTH_ACTIONS.SET_LOGIN, payload: data.user });
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
  };

  const onLogout = () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });

    appStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    appStorage.removeItem(STORAGE_KEYS.CURRENT_USER);

    dispatch({ type: AUTH_ACTIONS.SET_LOGOUT });
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
  };

  const checkUserLoggedIn = () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });

    const appIntroStatus = appStorage.getItem(STORAGE_KEYS.ONBOARDING_SHOWN);
    const userInfo = appStorage.getItem<IUser>(STORAGE_KEYS.CURRENT_USER);

    if (appIntroStatus === 'true' || appIntroStatus === true) {
      dispatch({ type: AUTH_ACTIONS.SET_INTRO });
    }

    if (userInfo) {
      dispatch({ type: AUTH_ACTIONS.SET_LOGIN, payload: userInfo });
    }

    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        appIntro,
        isLoggedIn,
        currentUser,
        loading,
        onCompleteIntro,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
