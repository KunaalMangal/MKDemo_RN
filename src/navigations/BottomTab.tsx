/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {PlatformPressable} from '@react-navigation/elements';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import ROUTES from './Routes';
import {Home, MyAccount} from '../screens';
import {AppHeader, AppText} from '../components';

const Tab = createBottomTabNavigator();

interface BottomTabRoutes {
  name: keyof typeof ROUTES;
  component: React.ComponentType<any>;
  icon: string;
  options?: BottomTabNavigationOptions;
}

const bottomTabRoutes: BottomTabRoutes[] = [
  {
    name: ROUTES.HOME,
    component: Home,
    icon: 'home',
  },
  {
    name: ROUTES.MYACCOUNT,
    component: MyAccount,
    icon: 'user',
    options: {
      headerShown: true,
      header: props => <AppHeader title="My Account" {...props} />,
    },
  },
];

const MyTabBar: React.FC<any> = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.card,
        paddingVertical: 12,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;
        const iconName =
          bottomTabRoutes.find(r => r.name === route.name)?.icon || 'circle';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center', paddingVertical: 12}}>
            <Icon
              name={iconName}
              size={24}
              color={isFocused ? colors.primary : colors.text}
            />
            <AppText
              variant="label"
              style={{
                color: isFocused ? colors.primary : colors.text,
                marginTop: 4,
              }}>
              {label}
            </AppText>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      {bottomTabRoutes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            headerShown: false,
            tabBarLabel: route.name,
            ...route.options, // Spread route options safely
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
