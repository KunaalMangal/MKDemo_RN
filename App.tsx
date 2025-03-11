/**
 * MKDemo_RN is an Cross-Platform React Native Application
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView as SafeAreaViewIOS,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  SafeAreaView as SafeAreaViewAndroid,
} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {AppRoutes} from './src/navigations';

const SafeAreaView =
  Platform.OS === 'ios' ? SafeAreaViewIOS : SafeAreaViewAndroid;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <AppRoutes />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
