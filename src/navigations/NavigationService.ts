import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
  NavigationState,
  Route,
} from '@react-navigation/native';
import type { RootStackParamList } from './types';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Navigate to a screen
 */
// Overloads for navigate
export function navigate<Name extends keyof RootStackParamList>(
  name: Name,
  params: RootStackParamList[Name],
  options?: { merge?: boolean }
): void;
export function navigate<Name extends keyof RootStackParamList>(
  name: Name,
  options?: { merge?: boolean }
): void;

// Implementation
export function navigate<Name extends keyof RootStackParamList>(
  name: Name,
  paramsOrOptions?: RootStackParamList[Name] | { merge?: boolean },
  maybeOptions?: { merge?: boolean }
) {
  if (!navigationRef.isReady()) {
    console.warn('[NavigationService] Navigation not ready');
    return;
  }

  // Determine if paramsOrOptions is params or options
  const hasParams = paramsOrOptions && typeof paramsOrOptions === 'object' && !('merge' in paramsOrOptions);
  const params = hasParams ? (paramsOrOptions as RootStackParamList[Name]) : undefined;
  const options = hasParams ? maybeOptions : (paramsOrOptions as { merge?: boolean } | undefined);

  navigationRef.navigate(name as any, params as any, options);
}

/**
 * Replace the current screen with another
 */
export function replace<Name extends keyof RootStackParamList>(
  name: Name,
  params?: RootStackParamList[Name],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

/**
 * Push a new screen onto the stack
 */
export function push<Name extends keyof RootStackParamList>(
  name: Name,
  params?: RootStackParamList[Name],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

/**
 * Go back to the previous screen
 */
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

/**
 * Pop N screens from the stack
 */
export function pop(count = 1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

/**
 * Reset the navigation stack
 */
export function reset<Name extends keyof RootStackParamList>(
  name: Name,
  params?: RootStackParamList[Name],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      }),
    );
  }
}

/**
 * Set params for the current route
 */
export function setParams<Name extends keyof RootStackParamList>(
  params: Partial<RootStackParamList[Name]>,
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.setParams(params));
  }
}

/**
 * Set options for the current screen
 */
export function setOptions(options: NativeStackNavigationOptions) {
  if (navigationRef.isReady()) {
    navigationRef.current?.setOptions(options);
  }
}

/**
 * Get the current navigation info: route name, params, full route, and root state
 */
export function getCurrentNavigationInfo() {
  if (!navigationRef.isReady()) {
    return undefined;
  }

  const route: Route<string> | undefined = navigationRef.getCurrentRoute();
  const state: NavigationState | undefined = navigationRef.getRootState();

  return {
    name: route?.name,
    params: route?.params,
    route,
    state,
  };
}

export default {
  navigate,
  replace,
  push,
  pop,
  goBack,
  reset,
  setParams,
  setOptions,
  getCurrentNavigationInfo,
} as const;
