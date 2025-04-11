import { useEffect } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { PaperProvider } from 'react-native-paper';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { isRunningInExpoGo } from 'expo';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
  enMessages as enUIMassages,
  esMessages as esUIMassages,
  fontFamilies,
  PublicTheme,
  TranslationsProvider,
} from '@crisdonosomaass/react-native-ui-library';

import type { Locale } from '@crisdonosomaass/react-native-ui-library';
import { AuthProvider } from '../contexts/AuthContext';
import enAppMessages from '../messages/en';
import esAppMessages from '../messages/es';
import { TRPCProvider } from '../utils/api';
import { storage } from '../utils/storage';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
preventAutoHideAsync();

const LOCALE_KEY = 'locale';

function getLocaleFromStorageSync(fallbackLocale: Locale = 'es') {
  let locale = fallbackLocale;
  if (storage.type === 'sync') {
    locale =
      (storage.getItemSync(LOCALE_KEY) as Locale | null) || fallbackLocale;
  }
  return locale;
}

function isStaleVersion(currentVersion: string, latestVersion: string) {
  const [currentMajor, currentMinor, currentPatch] = currentVersion.split('.');
  const [latestMajor, latestMinor, latestPatch] = latestVersion.split('.');

  if (currentMajor < latestMajor) {
    return true;
  }

  if (currentMajor === latestMajor) {
    if (currentMinor < latestMinor) {
      return true;
    }

    if (currentMinor === latestMinor) {
      return currentPatch < latestPatch;
    }
  }

  return false;
}

function RootLayout() {
  const locale = getLocaleFromStorageSync();

  useEffect(() => {
    if (!isRunningInExpoGo()) {
      hideAsync();
    }
  }, []);

  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          Alert.alert(
            locale === 'es'
              ? 'Hay una actualización disponible'
              : 'There is an available update',
            locale === 'es'
              ? 'Reinicia para aplicar los cambios.'
              : 'Restart to apply the changes.',
            [
              {
                text: locale === 'es' ? 'Reiniciar' : 'Restart',
                onPress: () => Updates.reloadAsync(),
              },
            ],
            {
              cancelable: false,
            },
          );
        }
      } catch (e) {
        console.error(e);
      }
    };

    const checkForNewBuild = async () => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_CB_FRONT_API_URL}/appversion`,
        );

        if (response.status !== 200) {
          return false;
        }

        const data = await response.json();

        const latestVersion: string =
          Platform.OS === 'ios'
            ? data.runtimeVersionIos
            : data.runtimeVersionAndroid;

        const currentVersion = Updates.runtimeVersion || '';

        const isStaleBuild = isStaleVersion(currentVersion, latestVersion);

        if (currentVersion !== '' && isStaleBuild) {
          Alert.alert(
            locale === 'es'
              ? 'Nueva versión disponible'
              : 'New version available',
            locale === 'es'
              ? 'Hay una nueva versión de la aplicación disponible en la tienda. Por favor, actualiza para continuar.'
              : 'There is a new version of the application available in the store. Please update to continue.',
            [
              {
                text: locale === 'es' ? 'Actualizar' : 'Update',
                onPress: () => {
                  const storeUrl =
                    Platform.OS === 'ios'
                      ? data.updateUrliOS
                      : data.updateUrlAndroid;
                  Linking.openURL(storeUrl);
                },
                style: 'default',
              },
            ],
            { cancelable: false },
          );
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.error(e);
      }
    };
    if (!isRunningInExpoGo()) {
      checkForNewBuild().then((isStaleBuild) => {
        if (!isStaleBuild) {
          checkForUpdates();
        }
      });
    }
  }, []);

  if (isRunningInExpoGo()) {
    return <ExpoGoRootLayout />;
  }

  return (
    <KeyboardProvider statusBarTranslucent>
      <RootLayoutNav />
    </KeyboardProvider>
  );
}

function ExpoGoRootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    ...fontFamilies,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootStack() {
  return <Slot screenOptions={{ headerShown: false }} />;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={PublicTheme}>
        <AuthProvider>
          <TranslationsProvider
            messages={{
              es: { ...esUIMassages, ...esAppMessages },
              en: { ...enUIMassages, ...enAppMessages },
            }}
            initialLocale={getLocaleFromStorageSync()}
            onChangeLocal={(locale) =>
              storage.type === 'sync'
                ? storage.setItemSync(LOCALE_KEY, locale)
                : undefined
            }
          >
            <TRPCProvider>
              <StatusBar style="light" translucent />
              <RootSiblingParent>
                <RootStack />
              </RootSiblingParent>
            </TRPCProvider>
          </TranslationsProvider>
        </AuthProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default RootLayout;
