import { View } from 'react-native';

import styles from './SegmentedProgressBarItem.styles';
import { SegmentedProgressBarItemViewProps } from './SegmentedProgressBarItem.types';

export default function SegmentedProgressBarView({
  color,
  opacity,
  ...other
}: SegmentedProgressBarItemViewProps) {
  return (
    <View
      {...other}
      style={{ ...styles.bar, backgroundColor: color, opacity }}
    />
  );
}
