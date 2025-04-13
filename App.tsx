/**
 * MKDemo_RN is an Cross-Platform React Native Application
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppRouter} from './src/navigations';
import {ThemeProvider} from './src/theme';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <SafeAreaProvider>
          <AppRouter />
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
