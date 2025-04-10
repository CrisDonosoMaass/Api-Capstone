import 'ts-node/register';

import { ConfigContext, ExpoConfig } from 'expo/config';

const IS_PRODUCTION = process.env.APP_ENVIRONMENT === 'production';

const getUniqueIdentifier = () => {
  if (IS_PRODUCTION) {
    return 'cl.currencybird.cbmobileapp';
  }

  return 'cl.currencybird.cbmobileapp.dev';
};

const getAppName = () => {
  if (IS_PRODUCTION) {
    return 'CurrencyBird';
  }

  return 'CurrencyBird (Dev)';
};

// const getVersionCode = (appVersion: string | undefined) => {
//   if (!appVersion) {
//     throw new Error('No app version provided');
//   }
//   const [major, minor, patch] = appVersion.split('.');
//   const cents = parseInt(patch, 10);
//   const tens = parseInt(minor, 10);
//   const hundreds = parseInt(major, 10);

//   return hundreds * 10000 + tens * 100 + cents;
// };

const getRuntimeVersion = (appVersion: string | undefined) => {
  if (!appVersion) {
    throw new Error('No app version provided');
  }
  const [major, minor, _patch] = appVersion.split('.');

  return `${major}.${minor}.0`;
};

const defineConfig = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'cb-mobile-app',
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
    },
  },
  plugins: config.plugins && [
    ...config.plugins,
    ['./plugins/splash-plugin.ts'],
  ],
  updates: {
    url: `https://u.expo.dev/${process.env.EAS_PROJECT_ID}`,
    fallbackToCacheTimeout: 15000,
  },
  ios: {
    buildNumber: config.version,
    bundleIdentifier: getUniqueIdentifier(),
    supportsTablet: true,
    requireFullScreen: true,
    jsEngine: 'hermes',
  },
  android: {
    versionCode: 11,
    package: getUniqueIdentifier(),
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    softwareKeyboardLayoutMode: 'pan',
  },
  runtimeVersion: getRuntimeVersion(config.version),
});

export default defineConfig;
