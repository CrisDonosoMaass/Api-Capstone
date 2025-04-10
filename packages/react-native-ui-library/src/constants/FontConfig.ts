import { Platform } from 'react-native';

const fontsDir = '../../../../assets/fonts';

export const fontFamilies = {
  'Raleway-Black': require(`${fontsDir}/Raleway/Raleway-Black.ttf`),
  'Raleway-BlackItalic': require(`${fontsDir}/Raleway/Raleway-BlackItalic.ttf`),
  'Raleway-Bold': require(`${fontsDir}/Raleway/Raleway-Bold.ttf`),
  'Raleway-BoldItalic': require(`${fontsDir}/Raleway/Raleway-BoldItalic.ttf`),
  'Raleway-ExtraBold': require(`${fontsDir}/Raleway/Raleway-ExtraBold.ttf`),
  'Raleway-ExtraBoldItalic': require(
    `${fontsDir}/Raleway/Raleway-ExtraBoldItalic.ttf`,
  ),
  'Raleway-ExtraLight': require(`${fontsDir}/Raleway/Raleway-ExtraLight.ttf`),
  'Raleway-ExtraLightItalic': require(
    `${fontsDir}/Raleway/Raleway-ExtraLightItalic.ttf`,
  ),
  'Raleway-Italic': require(`${fontsDir}/Raleway/Raleway-Italic.ttf`),
  'Raleway-Light': require(`${fontsDir}/Raleway/Raleway-Light.ttf`),
  'Raleway-LightItalic': require(`${fontsDir}/Raleway/Raleway-LightItalic.ttf`),
  'Raleway-Medium': require(`${fontsDir}/Raleway/Raleway-Medium.ttf`),
  'Raleway-MediumItalic': require(
    `${fontsDir}/Raleway/Raleway-MediumItalic.ttf`,
  ),
  'Raleway-Regular': require(`${fontsDir}/Raleway/Raleway-Regular.ttf`),
  'Raleway-SemiBold': require(`${fontsDir}/Raleway/Raleway-SemiBold.ttf`),
  'Raleway-SemiBoldItalic': require(
    `${fontsDir}/Raleway/Raleway-SemiBoldItalic.ttf`,
  ),
  'Raleway-Thin': require(`${fontsDir}/Raleway/Raleway-Thin.ttf`),
  'Raleway-ThinItalic': require(`${fontsDir}/Raleway/Raleway-ThinItalic.ttf`),
  'RedHatDisplay-Black': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-Black.ttf`,
  ),
  'RedHatDisplay-BlackItalic': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-BlackItalic.ttf`,
  ),
  'RedHatDisplay-Bold': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-Bold.ttf`,
  ),
  'RedHatDisplay-BoldItalic': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-BoldItalic.ttf`,
  ),
  'RedHatDisplay-ExtraBold': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-ExtraBold.ttf`,
  ),
  'RedHatDisplay-ExtraBoldItalic': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-ExtraBoldItalic.ttf`,
  ),
  'RedHatDisplay-Italic': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-Italic.ttf`,
  ),
  'RedHatDisplay-Light': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-Light.ttf`,
  ),
  'RedHatDisplay-LightItalic': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-LightItalic.ttf`,
  ),
  'RedHatDisplay-Medium': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-Medium.ttf`,
  ),
  'RedHatDisplay-MediumItalic': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-MediumItalic.ttf`,
  ),
  'RedHatDisplay-Regular': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-Regular.ttf`,
  ),
  'RedHatDisplay-SemiBold': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-SemiBold.ttf`,
  ),
  'RedHatDisplay-SemiBoldItalic': require(
    `${fontsDir}/RedHatDisplay/RedHatDisplay-SemiBoldItalic.ttf`,
  ),
};

const weights = [
  'Black',
  'Bold',
  'ExtraBold',
  'Light',
  'Medium',
  'Regular',
  'SemiBold',
] as const;

const weightMap = {
  Black: '900',
  Bold: '700',
  ExtraBold: '800',
  Light: '300',
  Medium: '500',
  Regular: '400',
  SemiBold: '600',
} as const;

const fontFamily = 'RedHatDisplay';

export const getFamily = (
  weight: (typeof weights)[number],
  italic: boolean,
) => {
  const family = `${fontFamily}-${weight === 'Regular' ? (italic ? '' : 'Regular') : weight}`;
  return italic ? `${family}Italic` : family;
};

export const getFontWeight = (weight: (typeof weights)[number]) => {
  if (Platform.OS === 'android') return undefined;
  return weightMap[weight];
};

export default {
  titleLarge: {
    // Large Title
    fontFamily: getFamily('ExtraBold', false),
    fontSize: 34,
    letterSpacing: 0.37,
    lineHeight: 41,
    fontWeight: getFontWeight('ExtraBold'),
  },
  titleMedium: {
    // Title 1
    fontFamily: getFamily('ExtraBold', false),
    fontSize: 28,
    letterSpacing: 0.36,
    lineHeight: 34,
    fontWeight: getFontWeight('ExtraBold'),
  },
  titleSmall: {
    // Title 2
    fontFamily: getFamily('ExtraBold', false),
    fontSize: 22,
    letterSpacing: 0.35,
    lineHeight: 46,
    fontWeight: getFontWeight('ExtraBold'),
  },
  headlineLarge: {
    // Title 3
    fontFamily: getFamily('ExtraBold', false),
    fontSize: 20,
    letterSpacing: 0.38,
    lineHeight: 24,
    fontWeight: getFontWeight('ExtraBold'),
  },
  headlineMedium: {
    // Headline
    fontFamily: getFamily('Bold', false),
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: getFontWeight('Bold'),
  },
  headlineSmall: {
    // Subheadline
    fontFamily: getFamily('Bold', false),
    fontSize: 15,
    letterSpacing: -0.24,
    lineHeight: 20,
    fontWeight: getFontWeight('Bold'),
  },
  bodyLarge: {
    // Body
    fontFamily: getFamily('Regular', false),
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  bodyMedium: {
    // Callout
    fontFamily: getFamily('Regular', false),
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
  },
  bodySmall: {
    // Caption 1
    fontFamily: getFamily('Regular', false),
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 16,
  },
  displaySmall: {
    fontFamily: getFamily('Regular', false),
    fontSize: 36,
    letterSpacing: 0,
    lineHeight: 44,
  },
  displayMedium: {
    fontFamily: getFamily('Regular', false),
    fontSize: 45,
    letterSpacing: 0,
    lineHeight: 52,
  },
  displayLarge: {
    fontFamily: getFamily('Regular', false),
    fontSize: 57,
    letterSpacing: 0,
    lineHeight: 64,
  },
  labelSmall: {
    fontFamily: getFamily('Bold', false),
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontWeight: getFontWeight('Bold'),
  },
  labelMedium: {
    fontFamily: getFamily('Medium', false),
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontWeight: getFontWeight('Medium'),
  },
  labelLarge: {
    fontFamily: getFamily('SemiBold', false),
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: getFontWeight('SemiBold'),
  },
} as const;

export const customFonts = {
  formikFields: {
    fontFamily: getFamily('Medium', false),
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0,
    fontWeight: getFontWeight('Medium'),
  },
  smallButton: {
    fontFamily: getFamily('SemiBold', false),
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0,
    fontWeight: getFontWeight('SemiBold'),
  },
  boldBodySmall: {
    fontFamily: getFamily('Bold', false),
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    fontWeight: getFontWeight('Bold'),
  },
  semiBoldBodySuperSmall: {
    fontFamily: getFamily('SemiBold', false),
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0,
    fontWeight: getFontWeight('SemiBold'),
  },
  quoterHelper: {
    fontFamily: getFamily('Regular', false),
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0,
  },
  quoterHelperBold: {
    fontFamily: getFamily('Bold', false),
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0,
    fontWeight: getFontWeight('Bold'),
  },
  formStepHeader: {
    fontFamily: getFamily('Bold', false),
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
    fontWeight: getFontWeight('Bold'),
  },
  selectLabelBold: {
    fontFamily: getFamily('Bold', false),
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    fontWeight: getFontWeight('Bold'),
  },
  selectLabel: {
    fontFamily: getFamily('Regular', false),
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
  },
} as const;
