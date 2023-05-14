module.exports = {
  root: true,
  extends: [
    '@storybook/eslint-config-storybook',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    createDefaultProgram: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',
        'jest/no-deprecated-functions': 'off',
      },
    },
  ],
  settings: {
    jest: {
      version: 'latest',
    },
  },
};
