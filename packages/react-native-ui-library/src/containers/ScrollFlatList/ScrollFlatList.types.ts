import { FlatListProps, ViewStyle } from 'react-native';

export interface ScrollFlatListProps {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderItem: ({ item }: { item: any }) => JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  keyExtractor: (item: any) => string;
  refreshing?: boolean;
  onRefresh?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItemLayout?: FlatListProps<any>['getItemLayout'];
}
