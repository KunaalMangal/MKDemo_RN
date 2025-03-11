import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from '../screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Router;
