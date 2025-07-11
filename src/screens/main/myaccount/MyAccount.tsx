import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';
import {navigate, ROUTES} from '../../../navigations';
import {useAuth} from '../../../hooks';
import {AppButton, AppText} from '../../../components';
import {useAppStyles} from '../../../theme';

const MyAccount = () => {
  const {onLogout} = useAuth();
  const appStyles = useAppStyles();

  return (
    <View style={appStyles.container}>
      <View style={styles.content}>
        <View style={styles.profilePictureContainer}>
          <Image
            source={{uri: 'https://placeholder.co/150x150'}}
            style={styles.profilePicture}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoContainer}>
          <AppText variant="label">Name:</AppText>
          <AppText>KUNAAL MANGAL</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText variant="label">Email:</AppText>
          <AppText>kunaal@kunaal.com</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText variant="label">Phone Number:</AppText>
          <AppText>+1234567890</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText variant="label">Gender:</AppText>
          <AppText>Male</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText variant="label">Country:</AppText>
          <AppText>India</AppText>
        </View>
        <AppButton
          title="Edit Account"
          onPress={() => navigate(ROUTES.HOME)}
        />
        <AppButton
          title="Logout"
          style={styles.logoutButton}
          onPress={onLogout}
        />
      </View>
    </View>
  );
};

export default MyAccount;
