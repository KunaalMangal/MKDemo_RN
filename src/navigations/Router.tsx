import React from 'react';
import {StatusBar} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  useTheme,
  themes,
  ThemeType,
  FONT_FAMILIES,
  useAppStyles,
} from '../theme';
import {AuthProvider} from '../context';
import ROUTES from './Routes';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useAuth} from '../hooks';
import {SafeAreaView, SpinnerLoader} from '../components';
import {OnBoarding} from '../screens';

const Stack = createNativeStackNavigator();

// Navigation Theme Generator
const getNavigationTheme = (
  theme: ThemeType,
  colors: (typeof themes)[ThemeType],
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
    fonts: {
      regular: {
        fontFamily: FONT_FAMILIES.LATO_REGULAR,
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: FONT_FAMILIES.LATO_REGULAR,
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: FONT_FAMILIES.LATO_BOLD,
        fontWeight: 'normal',
      },
      heavy: {
        fontFamily: FONT_FAMILIES.LATO_BOLD,
        fontWeight: 'normal',
      },
    },
  };
};

const RootStack = () => {
  const {isLoggedIn, appIntroDone, loading} = useAuth();

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Onboarding Stack */}
      {!appIntroDone ? (
        <Stack.Screen name={ROUTES.ONBOARDING} component={OnBoarding} />
      ) : null}

      {/* If user is not logged in, show auth stack */}
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
  const appStyles = useAppStyles();
  const navigationTheme = getNavigationTheme(theme, colors);

  return (
    <SafeAreaView style={appStyles.rootView}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.white}
      />
      <AuthProvider>
        <NavigationContainer
          theme={navigationTheme}
          fallback={<SpinnerLoader />}>
          <RootStack />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
};

export default Router;
