import { useEffect } from 'react';
import { useTheme } from 'react-native-paper';

import { ActivityIndicator } from '@crisdonosomaass/react-native-ui-library';

import { useLogout } from '../../hooks/auth';

export default function Mock() {
  const theme = useTheme();
  const { colors } = theme;
  const { logout } = useLogout();
  useEffect(() => {
    logout();
  }, []);
  return <ActivityIndicator backgroundColor={colors.secondary} />;
}
