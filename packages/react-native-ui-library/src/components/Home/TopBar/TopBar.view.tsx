import { Image, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { BirdLogo } from '../../../constants/Images';
import LanguageContainer from '../../../containers/LanguageContainer';
import OpacityPressable from '../../Common/OpacityPressable';
import styles from './TopBar.styles';
import { TopBarViewProps } from './TopBar.types';

export default function TopBarView({ user, onSidebarPress }: TopBarViewProps) {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      <View style={[styles.subContainer, { flex: 0.18 }]}>
        <Image source={BirdLogo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={[styles.subContainer, { flex: 0.6, marginLeft: 4 }]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          variant="headlineSmall"
          style={{ color: colors.onSecondary }}
        >
          {user}
        </Text>
      </View>
      <View
        style={[styles.subContainer, { flex: 0.3, justifyContent: 'flex-end' }]}
      >
        <OpacityPressable style={{ top: -8 }}>
          <LanguageContainer />
        </OpacityPressable>
        <OpacityPressable onPress={onSidebarPress}>
          <Icon
            name="menu"
            size={24}
            color={colors.onSecondary}
            style={{ marginLeft: 7 }}
          />
        </OpacityPressable>
      </View>
    </View>
  );
}
