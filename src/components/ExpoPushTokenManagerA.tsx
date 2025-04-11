import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import * as Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      lightColor: '#f8b133',
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      sound: 'default',
      enableLights: true,
      vibrationPattern: [0, 250, 250, 250],
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.default.expoConfig?.extra?.eas.projectId,
    });
  }

  return token?.data;
}

export default function ExpoPushTokenManager() {
  const [, setExpoPushToken] = useState('');
  const notificationListener = useRef<Notifications.Subscription | undefined>();
  const responseListener = useRef<Notifications.Subscription | undefined>();

  useEffect(() => {
    registerForPushNotificationsAsync().then(
      (token) => token && setExpoPushToken(token),
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log('addNotificationReceivedListener', notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('addNotificationResponseReceivedListener', response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current,
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return null;
}
