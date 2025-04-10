import { useCallback } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import {
  router,
  Stack,
  useFocusEffect,
  useLocalSearchParams,
} from 'expo-router';

import { ActivityIndicator } from '@aeperaltarivastests/react-native-ui-library';

import { useSession } from '../../hooks/auth';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function PublicLayout() {
  const { session, isLoading } = useSession();
  const accountStatus = session?.user.accountStatus;
  const searchParams = useLocalSearchParams();
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      if (accountStatus === 'COMPLETE') {
        const { callbackUrl = '/' } =
          (searchParams.params as unknown as {
            callbackUrl: '/' | undefined;
          }) || {};
        router.replace(callbackUrl);
      }
    }, [accountStatus, searchParams.params]),
  );

  if (isLoading || accountStatus === 'COMPLETE') {
    return <ActivityIndicator />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <View
      key="publicLayout"
      style={{
        backgroundColor: colors.onSecondary,
        flex: 1,
      }}
    >
      <Animated.View
        style={{ flex: 1 }}
        entering={SlideInLeft.duration(500)}
        key="publicLayoutContent"
      >
        <Stack screenOptions={{ headerShown: false }} />
      </Animated.View>
    </View>
  );
}
