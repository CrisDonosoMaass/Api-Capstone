import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, TextInputProps, useTheme } from 'react-native-paper';
import { useField } from 'formik';

import { customFonts } from '../../../../constants/FontConfig';
import { useTextInputBlurRef } from '../../../../hooks/useTextInputBlurRef';
import ErrorMessage from '../ErrorMessage';
import { styles } from './PasswordField.style';

export type TextFieldProps = TextInputProps & {
  localeText?: Record<string, string>;
  label?: string;
};

export default function PasswordField({
  mode = 'flat',
  autoCapitalize = 'none',
  localeText,
  label,
  ...other
}: TextFieldProps) {
  const theme = useTheme();
  const { colors } = theme;

  const [field, meta, helpers] = useField(other.id as string);
  const [showPassword, setShowPassword] = useState(false);
  const { error, touched } = meta;
  const textInputRef = useTextInputBlurRef();

  const textStyle = customFonts.formikFields;

  const handleChange = (value: string) => {
    helpers.setValue(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        {...other}
        ref={textInputRef}
        mode={mode}
        allowFontScaling={false}
        onChangeText={handleChange}
        label={field.value ? label : ''}
        placeholder={label}
        placeholderTextColor={colors.scrim}
        autoCapitalize={autoCapitalize}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        secureTextEntry={!showPassword}
        textColor={colors.onTertiary}
        underlineColor={colors.onTertiary}
        style={[mode === 'flat' && styles.textField, textStyle]}
        right={
          <TextInput.Icon
            testID="password-icon"
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword((prev) => !prev)}
          />
        }
        theme={{
          fonts: {
            bodyLarge: textStyle,
          },
        }}
      />
      <ErrorMessage
        error={error}
        visible={touched && !!error}
        localeText={localeText}
        testID="helper-text"
      />
    </View>
  );
}
