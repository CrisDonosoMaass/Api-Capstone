import { ViewStyle } from 'react-native';

export type PublicHeaderProps = {
  title: string;
  subtitle?: string;
  hiddenLogo?: boolean;
  mediumSizeTitle?: boolean;
  style?: ViewStyle;
  onBackPress?: () => void;
  backButtonIcon?: React.ReactNode;
};

export type PublicHeaderViewProps = {
  title: string;
  subtitle?: string;
  hiddenLogo?: boolean;
  mediumSizeTitle?: boolean;
  style?: ViewStyle;
  onBackPress?: () => void;
  backButtonIcon?: React.ReactNode;
};
