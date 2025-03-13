import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {Home, MyAccount} from '../screens';
import ROUTES from './Routes';

interface AppRoutes {
  name: keyof typeof ROUTES;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

const Stack = createNativeStackNavigator();

const appRoutes: AppRoutes[] = [
  {
    name: ROUTES.HOME,
    component: Home,
  },
  {
    name: ROUTES.MYACCOUNT,
    component: MyAccount,
  },
];

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {appRoutes.map(route => (
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

export default AppStack;
