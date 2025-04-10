import { HelperText, useTheme } from 'react-native-paper';
import type { HelperTextProps } from 'react-native-paper';
import { useTranslations } from 'use-intl';

const errorValidationKeys = [
  'requiredField',
  'invalidEmail',
  'fieldTooShort',
  'tooFewItems',
  'invalidDate',
  'invalidAddress',
  'fieldTooBig',
  'fieldToHaveLength',
] as const;

type ErrorMessageProps = Omit<HelperTextProps, 'children' | 'type'> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: undefined | string | { key: string; values: Record<string, any> };
  localeText?: Record<string, string>;
};

export default function ErrorMessage({
  error,
  localeText,
  ...other
}: ErrorMessageProps) {
  const { colors } = useTheme();
  const t = useTranslations('ErrorMessage');
  let message = '';
  if (error) {
    if (typeof error === 'object') {
      if (localeText?.[error.key]) {
        message = localeText[error.key];
      } else {
        const errorKey = errorValidationKeys.find((key) => key === error.key);
        if (errorKey) {
          message = t(errorKey, error.values);
        } else {
          message = error.key;
        }
      }
    } else if (localeText?.[error]) {
      message = localeText[error];
    } else {
      const errorKey = errorValidationKeys.find((key) => key === error);
      if (errorKey) {
        message = t(errorKey);
      } else {
        message = error;
      }
    }
  }

  return (
    <HelperText {...other} type="error" style={{ color: colors.onError }}>
      {message}
    </HelperText>
  );
}
