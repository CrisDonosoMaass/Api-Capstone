/* eslint-env node */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getSentryExpoConfig } = require('@sentry/react-native/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const defConfig = getSentryExpoConfig(__dirname);
const { resolver, transformer } = defConfig;

const config = {
  // [Web-only]: Enables CSS support in Metro.
  ...defConfig,
  isCSSEnabled: true,
  transformer: {
    ...transformer,
    getTransformOptions: async () => ({
      transform: {
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  },
};

config.watcher.additionalExts.push('mjs', 'cjs');

config.resolver.resolverMainFields.unshift('sbmodern');

module.exports = config;
