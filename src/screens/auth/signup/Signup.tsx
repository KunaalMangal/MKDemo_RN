import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useAuth, useValidationSchema} from '../../../hooks';
import {
  AppButton,
  AppInput,
  AppText,
  KeyboardAvoidingWrapper,
} from '../../../components';
import {ROUTES} from '../../../navigations';
import {useAppStyles} from '../../../theme';
import {useSignupStyles} from './signupStyles';
import {SignupFormData} from '../../../types';

const Signup = () => {
  const navigation = useNavigation();
  const {loading} = useAuth();
  const appStyles = useAppStyles();
  const signupStyles = useSignupStyles();
  const {signupSchema} = useValidationSchema();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupFormData>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      address: {
        address: '',
        latitude: 0,
        longitude: 0,
      },
      password: '',
      confirm_password: '',
      accept_terms: false,
    },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log('Signup data:', data);
  };

  return (
    <KeyboardAvoidingWrapper containerStyle={appStyles.container}>
      <AppText variant="h4" style={signupStyles.title}>
        Signup
      </AppText>

      <View style={appStyles.row}>
        <Controller
          control={control}
          name="first_name"
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              style={signupStyles.nameInput}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="First Name"
              placeholder="First Name"
              leftIcon="user"
              error={errors.first_name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="last_name"
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              style={signupStyles.nameInput}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Last Name"
              placeholder="Last Name"
              leftIcon="user"
              error={errors.last_name?.message}
            />
          )}
        />
      </View>

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Email"
            placeholder="Enter your email"
            leftIcon="envelope"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="mobile"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Mobile Number"
            placeholder="Mobile Number"
            leftIcon="phone"
            keyboardType="phone-pad"
            autoCapitalize="none"
            error={errors.mobile?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="address.address"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Address"
            placeholder="Address"
            leftIcon="home"
            error={
              errors?.address?.message ||
              errors?.address?.latitude?.message ||
              errors?.address?.longitude?.message
            }
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Password"
            placeholder="Password"
            leftIcon="lock"
            secureTextEntry
            error={errors.password?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="confirm_password"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Confirm Password"
            placeholder="Confirm Password"
            leftIcon="lock"
            secureTextEntry
            error={errors?.confirm_password?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="accept_terms"
        render={({field: {value, onChange}}) => (
          <View style={signupStyles.checkboxContainer}>
            <Pressable onPress={() => onChange(!value)}>
              <Icon name={value ? 'check-square-o' : 'square-o'} size={20} />
            </Pressable>
            <AppText style={signupStyles.checkboxText}>
              I accept the terms and conditions
            </AppText>
          </View>
        )}
      />
      {errors?.accept_terms && (
        <AppText variant="error">{errors.accept_terms.message}</AppText>
      )}

      <AppButton
        title="Signup"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
      />

      <AppText style={signupStyles.loginText}>
        Already have an account?{' '}
        <AppText
          variant="label"
          style={signupStyles.loginLink}
          onPress={() => navigation.navigate(ROUTES.LOGIN)}>
          Login
        </AppText>
      </AppText>
    </KeyboardAvoidingWrapper>
  );
};

export default Signup;
