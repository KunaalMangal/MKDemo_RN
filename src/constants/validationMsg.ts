const VALIDATION_MESSAGES = {
  // General error messages
  GENERIC_ERROR: 'An error occurred. Please try again.',
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again later.',
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'Unauthorized access. Please log in again.',
  FORBIDDEN: 'You do not have permission to access this resource.',
  VALIDATION_ERROR: 'Validation error. Please check your input.',
  TIMEOUT: 'Request timed out. Please try again later.',

  // Authentication error messages
  LOGIN_FAILED: 'Login failed. Please check your credentials.',
  INVALID_CREDENTIALS: 'Invalid username or password. Please try again.',
  EMAIL_ALREADY_EXISTS: 'An account with this email already exists.',
  USER_NOT_FOUND: 'User not found. Please check your credentials.',
  ACCOUNT_LOCKED: 'Your account is locked. Please contact support.',

  // Email error messages
  EMAIL_REQUIRED: 'Email is required.',
  EMAIL_VALID: 'Please enter a valid email address.',

  // Mobile error messages
  MOBILE_REQUIRED: 'Mobile number is required.',
  MOBILE_VALID: 'Please enter a valid mobile number.',
  MOBILE_MIN_LENGTH: 'Mobile number must be at least 10 digits long.',
  MOBILE_MAX_LENGTH: 'Mobile number must be at most 15 digits long.',

  // Name error messages
  NAME_REQUIRED: 'Name is required.',
  FIRST_NAME_REQUIRED: 'First name is required.',
  LAST_NAME_REQUIRED: 'Last name is required.',

  // Address error messages
  ADDRESS_REQUIRED: 'Address is required.',
  ADDRESS_VALID: 'Please enter a valid address.',

  // Password error messages
  PASSWORD_REQUIRED: 'Password is required.',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters long.',
  PASSWORD_TOO_WEAK:
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
  PASSWORD_CURRENT_REQUIRED: 'Current password is required.',
  PASSWORD_NEW_REQUIRED: 'New password is required.',
  PASSWORD_NEW_TOO_SHORT: 'New Password must be at least 8 characters long.',
  PASSWORD_NEW_TOO_WEAK:
    'New Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
  PASSWORD_CONFIRM_REQUIRED: 'Confirm password is required.',
  PASSWORD_CONFIRM_MISMATCH: 'Passwords do not match with password.',

  // OTP error messages
  OTP_REQUIRED: 'OTP is required.',
  OTP_MIN_LENGTH: 'OTP must be at least 4 digits long.',

  // Accept terms error messages
  ACCEPT_TERMS_REQUIRED: 'You must accept the terms and conditions.',
} as const;

export const VALIDATION_MSG: typeof VALIDATION_MESSAGES = VALIDATION_MESSAGES;
