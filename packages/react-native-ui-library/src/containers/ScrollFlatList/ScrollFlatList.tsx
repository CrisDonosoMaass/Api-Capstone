import { FlatList } from 'react-native';

import { styles } from './ScrollFlatList.styles';
import { ScrollFlatListProps } from './ScrollFlatList.types';

export default function ScrollArea({
  data,
  renderItem,
  style,
  refreshing,
  onRefresh,
  getItemLayout,
  keyExtractor,
}: ScrollFlatListProps) {
  return (
    <FlatList
      style={style}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshing={refreshing}
      onRefresh={onRefresh}
      getItemLayout={getItemLayout}
      maxToRenderPerBatch={10} // cuantos elementos renderiza por batch
      initialNumToRender={3} // cuantos elementos renderiza al principio
      windowSize={5} // cuantos elementos mantiene en memoria para renderizar a la vez
    />
  );
}
