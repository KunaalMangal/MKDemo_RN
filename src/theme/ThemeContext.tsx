import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Appearance } from 'react-native';
import themes from './ThemeConfig';

export type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeType;
  switchTheme: (newTheme: ThemeType) => void;
  colors: typeof themes[ThemeType];
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const deviceTheme = (Appearance.getColorScheme() as ThemeType) || 'light';
  const [theme, setTheme] = useState<ThemeType>(deviceTheme);

  const switchTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) {
        setTheme(colorScheme as ThemeType);
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, colors: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
