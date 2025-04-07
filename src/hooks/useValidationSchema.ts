import * as yup from 'yup';

import {VALIDATION_MSG, REGEX} from '../constants';

export const useValidationSchema = () => {
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required(VALIDATION_MSG.EMAIL_REQUIRED)
      .email(VALIDATION_MSG.EMAIL_VALID)
      .trim(),

    password: yup.string().required(VALIDATION_MSG.PASSWORD_REQUIRED).trim(),

    rememberMe: yup.boolean().default(false).required(),
  });

  const signupSchema = yup.object().shape({
    first_name: yup
      .string()
      .required(VALIDATION_MSG.FIRST_NAME_REQUIRED)
      .trim(),

    last_name: yup.string().required(VALIDATION_MSG.LAST_NAME_REQUIRED).trim(),

    email: yup
      .string()
      .required(VALIDATION_MSG.EMAIL_REQUIRED)
      .email(VALIDATION_MSG.EMAIL_VALID)
      .trim(),

    mobile: yup
      .string()
      .required(VALIDATION_MSG.MOBILE_REQUIRED)
      .matches(REGEX.MOBILE, VALIDATION_MSG.MOBILE_VALID)
      .trim(),

    address: yup.object().shape({
      address: yup.string().required(VALIDATION_MSG.ADDRESS_REQUIRED).trim(),
      latitude: yup
        .number()
        .required(VALIDATION_MSG.ADDRESS_REQUIRED)
        .typeError(VALIDATION_MSG.ADDRESS_VALID),
      longitude: yup
        .number()
        .required(VALIDATION_MSG.ADDRESS_REQUIRED)
        .typeError(VALIDATION_MSG.ADDRESS_VALID),
    }),

    password: yup
      .string()
      .required(VALIDATION_MSG.PASSWORD_REQUIRED)
      .matches(REGEX.PASSWORD_STRONG, VALIDATION_MSG.PASSWORD_TOO_WEAK)
      .trim(),

    confirm_password: yup
      .string()
      .required(VALIDATION_MSG.PASSWORD_CONFIRM_REQUIRED)
      .oneOf([yup.ref('password')], VALIDATION_MSG.PASSWORD_CONFIRM_MISMATCH)
      .trim(),

    accept_terms: yup
      .boolean()
      .oneOf([true], VALIDATION_MSG.ACCEPT_TERMS_REQUIRED)
      .required(),
  });

  const forgotPasswordSchema = yup.object().shape({
    email: yup
      .string()
      .email(VALIDATION_MSG.EMAIL_VALID)
      .required(VALIDATION_MSG.EMAIL_REQUIRED)
      .trim(),
  });

  const resetPasswordSchema = yup.object().shape({
    new_password: yup
      .string()
      .required(VALIDATION_MSG.PASSWORD_NEW_REQUIRED)
      .matches(REGEX.PASSWORD_STRONG, VALIDATION_MSG.PASSWORD_NEW_TOO_WEAK)
      .trim(),

    confirm_password: yup
      .string()
      .required(VALIDATION_MSG.PASSWORD_CONFIRM_REQUIRED)
      .oneOf(
        [yup.ref('new_password')],
        VALIDATION_MSG.PASSWORD_CONFIRM_MISMATCH,
      )
      .trim(),
  });

  const verifyOTPSchema = yup.object().shape({
    otp: yup
      .string()
      .required(VALIDATION_MSG.OTP_REQUIRED)
      .min(4, VALIDATION_MSG.OTP_MIN_LENGTH)
      .trim(),
  });

  return {
    loginSchema,
    signupSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    verifyOTPSchema,
  };
};
