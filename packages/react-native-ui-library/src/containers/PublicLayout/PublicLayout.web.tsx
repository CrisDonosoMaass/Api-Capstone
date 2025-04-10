import { Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import GeneralLayout from '../GeneralLayout';
import { styles } from './PublicLayout.styles';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const insets = useSafeAreaInsets();
  const paddingStyle = {
    paddingBottom: insets.bottom,
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
  };

  return (
    <GeneralLayout>
      <View style={[styles.container, paddingStyle]}>
        <View style={styles.subContainer}>{children}</View>
      </View>
    </GeneralLayout>
  );
}
