import { ViewStyle } from 'react-native';

export type PrivateHeaderProps = {
  title: string;
  mediumSizeTitle?: boolean;
  iconSize?: number;
  colorHeader?: string;
  style?: ViewStyle;
  GoBackLink?: (props: { children: React.ReactNode }) => React.ReactNode;
  onBackPress?: () => void;
};

export type PrivateHeaderViewProps = {
  title: string;
  mediumSizeTitle?: boolean;
  iconSize?: number;
  colorHeader?: string;
  style?: ViewStyle;
  GoBackLink?: (props: { children: React.ReactNode }) => React.ReactNode;
  onBackPress?: () => void;
};
