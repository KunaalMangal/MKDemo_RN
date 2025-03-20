import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  themeSwitcher: {
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
    fontSize: 16,
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
    fontSize: 14,
    color: '#333',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
