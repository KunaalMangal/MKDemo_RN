import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {Platform} from 'react-native';

import {AppConfig} from '../../config';
import {appStorage} from '../storage/storageService';
import {STORAGE_KEYS} from '../storage/storageKeys';

const mkDemoApi = axios.create({
  baseURL: AppConfig.apiUrl,
  timeout: AppConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-PLATFORM': Platform.OS,
    'X-APP-ID': AppConfig.appId,
    'X-APP-NAME': AppConfig.appName,
    'X-APP-VERSION': AppConfig.appVersion,
    'X-APP-DEVICE': Platform.Version.toString(),
    'X-APP-LANGUAGE': AppConfig.defaultLanguage,
    'X-APP-TIMEZONE': AppConfig.timeZone,
  },
});

// ===== Request Interceptor =====
const interceptorsRequestFullfilled = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  try {
    const token = appStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (process.env.NODE_ENV === 'development') {
      console.debug('[API Request]', config);
    }

    return config;
  } catch (error) {
    console.error('Error in request interceptor:', error);
    return config;
  }
};

const interceptorsRequestRejected = (
  error: AxiosError,
): Promise<AxiosError> => {
  console.error('[API Request Error]', error);
  return Promise.reject(error);
};

// ===== Response Interceptor =====
const interceptorsResponseFullfilled = (
  response: AxiosResponse,
): AxiosResponse => {
  if (process.env.NODE_ENV === 'development') {
    console.debug('[API Response]', response);
  }

  return response;
};

const interceptorsResponseRejected = (
  error: AxiosError,
): Promise<AxiosError> => {
  console.error('[API Response Error]', error);

  if (error.response) {
    const {status} = error.response;

    switch (status) {
      case 401:
        console.warn('Unauthorized access - redirect to login.');
        break;
      case 403:
        console.warn('Forbidden - insufficient permissions.');
        break;
      case 404:
        console.warn('Not Found - resource does not exist.');
        break;
      case 500:
        console.warn('Server error - try again later.');
        break;
      default:
        console.warn('Unhandled error status:', status);
    }
  } else if (error.request) {
    console.warn('No response received - possibly offline.');
  } else {
    console.warn('Request setup error:', error.message);
  }

  return Promise.reject(error);
};

// Attach interceptors
mkDemoApi.interceptors.request.use(
  interceptorsRequestFullfilled,
  interceptorsRequestRejected,
);

mkDemoApi.interceptors.response.use(
  interceptorsResponseFullfilled,
  interceptorsResponseRejected,
);

export default mkDemoApi;
