import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useAppStyles, useTheme} from '../../theme';
import AppText from '../AppTexts/AppText';

interface AppInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  placeholder?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  error?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  value,
  onChangeText,
  label,
  placeholder,
  leftIcon,
  rightIcon,
  onRightIconPress,
  error,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  ...props
}) => {
  const {colors} = useTheme();
  const appStyles = useAppStyles();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.inputContainerWrapper}>
      {label && (
        <AppText variant="label" style={inputStyles.staticLabel}>
          {label}
        </AppText>
      )}

      <View
        style={[
          appStyles.inputContainer,
          {
            borderColor: error
              ? colors.danger
              : isFocused
              ? colors.primary
              : colors.gray400,
          },
        ]}>
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={20}
            color={colors.gray600}
            style={inputStyles.icon}
          />
        )}

        <TextInput
          style={[appStyles.input]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.gray500}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          accessibilityLabel={label}
          testID={`input-${label}`}
          {...props}
        />

        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Icon
              name={rightIcon}
              size={20}
              color={colors.gray600}
              style={inputStyles.icon}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <AppText variant="error">{error}</AppText>}
    </View>
  );
};

const inputStyles = StyleSheet.create({
  inputContainerWrapper: {
    marginBottom: 12,
  },
  staticLabel: {
    marginBottom: 4,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppInput;
