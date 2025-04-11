import { useEffect, useRef, useState } from 'react';
import { AppStateStatus, Platform } from 'react-native';
import { useLocale, useTranslations } from 'use-intl';
import { focusManager, QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { observable } from '@trpc/server/observable';

import type { AppRouter } from '@crisdonosomaass/cb-front-api';
import { useAuth } from '../hooks/auth';
import { useAppState } from '../hooks/query';
import { isTRPCClientError } from './errors';
import customFetch from './fetch';
import { clientPersister } from './storage';
import Toast from './toast';

export const api = createTRPCReact<AppRouter>();

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export function TRPCProvider(props: React.PropsWithChildren) {
  const { authToken, signOut } = useAuth();
  const locale = useLocale();
  const t = useTranslations('api.TRPCProvider');
  const authTokenRef = useRef<string | null>(authToken || null);
  const localeRef = useRef<string>(locale);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 180000, // 3 min
            retry(failureCount, error) {
              if (isTRPCClientError(error)) {
                if (error.data?.code === 'UNAUTHORIZED') {
                  return false;
                }
              }
              return failureCount < 2; // max 2 failures
            },
          },
        },
      }),
  );
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        () => {
          return ({ next, op }) => {
            return observable((observer) => {
              const unsubscribe = next(op).subscribe({
                next(value) {
                  observer.next(value);
                },
                error(err) {
                  if (!err.data) {
                    Toast.error(t('NETWORK_ERROR'));
                    return observer.error(err);
                  }
                  const { code } = err.data;
                  if (code === 'UNAUTHORIZED') {
                    signOut();
                    if (op.type === 'mutation') {
                      Toast.error(t(code));
                    }
                    return observer.error(err);
                  }
                  observer.error(err);
                },
                complete() {
                  observer.complete();
                },
              });
              return unsubscribe;
            });
          };
        },
        httpBatchLink({
          url: `${process.env.EXPO_PUBLIC_CB_FRONT_API_URL}/trpc`,
          fetch: customFetch,
          headers() {
            return {
              authorization: authTokenRef.current
                ? `Bearer ${authTokenRef.current}`
                : undefined,
              'x-trpc-locale': localeRef.current,
            };
          },
        }),
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
          colorMode: 'ansi',
        }),
      ],
    }),
  );
  useAppState(onAppStateChange);
  useEffect(() => {
    authTokenRef.current = authToken || null;
  }, [authToken]);
  useEffect(() => {
    localeRef.current = locale;
  }, [locale]);

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: clientPersister }}
      >
        {props.children}
      </PersistQueryClientProvider>
    </api.Provider>
  );
}
