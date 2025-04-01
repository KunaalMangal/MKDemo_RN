import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {useTheme} from './ThemeContext';
import {FONT_FAMILIES, FONT_SIZE} from './Fonts';
import {vh} from '../utils';

export const useTypography = () => {
  const {colors} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          fontWeight: 'normal',
          color: colors.dark,
          lineHeight: vh(24),
        },
        label:{
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vh(20),
        },
        h1: {
          fontSize: FONT_SIZE.FONT_34,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vh(44),
        },
        h2: {
          fontSize: FONT_SIZE.FONT_28,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vh(34),
        },
        h3: {
          fontSize: FONT_SIZE.FONT_22,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vh(28),
        },
        h4: {
          fontSize: FONT_SIZE.FONT_20,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
        },
        h5: {
          fontSize: FONT_SIZE.FONT_18,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
        },
        h6: {
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
        },
        caption: {
          fontSize: FONT_SIZE.FONT_14,
          fontFamily: FONT_FAMILIES.LATO_LIGHT,
          color: colors.muted,
        },
        error: {
          fontSize: FONT_SIZE.FONT_12,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.danger,
        },
        success: {
          fontSize: FONT_SIZE.FONT_12,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.success,
        },
        warning: {
          fontSize: FONT_SIZE.FONT_12,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.warning,
        },
      }),
    [colors],
  );

  return styles;
};
