import { View } from 'react-native';
import { TextInput, TextInputProps, useTheme } from 'react-native-paper';
import { useField } from 'formik';

import { customFonts } from '../../../../constants/FontConfig';
import { useTextInputBlurRef } from '../../../../hooks/useTextInputBlurRef';
import ErrorMessage from '../ErrorMessage';
import { styles } from './TextField.style';

export type TextFieldProps = TextInputProps & {
  transform?: (value: string) => string;
  format?: (value: string) => string;
  localeText?: Record<string, string>;
  prefixComponent?: React.ReactNode;
  infoComponent?: React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (value: string) => void;
  label?: string;
};

export default function TextField({
  mode = 'flat',
  autoCapitalize = 'none',
  transform,
  format,
  prefixComponent,
  onFocus,
  onBlur,
  localeText,
  infoComponent,
  label,
  ...other
}: TextFieldProps) {
  const theme = useTheme();
  const { colors } = theme;
  const [field, meta, helpers] = useField(other.id as string);
  const { error, touched } = meta;
  const { disabled } = other;
  const textInputRef = useTextInputBlurRef();

  const textStyle = customFonts.formikFields;

  const handleChange = (value: string) => {
    helpers.setValue(transform ? transform(value) : value);
  };

  const inputTextColor = disabled
    ? colors.onSurfaceDisabled
    : colors.onTertiary;
  const borderColor = disabled ? colors.onSurfaceDisabled : colors.onTertiary;

  return (
    <View style={styles.container}>
      {prefixComponent && (
        <View style={styles.prefixStyle}>{prefixComponent}</View>
      )}
      <View style={styles.secondaryContainer}>
        <TextInput
          {...other}
          ref={textInputRef}
          autoCapitalize={autoCapitalize}
          mode={mode}
          allowFontScaling={false}
          label={field.value ? label : ''}
          placeholder={label}
          placeholderTextColor={colors.scrim}
          onChangeText={handleChange}
          onBlur={onBlur}
          value={format ? format(field.value) : field.value}
          style={[textStyle, mode === 'flat' && styles.textField]}
          textColor={inputTextColor}
          underlineColor={borderColor}
          onFocus={onFocus}
          autoCorrect={false}
          theme={{
            fonts: {
              bodyLarge: textStyle,
            },
          }}
        />
        {infoComponent ? (
          <>{infoComponent}</>
        ) : (
          <ErrorMessage
            error={error}
            visible={touched && !!error}
            localeText={localeText}
            testID="helper-text"
          />
        )}
      </View>
    </View>
  );
}
