import { View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { styles } from './FormLayout.styles';

export interface FormLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
  animated?: boolean;
  privateForm?: boolean;
}

export default function FormLayout({
  children,
  style,
  animated,
}: FormLayoutProps) {
  if (animated) {
    return (
      <Animated.View style={[styles.container, style]}>
        {children}
      </Animated.View>
    );
  }
  return <View style={[styles.container, style]}>{children}</View>;
}
