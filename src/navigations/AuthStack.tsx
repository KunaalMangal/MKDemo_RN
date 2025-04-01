import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import ROUTES from './Routes';
import {Login, Signup} from '../screens';
import {AppHeader} from '../components';

interface AuthRoutes {
  name: keyof typeof ROUTES;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

const Stack = createNativeStackNavigator();

const authRoutes: AuthRoutes[] = [
  {
    name: ROUTES.LOGIN,
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: ROUTES.SIGNUP,
    component: Signup,
    options: {
      headerShown: true,
      header: props => <AppHeader title="Signup" {...props} />,
    },
  },
];

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
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
