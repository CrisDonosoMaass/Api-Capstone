import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useLocale } from '@crisdonosomaass/react-native-ui-library';

import OpacityPressable from '../../components/Common/OpacityPressable';

type LanguageContainerProps = PropsWithChildren & {
  color?: string;
};

export default function LanguageContainer({
  children,
  color: colorOverride,
}: LanguageContainerProps) {
  const { locale, switchLocale } = useLocale();
  const theme = useTheme();
  const { colors } = theme;
  const color = colorOverride || colors.primary;

  return (
    <>
      <OpacityPressable style={styles.pressable} onPress={switchLocale}>
        <Text allowFontScaling={false} variant="labelSmall" style={{ color }}>
          {locale.toUpperCase()}
        </Text>
        <Icon name="earth" size={22} color={color} />
      </OpacityPressable>

      {children}
    </>
  );
}

const styles = StyleSheet.create({
  pressable: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    flexDirection: 'row',
    columnGap: 3,
    marginRight: 5,
  },
  pressable2: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    flexDirection: 'row',
    columnGap: 3,
    marginRight: 55,
  },
  whatsappButton: {
    backgroundColor: '#074f71',
    paddingHorizontal: 10,
  },
  whatsappButtonContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  whatsappButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
});
