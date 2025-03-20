import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useAppStyles, useTheme} from '../../theme';
import AppText from '../AppTexts/AppText';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  const {colors} = useTheme();
  const appStyles = useAppStyles();
  return (
    <TouchableOpacity
      style={[
        appStyles.button,
        {backgroundColor: disabled ? colors.gray400 : colors.primary},
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <AppText
          style={[appStyles.buttonText, {color: colors.white}, textStyle]}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
