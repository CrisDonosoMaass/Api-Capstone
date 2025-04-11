/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'universe/native',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: ['storybook-formik'],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { destructuredArrayIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@crisdonosomaass/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  reportUnusedDisableDirectives: true,
};
