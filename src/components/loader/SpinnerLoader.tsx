import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const SpinnerLoader = () => {
  return (
    <View style={styles.loadercontainer}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  loadercontainer: {
    flex: 1,
  },
});

export default SpinnerLoader;
