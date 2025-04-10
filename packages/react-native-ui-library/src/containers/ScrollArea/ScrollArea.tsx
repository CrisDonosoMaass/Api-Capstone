import { ScrollView } from 'react-native';

import { styles } from './ScrollArea.styles';
import { ScrollAreaProps } from './ScrollArea.types';

export default function ScrollArea({ children, style }: ScrollAreaProps) {
  return (
    <ScrollView
      directionalLockEnabled
      nestedScrollEnabled
      style={style}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}
