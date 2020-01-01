module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    "$nuxt": true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'cypress'
  ],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended'
  ],
  rules: {
    'space-before-function-paren': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
