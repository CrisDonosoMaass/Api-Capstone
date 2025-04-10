import React, { useCallback, useState } from 'react';
import { Dimensions, Image, Keyboard, Platform, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from '@react-navigation/native';

import { BirdLogo } from '../../../constants/Images';
import LanguageContainer from '../../../containers/LanguageContainer';
import OpacityPressable from '../OpacityPressable';
import { styles } from './PublicHeader.styles';
import { PublicHeaderViewProps } from './PublicHeader.types';

export default function PublicHeaderView({
  hiddenLogo = false,
  mediumSizeTitle = false,
  title,
  subtitle,
  style,
  onBackPress,
  backButtonIcon,
}: PublicHeaderViewProps) {
  const screenHeight = Dimensions.get('window').height;
  const smallDevices = screenHeight < 700;
  const [keyboardPresent, setKeyboardPresent] = useState(false);
  const iosMarginTop =
    Platform.OS === 'ios' ? { marginTop: smallDevices ? 0 : 10 } : {};

  const handleKeyboardDidShow = useCallback(() => {
    setKeyboardPresent(true);
  }, []);

  const handleKeyboardDidHide = useCallback(() => {
    setKeyboardPresent(false);
  }, []);

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

  return (
    <View
      style={[
        styles.headerContainer,
        style,
        { marginTop: keyboardPresent ? '2%' : '8%' },
      ]}
    >
      <KeyboardAwareScrollView
        onKeyboardWillShow={handleKeyboardDidShow}
        onKeyboardWillHide={handleKeyboardDidHide}
        scrollEnabled={false}
      >
        <View style={styles.container}>
          {onBackPress && (
            <OpacityPressable onPress={onBackPress} style={styles.backButton}>
              {backButtonIcon || (
                <Icon name="arrow-left" size={30} color="#fff" />
              )}
            </OpacityPressable>
          )}
          {!hiddenLogo && !keyboardPresent && (
            <View style={[styles.logoContainer, iosMarginTop]}>
              <View style={styles.imageContainer}>
                <Image source={BirdLogo} style={styles.logo} />
              </View>
              {!hiddenLogo && <LanguageContainer />}
            </View>
          )}
          <View style={{ width: '100%' }}>
            {hiddenLogo && (
              <View style={{ marginTop: keyboardPresent ? 0 : 36 }} />
            )}
            <Text
              style={styles.title}
              variant={mediumSizeTitle ? 'titleSmall' : 'titleMedium'}
            >
              {title}
            </Text>
            {hiddenLogo && !keyboardPresent && <LanguageContainer />}
          </View>
          {subtitle && (
            <Text
              allowFontScaling={false}
              style={styles.subtitle}
              variant="bodySmall"
            >
              {subtitle}
            </Text>
          )}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
