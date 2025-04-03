import React, {createContext, useState, useEffect, ReactNode} from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    setUser(null);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const isLoggedIn = user !== null;

  return (
    <AuthContext.Provider value={{user, isLoggedIn, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
