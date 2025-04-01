import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

import {FONT_FAMILIES, useTypography} from '../../theme';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  bold?: boolean;
  uppercase?: boolean;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'caption'
    | 'error'
    | 'success'
    | 'warning'
    | 'text'
    | 'label';
}

const AppText: React.FC<AppTextProps> = ({
  children,
  variant = 'text',
  bold,
  uppercase,
  style,
  ...props
}) => {
  const styles = useTypography();

  const computedStyle: StyleProp<TextStyle> = [
    styles[variant],
    bold ? {fontFamily: FONT_FAMILIES.LATO_BOLD} : undefined,
    uppercase
      ? {textTransform: 'uppercase' as TextStyle['textTransform']}
      : undefined,
    style,
  ].filter(s => s !== undefined);

  return (
    <Text style={computedStyle} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
