export type LogLevel = 'info' | 'warn' | 'error';
export type ThemeType = 'light' | 'dark';
export type LanguageCode = 'en' | 'es' | 'fr' | string;

export interface IAppConfig{
  // Basic Info
  appId: string;
  appName: string;
  appVersion: string;

  // API Configuration
  apiUrl: string | undefined;
  mediaUrl: string | undefined;
  timeout: number;
  maxRetries: number;
  retryDelay: number;

  // Caching
  cacheDuration: number;

  // Logging and Debugging
  enableLogging: boolean;
  enableDebugMode: boolean;
  debugLogLevel: LogLevel;

  // Localization
  defaultLanguage: LanguageCode;
  supportedLanguages: LanguageCode[];

  // Formatting
  dateFormat: string;
  timeFormat: string;
  dateTimeFormat: string;
  timeZone: string;
  currency: string;
  numberFormat: string;
  decimalSeparator: string;
  thousandSeparator: string;

  // UI/UX
  theme: ThemeType;
  enableNotifications: boolean;
  notificationDuration: number;

  // Analytics
  enableAnalytics: boolean;
  analyticsTrackingId: string | undefined;

  // Google Maps
  googleMapsApiKey: string | undefined;
}
