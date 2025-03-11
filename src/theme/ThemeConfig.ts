// Define the color palette for each theme (light, dark, custom, etc.)
const colorScheme = {
  light: {
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#0dcaf0',
    light: '#f8f9fa',
    dark: '#212529',
    muted: '#6c757d',
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',

    infoLight: '#cff4fc',
    infoDark: '#055160',
    successLight: '#d1e7dd',
    successDark: '#0a3622',
    dangerLight: '#f8d7da',
    dangerDark: '#58151c',
    warningLight: '#fff3cd',
    warningDark: '#664d03',

    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',

    navbar: '#f8f9fa',
    footer: '#343a40',
  },
  dark: {
    primary: '#6ea8fe',
    secondary: '#a7acb1',
    success: '#75b798',
    danger: '#ea868f',
    warning: '#ffda6a',
    info: '#6edff6',
    light: '#343a40',
    dark: '#212529',
    muted: '#6c757d',
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',

    infoLight: '#032830',
    infoDark: '#087990',
    successLight: '#051b11',
    successDark: '#0f5132',
    dangerLight: '#2c0b0e',
    dangerDark: '#842029',
    warningLight: '#332701',
    warningDark: '#997404',

    gray100: '#212121',
    gray200: '#343a40',
    gray300: '#495057',
    gray400: '#6c757d',
    gray500: '#adb5bd',
    gray600: '#dee2e6',
    gray700: '#e9ecef',
    gray800: '#f8f9fa',
    gray900: '#ffffff',

    navbar: '#212529',
    footer: '#161719',
  },
} as const;

type ColorScheme = typeof colorScheme;

const themes: ColorScheme = colorScheme;

export default themes;
