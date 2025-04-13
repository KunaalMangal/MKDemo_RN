import {StyleSheet} from 'react-native';

import {vh, vw} from '../../utils';

export const onBoardingStyles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  animatedContent: {
    alignItems: 'center',
    gap: 16,
  },
  image: {
    width: vw(320),
    height: vh(280),
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: 12,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
  },
  dot: {
    width: vw(10),
    height: vw(10),
    borderRadius: 6,
    marginHorizontal: 6,
  },
  skipButton: {
    position: 'absolute',
    right: vw(20),
    top: vh(10),
    zIndex: 10,
    borderRadius: vw(30),
  },
});
