import { Platform, StatusBar, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './GeneralLayout.styles';

interface GeneralLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
  bottomPadding?: boolean;
}

export default function GeneralLayout({
  children,
  style,
  bottomPadding = true,
}: GeneralLayoutProps) {
  const insets = useSafeAreaInsets();
  const paddingStyle = {
    paddingBottom: bottomPadding ? insets.bottom : 0,
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
  };
  return (
    <View style={[styles.container, paddingStyle, style]}>{children}</View>
  );
}
