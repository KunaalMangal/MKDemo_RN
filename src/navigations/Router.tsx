import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthProvider} from '../context';
import ROUTES from './Routes';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useAuth} from '../hooks';
import {SpinnerLoader} from '../components';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {isLoggedIn} = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLoggedIn ? (
        <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
      ) : (
        <Stack.Screen name={ROUTES.APP} component={AppStack} />
      )}
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <AuthProvider>
      <NavigationContainer fallback={<SpinnerLoader />}>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Router;
