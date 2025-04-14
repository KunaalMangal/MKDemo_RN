export type Language = 'en' | 'es' | 'fr';
export type Theme = 'light' | 'dark';

// AppState interface
export interface IAppState {
  appName: string;
  appVersion: string;
  appTheme: Theme;
  isOnboarding: boolean;
  language: Language;
  isConnected: boolean;
}

// User interface
export interface IUser {
  id: string;
  name: string;
  email: string;
}

// AuthState interface
export interface IAuthState {
  isLogin: boolean;
  currentUser: IUser | null;
  authToken: string | null;
  deviceToken: string | null;
}

export interface ILOGIN {
  token: string;
  user: IUser;
}

export interface AuthContextType {
  appIntroDone: boolean;
  currentUser: IUser | null;
  isLoggedIn: boolean;
  onLogin: (data: ILOGIN) => void;
  onLogout: () => void;
  loading: boolean;
}
