import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GoogleIcon from 'react-native-vector-icons/MaterialIcons';
import type { ViewStyle } from 'react-native';
import { useTranslations } from 'use-intl';

import { Button, Colors } from '@aeperaltarivastests/react-native-ui-library';

import {
  isClientError,
  isTRPCClientError,
  UploadDocumentError,
  WebViewError,
} from '../utils/errors';

interface ErrorBoundaryProps {
  error: Omit<Error, 'name'>;
  retry: () => unknown;
  containerStyle?: ViewStyle;
}

export default function ErrorBoundary({
  error,
  retry,
  containerStyle,
}: ErrorBoundaryProps) {
  const t = useTranslations('error.ErrorBoundary');
  let errorMessage;
  if (error instanceof UploadDocumentError) {
    errorMessage = `${error}`;
  } else if (error instanceof WebViewError) {
    errorMessage = error.code < 0 ? t('NETWORK_ERROR') : t('UNKNOWN_ERROR');
  } else if (isTRPCClientError(error)) {
    if (!error.data) {
      errorMessage = t('NETWORK_ERROR');
    } else if (isClientError(error.data.code)) {
      errorMessage = error.message;
    } else {
      errorMessage = t('INTERNAL_SERVER_ERROR');
    }
  } else {
    errorMessage = t('UNKNOWN_ERROR');
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.titleContainer}>
        <Icon
          name="alert"
          size={36}
          color={Colors.yellow}
          style={styles.alertIcon}
        />
        <Text allowFontScaling={false} variant="titleSmall">
          {t('title')}
        </Text>
      </View>
      <Text allowFontScaling={false} variant="bodyLarge">
        {errorMessage}
      </Text>
      <Button
        mode="contained"
        onPress={retry}
        iconSource={<GoogleIcon name="refresh" size={24} color="#ffffff" />}
        style={styles.retryButton}
      >
        {t('retry')}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  alertIcon: {
    marginRight: 10,
  },
  retryButton: {
    width: '45%',
    height: 45,
    margin: 20,
  },
});
