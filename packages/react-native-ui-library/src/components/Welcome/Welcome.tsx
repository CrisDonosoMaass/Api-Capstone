import { WelcomeProps } from './Welcome.types';
import WelcomeView from './Welcome.view';

export default function Welcome(props: WelcomeProps) {
  return <WelcomeView {...props} />;
}
