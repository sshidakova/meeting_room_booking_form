module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-exports': 0,
    'no-unused-vars': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'max-len': 0,
    'react/no-array-index-key': 0,
    'no-plusplus': 0,
    'react/destructuring-assignment': 0,
    'no-shadow': 0,
  },
};
