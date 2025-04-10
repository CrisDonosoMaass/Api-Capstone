import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import Loading from '../Common/Loading';
import { styles } from './ActivityIndicator.styles';

export interface ActivityIndicatorProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  fullOpacity?: boolean;
  color?: string;
  size?: number;
  webView?: boolean;
}

export default function ActivityIndicatorComponent({
  backgroundColor: backgroundColorOverride,
  children,
  fullOpacity,
  webView,
}: ActivityIndicatorProps) {
  const { colors } = useTheme();
  const backgroundColor = backgroundColorOverride || colors.onSecondary;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Loading
        visible
        children={children}
        fullOpacity={fullOpacity}
        webView={webView}
      />
    </View>
  );
}
