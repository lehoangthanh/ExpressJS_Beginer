module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
}
