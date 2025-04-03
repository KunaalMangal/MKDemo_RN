import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from '../../../navigations';
import {FONT_SIZE} from '../../../theme/Fonts';
import {AppButton, AppText} from '../../../components';
import {useAppStyles} from '../../../theme';

const Home = () => {
  const navigation = useNavigation();
  const appStyles = useAppStyles();

  return (
    <View style={appStyles.container}>
      <View style={styles.content}>
        <AppText bold style={styles.welcomeText}>
          Welcome to the Home Screen!
        </AppText>
        <AppButton
          title="Go to My Account"
          onPress={() => navigation.navigate(ROUTES.MYACCOUNT)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: FONT_SIZE.FONT_16,
  },
});

export default Home;
