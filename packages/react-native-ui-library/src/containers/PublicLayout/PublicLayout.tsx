import { KeyboardAvoidingView as NativeKeyboardView } from 'react-native';

import GeneralLayout from '../GeneralLayout';
import { styles } from './PublicLayout.styles';

interface PublicLayoutProps {
  children: React.ReactNode;
  keyboardVerticalOffset?: number;
}

export default function PublicLayout({
  children,
  keyboardVerticalOffset = 0,
}: PublicLayoutProps) {
  return (
    <GeneralLayout>
      <NativeKeyboardView
        style={styles.subContainer}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        {children}
      </NativeKeyboardView>
    </GeneralLayout>
  );
}
