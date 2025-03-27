import {StyleSheet} from 'react-native';
import { FONT_SIZE } from '../../../theme/Fonts';

export const signupStyles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZE.FONT_24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
  },
  loginText: {
    textAlign: 'center',
    fontSize: FONT_SIZE.FONT_14,
    color: '#333',
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
