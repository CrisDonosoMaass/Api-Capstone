import { View } from 'react-native';
import { Text } from 'react-native-paper';
import GoogleIcon from 'react-native-vector-icons/MaterialIcons';

import OpacityPressable from '../OpacityPressable';
import { styles } from './PrivateHeader.styles';
import { PrivateHeaderProps } from './PrivateHeader.types';

export default function PrivateHeaderView({
  mediumSizeTitle = false,
  iconSize = 24,
  title,
  colorHeader = '#ffffff',
  style,
  GoBackLink,
  onBackPress,
}: PrivateHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      {onBackPress ? (
        <OpacityPressable style={styles.backButton} onPress={onBackPress}>
          <GoogleIcon name="chevron-left" size={iconSize} color={colorHeader} />
        </OpacityPressable>
      ) : (
        GoBackLink && (
          <GoBackLink>
            <OpacityPressable style={styles.backButton}>
              <GoogleIcon
                name="chevron-left"
                size={iconSize}
                color={colorHeader}
              />
            </OpacityPressable>
          </GoBackLink>
        )
      )}
      <View style={styles.titleContainer}>
        <Text
          style={[styles.title, { color: colorHeader }]}
          numberOfLines={2}
          ellipsizeMode="tail"
          allowFontScaling={false}
          variant={mediumSizeTitle ? 'titleMedium' : 'headlineLarge'}
        >
          {title}
        </Text>
      </View>
      <View style={styles.backButton} />
    </View>
  );
}
