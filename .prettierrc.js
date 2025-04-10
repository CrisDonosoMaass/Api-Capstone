/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  singleQuote: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '<TYPES>',
    '^@testing-library/(.*)$',
    '^(next/(.*)$)|^(next$)',
    '^(expo(.*)$)|^(expo$)',
    '<THIRD_PARTY_MODULES>',
    '^@(?!aeperaltarivastests)(.*)$',
    '',
    '^@aeperaltarivastests/(.*)$',
    '',
    '<TYPES>^[.|..|@]',
    '^[../]',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '4.4.0',
};
