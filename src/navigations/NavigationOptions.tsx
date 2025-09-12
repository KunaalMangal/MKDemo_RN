/**
 * Navigation options
 */

import { StackNavigationOptions } from '@react-navigation/stack';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { AppHeader } from '../components';

export const StackOptions: StackNavigationOptions = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  headerShown: true,
  headerTransparent: false,
  headerTitleAlign: 'center',
  headerTintColor: '#000',
  headerStyle: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerBackTitle: 'Back',
  headerBackImage: () => null,
};

export const NativeStackOptions: NativeStackNavigationOptions = {
  title: '',
  headerShown: false,
  header: props => <AppHeader {...props} />,
  headerBackVisible: true,
  headerBackTitle: '',
  headerBackTitleStyle: undefined,
  headerBackImageSource: undefined,
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#000',
  headerShadowVisible: true,
  animation: 'fade_from_bottom', 
  animationDuration: 300,
  statusBarStyle: 'dark', 
  statusBarHidden: false,
  orientation: 'portrait',
  headerLargeTitle: false,
  headerLargeTitleStyle: {
    fontSize: 30,
  },
  headerLargeTitleShadowVisible: true,
  headerTransparent: false,
};

export default {
  StackOptions,
  NativeStackOptions,
} as const;
