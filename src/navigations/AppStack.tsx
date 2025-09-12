import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Home, MyAccount } from '../screens';
import ROUTES from './Routes';
import BottomTab from './BottomTab';
import { NativeStackOptions } from './NavigationOptions';

const Stack = createNativeStackNavigator();
interface AppRoutes {
  name: keyof typeof ROUTES;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

const appRoutes: AppRoutes[] = [
  {
    name: ROUTES.BOTTOMTAB,
    component: BottomTab,
  },
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
    <Stack.Navigator screenOptions={NativeStackOptions}>
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
