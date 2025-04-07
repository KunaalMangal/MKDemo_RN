import React from 'react';
import {View, TouchableOpacity, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useAuth, useValidationSchema} from '../../../hooks';
import {ROUTES} from '../../../navigations';
import {
  AppButton,
  AppInput,
  AppText,
  KeyboardAvoidingWrapper,
} from '../../../components';
import {useAppStyles, useTheme} from '../../../theme';
import {useLoginStyles} from './loginStyles';
import {LoginFormData} from '../../../types';

const Login = () => {
  const navigation = useNavigation();
  const {login, loading} = useAuth();
  const {theme, switchTheme} = useTheme();
  const appStyles = useAppStyles();
  const loginStyles = useLoginStyles();
  const {loginSchema} = useValidationSchema();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <KeyboardAvoidingWrapper containerStyle={appStyles.container}>
      {/* Theme Switcher */}
      <View style={loginStyles.themeSwitcher}>
        <TouchableOpacity
          onPress={() => switchTheme(theme === 'dark' ? 'light' : 'dark')}
          accessibilityLabel="Switch theme">
          <Icon
            name={theme === 'dark' ? 'sun-o' : 'moon-o'}
            size={30}
            color="#3b5998"
          />
        </TouchableOpacity>
      </View>

      <AppText style={loginStyles.title}>Welcome Back!</AppText>

      {/* Email Input */}
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Enter your email"
            leftIcon="envelope"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email?.message}
            label="Email"
          />
        )}
      />

      {/* Password Input */}
      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Password"
            leftIcon="lock"
            secureTextEntry
            error={errors.password?.message}
            label="Password"
          />
        )}
      />

      {/* Remember Me & Forgot Password */}
      <View style={loginStyles.row}>
        <Controller
          control={control}
          name="rememberMe"
          render={({field: {onChange, value}}) => (
            <View style={loginStyles.rememberMe}>
              <Pressable
                onPress={() => onChange(!value)}>
                <Icon name={value ? 'check-square-o' : 'square-o'} size={20} />
              </Pressable>
              <AppText style={loginStyles.rememberText}>Remember Me</AppText>
            </View>
          )}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
          <AppText style={loginStyles.forgotPassword}>Forgot Password?</AppText>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <AppButton
        title="Login"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
      />

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
    </KeyboardAvoidingWrapper>
  );
};

export default Login;
