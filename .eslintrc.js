module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    'airbnb-base',
    'plugin:gridsome/recommended',
    'plugin:vue/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'gridsome'],
  rules: {
    'max-len': [
      'error',
      {
        ignorePattern: '\\b(class|d|aos-from|aos-to)="',
        code: 100,
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^~'],
      },
    ],
    'import/extensions': 'off',
    'no-restricted-syntax': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
};
