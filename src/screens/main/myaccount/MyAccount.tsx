import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {ROUTES} from '../../../navigations';
import {useAuth} from '../../../hooks';

const MyAccount = () => {
  const navigation = useNavigation();
  const {logout} = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profilePictureContainer}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.profilePicture}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>KUNAAL MANGAL</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>kunaal@kunaal.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>+1234567890</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>Male</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.value}>India</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.HOME)}>
          <Text style={styles.buttonText}>Edit Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccount;
