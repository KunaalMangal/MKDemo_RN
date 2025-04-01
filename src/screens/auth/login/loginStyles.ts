import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {FONT_SIZE, useTheme} from '../../../theme';

export const useLoginStyles = () => {
  const {colors} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        title: {
          fontSize: FONT_SIZE.FONT_24,
          textAlign: 'center',
          marginBottom: 24,
          color: colors.dark,
        },
        themeSwitcher: {
          position: 'absolute',
          top: 20,
          right: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
        },
        switchContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 15,
        },
        switchButton: {
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 20,
          backgroundColor: '#E0E0E0',
          marginHorizontal: 5,
        },
        activeSwitch: {
          backgroundColor: '#007BFF',
        },
        switchText: {
          color: '#333',
        },
        activeSwitchText: {
          color: 'white',
        },
        row: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15,
        },
        rememberMe: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        rememberText: {
          marginLeft: 5,
          fontSize: FONT_SIZE.FONT_14,
          color: '#333',
        },
        forgotPassword: {
          fontSize: FONT_SIZE.FONT_14,
          color: '#007BFF',
          textDecorationLine: 'underline',
        },
        signupText: {
          textAlign: 'center',
          color: '#333',
        },
        signupLink: {
          color: '#007BFF',
          fontWeight: 'bold',
        },
      }),
    [colors],
  );

  return styles;
};
