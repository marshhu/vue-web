module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
