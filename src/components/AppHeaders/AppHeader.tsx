import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  Alert,
} from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { SearchBar } from 'react-native-screens';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import AppText from '../AppTexts/AppText';
import { vw } from '../../utils';

const AppHeader: React.FC<NativeStackHeaderProps> = ({
  navigation,
  route,
  options,
  back,
}) => {
  // Extract header options with defaults
  const title = getHeaderTitle(options, route.name);
  const {
    headerStyle = { backgroundColor: '#fff' },
    headerTintColor = '#000',
    headerTitleStyle = {},
    headerLeft,
    headerRight,
    headerBackTitle,
    headerBackTitleStyle,
    headerBackImageSource,
    headerBackVisible = true,
    headerTransparent = false,
    headerBlurEffect,
    headerShadowVisible = true,
    headerTitleAlign = Platform.OS === 'ios' ? 'center' : 'left',
    headerBackButtonDisplayMode = Platform.OS === 'ios' ? 'default' : 'minimal',
    headerBackButtonMenuEnabled = true,
    headerSearchBarOptions,
    headerLargeTitle = false,
    headerLargeTitleStyle,
    headerLargeTitleShadowVisible = true,
  } = options;

  // State for search bar
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Animation values
  const searchAnim = useSharedValue(0); // 0: hidden, 1: visible
  const scrollOffset = useSharedValue(0); // For large title collapse
  const backButtonOpacity = useSharedValue(back && headerBackVisible ? 1 : 0);

  // Toggle search bar animation
  const toggleSearch = () => {
    searchAnim.value = withTiming(isSearchActive ? 0 : 1, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    setIsSearchActive(!isSearchActive);
  };

  // Update back button visibility on navigation changes
  React.useEffect(() => {
    backButtonOpacity.value = withTiming(back && headerBackVisible ? 1 : 0, {
      duration: 200,
      easing: Easing.out(Easing.ease),
    });
  }, [back, backButtonOpacity, headerBackVisible]);

  // Animated styles
  const searchBarStyle = useAnimatedStyle(() => ({
    opacity: interpolate(searchAnim.value, [0, 1], [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(
          searchAnim.value,
          [0, 1],
          [-20, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const titleStyle = useAnimatedStyle(() => {
    const baseFontSize =
      (headerTitleStyle && 'fontSize' in headerTitleStyle
        ? headerTitleStyle.fontSize
        : 18) || 18;
    const largeFontSize =
      headerLargeTitle && Platform.OS === 'ios'
        ? (headerLargeTitleStyle && 'fontSize' in headerLargeTitleStyle
            ? headerLargeTitleStyle.fontSize
            : 34) || 34
        : baseFontSize;

    return {
      opacity: interpolate(
        searchAnim.value,
        [0, 1],
        [1, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            searchAnim.value,
            [0, 1],
            [0, 20],
            Extrapolation.CLAMP,
          ),
        },
      ],
      fontSize: interpolate(
        scrollOffset.value,
        [0, 100],
        [largeFontSize, baseFontSize],
        Extrapolation.CLAMP,
      ),
    };
  });

  const headerContainerStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollOffset.value,
      [0, 100],
      [headerLargeTitle && Platform.OS === 'ios' ? 100 : 60, 60],
      Extrapolation.CLAMP,
    ),
    paddingVertical: interpolate(
      scrollOffset.value,
      [0, 100],
      [headerLargeTitle && Platform.OS === 'ios' ? 20 : 10, 10],
      Extrapolation.CLAMP,
    ),
  }));

  const backButtonStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      backButtonOpacity.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        scale: interpolate(
          backButtonOpacity.value,
          [0, 1],
          [0.8, 1],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  // Default back button
// Default back button
  const defaultHeaderLeft = back && headerBackVisible ? (
    <Animated.View style={[styles.backButton, backButtonStyle]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        accessibilityLabel={headerBackTitle || back.title || 'Back'}
        disabled={!navigation.canGoBack()}
        onLongPress={headerBackButtonMenuEnabled && Platform.OS === 'ios' ? () => alert('Back button menu') : undefined}
      >
        {headerBackImageSource ? (
          <Image
            source={headerBackImageSource}
            style={[styles.backImage, { tintColor: headerTintColor }]}
          />
        ) : (
          <Icon name="arrow-left" size={24} color={headerTintColor} />
        )}
        {headerBackButtonDisplayMode !== 'minimal' && (headerBackTitle || back?.title) ? (
          <Text
            style={[
              styles.backTitle,
              headerBackTitleStyle && 'color' in headerBackTitleStyle ? { color: headerBackTitleStyle.color } : { color: headerTintColor },
              headerBackTitleStyle && 'fontFamily' in headerBackTitleStyle ? { fontFamily: headerBackTitleStyle.fontFamily } : {},
              headerBackTitleStyle && 'fontSize' in headerBackTitleStyle ? { fontSize: headerBackTitleStyle.fontSize } : {},
            ]}
          >
            {headerBackButtonDisplayMode === 'generic' ? 'Back' : headerBackTitle || back.title}
          </Text>
        ) : null}
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <View style={styles.placeholder} />
  );

  // Handle header title
  const renderHeaderTitle = () => {
    const baseTitleStyle = [
      styles.title,
      headerTitleStyle && 'color' in headerTitleStyle
        ? { color: headerTitleStyle.color }
        : { color: headerTintColor },
      headerTitleStyle && 'fontFamily' in headerTitleStyle
        ? { fontFamily: headerTitleStyle.fontFamily }
        : {},
      headerTitleStyle && 'fontSize' in headerTitleStyle
        ? { fontSize: headerTitleStyle.fontSize }
        : {},
      headerTitleStyle && 'fontWeight' in headerTitleStyle
        ? { fontWeight: headerTitleStyle.fontWeight }
        : { fontWeight: 'bold' },
      headerLargeTitle && Platform.OS === 'ios' && headerLargeTitleStyle
        ? {
            color:
              headerLargeTitleStyle && 'color' in headerLargeTitleStyle
                ? headerLargeTitleStyle.color
                : headerTintColor,
            fontFamily:
              headerLargeTitleStyle && 'fontFamily' in headerLargeTitleStyle
                ? headerLargeTitleStyle.fontFamily
                : undefined,
            fontWeight:
              headerLargeTitleStyle && 'fontWeight' in headerLargeTitleStyle
                ? headerLargeTitleStyle.fontWeight
                : undefined,
          }
        : {},
      { textAlign: headerTitleAlign },
    ];

    if (typeof options.headerTitle === 'function') {
      return options.headerTitle({
        children: title,
        tintColor: headerTintColor,
      });
    }

    return (
      <Animated.View style={[styles.titleContainer, titleStyle]}>
        <AppText variant="h3" style={baseTitleStyle} numberOfLines={1}>
          {title}
        </AppText>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.headerContainer,
        headerStyle,
        headerTransparent && {
          backgroundColor: 'transparent',
          position: 'absolute',
        },
        !headerShadowVisible && { borderBottomWidth: 0 },
        headerLargeTitle &&
          headerLargeTitleShadowVisible && {
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          },
      ]}
      edges={['top']}
    >
      {options.headerBackground && (
        <View style={styles.background}>{options.headerBackground()}</View>
      )}
      <Animated.View
        style={[
          styles.header,
          headerContainerStyle,
          headerTransparent && { backgroundColor: 'transparent' },
          headerBlurEffect &&
            Platform.OS === 'ios' && {
              backgroundColor: 'rgba(255,255,255,0.5)',
            },
        ]}
      >
        {/* Left Button */}
        {headerLeft
          ? headerLeft({
              tintColor: headerTintColor,
              canGoBack: !!back,
              label: headerBackTitle || back?.title,
              href: back?.href,
            })
          : defaultHeaderLeft}

        {/* Title or Search Bar */}
        {headerSearchBarOptions && isSearchActive ? (
          <Animated.View style={[styles.searchBarContainer, searchBarStyle]}>
            <SearchBar
              placeholder={headerSearchBarOptions.placeholder || 'Search'}
              onChangeText={event => setSearchQuery(event.nativeEvent.text)}
              value={searchQuery}
              barTintColor={headerTintColor}
              {...headerSearchBarOptions}
              style={[
                styles.searchBar,
                {
                  backgroundColor:
                    headerStyle && 'backgroundColor' in headerStyle
                      ? headerStyle.backgroundColor
                      : '#fff',
                },
              ]}
            />
          </Animated.View>
        ) : (
          renderHeaderTitle()
        )}

        {/* Right Button */}
        {headerSearchBarOptions && !isSearchActive ? (
          <TouchableOpacity
            onPress={toggleSearch}
            style={styles.rightComponent}
          >
            <Icon name="search" size={24} color={headerTintColor} />
          </TouchableOpacity>
        ) : headerRight ? (
          headerRight({ tintColor: headerTintColor, canGoBack: !!back })
        ) : (
          <View style={styles.rightComponent} />
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(15),
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: vw(10),
    paddingVertical: vw(10),
    borderRadius: vw(12),
    backgroundColor: 'white'
  },
  backImage: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  backTitle: {
    fontSize: 16,
    marginLeft: 5,
  },
  rightComponent: {
    width: 30,
    alignItems: 'center',
  },
  placeholder: {
    width: 30,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  searchBarContainer: {
    flex: 1,
  },
  searchBar: {
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default AppHeader;
