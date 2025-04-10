import { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { MD3Theme, Button as PaperButton, useTheme } from 'react-native-paper';

import ActivityIndicator from '../../ActivityIndicator';
import { styles } from './Button.styles';
import { ButtonProps } from './Button.types';

function ButtonView(
  {
    children,
    iconSource,
    iconStyle,
    disabledBackgroundColor,
    disabledTextColor,
    theme: themeOverride,
    ...other
  }: ButtonProps,
  ref: React.ForwardedRef<View>,
) {
  const { style, buttonColor, textColor, loading, disabled, mode } = other;
  const globalTheme = useTheme();
  const theme = (themeOverride as MD3Theme) || globalTheme;

  // transform hex color to rgb color
  const hexToRgbDarker = (hex: string) => {
    if (hex === 'transparent') return 'rgba(0, 0, 0, 0)';
    const hexColor = hex.replace('#', '');
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    const alpha = hex === '#ffffff' ? 0.7 : 0.3;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const disabledOnSurfaceColor = useMemo(
    () =>
      disabledTextColor || hexToRgbDarker(textColor || theme.colors.onPrimary),
    [textColor, theme.colors.onPrimary],
  );

  const disabledSurfaceColor = useMemo(
    () =>
      disabledBackgroundColor ||
      hexToRgbDarker(
        mode === 'contained' ? buttonColor || '#ffffff' : theme.colors.outline,
      ),
    [mode, buttonColor, theme.colors.outline],
  );

  const disabledTheme = useMemo(
    () => ({
      ...theme,
      colors: {
        ...theme.colors,
        onSurfaceDisabled: disabledOnSurfaceColor,
        surfaceDisabled: disabledSurfaceColor,
      },
    }),
    [theme, disabledOnSurfaceColor, disabledSurfaceColor],
  );

  const contentStyle = useMemo(() => {
    if (style?.height) {
      return { ...styles.buttonContentStyle, height: style.height };
    }
    return styles.buttonContentStyle;
  }, [style?.height]);

  const buttonStyle = useMemo(() => {
    if (style?.height) {
      return { ...styles.buttonStyle, height: style.height };
    }
    return styles.buttonStyle;
  }, [style?.height]);

  const loadingSize = style?.height ? Number(style.height) / 2 : 24;

  return (
    <View style={style}>
      <PaperButton
        {...other}
        ref={ref}
        loading={false}
        contentStyle={contentStyle}
        style={buttonStyle}
        labelStyle={{ marginVertical: 0, marginHorizontal: 0 }}
        theme={disabledTheme}
        disabled={disabled || loading}
      >
        {loading ? null : children}
      </PaperButton>
      {!loading && !disabled && (
        <View style={[styles.iconStyle, iconStyle]}>{iconSource}</View>
      )}
      {loading && (
        <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <ActivityIndicator
            size={loadingSize}
            backgroundColor="transparent"
            color={disabled ? disabledOnSurfaceColor : textColor}
          />
        </View>
      )}
    </View>
  );
}

export default forwardRef(ButtonView);
