import { useCallback } from 'react';

import { api } from '../../utils/api';
import { useAuth } from './useAuth';

export function useLogout() {
  const { signOut } = useAuth();
  const utils = api.useUtils();
  const logout = useCallback(() => {
    signOut();
    utils.auth.getSession.setData(undefined, () => null);
  }, [signOut, utils]);
  return { logout };
}
