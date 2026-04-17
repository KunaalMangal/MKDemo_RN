import React from 'react';
import {View} from 'react-native';
import { NewAppScreen } from '@react-native/new-app-screen';

import {useAppStyles} from '../../../theme';

const Home = () => {
  const appStyles = useAppStyles();

  return (
    <View style={appStyles.container}>
      <NewAppScreen />
    </View>
  );
};


export default Home;
