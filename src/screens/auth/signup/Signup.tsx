import React, {useState} from 'react';
import {View, Text, Alert, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {signupStyles} from './signupStyles';
import {useAuth} from '../../../hooks';
import {AppButton, AppInput} from '../../../components';
import {ROUTES} from '../../../navigations';
import {useAppStyles} from '../../../theme';

const Signup = () => {
  const navigation = useNavigation();
  const {login, loading} = useAuth();
  const appStyles = useAppStyles();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleSignup = () => {
    let valid = true;
    let newErrors: {[key: string]: string} = {};

    if (!email) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      valid = false;
    }
    if (!password) {
      newErrors.password = 'Please enter your password';
      valid = false;
    }
    if (!name) {
      newErrors.name = 'Please enter your name';
      valid = false;
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = 'Please accept the terms and conditions';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    const userData = {
      email,
      phoneNumber,
      password,
      name,
    };

    login(userData);

    Alert.alert('Signup Attempt', `Email: ${email}\nPhone: ${phoneNumber}`);
  };

  return (
    <View style={appStyles.container}>
      <Text style={signupStyles.title}>Signup</Text>

      <AppInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        leftIcon="user"
        error={errors.name}
      />

      <AppInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        leftIcon="envelope"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />

      <AppInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
        leftIcon="phone"
        keyboardType="phone-pad"
        error={errors.phoneNumber}
      />

      <AppInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        leftIcon="lock"
        secureTextEntry
        error={errors.password}
      />

      <View style={signupStyles.checkboxContainer}>
        <Pressable onPress={() => setTermsAccepted(!termsAccepted)}>
          <Icon
            name={!termsAccepted ? 'square-o' : 'check-square-o'}
            size={20}
          />
        </Pressable>
        <Text style={signupStyles.checkboxText}>
          I accept the terms and conditions
        </Text>
      </View>
      {errors.termsAccepted && (
        <Text style={appStyles.errorText}>{errors.termsAccepted}</Text>
      )}

      <AppButton title="Signup" onPress={handleSignup} loading={loading} />

      <Text style={signupStyles.loginText}>
        Already have an account?{' '}
        <Text
          style={signupStyles.loginLink}
          onPress={() => {
            navigation.navigate(ROUTES.LOGIN);
          }}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
