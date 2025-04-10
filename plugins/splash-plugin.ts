import { AndroidConfig, withAndroidStyles } from '@expo/config-plugins';
import { ExpoConfig } from '@expo/config-types';

const withSplashWindowIsTranslucent = (config: ExpoConfig) => {
  return withAndroidStyles(config, async (config) => {
    const splashScreen = config.modResults.resources.style?.find(
      (style) => style.$.name === 'Theme.App.SplashScreen',
    );
    if (splashScreen) {
      splashScreen.item = splashScreen.item.filter(
        (item) => item.$.name !== 'android:windowIsTranslucent',
      );
      splashScreen.item.push(
        AndroidConfig.Resources.buildResourceItem({
          name: 'android:windowIsTranslucent',
          value: 'true',
        }),
      );
    }
    return config;
  });
};

export default withSplashWindowIsTranslucent;
