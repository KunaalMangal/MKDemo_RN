import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {FONT_SIZE} from '../../../theme/Fonts';
import { vwPercentage } from '../../../utils';

export const useSignupStyles = () => {
  const {colors} = useTheme();

  const signupStyles = useMemo(
    () =>
      StyleSheet.create({
        nameInput: {
          width: vwPercentage(30),
        },
        checkboxContainer: {
          flexDirection: 'row',
          marginBottom: 20,
          alignItems: 'center',
        },
        checkboxText: {
          marginLeft: 8,
        },
        loginText: {
          textAlign: 'center',
          fontSize: FONT_SIZE.FONT_14,
          color: '#333',
        },
        loginLink: {
          color: colors.primary,
        },
      }),
    [colors],
  );

  return signupStyles;
};
