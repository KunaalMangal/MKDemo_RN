import {vfs} from '../utils';

export const FONT_FAMILIES = {
  LATO_BLACK: 'Lato-Black',
  LATO_BLACK_ITALIC: 'Lato-BlackItalic',
  LATO_BOLD: 'Lato-Bold',
  LATO_BOLD_ITALIC: 'Lato-BoldItalic',
  LATO_ITALIC: 'Lato-Italic',
  LATO_LIGHT: 'Lato-Light',
  LATO_LIGHT_ITALIC: 'Lato-LightItalic',
  LATO_REGULAR: 'Lato-Regular',
  LATO_THIN: 'Lato-Thin',
  LATO_THIN_ITALIC: 'Lato-ThinItalic',
} as const;

export const FONT_SIZE = {
  FONT_10: vfs(10),
  FONT_11: vfs(11),
  FONT_12: vfs(12),
  FONT_14: vfs(14),
  FONT_16: vfs(16),
  FONT_18: vfs(18),
  FONT_20: vfs(20),
  FONT_22: vfs(22),
  FONT_24: vfs(24),
  FONT_28: vfs(28),
  FONT_32: vfs(32),
  FONT_34: vfs(34),
  FONT_36: vfs(36),
  FONT_40: vfs(40),
} as const;

export type FontFamily = (typeof FONT_FAMILIES)[keyof typeof FONT_FAMILIES];
export type FontSize = (typeof FONT_SIZE)[keyof typeof FONT_SIZE];

export interface FontStyle {
  fontFamily: FontFamily;
  fontSize: FontSize;
}

export const getFontStyle = (
  family: FontFamily,
  size: FontSize,
): FontStyle => ({
  fontFamily: family,
  fontSize: size,
});
