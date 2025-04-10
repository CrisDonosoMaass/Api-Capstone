import { useTheme } from 'react-native-paper';

import Colors from '../../../../constants/Colors';
import { SegmentedProgressBarItemProps } from './SegmentedProgressBarItem.types';
import SegmentedProgressBarItemView from './SegmentedProgressBarItem.view';

export default function SegmentedProgressBar({
  active,
  ...other
}: SegmentedProgressBarItemProps) {
  const { colors } = useTheme();
  const color = active ? colors.primary : Colors.gray;
  return (
    <SegmentedProgressBarItemView {...other} color={color} opacity={0.7} />
  );
}
