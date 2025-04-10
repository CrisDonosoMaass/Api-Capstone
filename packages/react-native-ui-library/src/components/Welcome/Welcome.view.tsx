import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTranslations } from 'use-intl';
import { useFocusEffect } from '@react-navigation/native';

import { getFamily, getFontWeight } from '../../constants/FontConfig';
import { FullLogo, WelcomeBackground } from '../../constants/Images';
import LanguageContainer from '../../containers/LanguageContainer';
import Button from '../Common/Button';
// import Terms from './Terms';
import { styles } from './Welcome.styles';
import { WelcomeViewProps } from './Welcome.types';

const imageSources = [
  require('../../../../../assets/images/Welcome1.png'),
  require('../../../../../assets/images/Welcome2.png'),
  require('../../../../../assets/images/Welcome3.png'),
];

export default function Welcome({
  LogInLink,
  //TermsAndConditionsLink,
  //PolicyPrivacyLink,
  children,
}: WelcomeViewProps) {
  const t = useTranslations('Welcome');
  const theme = useTheme();
  const { colors } = theme;
  const { primary, onPrimary, secondary, onSecondary } = colors;
  const [currentImage, setCurrentImage] = useState(0);
  const imageOpacity = useSharedValue(1);
  const [showQuoter, setShowQuoter] = useState(false);
  const [keyboardPresent, setKeyboardPresent] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const checkKeyboardVisibility = () => {
        const currentlyVisible = Keyboard.isVisible
          ? Keyboard.isVisible()
          : false;
        setKeyboardPresent(currentlyVisible);
      };
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        checkKeyboardVisibility,
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        checkKeyboardVisibility,
      );
      checkKeyboardVisibility();
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []),
  );

  const titleTheme = useMemo(
    () =>
      ({
        ...theme,
        fonts: {
          ...theme.fonts,
          headlineMedium: {
            ...theme.fonts.headlineMedium,
            fontFamily: getFamily('SemiBold', false),
            fontWeight: getFontWeight('SemiBold'),
            fontSize: 28,
            lineHeight: 30,
          },
        },
      }) as const,
    [theme],
  );

  const subtitleTheme = useMemo(
    () =>
      ({
        ...titleTheme,
        fonts: {
          ...titleTheme.fonts,
          headlineMedium: {
            ...titleTheme.fonts.headlineMedium,
            fontFamily: getFamily('Light', false),
            fontWeight: getFontWeight('Light'),
          },
        },
      }) as const,
    [theme],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      ...styles.image,
      opacity: imageOpacity.value,
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageSources.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    imageOpacity.value = withSequence(
      withTiming(1, {
        duration: 1100,
      }),
      withDelay(3000, withTiming(0, { duration: 1000 })),
    );
  }, [currentImage]);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ height: '100%' }}>
        <ImageBackground
          source={WelcomeBackground}
          style={[styles.container, { paddingTop: !keyboardPresent ? 55 : 0 }]}
        >
          {!keyboardPresent ? (
            <View style={{ width: '100%', marginRight: 60 }}>
              <LanguageContainer />
            </View>
          ) : null}
          {showQuoter ? (
            <View style={{ marginTop: !keyboardPresent ? 30 : 0 }}>
              <Text
                style={styles.title2}
                allowFontScaling={false}
                variant="headlineMedium"
                theme={titleTheme}
              >
                {t('title.3')}
              </Text>

              <Text
                style={styles.subtitle2}
                allowFontScaling={false}
                variant="bodyMedium"
                theme={titleTheme}
              >
                {t('title.4')}
              </Text>
              <View
                style={{
                  paddingLeft: '5%',
                  paddingRight: '5%',
                  height: 285,
                  marginTop: 0,
                }}
              >
                {children}
              </View>
            </View>
          ) : (
            <Animated.Image
              source={imageSources[currentImage]}
              style={animatedStyle}
              resizeMode="contain"
            />
          )}

          {!showQuoter ? (
            <>
              <Text
                style={styles.title}
                allowFontScaling={false}
                variant="headlineMedium"
                theme={titleTheme}
              >
                {t('title.0')}
              </Text>
              <Text
                style={styles.title}
                allowFontScaling={false}
                variant="headlineMedium"
                theme={titleTheme}
              >
                {t('title.1')}
              </Text>
              <Text
                style={styles.subTitle}
                variant="headlineMedium"
                allowFontScaling={false}
                theme={subtitleTheme}
              >
                {t('title.2')}
              </Text>
            </>
          ) : null}

          <LogInLink>
            <Button
              mode="contained"
              buttonColor={primary}
              textColor={onPrimary}
              style={styles.fullWidthButton}
              testID="submit-button"
            >
              {t('signIn')}
            </Button>
          </LogInLink>
          {!showQuoter && (
            <TouchableOpacity onPress={() => setShowQuoter((prev) => !prev)}>
              <Text
                variant="headlineMedium"
                allowFontScaling={false}
                style={{
                  color: colors.onPrimary,
                  marginTop: 5,
                  textDecorationLine: 'underline',
                }}
              >
                {t('iWantToGetAQuote')}
              </Text>
            </TouchableOpacity>
          )}
          <Image source={FullLogo} style={styles.logo} />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
