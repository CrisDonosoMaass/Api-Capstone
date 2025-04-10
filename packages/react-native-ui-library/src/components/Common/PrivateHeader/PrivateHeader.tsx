import { PrivateHeaderProps } from './PrivateHeader.types';
import PrivateHeader from './PrivateHeader.view';

export default function Button(props: PrivateHeaderProps) {
  return <PrivateHeader {...props} />;
}
