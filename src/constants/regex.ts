const regex = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MOBILE: /^\+?[1-9]\d{9,14}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
  OTP: /^\d{4,6}$/,
  USERNAME: /^[a-zA-Z0-9_]{3,16}$/,
} as const;

export const REGEX: typeof regex = regex;
