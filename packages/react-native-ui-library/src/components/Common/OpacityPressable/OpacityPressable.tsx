import { forwardRef } from 'react';
import { Pressable, View } from 'react-native';

import { OpacityPressableProps } from './OpacityPressable.types';

function OpacityPressable(
  { onPress, children, style, ...other }: OpacityPressableProps,
  ref: React.ForwardedRef<View>,
) {
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        style,
      ]}
      {...other}
    >
      {children}
    </Pressable>
  );
}

export default forwardRef(OpacityPressable);
