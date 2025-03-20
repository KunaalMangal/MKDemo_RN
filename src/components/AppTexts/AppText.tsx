import React from 'react';
import {Text, TextProps} from 'react-native';
import {useAppStyles} from '../../theme';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

const AppText: React.FC<AppTextProps> = ({children, style, ...props}) => {
  const styles = useAppStyles();

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
