import React, {useState} from 'react';
import {View, TouchableOpacity, Alert, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useAuth} from '../../../hooks';
import {ROUTES} from '../../../navigations';
import {AppButton, AppInput, AppText} from '../../../components';
import {useAppStyles, useTheme} from '../../../theme';
import {useLoginStyles} from './loginStyles';

const Login = () => {
  const navigation = useNavigation();
  const {login, loading} = useAuth();
  const {theme, switchTheme} = useTheme();
  const appStyles = useAppStyles();
  const loginStyles = useLoginStyles();

  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const switchLoginType = (type: 'email' | 'phone') => {
    setErrors({});
    setLoginType(type);
  };

  const handleLogin = async () => {
    let valid = true;
    let newErrors: {[key: string]: string} = {};

    if (loginType === 'email' && !email) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    } else if (loginType === 'phone' && !phoneNumber) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Please enter your password';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    const userData = {
      name: loginType === 'email' ? email : phoneNumber,
      email: loginType === 'email' ? email : '',
    };

    try {
      await login(userData);
      Alert.alert('Login Successful', `Logged in with: ${userData.name}`);
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials, please try again.');
    }
  };

  return (
    <View style={appStyles.container}>
      {/* Theme Switcher */}
      <View style={loginStyles.themeSwitcher}>
        <TouchableOpacity
          onPress={() => switchTheme(theme === 'dark' ? 'light' : 'dark')}>
          <Icon
            name={theme === 'dark' ? 'sun-o' : 'moon-o'}
            size={30}
            color="#3b5998"
          />
        </TouchableOpacity>
      </View>

      <AppText style={loginStyles.title}>Welcome Back!</AppText>

      {/* Switch between Email & Phone Login */}
      <View style={loginStyles.switchContainer}>
        <TouchableOpacity
          style={[
            loginStyles.switchButton,
            loginType === 'email' && loginStyles.activeSwitch,
          ]}
          onPress={() => switchLoginType('email')}>
          <AppText
            style={[
              loginStyles.switchText,
              loginType === 'email' && loginStyles.activeSwitchText,
            ]}>
            Email
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            loginStyles.switchButton,
            loginType === 'phone' && loginStyles.activeSwitch,
          ]}
          onPress={() => switchLoginType('phone')}>
          <AppText
            style={[
              loginStyles.switchText,
              loginType === 'phone' && loginStyles.activeSwitchText,
            ]}>
            Phone
          </AppText>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      {loginType === 'email' ? (
        <AppInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          leftIcon="envelope"
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
          label="Email"
        />
      ) : (
        <AppInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          leftIcon="phone"
          keyboardType="phone-pad"
          error={errors.phoneNumber}
          label="Phone Number"
        />
      )}

      <AppInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        leftIcon="lock"
        secureTextEntry
        error={errors.password}
        label="Password"
      />

      {/* Remember Me & Forgot Password */}
      <View style={loginStyles.row}>
        <View style={loginStyles.rememberMe}>
          <Pressable onPress={() => setRememberMe(!rememberMe)}>
            <Icon
              name={!rememberMe ? 'square-o' : 'check-square-o'}
              size={20}
            />
          </Pressable>
          <AppText style={loginStyles.rememberText}>Remember Me</AppText>
        </View>
        <TouchableOpacity>
          <AppText style={loginStyles.forgotPassword}>Forgot Password?</AppText>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <AppButton title="Login" onPress={handleLogin} loading={loading} />

      {/* Signup Link */}
      <AppText variant="label" style={loginStyles.signupText}>
        Don't have an account?{' '}
        <AppText
          variant="label"
          style={loginStyles.signupLink}
          onPress={() => navigation.navigate(ROUTES.SIGNUP)}>
          Sign Up
        </AppText>
      </AppText>
    </View>
  );
};

export default Login;
