import { SegmentedProgressBarProps } from './SegmentedProgressBar.types';
import SegmentedProgressBarView from './SegmentedProgressBar.view';
import SegmentedProgressBarItem from './SegmentedProgressBarItem';

export default function SegmentedProgressBar({
  barNumber,
  activeBarNumber,
  style,
}: SegmentedProgressBarProps) {
  function getBars() {
    const bars = [];
    for (let i = 0; i < barNumber; i++) {
      const isActive = i < activeBarNumber;
      bars.push(<SegmentedProgressBarItem key={i} active={isActive} />);
    }
    return bars;
  }
  return <SegmentedProgressBarView bars={getBars()} style={style} />;
}
