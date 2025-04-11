import { useEffect } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Link, router } from 'expo-router';

import {
  ActivityIndicator,
  Welcome,
} from '@crisdonosomaass/react-native-ui-library';

import { useSession } from '../hooks/auth';

export default function WelcomeScreen() {
  const PolicyPrivacyLink =
    'https://cbfrontpublic.s3.amazonaws.com/politica-de-privacidad-y-proteccion-de-datos-currencybird.pdf';
  const { session, isLoading } = useSession();
  const accountStatus = session?.user.accountStatus;
  const { colors } = useTheme();

  useEffect(() => {
    if (accountStatus === 'COMPLETE') {
      router.replace('/(app)/(tabs)');
    }
  }, [accountStatus]);

  if (isLoading || accountStatus === 'COMPLETE') {
    return <ActivityIndicator />;
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: colors.onSecondary }}
      key="welcomeView"
    >
      <Animated.View entering={FadeIn.duration(500)} key="welcomeViewContent">
        <Welcome
          LogInLink={(props) => (
            <Link {...props} asChild href="/(public)/login" />
          )}
          TermsAndConditionsLink={(props) => <>{props.children}</>}
          PolicyPrivacyLink={(props) => (
            <Link asChild href={PolicyPrivacyLink} {...props} />
          )}
        />
      </Animated.View>
    </View>
  );
}
