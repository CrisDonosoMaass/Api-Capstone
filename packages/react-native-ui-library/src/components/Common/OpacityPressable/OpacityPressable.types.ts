import { PressableProps, ViewStyle } from 'react-native';

export type OpacityPressableProps = PressableProps & {
  onPress?: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
};
