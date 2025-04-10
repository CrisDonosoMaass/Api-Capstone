import { useCallback, useMemo, useState } from 'react';
import { BackHandler, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useFocusEffect, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTranslations } from 'use-intl';
import { DrawerActions } from '@react-navigation/native';

import {
  DashboardTopBar,
  GoBackDialog,
  PrivateLayout,
} from '@aeperaltarivastests/react-native-ui-library';

import type { TopBarProps } from '@aeperaltarivastests/react-native-ui-library';
import { useLogout, useSession } from '../../../hooks/auth';

export default function TabOneScreen() {
  const [showDialog, setShowDialog] = useState(false);
  const { session } = useSession();
  const navigation = useNavigation();
  const { logout } = useLogout();
  const t = useTranslations('common');
  const { colors } = useTheme();
  const backHandler = () => {
    if (showDialog) {
      setShowDialog(false);
    }
    setShowDialog(true);
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backHandler);
      };
    }, [showDialog]),
  );

  const onSidebarPress = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  const topBarProps: TopBarProps = useMemo(
    () => ({
      user: session?.user.nickname || '',
      onSidebarPress,
    }),
    [session, onSidebarPress],
  );

  const header = useMemo(
    () => <DashboardTopBar {...topBarProps} />,
    [topBarProps],
  );

  const isTablet = useMemo(() => {
    const { width } = Dimensions.get('window');
    const tabletWidthThreshold = 800;
    return width >= tabletWidthThreshold;
  }, []);

  const privateLayoutStyle = useMemo(
    () =>
      isTablet
        ? ({
            paddingLeft: '4%',
            paddingRight: '4%',
            backgroundColor: colors.secondary,
          } as const)
        : ({ backgroundColor: colors.secondary } as const),
    [colors.secondary, isTablet],
  );

  const onGoBackAccept = useCallback(() => {
    setShowDialog(false);
    logout();
  }, [logout]);

  const onGoBackDismiss = useCallback(() => {
    setShowDialog(false);
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <GoBackDialog
        visible={showDialog}
        onDismiss={onGoBackDismiss}
        onAccept={onGoBackAccept}
        message={t('closeMessage')}
      />
      <PrivateLayout
        scrollable
        header={header}
        style={privateLayoutStyle}
        bottomPadding={false}
      >
        <></>
      </PrivateLayout>
    </>
  );
}
