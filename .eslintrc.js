module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: [
    'react',
    'react-hooks',
    'jest',
    'jest-dom'
  ],
  rules: {
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    indent: [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'no-multi-spaces': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: [
          'const',
          'let',
          'var'
        ]
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false
      }
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/prefer-stateless-function': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-max-props-per-line': 'error',
    'react/display-name': 'off',
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};