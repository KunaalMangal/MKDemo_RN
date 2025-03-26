import {vfs} from '../utils';

export const FONT_FAMILIES = {
  REGULAR: 'Roboto-Regular',
  BOLD: 'Roboto-Bold',
  ITALIC: 'Roboto-Italic',
  LIGHT: 'Roboto-Light',
  MEDIUM: 'Roboto-Medium',
} as const;

export const FONT_SIZES = {
  FONTSIZE_10: vfs(10),
  FONTSIZE_11: vfs(11),
  FONTSIZE_12: vfs(12),
  FONTSIZE_14: vfs(14),
  FONTSIZE_16: vfs(16),
  FONTSIZE_18: vfs(18),
  FONTSIZE_20: vfs(20),
  FONTSIZE_24: vfs(24),
  FONTSIZE_28: vfs(28),
  FONTSIZE_32: vfs(32),
  FONTSIZE_36: vfs(36),
  FONTSIZE_40: vfs(40),
} as const;

export type FontFamily = (typeof FONT_FAMILIES)[keyof typeof FONT_FAMILIES];
export type FontSize = (typeof FONT_SIZES)[keyof typeof FONT_SIZES];

export interface FontStyle {
  fontFamily: FontFamily;
  fontSize: FontSize;
}

export const getFontStyle = (family: FontFamily, size: FontSize): FontStyle => ({
    fontFamily: family,
    fontSize: size,
});
