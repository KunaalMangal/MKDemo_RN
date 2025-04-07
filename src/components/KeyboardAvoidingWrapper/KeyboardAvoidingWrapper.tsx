import React from 'react';
import {
  ViewStyle,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
  StyleSheet,
} from 'react-native';

interface Props {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}

const KeyboardAvoidingWrapper: React.FC<Props> = ({style, containerStyle, children}) => {
  return (
    <KeyboardAvoidingView
      style={[{flex: 1}, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.container, containerStyle]}>{children}</View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default KeyboardAvoidingWrapper;
