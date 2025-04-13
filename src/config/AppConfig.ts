import {AppConfigType} from '../types';

import {displayName} from '../../app.json';

export const AppConfig: AppConfigType = {
  appId: 'com.example.myapp',
  appName: displayName,
  appVersion: '1.0.0',

  apiUrl: process.env.API_BASE_URL,
  mediaUrl: process.env.MEDIA_BASE_URL,
  timeout: 10000,
  maxRetries: 3,
  retryDelay: 2000,
  cacheDuration: 3600,

  enableLogging: process.env.NODE_ENV === 'development',
  enableDebugMode: process.env.NODE_ENV === 'development',
  debugLogLevel: 'info',

  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es', 'fr'],

  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm:ss',
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
  timeZone: Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone || 'UTC',

  currency: 'USD',

  numberFormat: 'en-US',
  decimalSeparator: '.',
  thousandSeparator: ',',

  theme: 'light',

  enableNotifications: true,
  notificationDuration: 5000,

  enableAnalytics: false,
  analyticsTrackingId: process.env.ANALYTICS_ID,

  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
};
