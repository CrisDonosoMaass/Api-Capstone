import { useCallback } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useFocusEffect } from 'expo-router';

import { BirdLogoHD } from '../../../constants/Images';

interface LoadingOverlayProps {
  visible: boolean;
  children?: React.ReactNode;
  fullOpacity?: boolean;
  webView?: boolean;
}

const Loading: React.FC<LoadingOverlayProps> = ({
  visible,
  children,
  fullOpacity,
  webView,
}) => {
  const { colors } = useTheme();

  const minX = -Dimensions.get('window').width / 2 - 100;
  const maxX = Dimensions.get('window').width / 2 + 100;
  const offset = useSharedValue(80);

  const xPos = useSharedValue(minX);
  const yPos = useSharedValue(-50);
  const direction = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: xPos.value },
        { translateY: yPos.value - offset.value },
        { rotateY: `${direction.value}deg` },
      ],
      opacity: interpolate(xPos.value, [minX, 0, maxX], [0.2, 1, 0.2], 'clamp'),
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      yPos.value = withRepeat(
        withTiming(-yPos.value, { duration: 2000 }),
        -1,
        true,
      );

      xPos.value = withRepeat(
        withSequence(
          withTiming(
            maxX,
            {
              easing: Easing.inOut(Easing.quad),
              duration: 4000,
            },
            () => {
              direction.value = 180;
              offset.value = -120;
            },
          ),
          withTiming(
            minX,
            {
              easing: Easing.inOut(Easing.quad),
              duration: 4000,
            },
            () => {
              direction.value = 0;
              offset.value = 80;
            },
          ),
        ),
        -1,
      );
      return () => {
        xPos.value = minX;
        yPos.value = -50;
        direction.value = 0;
        offset.value = 80;
      };
    }, []),
  );

  if (!visible) return null;

  return (
    <View
      style={{
        ...styles.overlay,
        backgroundColor: colors.onSecondary,
        opacity: fullOpacity ? 1 : 0.9,
        zIndex: 1000,
        bottom: 100,
        height: '100%',
      }}
    >
      {!webView ? (
        <Animated.Image
          source={BirdLogoHD}
          style={{ ...styles.image, ...animatedStyle }}
          resizeMode="contain"
        />
      ) : null}

      {children ? (
        children
      ) : (
        <ActivityIndicator size={50} color={colors.primary} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 112,
    height: 67,
  },
});

export default Loading;
