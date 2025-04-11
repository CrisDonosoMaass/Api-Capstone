import { useCallback, useEffect, useMemo, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'react-native-paper';
import GoogleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router, useFocusEffect, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useTranslations } from 'use-intl';

import {
  ActivityIndicator,
  PrivateTheme,
} from '@crisdonosomaass/react-native-ui-library';

//import ExpoPushTokenManager from '../../components/ExpoPushTokenManager';
import { useSession } from '../../hooks/auth';

export default function DrawerLayout() {
  const { session, isLoading } = useSession();
  const pathname = usePathname();
  const [intentPathname, setIntentPathname] = useState('/');
  const t = useTranslations('layout.DrawerLayout');

  useEffect(() => {
    setIntentPathname(pathname);
  }, []);

  useEffect(() => {
    if (!isLoading && !session) {
      router.replace({
        pathname: '/login',
        params: { callbackUrl: intentPathname },
      });
    }
  }, [session, isLoading, intentPathname]);

  const drawerScreenOptions = useMemo(
    () =>
      ({
        drawerPosition: 'right',
        // drawerType dejar default
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerInactiveTintColor: PrivateTheme.colors.secondary,
        drawerActiveTintColor: PrivateTheme.colors.primary,
        drawerLabelStyle: PrivateTheme.fonts.headlineSmall,
      }) as const,
    [],
  );

  const logoutDrawerIcon = useCallback(
    // @ts-expect-error - `props` type cannot be imported
    ({ color }) => <GoogleIcon name="logout" size={24} color={color} />,
    [],
  );

  const tabsDrawerItemStyle = useMemo(
    () =>
      ({
        display: 'none',
      }) as const,
    [],
  );

  if (isLoading || !session) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={PrivateTheme}>
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={drawerScreenOptions}>
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerItemStyle: tabsDrawerItemStyle,
            }}
          />
          <Drawer.Screen
            name="logout"
            options={{
              title: t('logout'),
              drawerIcon: logoutDrawerIcon,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
      {/* <ExpoPushTokenManager /> */}
    </ThemeProvider>
  );
}
