import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

const baseWidth = 414;
const baseHeight = 896;
const minScale = 0.7;
const maxScale = 1.5;

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

Dimensions.addEventListener('change', ({window}) => {
  SCREEN_WIDTH = window.width;
  SCREEN_HEIGHT = window.height;
});

const getScale = () => SCREEN_WIDTH / baseWidth;
const getVScale = () => SCREEN_HEIGHT / baseHeight;

const mScale = (size: number, factor: number = 0.5): number => {
  const scale = getScale();
  const scaled = size + (scale * size - size) * factor;
  return Math.min(Math.max(scaled, size * minScale), size * maxScale);
};

const isIOS = Platform.OS === 'ios';
const statusHeight = isIOS ? 0 : StatusBar.currentHeight || 0;

export const vw = (width: number): number => {
  const scaled = width * getScale();
  return Math.max(PixelRatio.roundToNearestPixel(scaled), width * minScale);
};

export const vh = (height: number): number => {
  const scaled = height * getVScale();
  const adjusted =
    PixelRatio.roundToNearestPixel(scaled) - (isIOS ? 0 : statusHeight * 0.5);
  return Math.max(adjusted, height * minScale);
};

export const vfs = (size: number): number => {
  const scaled = size * getScale();
  const adjusted =
    PixelRatio.roundToNearestPixel(scaled) / PixelRatio.getFontScale();
  return Math.max(adjusted, size * minScale);
};

export const vp = (size: number): number => mScale(size);
export const vm = (size: number): number => mScale(size);

export const vwPercentage = (percent: number): number => {
  const referenceWidth = (percent / 100) * baseWidth;
  const scaled = referenceWidth * getScale();
  return Math.max(
    PixelRatio.roundToNearestPixel(scaled),
    referenceWidth * minScale,
  );
};

export const vhPercentage = (percent: number): number => {
  const referenceHeight = (percent / 100) * baseHeight;
  const scaled = referenceHeight * getVScale();
  const adjusted =
    PixelRatio.roundToNearestPixel(scaled) - (isIOS ? 0 : statusHeight * 0.5);
  return Math.max(adjusted, referenceHeight * minScale);
};

interface ScreenInfo {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  platform: string;
  statusHeight: number;
  pixelRatio: number;
}

export const screenInfo = (): ScreenInfo => ({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  scale: PixelRatio.get(),
  fontScale: PixelRatio.getFontScale(),
  platform: Platform.OS,
  statusHeight,
  pixelRatio: PixelRatio.get(),
});
