import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import ROUTES from './Routes';
import { Login, Signup } from '../screens';
import { NativeStackOptions } from './NavigationOptions';
import { useTheme } from '../theme';

interface AuthRoutes {
  name: keyof typeof ROUTES;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  const { colors } = useTheme();

  const authRoutes: AuthRoutes[] = [
    {
      name: ROUTES.LOGIN,
      component: Login,
      options: {
        headerShown: true,
        headerTitle: 'Login',
        statusBarAnimation: 'slide',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      },
    },
    {
      name: ROUTES.SIGNUP,
      component: Signup,
      options: {
        headerShown: true,
        headerTitle: 'Sign up',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      },
    },
  ];
  return (
    <Stack.Navigator screenOptions={NativeStackOptions}>
      {authRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
