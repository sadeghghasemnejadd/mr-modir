module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    },
    {
      files: ['prettier.config.cjs'],
      processor: 'disable-eslint',
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    semi: 0,
    '@typescript-eslint/semi': 'off',
    'no-unexpected-multiline': 'error',
    'trailing-comma': 0,
    '@typescript-eslint/comma-dangle': 0,
    'linebreak-style': 0,
    multiline: 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-explicit-any': 0,
    'react/require-default-props': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'object-curly-newline': 0,
  },
};
