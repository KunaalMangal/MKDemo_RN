import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { useAuth } from '../../../hooks';
import { ROUTES } from '../../../navigations';
import AppInput from '../../../components/AppInput/AppInput';

const Login = () => {
  const navigation = useNavigation();
  const { login, loading } = useAuth();
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleLogin = () => {
    let valid = true;
    let newErrors = {};

    if (loginType === 'email' && !email) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    if (loginType === 'phone' && !phoneNumber) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      valid = false;
    }
    if (!password) {
      newErrors.password = 'Please enter your password';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    const userData = {
      name: loginType === 'email' ? email : phoneNumber,
      email: loginType === 'email' ? email : '',
    };

    login(userData);

    Alert.alert(
      'Login Attempt',
      `Method: ${loginType}\nValue: ${userData.name}`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            loginType === 'email' && styles.activeSwitch,
          ]}
          onPress={() => setLoginType('email')}
        >
          <Text
            style={[
              styles.switchText,
              loginType === 'email' && styles.activeSwitchText,
            ]}
          >
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.switchButton,
            loginType === 'phone' && styles.activeSwitch,
          ]}
          onPress={() => setLoginType('phone')}
        >
          <Text
            style={[
              styles.switchText,
              loginType === 'phone' && styles.activeSwitchText,
            ]}
          >
            Phone
          </Text>
        </TouchableOpacity>
      </View>

      {loginType === 'email' ? (
        <AppInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          leftIcon="envelope"
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />
      ) : (
        <AppInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          leftIcon="phone"
          keyboardType="phone-pad"
          error={errors.phoneNumber}
        />
      )}

      <AppInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        leftIcon="lock"
        secureTextEntry
        error={errors.password}
      />

      <View style={styles.row}>
        <Pressable
          style={styles.rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <Icon name={!rememberMe ? 'square-o' : 'check-square-o'} size={20} />
          <Text style={styles.rememberText}>Remember Me</Text>
        </Pressable>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => {
            navigation.navigate(ROUTES.SIGNUP);
          }}
        >
          Sign Up
        </Text>
      </Text>

      <Text style={styles.socialLoginText}>Or Login With</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <Icon name="google" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          <Icon name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.apple]}>
          <Icon name="apple" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
