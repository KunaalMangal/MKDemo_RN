import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useTheme} from '../../theme';

interface SpinnerLoaderProps {
  size?: 'small' | 'large';
  color?: string;
}

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  size = 'large',
  color,
}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={size} color={color || colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpinnerLoader;
