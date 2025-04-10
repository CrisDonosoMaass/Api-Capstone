import React, { useEffect, useState } from 'react';
import { Pressable, PressableProps, TextStyle, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';

export type TimedPressableProps = PressableProps & {
  timer?: number;
  timerText?: string;
  countdownStyle?: TextStyle;
  onPressCallback: () => void;
  style?: ViewStyle;
};

export const TimedPressable = ({
  onPressCallback,
  children,
  countdownStyle,
  timer = 30,
  timerText = '',
  style,
  ...rest
}: TimedPressableProps) => {
  const [timerCountdown, setTimerCountdown] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    if (timerCountdown > 0) {
      setTimeout(() => {
        setTimerCountdown(timerCountdown - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
    }
  }, [timerCountdown]);
  const handlePress = () => {
    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    setTimerCountdown(timer);
    onPressCallback();
  };

  const formattedTimer = () => {
    const minutes = Math.floor(timerCountdown / 60);
    const seconds = timerCountdown % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Pressable
      {...rest}
      disabled={isDisabled}
      onPress={handlePress}
      style={({ pressed }) => [style, { opacity: pressed ? 0.5 : 1 }]}
    >
      {isDisabled ? (
        <Text
          style={{ ...countdownStyle, textDecorationLine: 'none' }}
          variant="bodySmall"
        >
          {timerText} {formattedTimer()}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};
