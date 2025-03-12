import light from './colors/light.json';
import dark from './colors/dark.json';

// Define the color palette for each theme (light, dark, custom, etc.)
const colorScheme = {
  light: light,
  dark: dark,
} as const;

type ColorScheme = typeof colorScheme;

const themes: ColorScheme = colorScheme;

export default themes;
