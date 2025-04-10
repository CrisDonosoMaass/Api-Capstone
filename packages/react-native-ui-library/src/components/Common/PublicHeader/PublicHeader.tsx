import { PublicHeaderProps } from './PublicHeader.types';
import PublicHeader from './PublicHeader.view';

export default function Button(props: PublicHeaderProps) {
  return <PublicHeader {...props} />;
}
