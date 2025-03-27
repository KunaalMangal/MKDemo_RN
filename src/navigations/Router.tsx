import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useTheme, themes, ThemeType } from '../theme';
import {AuthProvider} from '../context';
import ROUTES from './Routes';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useAuth} from '../hooks';
import {SpinnerLoader} from '../components';

const Stack = createNativeStackNavigator();

// Navigation Theme Generator
const getNavigationTheme = (
  theme: ThemeType,
  colors: typeof themes[ThemeType],
): NavigationTheme => {
  const baseTheme = theme === 'light' ? DefaultTheme : DarkTheme;
  return {
    ...baseTheme,
    dark: theme === 'dark',
    colors: {
      ...baseTheme.colors,
      primary: colors.primary,
      background: colors.light,
      card: colors.white,
      text: colors.dark,
      border: colors.gray400,
      notification: colors.danger,
    },
  };
};

const RootStack = () => {
  const {isLoggedIn} = useAuth();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
      ) : (
        <Stack.Screen name={ROUTES.APP} component={AppStack} />
      )}
    </Stack.Navigator>
  );
};

const Router = () => {
  const {theme, colors} = useTheme();
  const navigationTheme = getNavigationTheme(theme, colors);

  return (
    <AuthProvider>
      <NavigationContainer theme={navigationTheme} fallback={<SpinnerLoader />}>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Router;
