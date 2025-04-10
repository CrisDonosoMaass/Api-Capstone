import { useTranslations } from 'use-intl';
import { useMutation } from '@tanstack/react-query';

import Toast from '../../utils/toast';
import { useAuth } from './useAuth';

export function useRefreshToken() {
  const { authToken, signIn, signOut } = useAuth();
  const t = useTranslations('auth.login');
  return useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_CB_FRONT_API_URL}/auth/refreshToken/authorize`,
        {
          method: 'POST',
          body: JSON.stringify({ token: authToken }),
        },
      );
      if (res.ok) {
        try {
          const { token } = await res.json();
          signIn(token);
        } catch (error) {
          throw new Error(t('INTERNAL_SERVER_ERROR'));
        }
      } else if (res.status === 401) {
        signOut();
        throw new Error(t('UNAUTHORIZED'));
      } else {
        signOut();
        Toast.error(t('SERVER_ERROR_TRY_AGAIN'));
        throw new Error(t('INTERNAL_SERVER_ERROR'));
      }
    },
  });
}
