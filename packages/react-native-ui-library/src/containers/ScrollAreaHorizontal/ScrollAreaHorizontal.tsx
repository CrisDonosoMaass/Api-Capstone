import { ScrollView } from 'react-native';

import { styles } from './ScrollAreaHorizontal.styles';
import { ScrollAreaHorizontalProps } from './ScrollAreaHorizontal.types';

export default function ScrollAreaHorizontal({
  children,
  style,
}: ScrollAreaHorizontalProps) {
  return (
    <ScrollView
      style={style}
      horizontal
      directionalLockEnabled
      nestedScrollEnabled
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {children}
    </ScrollView>
  );
}
