import React, {createContext, useState, useEffect, ReactNode} from 'react';

import {appStorage, STORAGE_KEYS} from '../services';
import {AuthContextType, ILOGIN, IUser} from '../types';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [appIntroDone, setAppIntroDone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const onLogin = (data: ILOGIN) => {
    setLoading(true);
    appStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
    appStorage.setItem(STORAGE_KEYS.CURRENT_USER, data.user);
    setCurrentUser(data.user);
    setLoading(false);
  };

  const onLogout = () => {
    setLoading(true);
    appStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    appStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    setCurrentUser(null);
    setLoading(false);
  };

  const checkUserLoggedIn = () => {
    const appIntro = appStorage.getItem(STORAGE_KEYS.ONBOARDING_SHOWN);
    const user = appStorage.getItem<IUser>(STORAGE_KEYS.CURRENT_USER);

    if (appIntro === 'true' || appIntro === true) {
      setAppIntroDone(true);
    }

    if (user) {
      setCurrentUser(user);
    }

    setLoading(false);
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const isLoggedIn = currentUser !== null;

  return (
    <AuthContext.Provider
      value={{
        appIntroDone,
        currentUser,
        isLoggedIn,
        onLogin,
        onLogout,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
