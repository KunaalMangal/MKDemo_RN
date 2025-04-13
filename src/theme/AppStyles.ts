import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {useTheme} from './ThemeContext';
import {FONT_FAMILIES, FONT_SIZE} from './Fonts';
import {vp} from '../utils';

export const useAppStyles = () => {
  const {colors} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        // ==== GENERAL LAYOUT ====
        rootView: {
          flex: 1,
          backgroundColor: '#f5f5f5',
        },
        container: {
          flex: 1,
          justifyContent: 'center',
          padding: vp(20),
          backgroundColor: colors.light,
        },
        centeredView: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        row: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },

        // ==== BUTTON STYLES ====
        button: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 8,
          backgroundColor: colors.primary,
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 3,
        },
        buttonText: {
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          lineHeight: 24,
          color: colors.white,
        },
        buttonSecondary: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 8,
          backgroundColor: colors.secondary,
        },
        buttonDisabled: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 8,
          backgroundColor: colors.gray400,
        },

        // ==== INPUT STYLES ====
        inputContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: colors.gray400,
          borderRadius: 8,
          paddingHorizontal: 12,
          marginVertical: 5,
          height: 50,
          backgroundColor: colors.white,
        },
        inputContainerFocused: {
          borderColor: colors.primary,
        },
        inputContainerError: {
          borderColor: colors.danger,
        },
        input: {
          flex: 1,
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
          paddingVertical: 10,
        },

        // ==== CARD STYLES ====
        card: {
          padding: 15,
          borderRadius: 10,
          borderColor: colors.gray500,
          borderWidth: 1,
          backgroundColor: colors.white,
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        cardText: {
          fontSize: FONT_SIZE.FONT_18,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
        },
        cardTitle: {
          fontSize: FONT_SIZE.FONT_22,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.primary,
        },
        cardSubtitle: {
          fontSize: FONT_SIZE.FONT_18,
          fontFamily: FONT_FAMILIES.LATO_LIGHT,
          color: colors.secondary,
        },

        // ==== ICON STYLES ====
        icon: {
          width: 24,
          height: 24,
          resizeMode: 'contain',
          tintColor: colors.dark,
        },
        iconLarge: {
          width: 32,
          height: 32,
          resizeMode: 'contain',
          tintColor: colors.dark,
        },
        iconSmall: {
          width: 16,
          height: 16,
          resizeMode: 'contain',
          tintColor: colors.dark,
        },

        // ==== IMAGE STYLES ====
        image: {
          width: 100,
          height: 100,
          resizeMode: 'contain',
        },
        avatar: {
          width: 50,
          height: 50,
          borderRadius: 25,
          resizeMode: 'cover',
        },

        // ==== LOADER / SPINNER ====
        loaderContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [colors],
  );

  return styles;
};
