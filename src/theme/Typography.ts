import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from './ThemeContext';
import { FONT_FAMILIES, FONT_SIZE } from './Fonts';
import { vw } from '../utils';

export const useTypography = () => {
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          fontWeight: 'normal',
          color: colors.dark,
          lineHeight: vw(24),
        },
        label: {
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vw(22),
        },
        h1: {
          fontSize: FONT_SIZE.FONT_34,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vw(44),
        },
        h2: {
          fontSize: FONT_SIZE.FONT_28,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vw(36),
        },
        h3: {
          fontSize: FONT_SIZE.FONT_22,
          fontFamily: FONT_FAMILIES.LATO_BOLD,
          color: colors.dark,
          lineHeight: vw(30),
        },
        h4: {
          fontSize: FONT_SIZE.FONT_20,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
          lineHeight: vw(26),
        },
        h5: {
          fontSize: FONT_SIZE.FONT_18,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
          lineHeight: vw(24),
        },
        h6: {
          fontSize: FONT_SIZE.FONT_16,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.dark,
          lineHeight: vw(22),
        },
        caption: {
          fontSize: FONT_SIZE.FONT_14,
          fontFamily: FONT_FAMILIES.LATO_LIGHT,
          color: colors.muted,
          lineHeight: vw(20),
        },
        error: {
          fontSize: FONT_SIZE.FONT_12,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.danger,
          lineHeight: vw(18),
        },
        success: {
          fontSize: FONT_SIZE.FONT_12,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.success,
          lineHeight: vw(18),
        },
        warning: {
          fontSize: FONT_SIZE.FONT_12,
          fontFamily: FONT_FAMILIES.LATO_REGULAR,
          color: colors.warning,
          lineHeight: vw(18),
        },
      }),
    [colors],
  );

  return styles;
};
