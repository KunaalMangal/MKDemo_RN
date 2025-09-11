import React, { useRef, useState } from 'react';
import { View, Pressable, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from 'react-native-reanimated';

import { useAppStyles, useTheme } from '../../theme';
import { AppButton, AppText } from '../../components';
import { IMAGES } from '../../constants';
import { onBoardingStyles } from './styles';
import { useAuth } from '../../hooks';

const onboardingData = [
  {
    title: 'Welcome',
    description: 'This is the first onboarding screen.',
    image: IMAGES.WELCOME,
  },
  {
    title: 'Track Everything',
    description: 'Keep tabs on your goals and habits.',
    image: 2,
  },
  {
    title: 'Stay Focused',
    description: 'Improve focus with daily reminders.',
    image: IMAGES.WELCOME,
  },
];

export default function OnBoarding() {
  const { onCompleteIntro } = useAuth();
  const { colors } = useTheme();
  const appStyles = useAppStyles();
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    } else {
      onCompleteIntro();
    }
  };

  const handleOnDotPress = (index: number) => {
    if (currentPage !== index) {
      pagerRef.current?.setPage(index);
    }
  };

  const dotColor = (index: number) => ({
    backgroundColor: currentPage === index ? colors.primary : colors.secondary,
  });

  return (
    <View style={appStyles.container}>
      {/* Skip Button */}
      {currentPage < onboardingData.length - 1 && (
        <AppButton
          title="Skip"
          onPress={onCompleteIntro}
          style={onBoardingStyles.skipButton}
        />
      )}

      {/* Pager View */}
      <PagerView
        style={onBoardingStyles.pagerView}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
      >
        {onboardingData.map((item, index) => (
          <View key={index} style={onBoardingStyles.page}>
            <Animated.View
              entering={FadeIn.duration(400)}
              exiting={FadeOut.duration(300)}
              style={onBoardingStyles.animatedContent}
            >
              <View style={appStyles.card}>
                <Image
                  source={item.image}
                  style={onBoardingStyles.image}
                  resizeMode="contain"
                  accessibilityLabel={`${item.title} image`}
                />
              </View>
              <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
                <AppText variant="h1" style={onBoardingStyles.title}>
                  {item.title}
                </AppText>
              </Animated.View>
              <AppText variant="h4" style={onBoardingStyles.description}>
                {item.description}
              </AppText>
            </Animated.View>
          </View>
        ))}
      </PagerView>

      {/* Pagination Dots */}
      <View style={onBoardingStyles.pagination}>
        {onboardingData.map((_, index) => (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityLabel={`Go to page ${index + 1}`}
            style={[onBoardingStyles.dot, dotColor(index)]}
            onPress={() => handleOnDotPress(index)}
          />
        ))}
      </View>

      {/* Next / Get Started Button */}
      <AppButton
        title={
          currentPage === onboardingData.length - 1 ? 'Get Started' : 'Next'
        }
        onPress={handleNext}
      />
    </View>
  );
}
