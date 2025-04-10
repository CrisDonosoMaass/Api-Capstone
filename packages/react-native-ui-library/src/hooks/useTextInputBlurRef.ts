import { useEffect, useRef } from 'react';
import { Keyboard, TextInput } from 'react-native';
import * as Device from 'expo-device';

export const useTextInputBlurRef = () => {
  const textInputRef = useRef<TextInput>(null);

  const onKeyboardHideEvent = () => {
    textInputRef.current?.blur();
  };
  useEffect(() => {
    if (Device.isDevice) {
      const keyboardHideSubscription = Keyboard.addListener(
        'keyboardDidHide',
        onKeyboardHideEvent,
      );
      return () => {
        keyboardHideSubscription.remove();
      };
    }
  }, []);

  return textInputRef;
};
