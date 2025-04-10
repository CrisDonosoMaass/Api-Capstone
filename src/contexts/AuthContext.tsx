import React, { createContext, useCallback } from 'react';
import { useMMKVString } from 'react-native-mmkv';

import { useAsyncStorageState } from '../hooks/storage';
import { MMKVStorage, storage } from '../utils/storage';

export const AuthContext = createContext<{
  signIn: (token: string) => void;
  signOut: () => void;
  authToken?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  authToken: null,
  isLoading: false,
});

const AUTH_TOKEN_KEY = 'authToken';

export function AuthProviderWithMMKV(
  props: React.PropsWithChildren<{ storage: MMKVStorage }>,
) {
  const [authToken, setAuthToken] = useMMKVString(
    AUTH_TOKEN_KEY,
    props.storage.mmkvInstance,
  );

  const signIn = useCallback((token: string) => {
    setAuthToken(token);
  }, []);

  const signOut = useCallback(() => {
    props.storage.removeItemSync(AUTH_TOKEN_KEY);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        authToken,
        isLoading: false,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function AuthProviderWithAsyncStorage(props: React.PropsWithChildren) {
  const [[isLoading, authToken], setAuthToken] =
    useAsyncStorageState(AUTH_TOKEN_KEY);

  const signIn = useCallback((token: string) => {
    setAuthToken(token);
  }, []);

  const signOut = useCallback(() => {
    setAuthToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        authToken,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function AuthProvider(props: React.PropsWithChildren) {
  if (storage instanceof MMKVStorage) {
    return (
      <AuthProviderWithMMKV storage={storage}>
        {props.children}
      </AuthProviderWithMMKV>
    );
  }
  return (
    <AuthProviderWithAsyncStorage>
      {props.children}
    </AuthProviderWithAsyncStorage>
  );
}
