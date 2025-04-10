import { useMemo } from 'react';
import { Platform, View } from 'react-native';
import { Checkbox, Text, useTheme } from 'react-native-paper';
import { useFormikContext } from 'formik';
import { useTranslations } from 'use-intl';

import PublicContentLayout from '../../containers/ContentLayout';
import FormLayout from '../../containers/FormLayout';
import PublicLayout from '../../containers/PublicLayout';
import Button from '../Common/Button';
import PasswordField from '../Common/FormikFields/PasswordField';
import TextField from '../Common/FormikFields/TextField';
import Loading from '../Common/Loading';
import PublicHeader from '../Common/PublicHeader';
import { styles } from './Login.styles';
import { LoginProps } from './Login.types';

interface FormValues {
  email: string;
  password: string;
}

export default function LoginView({
  onGoogleSignIn,
  onGoBackPress,
  rememberMe,
  onRememberMe,
}: LoginProps) {
  const { colors } = useTheme();
  const theme = useTheme();
  const { handleSubmit, isSubmitting, values } = useFormikContext<FormValues>();
  const t = useTranslations('Login');

  const checkBoxTextTheme = useMemo(
    () => ({
      ...theme,
      fonts: {
        ...theme.fonts,
        bodySmall: {
          ...theme.fonts.bodySmall,
          lineHeight: 22,
        },
      },
    }),
    [theme],
  );

  const handleRememberMe = async () => {
    onRememberMe(values);
  };

  return (
    <PublicLayout>
      <PublicHeader
        title={t('title')}
        style={styles.header}
        onBackPress={onGoBackPress}
      />
      <PublicContentLayout>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Text
            style={{ color: colors.secondary }}
            variant="bodySmall"
            theme={checkBoxTextTheme}
            allowFontScaling={false}
          >
            {t('notRegisteredYet')}
          </Text>
        </View>

        <FormLayout style={styles.formContainer}>
          <TextField
            id="email"
            label={t('email')}
            testID="email-input"
            inputMode="email"
            allowFontScaling={false}
          />
          <PasswordField
            id="password"
            testID="password-input"
            label={t('password')}
          />
          <View style={styles.checkBoxContainer}>
            <View
              style={
                Platform.OS === 'ios'
                  ? [
                      styles.checkbox,
                      {
                        borderColor: colors.secondary,
                        transform: [{ scale: 0.67 }],
                      },
                    ]
                  : null
              }
            >
              <Checkbox
                status={rememberMe ? 'checked' : 'unchecked'}
                uncheckedColor="#fff"
                color={colors.secondary}
                onPress={handleRememberMe}
                testID="checkbox"
              />
            </View>
            <Text
              variant="bodySmall"
              style={{ color: colors.secondary, marginLeft: 3 }}
            >
              {t('rememberMe')}
            </Text>
          </View>
        </FormLayout>
      </PublicContentLayout>
      <Button
        mode="contained"
        onPress={() => !isSubmitting && handleSubmit()}
        buttonColor={colors.primary}
        textColor={colors.onPrimary}
        testID="submit-button"
        style={styles.button}
      >
        {t('login')}
      </Button>
      {process.env.EXPO_PUBLIC_ENABLE_GOOGLE_SIGNIN && (
        <Button
          mode="contained"
          onPress={onGoogleSignIn}
          buttonColor={colors.primary}
          textColor={colors.onPrimary}
          loading={isSubmitting}
          testID="submit-button"
          style={styles.button}
        >
          {t('signInWithGoogle')}
        </Button>
      )}
      <Loading visible={isSubmitting} />
    </PublicLayout>
  );
}
