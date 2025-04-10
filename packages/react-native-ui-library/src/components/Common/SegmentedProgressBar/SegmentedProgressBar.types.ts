import { ViewStyle } from 'react-native';

export type SegmentedProgressBarProps = {
  barNumber: number;
  activeBarNumber: number;
  style: ViewStyle;
};
export type SegmentedProgressBarViewProps = {
  bars: React.ReactNode[];
  style: ViewStyle;
};
