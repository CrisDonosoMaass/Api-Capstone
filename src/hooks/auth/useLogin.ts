import { useTranslations } from 'use-intl';
import { useMutation } from '@tanstack/react-query';

import { LoginError } from '../../utils/errors';
import { useAuth } from './useAuth';

interface LoginInput {
  email: string;
  password: string;
}

export function useLogin() {
  const { signIn } = useAuth();
  const t = useTranslations('auth.login');
  return useMutation<void, Error, LoginInput>({
    mutationFn: async (values: LoginInput) => {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_CB_FRONT_API_URL}/auth/credentials/authorize`,
        {
          method: 'POST',
          body: JSON.stringify({ ...values, sessionType: 'user' }),
        },
      );
      if (res.ok) {
        try {
          const { token } = await res.json();
          signIn(token);
        } catch (error) {
          throw new LoginError(t('INTERNAL_SERVER_ERROR'));
        }
      } else if (res.status === 401) {
        throw new LoginError(t('UNAUTHORIZED'));
      } else {
        throw new LoginError(t('INTERNAL_SERVER_ERROR'));
      }
    },
  });
}
