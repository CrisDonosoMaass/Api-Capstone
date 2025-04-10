import { ViewStyle } from 'react-native';
import { ButtonProps as PaperButtonProps } from 'react-native-paper';

export type ButtonProps = PaperButtonProps & {
  children: React.ReactNode;
  iconSource?: React.ReactNode;
  iconStyle?: ViewStyle;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
  style?: ViewStyle;
};
