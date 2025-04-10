import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper';

import Colors from './constants/Colors';
import fontConfig from './constants/FontConfig';

export const PublicTheme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.yellow,
    onPrimary: '#ffffff',
    secondary: '#ffffff',
    onSecondary: Colors.blue,
    tertiary: 'transparent',
    onTertiary: '#ffffff',
    outline: '#ffffff',
    onSurface: Colors.yellow,
    onSurfaceVariant: '#ffffff',
    surfaceVariant: Colors.blue,
    onError: Colors.publicError,
    scrim: '#ffffff',
    elevation: {
      ...DefaultTheme.colors.elevation,
      level3: Colors.white,
    },
    onSurfaceDisabled: Colors.gray,
  },
  roundness: 10,
} satisfies MD3Theme;

export const PrivateTheme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.yellow,
    onPrimary: '#ffffff',
    secondary: Colors.blue,
    onSecondary: '#ffffff',
    tertiary: Colors.lightGray,
    onTertiary: Colors.blue,
    outline: Colors.blue,
    onSurface: Colors.blue,
    onSurfaceVariant: Colors.blue,
    surfaceVariant: Colors.lightGray,
    onError: Colors.yellow,
    scrim: Colors.lighterBluePlaceHolder,
    elevation: {
      ...DefaultTheme.colors.elevation,
      level3: Colors.white,
    },
  },
  roundness: 10,
} satisfies MD3Theme;

export const PrivateCompanyTheme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.lightGray,
    onPrimary: 'red',
    secondary: Colors.yellow,
    onSecondary: '#ffffff',
    tertiary: Colors.lightGray,
    onTertiary: Colors.lightGray,
    outline: Colors.lightGray,
    onSurface: Colors.lightGray,
    onSurfaceVariant: Colors.lightGray,
    surfaceVariant: Colors.lightGray,
    elevation: {
      ...DefaultTheme.colors.elevation,
      level3: Colors.white,
    },
  },
  roundness: 10,
} satisfies MD3Theme;
