import { ScrollView, ViewStyle } from 'react-native';

import { styles } from './ContentLayout.styles';

interface ContentLayoutProps {
  children: React.ReactNode;
  contentStyle?: ViewStyle;
  scrollable?: boolean;
}

export default function ContentLayout({
  children,
  contentStyle,
  scrollable = true,
}: ContentLayoutProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.scrollContainer, contentStyle]}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={scrollable}
    >
      {children}
    </ScrollView>
  );
}
