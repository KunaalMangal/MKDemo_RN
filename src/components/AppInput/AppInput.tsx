import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AppInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  floatingLabel?: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const AppInput: React.FC<AppInputProps> = ({
  value,
  onChangeText,
  placeholder,
  leftIcon,
  rightIcon,
  onRightIconPress,
  floatingLabel,
  error,
  secureTextEntry,
  keyboardType = 'default',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {floatingLabel && (
        <Text
          style={[
            styles.floatingLabel,
            isFocused && styles.floatingLabelFocused,
          ]}>
          {floatingLabel}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          error && styles.inputContainerError,
        ]}>
        {leftIcon && (
          <Icon name={leftIcon} size={20} color="#888" style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Icon name={rightIcon} size={20} color="#888" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  floatingLabel: {
    position: 'absolute',
    top: 0,
    left: 10,
    fontSize: 12,
    color: '#888',
  },
  floatingLabelFocused: {
    color: '#4285F4',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  inputContainerFocused: {
    borderColor: '#4285F4',
  },
  inputContainerError: {
    borderColor: 'red',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
});

export default AppInput;
