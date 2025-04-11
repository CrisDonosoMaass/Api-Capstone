import { useCallback, useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import * as Linking from 'expo-linking';
import { router, useFocusEffect } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

import { LoginComponent } from '@crisdonosomaass/react-native-ui-library';

import type { LoginValues } from '@crisdonosomaass/react-native-ui-library';
import { useAuth, useLogin } from '../../hooks/auth';
import { storage } from '../../utils/storage';
import Toast from '../../utils/toast';

const EMAIL_KEY = 'email';
const PASSWORD_KEY = 'password';

export default function LoginScreen() {
  const { mutateAsync: login } = useLogin();
  const { signIn } = useAuth();
  const [rememberMe, setRememberMe] = useState(() => {
    if (storage.type === 'sync') {
      return (
        !!storage.getItemSync(EMAIL_KEY) && !!storage.getItemSync(PASSWORD_KEY)
      );
    }
    return false;
  });
  const [initialValues, setInitialValues] = useState(() => {
    if (storage.type === 'sync') {
      return {
        email: storage.getItemSync(EMAIL_KEY) || '',
        password: storage.getItemSync(PASSWORD_KEY) || '',
      };
    }
    return {
      email: '',
      password: '',
    };
  });
  const url = Linking.useURL();

  useEffect(() => {
    if (storage.type === 'async') {
      (async () => {
        try {
          const email = await storage.getItemAsync(EMAIL_KEY);
          const password = await storage.getItemAsync(PASSWORD_KEY);
          if (email && password) {
            setInitialValues({
              email,
              password,
            });
            setRememberMe(true);
          }
        } catch (error) {
          console.error('Error loading data from AsyncStorage:', error);
        }
      })();
    }
  }, []);

  const handleRememberMe = async (values: LoginValues) => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      if (storage.type === 'sync') {
        storage.setItemSync(EMAIL_KEY, values.email);
        storage.setItemSync(PASSWORD_KEY, values.password);
      } else {
        storage.setItemAsync(EMAIL_KEY, values.email);
        storage.setItemAsync(PASSWORD_KEY, values.password);
      }
    } else {
      if (storage.type === 'sync') {
        storage.removeItemSync(EMAIL_KEY);
        storage.removeItemSync(PASSWORD_KEY);
      } else {
        storage.removeItemAsync(EMAIL_KEY);
        storage.removeItemAsync(PASSWORD_KEY);
      }
    }
  };

  useEffect(() => {
    if (url) {
      const { queryParams } = Linking.parse(url);
      if (queryParams?.token) {
        const { token } = queryParams;
        signIn(token as string);
        router.setParams({ token: '' });
      }
    }
  }, [url]);

  const goBack = () => {
    router.replace('/');
  };

  async function handleLogin(values: LoginValues) {
    try {
      Keyboard.dismiss();
      await login(values);
      await new Promise((r) => setTimeout(r, 10000)); // wait for the redirect
    } catch (error) {
      if (error instanceof Error) {
        Toast.error(error.message);
      }
    }
  }

  async function handleGoogleSignIn() {
    if (Platform.OS === 'web') {
      Linking.openURL(
        `${process.env.EXPO_PUBLIC_CB_FRONT_API_URL}/auth/googleWeb/authorize`,
      );
    } else {
      const authProviderName =
        process.env.NODE_ENV === 'production'
          ? 'googleDevice'
          : 'googleDeviceLocal';

      WebBrowser.openBrowserAsync(
        `${process.env.EXPO_PUBLIC_CB_FRONT_API_URL}/auth/${authProviderName}/authorize`,
      );
    }
  }

  return (
    <LoginComponent
      onLogin={handleLogin}
      onGoogleSignIn={handleGoogleSignIn}
      onGoBackPress={goBack}
      initialValues={initialValues}
      rememberMe={rememberMe}
      onRememberMe={handleRememberMe}
    />
  );
}
