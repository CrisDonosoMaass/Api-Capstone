import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { Tabs, usePathname } from 'expo-router';
import { useTranslations } from 'use-intl';
import { Ionicons } from '@expo/vector-icons';

import {
  BottomTabsModal,
  Colors,
} from '@crisdonosomaass/react-native-ui-library';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function AppLayout() {
  // This layout can be deferred because it's not the root layout.
  return <TabLayout />;
}

function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const path = usePathname();
  const t = useTranslations('layout.TabLayout');

  function hideModal() {
    setModalVisible(false);
  }

  useEffect(() => {
    setModalVisible(false);
  }, [path]);

  const genericTabBarButton = useCallback(
    // @ts-expect-error - `props` type cannot be imported
    (props) => (
      <TouchableRipple
        {...props}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    ),
    [],
  );

  const homeTabBarIcon = useCallback(
    ({ focused, color }: { color: string; focused: boolean; size: number }) => (
      <View
        style={[
          styles.iconContainer,
          {
            borderColor:
              focused && !modalVisible ? Colors.yellow : Colors.white,
          },
        ]}
      >
        <Ionicons
          name="home-outline"
          size={32}
          color={focused && !modalVisible ? Colors.yellow : color}
        />
      </View>
    ),
    [modalVisible],
  );

  const homeTabBarLabel = useCallback(() => {
    return (
      <Text allowFontScaling={false} variant="labelSmall">
        {t('home')}
      </Text>
    );
  }, [t]);

  return (
    <>
      <BottomTabsModal modalVisible={modalVisible} hideModal={hideModal} />
      <Tabs
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarInactiveTintColor: Colors.blue,
          tabBarActiveTintColor: Colors.blue,
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarButton: genericTabBarButton,
            title: 'Inicio',
            tabBarIcon: homeTabBarIcon,
            tabBarLabel: homeTabBarLabel,
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    width: '100%',
    paddingBottom: 15,
  },
  sendIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 62,
    height: 62,
    backgroundColor: Colors.yellow,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: Colors.yellow,
    overflow: 'hidden',
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  moreIcon: {
    borderWidth: 3,
    borderRadius: 100,
  },
  iconContainer: {
    borderTopWidth: 4,
    width: '60%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  displayNone: {
    display: 'none',
  },
});
