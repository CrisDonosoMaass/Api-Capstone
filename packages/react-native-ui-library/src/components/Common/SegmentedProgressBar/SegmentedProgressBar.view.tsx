import { View } from 'react-native';

import styles from './SegmentedProgressBar.styles';
import { SegmentedProgressBarViewProps } from './SegmentedProgressBar.types';

export default function SegmentedProgressBarView({
  bars,
  style,
}: SegmentedProgressBarViewProps) {
  return <View style={{ ...styles.container, ...style }}>{bars}</View>;
}
