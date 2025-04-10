import { useMemo } from 'react';
import { KeyboardAvoidingView, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import GeneralLayout from '../GeneralLayout';
import ScrollArea from '../ScrollArea';
import { styles } from './PrivateLayout.styles';

interface PrivateLayoutProps {
  scrollable?: boolean;
  style?: ViewStyle;
  subStyle?: ViewStyle;
  header?: React.ReactNode;
  children: React.ReactNode;
  bottomPadding?: boolean;
}

export default function PrivateLayout({
  scrollable = false,
  header,
  style,
  children,
  subStyle,
  bottomPadding = true,
}: PrivateLayoutProps) {
  const insets = useSafeAreaInsets();
  const paddingStyle = useMemo(
    () => ({
      paddingTop: insets.top,
      paddingBottom: bottomPadding ? insets.bottom : 0,
    }),
    [insets, bottomPadding],
  );

  const viewStyle = useMemo(
    () => [styles.container, paddingStyle, style],
    [paddingStyle, style],
  );

  const subContainerScrollableStyle = useMemo(
    () => ({ ...styles.subContainerScrollable, ...subStyle }),
    [subStyle],
  );

  const subContainerStyle = useMemo(
    () => ({ ...styles.subContainer, ...subStyle }),
    [subStyle],
  );

  return (
    <GeneralLayout style={{ paddingTop: 0 }} bottomPadding={bottomPadding}>
      {scrollable ? (
        <View style={viewStyle}>
          {header}
          <ScrollArea style={subContainerScrollableStyle}>
            {children}
          </ScrollArea>
        </View>
      ) : (
        <View style={viewStyle}>
          {header}
          <KeyboardAvoidingView style={subContainerStyle} behavior="padding">
            {children}
          </KeyboardAvoidingView>
        </View>
      )}
    </GeneralLayout>
  );
}
