import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import {useAuth} from '../../../hooks';
import {AppInput} from '../../../components';
import {ROUTES} from '../../../navigations';

const Signup = () => {
  const navigation = useNavigation();
  const {signup, loading} = useAuth();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleSignup = () => {
    let valid = true;
    let newErrors = {};

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
    if (!gender) {
      newErrors.gender = 'Please select your gender';
      valid = false;
    }
    if (!country) {
      newErrors.country = 'Please select your country';
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
      gender,
      country,
    };

    signup(userData);

    Alert.alert('Signup Attempt', `Email: ${email}\nPhone: ${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
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
      <View style={styles.inputContainer}>
        <Icon name="venus-mars" size={20} color="#888" style={styles.icon} />
        <Text style={styles.picker}>Male</Text>
      </View>
      {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
      <View style={styles.inputContainer}>
        <Icon name="globe" size={20} color="#888" style={styles.icon} />
        <Text style={styles.picker}>India</Text>
      </View>
      {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
      <View style={styles.checkboxContainer}>
        <Icon.Button
          name={!termsAccepted ? 'square-o' : 'check-square-o'}
          size={20}
          onPress={() => setTermsAccepted(!termsAccepted)}
        />
        <Text style={styles.label}>I accept the terms and conditions</Text>
      </View>
      {errors.termsAccepted && (
        <Text style={styles.errorText}>{errors.termsAccepted}</Text>
      )}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignup}
        disabled={loading}>
        <Text style={styles.signupButtonText}>
          {loading ? 'Signing up...' : 'Signup'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
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

export default Signup;
