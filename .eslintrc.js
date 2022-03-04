/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    amd: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  }
};
