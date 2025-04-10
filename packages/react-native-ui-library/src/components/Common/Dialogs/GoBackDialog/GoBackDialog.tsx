import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dialog, Portal, Text, useTheme } from 'react-native-paper';
import { useTranslations } from 'use-intl';

import Colors from '../../../../constants/Colors';
import { customFonts } from '../../../../constants/FontConfig';
import Button from '../../../Common/Button/Button';

export type GoBackDialogProps = {
  visible: boolean;
  onDismiss: () => void;
  onAccept: () => void;
  message?: string;
};

export default function GoBackDialog({
  visible,
  onDismiss,
  onAccept,
  message,
}: GoBackDialogProps) {
  const theme = useTheme();
  const t = useTranslations('Common.GoBackDialog');
  const { colors } = useTheme();
  const dialogTheme = useMemo(() => {
    return {
      ...theme,

      roundness: 3,
    };
  }, [theme]);

  const buttonTheme = useMemo(
    () => ({
      ...theme,
      fonts: {
        ...theme.fonts,
        labelLarge: customFonts.smallButton,
      },
      colors: {
        ...theme.colors,
        outline: colors.primary,
      },
    }),
    [theme],
  );

  const buttonCancelTheme = useMemo(
    () => ({
      ...theme,
      fonts: {
        ...theme.fonts,
        labelLarge: customFonts.boldBodySmall,
      },
      colors: {
        outline: '#cacbcb',
      },
    }),
    [theme],
  );

  return (
    <Portal theme={dialogTheme}>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>
          <Text
            variant="titleSmall"
            style={{ color: Colors.blue, textAlign: 'center' }}
          >
            {t('title')}
          </Text>
        </Dialog.Title>
        <Dialog.Content>
          <Text
            variant="bodyMedium"
            style={{ color: Colors.blue, textAlign: 'center' }}
          >
            {message || t('defaultMessage')}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              style={styles.button}
              buttonColor={colors.tertiary}
              textColor="#004F71"
              theme={buttonCancelTheme}
              onPress={onDismiss}
            >
              {t('cancel')}
            </Button>
            <Button
              onPress={onAccept}
              mode="contained"
              style={styles.button}
              buttonColor="#004F71"
              textColor={Colors.white}
              theme={buttonTheme}
            >
              {t('accept')}
            </Button>
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '45%',
    height: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 45,
  },
});
