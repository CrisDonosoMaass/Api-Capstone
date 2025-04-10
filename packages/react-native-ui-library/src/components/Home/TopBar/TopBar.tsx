import { TopBarProps } from './TopBar.types';
import TopBarView from './TopBar.view';

export default function TopBar(props: TopBarProps) {
  return <TopBarView {...props} />;
}
