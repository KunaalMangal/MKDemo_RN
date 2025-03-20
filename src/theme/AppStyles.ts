import {StyleSheet, Platform} from 'react-native';
import {useTheme} from './ThemeContext';

export const useAppStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    // ==== GENERAL LAYOUT ====
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: colors.light,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    // ==== TYPOGRAPHY ====
    text: {
      fontSize: 16,
      fontWeight: 'normal',
      color: colors.dark,
      lineHeight: 24,
    },
    heading: {
      fontWeight: 'bold',
    },
    h1: {
      fontSize: Platform.select({ios: 34, android: 34, web: 48, default: 42}),
      color: colors.primary,
      fontWeight: 'bold',
      lineHeight: Platform.select({ios: 40, android: 40, web: 54, default: 50}),
    },
    h2: {
      fontSize: Platform.select({ios: 28, android: 28, web: 40, default: 36}),
      color: colors.secondary,
      fontWeight: 'bold',
      lineHeight: Platform.select({ios: 34, android: 34, web: 48, default: 44}),
    },
    h3: {
      fontSize: Platform.select({ios: 22, android: 22, web: 32, default: 28}),
      color: colors.dark,
      fontWeight: '600',
      lineHeight: Platform.select({ios: 28, android: 28, web: 40, default: 34}),
    },
    h4: {
      fontSize: Platform.select({ios: 20, android: 20, web: 28, default: 24}),
      color: colors.warning,
    },
    h5: {
      fontSize: Platform.select({ios: 18, android: 18, web: 24, default: 20}),
      color: colors.info,
    },
    h6: {
      fontSize: Platform.select({ios: 16, android: 16, web: 18, default: 16}),
      color: colors.muted,
    },
    bodyText: {
      fontSize: Platform.select({ios: 16, android: 16, web: 16, default: 16}),
      color: colors.dark,
      lineHeight: 24,
    },
    smallText: {
      fontSize: Platform.select({ios: 12, android: 12, web: 14, default: 14}),
      color: colors.gray500,
    },
    captionText: {
      fontSize: Platform.select({ios: 14, android: 14, web: 14, default: 14}),
      color: colors.muted,
    },
    errorText: {
      fontSize: 12,
      marginTop: 4,
      color: colors.danger,
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
      color: colors.white,
      fontSize: Platform.select({ios: 18, android: 18, web: 20, default: 18}),
      fontWeight: 'bold',
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
      fontSize: Platform.select({ios: 16, android: 16, web: 18, default: 16}),
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
      fontSize: Platform.select({ios: 18, android: 18, web: 20, default: 18}),
      color: colors.dark,
    },
    cardTitle: {
      fontSize: Platform.select({ios: 22, android: 22, web: 24, default: 22}),
      fontWeight: 'bold',
      color: colors.primary,
    },
    cardSubtitle: {
      fontSize: Platform.select({ios: 18, android: 18, web: 20, default: 18}),
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
  });
};
