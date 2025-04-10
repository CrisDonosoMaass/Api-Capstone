import { ModalHomeProps } from './ModalHome.types';
import ModalHomeView from './ModalHome.view';

export default function ModalHomeComponent(props: ModalHomeProps) {
  return <ModalHomeView {...props} />;
}
